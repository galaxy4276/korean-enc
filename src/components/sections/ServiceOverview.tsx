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
    image: "/images/service-surgery.png",
  },
  {
    title: "격리실",
    description:
      "음압/양압 전환이 가능한 격리실 설계로 감염병 확산을 차단합니다.",
    image: "/images/service-isolation.png",
  },
  {
    title: "중환자실",
    description:
      "환자 동선과 의료진 효율을 고려한 최적 레이아웃과 청정 환경을 설계합니다.",
    image: "/images/service-icu.png",
  },
  {
    title: "시설 유지보수",
    description:
      "정기 점검, 필터 교체, 기밀 테스트 등 시공 이후 유지보수를 책임집니다.",
    image: "/images/service-maintenance.png",
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

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Link
                href="/services"
                className="group relative block overflow-hidden aspect-[4/5] md:aspect-[3/4]"
              >
                {/* Background image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay — bottom heavy for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/20" />
                {/* Content — fixed bottom area */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-7">
                  <div className="w-8 h-[2px] bg-accent mb-4" />
                  <h3 className="text-[22px] font-bold tracking-[-0.03em] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] md:text-[24px]">
                    {service.title}
                  </h3>
                  <p className="mt-2 h-[3.4em] text-[13px] leading-[1.7] tracking-[-0.02em] text-white/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] md:text-[14px]">
                    {service.description}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
