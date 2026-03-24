"use client";

import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import Link from "next/link";

const services = [
  {
    title: "수술실",
    description:
      "ISO Class 5~7 기준 충족, HEPA 필터 시스템과 양압 설계로 무균 환경을 구현합니다.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 4v16M16 12h16M8 24h32v16H8V24z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 32h4M28 32h4"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "격리실",
    description:
      "음압/양압 전환이 가능한 격리실 설계로 감염병 확산을 차단합니다.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="8"
          y="8"
          width="32"
          height="32"
          rx="0"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M8 8l32 32M40 8L8 40"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    title: "중환자실",
    description:
      "환자 동선과 의료진 효율을 고려한 최적 레이아웃과 청정 환경을 설계합니다.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 28h8l4-8 4 16 4-12 4 8 4-4h12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="12"
          y="36"
          width="24"
          height="6"
          stroke="currentColor"
          strokeWidth="2.5"
        />
      </svg>
    ),
  },
  {
    title: "시설 유지보수",
    description:
      "정기 점검, 필터 교체, 기밀 테스트 등 시공 이후 유지보수를 책임집니다.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6l-2 8-8 2 6 6-2 8 8-2 6 6 2-8 8-2-6-6 2-8-8 2-6-6z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
];

export default function ServiceOverview() {
  return (
    <section className="py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)]">
      <Container>
        <ScrollReveal>
          <h2 className="text-[24px] font-bold tracking-[-0.04em] text-neutral-900 md:text-[42px]">
            전문 시공 분야
          </h2>
        </ScrollReveal>

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Link
                href="/services"
                className="group block border border-neutral-200 p-8 transition-all duration-150 hover:border-primary hover:bg-neutral-50"
              >
                <div className="text-primary transition-colors duration-150 group-hover:text-primary-light">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-[20px] font-bold tracking-[-0.03em] text-neutral-900 md:text-[28px]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] tracking-[-0.02em] text-neutral-600 md:text-[16px]">
                  {service.description}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
