"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const NAV_ITEMS = [
  { label: "회사소개", href: "/about" },
  { label: "서비스", href: "/services" },
  { label: "시공사례", href: "/portfolio" },
  { label: "인사이트", href: "/insights" },
  { label: "문의하기", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? "h-14 bg-white shadow-md"
            : "h-18 bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-5 md:px-[90px] lg:px-[180px]">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center text-lg font-bold tracking-[-0.04em] transition-all duration-300 ${
              scrolled ? "text-primary-dark" : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
            }`}
          >
            <Image
              src="/logo-icon.png"
              alt=""
              width={28}
              height={28}
              className={`block transition-all duration-300 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
            />
            코리아이앤씨
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-[-0.02em] transition-all duration-300 ${
                  scrolled
                    ? "text-neutral-900 hover:text-primary"
                    : "text-white hover:text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:010-8115-0500"
              data-analytics-event="phone_click"
              data-analytics-source="header_desktop"
              data-analytics-label="전화상담"
              className={`rounded-full px-5 py-2 text-sm font-bold tracking-[-0.02em] transition-all duration-300 ease-in-out ${
                scrolled
                  ? "bg-primary text-white hover:bg-primary-light"
                  : "bg-white/20 text-white border border-white/40 hover:bg-white/30 drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]"
              }`}
            >
              전화상담
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex md:hidden flex-col items-center justify-center w-10 h-10 gap-1.5"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                scrolled ? "bg-neutral-900" : "bg-white"
              } ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                scrolled ? "bg-neutral-900" : "bg-white"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                scrolled ? "bg-neutral-900" : "bg-white"
              } ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white md:hidden"
          >
            <nav className="flex flex-col items-center gap-10">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-bold tracking-[-0.04em] text-neutral-900 transition-colors duration-150 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:010-8115-0500"
                onClick={() => setMenuOpen(false)}
                data-analytics-event="phone_click"
                data-analytics-source="header_mobile_menu"
                data-analytics-label="전화상담"
                className="mt-4 rounded-full bg-primary px-8 py-3 text-lg font-bold tracking-[-0.02em] text-white transition-all duration-150 ease-in-out hover:bg-primary-light"
              >
                전화상담
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
