"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pageView, trackEvent } from "@/lib/analytics";

function cleanText(value: string | null) {
  return value?.replace(/\s+/g, " ").trim().slice(0, 80) || undefined;
}

export default function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    let attempts = 0;
    const search = window.location.search;
    const path = `${pathname}${search}`;

    const send = () => {
      attempts += 1;
      if (pageView(path)) return;
      if (attempts < 20) window.setTimeout(send, 250);
    };

    send();
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const explicitElement = target.closest<HTMLElement>(
        "[data-analytics-event]"
      );
      const phoneLink = target.closest<HTMLAnchorElement>('a[href^="tel:"]');
      const mailLink = target.closest<HTMLAnchorElement>('a[href^="mailto:"]');
      const contactLink = target.closest<HTMLAnchorElement>('a[href="/contact"]');

      if (explicitElement) {
        trackEvent(explicitElement.dataset.analyticsEvent || "cta_click", {
          source: explicitElement.dataset.analyticsSource,
          label:
            explicitElement.dataset.analyticsLabel ||
            cleanText(explicitElement.textContent),
          link_url:
            explicitElement instanceof HTMLAnchorElement
              ? explicitElement.href
              : undefined,
          page_path: `${window.location.pathname}${window.location.search}`,
        });
        return;
      }

      if (phoneLink) {
        trackEvent("phone_click", {
          source: "auto_tel_link",
          label: cleanText(phoneLink.textContent),
          link_url: phoneLink.href,
          page_path: `${window.location.pathname}${window.location.search}`,
        });
        return;
      }

      if (contactLink) {
        trackEvent("contact_cta_click", {
          source: "auto_contact_link",
          label: cleanText(contactLink.textContent),
          link_url: contactLink.href,
          page_path: `${window.location.pathname}${window.location.search}`,
        });
        return;
      }

      if (mailLink) {
        trackEvent("email_click", {
          source: "auto_mailto_link",
          label: cleanText(mailLink.textContent),
          link_url: mailLink.href,
          page_path: `${window.location.pathname}${window.location.search}`,
        });
      }
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
