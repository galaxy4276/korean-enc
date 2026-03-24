import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

export default function FinalCTA() {
  return (
    <section className="bg-primary-dark py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)]">
      <Container>
        <ScrollReveal>
          <div className="mx-auto max-w-[640px] text-center">
            <h2 className="text-[24px] font-bold tracking-[-0.04em] text-white md:text-[42px]">
              클린룸 시공, 지금 상담하세요
            </h2>
            <p className="mt-4 text-[14px] leading-[1.7] tracking-[-0.02em] text-neutral-400 md:mt-6 md:text-[18px]">
              20년 경험의 전문가가 직접 상담해 드립니다
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-12">
              <a
                href="tel:010-8115-0500"
                className="inline-flex items-center gap-3 rounded-[30px] bg-primary px-8 py-4 text-[16px] font-extrabold tracking-[-0.02em] text-white transition-all duration-150 hover:bg-primary-light md:text-[18px]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 3a1 1 0 011-1h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V17a1 1 0 01-1 1h-1C8.716 18 2 11.284 2 3z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                전화 상담
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-[30px] border-2 border-white/40 px-8 py-4 text-[16px] font-extrabold tracking-[-0.02em] text-white transition-all duration-150 hover:border-white hover:bg-white/10 md:text-[18px]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6l-4 4V4z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                온라인 문의
              </a>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
