export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-N957SM34FP";

type AnalyticsValue = string | number | boolean | undefined;

export type AnalyticsParams = Record<string, AnalyticsValue>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function pageView(path: string) {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) {
    return false;
  }

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });

  return true;
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) {
    return false;
  }

  window.gtag("event", eventName, params);
  return true;
}
