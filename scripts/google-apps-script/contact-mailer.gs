const CONFIG = {
  fallbackRecipients: ["koreaencgo@nate.com"],
  senderName: "코리아이앤씨 웹사이트",
  allowedSource: "korean-enc/contact",
};

function doPost(e) {
  try {
    const payload = parsePayload_(e);
    validatePayload_(payload);

    const recipients = normalizeRecipients_(
      payload.recipients,
      CONFIG.fallbackRecipients
    );
    if (recipients.length === 0) {
      throw new Error("Missing recipients");
    }

    const formData = payload.formData || {};
    const subject =
      payload.email && payload.email.subject
        ? payload.email.subject
        : `[코리아이앤씨 문의] ${formData.organization || "기관명 미입력"} / ${
            formData.contactPerson || "담당자 미입력"
          }`;
    const body =
      payload.email && payload.email.body
        ? payload.email.body
        : buildEmailBody_(formData);

    const options = { name: CONFIG.senderName };
    if (formData.email) {
      options.replyTo = formData.email;
    }

    GmailApp.sendEmail(recipients.join(","), subject, body, options);

    return json_({ ok: true });
  } catch (error) {
    console.error(error);
    return json_({
      ok: false,
      error: error && error.message ? error.message : "Unknown error",
    });
  }
}

function parsePayload_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error("Missing request body");
  }

  return JSON.parse(e.postData.contents);
}

function validatePayload_(payload) {
  if (!payload || payload.source !== CONFIG.allowedSource) {
    throw new Error("Invalid source");
  }

  const formData = payload.formData || {};
  if (!String(formData.organization || "").trim()) {
    throw new Error("Missing organization");
  }
  if (!String(formData.contactPerson || "").trim()) {
    throw new Error("Missing contact person");
  }
  if (!String(formData.phone || "").trim()) {
    throw new Error("Missing phone");
  }
}

function normalizeRecipients_(recipients, fallbackRecipients) {
  const source =
    Array.isArray(recipients) && recipients.length > 0
      ? recipients
      : fallbackRecipients;

  return source
    .map(function (email) {
      return String(email || "").trim();
    })
    .filter(function (email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    });
}

function buildEmailBody_(formData) {
  const constructionTypes = Array.isArray(formData.constructionTypes)
    ? formData.constructionTypes.join(", ")
    : "-";

  return [
    "[코리아이앤씨 문의 접수]",
    "",
    `병원/기관명: ${formData.organization || "-"}`,
    `담당자명: ${formData.contactPerson || "-"}`,
    `연락처: ${formData.phone || "-"}`,
    `이메일: ${formData.email || "-"}`,
    `공사 유형: ${constructionTypes || "-"}`,
    `예상 규모: ${formData.estimatedArea || "-"}`,
    `희망 시공 시기: ${formData.preferredTiming || "-"}`,
    "",
    "상세 문의 내용",
    formData.details || "-",
  ].join("\n");
}

function json_(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON
  );
}
