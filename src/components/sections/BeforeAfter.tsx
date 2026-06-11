import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Link from "next/link";

export default function BeforeAfter() {
  return (
    <section className="bg-neutral-100 py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)]">
      <Container>
        <ScrollReveal>
          <h2 className="text-[24px] font-bold tracking-[-0.04em] text-neutral-900 md:text-[42px]">
            사진으로 보는 시공 범위
          </h2>
          <p className="mt-5 max-w-3xl text-[14px] leading-[1.8] text-neutral-600 md:text-[16px]">
            견적 상담에서는 완공 사진뿐 아니라 어떤 범위까지 시공되는지
            확인하는 것이 중요합니다. 벽체, 천장, 공조, 조명, 의료 설비,
            검증 항목을 분리해 공사 범위를 정리합니다.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 md:mt-16">
            <BeforeAfterSlider
              beforeSrc="/images/kenc-surgery-structure-before.webp"
              afterSrc="/images/kenc-surgery-complete-white.webp"
              beforeAlt="수술실 구조 시공 과정"
              afterAlt="완공된 수술실"
              beforeLabel="시공 과정"
              afterLabel="완공"
              sizes="(min-width: 1080px) 1100px, 100vw"
            />
            <p className="mt-3 text-[13px] tracking-[-0.02em] text-neutral-500">
              가운데 핸들을 좌우로 드래그하면 시공 과정과 완공 상태를 비교할 수
              있습니다.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-10 md:mt-14">
            {/* Gold dash marker */}
            <div className="flex items-start gap-4">
              <span className="mt-2.5 block h-[3px] w-[48px] shrink-0 bg-accent" />
              <div>
                <h3 className="text-[20px] font-bold tracking-[-0.03em] text-neutral-900 md:text-[28px]">
                  수술실 클린룸 시공 사례
                </h3>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-[14px] tracking-[-0.02em] text-neutral-600 md:text-[16px]">
                  <span>골조 정리</span>
                  <span>패널·천장 시공</span>
                  <span>공조·의료 설비</span>
                  <span>차압·소음 점검</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="mt-10 md:mt-14">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-[16px] font-bold tracking-[-0.02em] text-primary transition-colors duration-150 hover:text-primary-light md:text-[18px]"
            >
              전체 사례 보기
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="ml-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 10h12M12 6l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
