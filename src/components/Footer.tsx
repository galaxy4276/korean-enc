import Container from "./Container";

const NAV_LINKS = [
  { label: "회사소개", href: "/about" },
  { label: "서비스", href: "/services" },
  { label: "시공사례", href: "/portfolio" },
  { label: "문의하기", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <Container className="py-16 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-0">
          {/* Left: Company info */}
          <div className="space-y-4">
            <p className="flex items-center text-lg font-bold tracking-[-0.03em]">
              <img src="/logo-icon.png" alt="" width={24} height={24} className="block brightness-0 invert" />
              코리아이앤씨
            </p>
            <div className="space-y-1 text-sm text-neutral-400 tracking-[-0.02em] leading-relaxed">
              <p>경기도 화성시 정남면 보통리 78-1</p>
              <p>대표: 남기태 | 사업자번호: 830-01-03365</p>
              <p>koreaencgo@nate.com</p>
            </div>
          </div>

          {/* Right: Nav links + copyright */}
          <div className="flex flex-col items-start md:items-end gap-6">
            <nav className="flex flex-wrap gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-400 tracking-[-0.02em] transition-colors duration-150 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <p className="text-xs text-neutral-600 tracking-[-0.01em]">
              &copy; 2023 코리아이앤씨. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
