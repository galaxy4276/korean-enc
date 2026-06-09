import Image from "next/image";
import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export default function BeforeAfter() {
  return (
    <section className="bg-neutral-100 py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)]">
      <Container>
        <ScrollReveal>
          <h2 className="text-[24px] font-bold tracking-[-0.04em] text-neutral-900 md:text-[42px]">
            시공 과정과 완공 품질
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
            {/* Process */}
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/kenc-surgery-structure-before.webp"
                alt="수술실 구조 시공 과정"
                fill
                sizes="(min-width: 1080px) 50vw, 100vw"
                className="object-cover"
              />
              <span className="absolute top-4 left-4 bg-[#dc3545] px-4 py-1.5 text-[12px] font-bold tracking-[-0.01em] text-white">
                PROCESS
              </span>
            </div>

            {/* Result */}
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/kenc-surgery-complete-white.webp"
                alt="완공된 수술실"
                fill
                sizes="(min-width: 1080px) 50vw, 100vw"
                className="object-cover"
              />
              <span className="absolute top-4 left-4 bg-[#28a745] px-4 py-1.5 text-[12px] font-bold tracking-[-0.01em] text-white">
                RESULT
              </span>
            </div>
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
                  <span>완공 점검</span>
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
