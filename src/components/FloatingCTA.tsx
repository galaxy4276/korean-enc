"use client";

export default function FloatingCTA() {
  return (
    <a
      href="tel:010-8115-0500"
      className="fixed right-7 bottom-7 z-50 hidden md:flex items-center gap-2 rounded-full bg-neutral-800 px-6 py-3 text-white font-extrabold tracking-[-0.02em] transition-all duration-150 ease-in-out hover:bg-white hover:text-neutral-800 hover:shadow-lg"
      aria-label="전화 상담 010-8115-0500"
    >
      <svg
        width="18"
        height="18"
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
      전화상담
    </a>
  );
}
