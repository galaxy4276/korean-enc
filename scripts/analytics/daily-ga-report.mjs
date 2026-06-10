import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const GA_ENDPOINT = "https://analyticsdata.googleapis.com/v1beta";
const TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token";
const EVENT_NAMES = [
  "page_view",
  "phone_click",
  "contact_cta_click",
  "email_click",
  "contact_form_submit_attempt",
  "contact_form_validation_error",
  "generate_lead",
  "contact_form_submit",
  "contact_form_error",
];

loadEnvFile(".env.local");
loadEnvFile(".env");

function loadEnvFile(fileName) {
  const envPath = path.join(process.cwd(), fileName);
  if (!fs.existsSync(envPath)) return;

  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
    const [key, ...valueParts] = trimmed.split("=");
    if (process.env[key]) continue;
    process.env[key] = valueParts.join("=").replace(/^['"]|['"]$/g, "");
  }
}

function base64Url(value) {
  return Buffer.from(value)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function getCredentials() {
  if (process.env.GA_SERVICE_ACCOUNT_JSON) {
    return JSON.parse(process.env.GA_SERVICE_ACCOUNT_JSON);
  }

  if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    return JSON.parse(
      fs.readFileSync(process.env.GOOGLE_APPLICATION_CREDENTIALS, "utf8")
    );
  }

  return {
    client_email: process.env.GA_CLIENT_EMAIL,
    private_key: process.env.GA_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  };
}

async function getAccessToken() {
  const credentials = getCredentials();
  if (credentials.type === "authorized_user") {
    return getAuthorizedUserAccessToken(credentials);
  }

  if (!credentials.client_email || !credentials.private_key) {
    throw new Error(
      "Missing GA credentials. Set GOOGLE_APPLICATION_CREDENTIALS to a service account or ADC file, or set GA_CLIENT_EMAIL and GA_PRIVATE_KEY."
    );
  }

  const now = Math.floor(Date.now() / 1000);
  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = base64Url(
    JSON.stringify({
      iss: credentials.client_email,
      scope: "https://www.googleapis.com/auth/analytics.readonly",
      aud: TOKEN_ENDPOINT,
      exp: now + 3600,
      iat: now,
    })
  );
  const unsignedToken = `${header}.${claim}`;
  const signature = crypto
    .createSign("RSA-SHA256")
    .update(unsignedToken)
    .sign(credentials.private_key, "base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${unsignedToken}.${signature}`,
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`OAuth token request failed: ${JSON.stringify(data)}`);
  }

  return data.access_token;
}

async function getAuthorizedUserAccessToken(credentials) {
  if (!credentials.client_id || !credentials.client_secret || !credentials.refresh_token) {
    throw new Error(
      "Invalid ADC authorized_user credentials. Re-run gcloud auth application-default login."
    );
  }

  const response = await fetch(credentials.token_uri || TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: credentials.client_id,
      client_secret: credentials.client_secret,
      refresh_token: credentials.refresh_token,
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`ADC token refresh failed: ${JSON.stringify(data)}`);
  }

  return data.access_token;
}

async function runReport(accessToken, body) {
  const propertyId = process.env.GA_PROPERTY_ID;
  if (!propertyId) {
    throw new Error("Missing GA_PROPERTY_ID. Use the numeric GA4 property ID.");
  }

  const response = await fetch(
    `${GA_ENDPOINT}/properties/${propertyId}:runReport`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`GA report request failed: ${JSON.stringify(data)}`);
  }

  return data;
}

function metric(row, report, name) {
  const index = report.metricHeaders.findIndex((header) => header.name === name);
  return Number(row.metricValues[index]?.value || 0);
}

function dimension(row, report, name) {
  const index = report.dimensionHeaders.findIndex(
    (header) => header.name === name
  );
  return row.dimensionValues[index]?.value || "";
}

function formatDuration(seconds) {
  if (!Number.isFinite(seconds)) return "0s";
  const rounded = Math.round(seconds);
  const minutes = Math.floor(rounded / 60);
  const rest = rounded % 60;
  return minutes > 0 ? `${minutes}m ${rest}s` : `${rest}s`;
}

function table(headers, rows) {
  if (rows.length === 0) return "_No data._\n";

  return [
    `| ${headers.join(" |")} |`,
    `| ${headers.map(() => "---").join(" |")} |`,
    ...rows.map((row) => `| ${row.join(" |")} |`),
    "",
  ].join("\n");
}

function dateRange() {
  const daysAgo = Number(process.env.GA_REPORT_DAYS_AGO || 1);
  const date = new Date();
  date.setUTCDate(date.getUTCDate() - daysAgo);
  const value = date.toISOString().slice(0, 10);
  return { startDate: value, endDate: value };
}

function eventFilter() {
  return {
    filter: {
      fieldName: "eventName",
      inListFilter: { values: EVENT_NAMES },
    },
  };
}

async function main() {
  const range = dateRange();
  const accessToken = await getAccessToken();

  const [channels, landingPages, events] = await Promise.all([
    runReport(accessToken, {
      dateRanges: [range],
      dimensions: [{ name: "sessionDefaultChannelGroup" }],
      metrics: [
        { name: "sessions" },
        { name: "totalUsers" },
        { name: "newUsers" },
        { name: "engagedSessions" },
        { name: "averageSessionDuration" },
      ],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit: 10,
    }),
    runReport(accessToken, {
      dateRanges: [range],
      dimensions: [{ name: "landingPagePlusQueryString" }],
      metrics: [
        { name: "sessions" },
        { name: "totalUsers" },
        { name: "averageSessionDuration" },
      ],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit: 10,
    }),
    runReport(accessToken, {
      dateRanges: [range],
      dimensions: [{ name: "eventName" }],
      metrics: [{ name: "eventCount" }, { name: "totalUsers" }],
      dimensionFilter: eventFilter(),
      orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
      limit: 20,
    }),
  ]);

  const channelRows = (channels.rows || []).map((row) => [
    dimension(row, channels, "sessionDefaultChannelGroup"),
    metric(row, channels, "sessions").toLocaleString(),
    metric(row, channels, "totalUsers").toLocaleString(),
    metric(row, channels, "newUsers").toLocaleString(),
    metric(row, channels, "engagedSessions").toLocaleString(),
    formatDuration(metric(row, channels, "averageSessionDuration")),
  ]);

  const landingRows = (landingPages.rows || []).map((row) => [
    dimension(row, landingPages, "landingPagePlusQueryString") || "/",
    metric(row, landingPages, "sessions").toLocaleString(),
    metric(row, landingPages, "totalUsers").toLocaleString(),
    formatDuration(metric(row, landingPages, "averageSessionDuration")),
  ]);

  const eventRows = (events.rows || []).map((row) => [
    dimension(row, events, "eventName"),
    metric(row, events, "eventCount").toLocaleString(),
    metric(row, events, "totalUsers").toLocaleString(),
  ]);

  console.log(`# Korea I&C GA Daily Report (${range.startDate})\n`);
  console.log("## Acquisition Channels\n");
  console.log(
    table(
      ["Channel", "Sessions", "Users", "New users", "Engaged", "Avg duration"],
      channelRows
    )
  );
  console.log("## Landing Pages\n");
  console.log(table(["Landing page", "Sessions", "Users", "Avg duration"], landingRows));
  console.log("## Lead Funnel Events\n");
  console.log(table(["Event", "Count", "Users"], eventRows));
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
