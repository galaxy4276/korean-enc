"use client";

import { useState, useEffect, useRef } from "react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 flex md:hidden transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="tel:010-8115-0500"
        data-analytics-event="phone_click"
        data-analytics-source="sticky_mobile_cta"
        data-analytics-label="전화하기"
        className="flex-1 flex items-center justify-center gap-2 bg-primary py-4 text-white font-bold text-base tracking-[-0.02em]"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        전화하기
      </a>
      <a
        href="/contact"
        data-analytics-event="contact_cta_click"
        data-analytics-source="sticky_mobile_cta"
        data-analytics-label="문의하기"
        className="flex-1 flex items-center justify-center gap-2 bg-accent py-4 text-neutral-900 font-bold text-base tracking-[-0.02em]"
      >
        문의하기
      </a>
    </div>
  );
}
