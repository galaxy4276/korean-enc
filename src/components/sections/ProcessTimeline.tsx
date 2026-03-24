"use client";

import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const steps = [
  { num: "01", title: "현장 실측 \u00B7 상담" },
  { num: "02", title: "설계 \u00B7 견적" },
  { num: "03", title: "철거 \u00B7 바닥 공사" },
  { num: "04", title: "클린룸 시공" },
  { num: "05", title: "검증 \u00B7 인수" },
  { num: "06", title: "유지보수 \u00B7 AS" },
];

export default function ProcessTimeline() {
  return (
    <section className="py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)]">
      <Container>
        <ScrollReveal>
          <h2 className="text-[24px] font-bold tracking-[-0.04em] text-neutral-900 md:text-[42px]">
            시공 프로세스
          </h2>
        </ScrollReveal>

        {/* Desktop: horizontal */}
        <StaggerContainer className="mt-12 hidden md:mt-16 md:flex md:items-start md:justify-between">
          {steps.map((step, i) => (
            <StaggerItem
              key={step.num}
              className="flex flex-1 items-start"
            >
              <div className="flex flex-col items-center text-center">
                <span className="flex h-14 w-14 items-center justify-center border-2 border-primary text-[16px] font-bold tracking-[-0.02em] text-primary">
                  {step.num}
                </span>
                <span className="mt-4 block text-[14px] font-bold tracking-[-0.02em] text-neutral-900 md:text-[16px]">
                  {step.title}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="mt-6 flex flex-1 items-center justify-center px-1">
                  <svg
                    width="32"
                    height="12"
                    viewBox="0 0 32 12"
                    fill="none"
                    className="text-neutral-300"
                  >
                    <path
                      d="M0 6h28M24 1l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Mobile: vertical */}
        <StaggerContainer className="mt-12 md:hidden">
          {steps.map((step, i) => (
            <StaggerItem key={step.num} className="flex items-start">
              <div className="flex flex-col items-center">
                <span className="flex h-12 w-12 items-center justify-center border-2 border-primary text-[14px] font-bold tracking-[-0.02em] text-primary">
                  {step.num}
                </span>
                {i < steps.length - 1 && (
                  <div className="h-8 w-px bg-neutral-300" />
                )}
              </div>
              <span className="ml-4 mt-3 text-[14px] font-bold tracking-[-0.02em] text-neutral-900">
                {step.title}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
