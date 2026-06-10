"use client";

import Image from "next/image";
import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import Link from "next/link";

const services = [
  {
    title: "수술실",
    description:
      "양압 유지, HEPA 급기, 의료가스 배관, 수술등·장비 동선을 함께 검토합니다.",
    image: "/images/kenc-surgery-complete-white.webp",
  },
  {
    title: "격리실",
    description:
      "음압병실, 전실, 차압계, 인터락, 배기·폐수 설비까지 격리 동선을 체계화합니다.",
    image: "/images/kenc-isolation-corridor.webp",
  },
  {
    title: "중환자실",
    description:
      "병상 구역, 간호 스테이션, 공조·조명·위생 마감을 운영 동선에 맞춰 정리합니다.",
    image: "/images/kenc-icu-nurse-station.webp",
  },
  {
    title: "시설 유지보수",
    description:
      "필터 교체, 차압·소음 확인, 팬 점검 등 시공 이후 운영 상태를 점검합니다.",
    image: "/images/kenc-maintenance-filter-change.webp",
  },
];

export default function ServiceOverview() {
  return (
    <section className="py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)]">
      <Container>
        <ScrollReveal>
          <h2 className="text-[24px] font-bold tracking-[-0.04em] text-neutral-900 md:text-[42px]">
            병원 공간별로 달라지는 시공 기준
          </h2>
          <p className="mt-5 max-w-3xl text-[14px] leading-[1.8] text-neutral-600 md:text-[16px]">
            같은 클린룸이라도 수술실, 격리실, 중환자실은 공기 흐름과 설비
            기준이 다릅니다. 상담 단계에서 공간 목적을 먼저 확인하고 필요한
            공정만 분리해 안내합니다.
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Link
                href="/services"
                className="group relative block overflow-hidden aspect-[4/5] md:aspect-[3/4]"
              >
                {/* Background image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1440px) 25vw, (min-width: 1080px) 50vw, 100vw"
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
