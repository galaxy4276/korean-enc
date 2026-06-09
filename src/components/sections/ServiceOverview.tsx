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
      "설계 검토부터 패널, 천장, 공조, 의료가스 설비까지 수술실 공정을 통합 시공합니다.",
    image: "/images/kenc-surgery-complete-white.webp",
  },
  {
    title: "격리실",
    description:
      "음압병실, 전실, 차압계, 인터락, 폐수·배기 설비까지 격리 동선을 체계화합니다.",
    image: "/images/kenc-isolation-corridor.webp",
  },
  {
    title: "중환자실",
    description:
      "병상 구역과 간호 스테이션 동선을 고려해 청정하고 관리하기 쉬운 공간을 만듭니다.",
    image: "/images/kenc-icu-nurse-station.webp",
  },
  {
    title: "시설 유지보수",
    description:
      "필터 교체, 차압·소음 측정, 팬 점검 등 시공 이후 운영 상태까지 확인합니다.",
    image: "/images/kenc-maintenance-filter-change.webp",
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
