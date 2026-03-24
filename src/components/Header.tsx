"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const NAV_ITEMS = [
  { label: "회사소개", href: "/about" },
  { label: "서비스", href: "/services" },
  { label: "시공사례", href: "/portfolio" },
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

  // Lock body scroll when mobile menu is open
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
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ease-in-out ${
          scrolled ? "h-14 shadow-md" : "h-18"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-5 md:px-[90px] lg:px-[180px]">
          {/* Logo */}
          <a
            href="/"
            className="text-lg font-bold tracking-[-0.04em] text-primary-dark"
          >
            Korea I&C
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium tracking-[-0.02em] text-neutral-900 transition-colors duration-150 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:010-8115-0500"
              className="rounded-full bg-primary px-5 py-2 text-sm font-bold tracking-[-0.02em] text-white transition-all duration-150 ease-in-out hover:bg-primary-light"
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
              className={`block h-0.5 w-6 bg-neutral-900 transition-all duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-neutral-900 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-neutral-900 transition-all duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
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
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-bold tracking-[-0.04em] text-neutral-900 transition-colors duration-150 hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:010-8115-0500"
                onClick={() => setMenuOpen(false)}
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
