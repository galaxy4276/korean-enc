"use client";

import { motion } from "motion/react";
import Container from "@/components/Container";
import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollReveal";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const coreValues = [
  {
    label: "전문성",
    desc: "BCR 클린룸 특화 설계 및 시공",
  },
  {
    label: "경험",
    desc: "20년+ 현장 노하우",
  },
  {
    label: "신뢰",
    desc: "정직한 견적, 끝까지 책임",
  },
];

const timeline = [
  { year: "2003", text: "병원 클린룸 시공 경력 시작" },
  { year: "2010", text: "대형 종합병원 수술실 시공 참여" },
  { year: "2015", text: "누적 시공 100건 돌파" },
  { year: "2020", text: "BCR 클린룸 특화 기술 확립" },
  { year: "2023", text: "코리아이앤씨 법인 설립" },
  { year: "2024", text: "다수 대학병원 프로젝트 수행" },
];

const certifications = [
  "건설업면허(예정)",
  "ISO인증(예정)",
  "전문건설업등록(예정)",
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <main>
      {/* ── 1. Page Hero ────────────────────────────────────────── */}
      <section className="relative flex min-h-[420px] items-center justify-center bg-gradient-to-br from-primary-dark via-primary to-primary-light md:min-h-[520px]">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[42px] font-bold leading-[1.24] tracking-[-0.04em] text-white md:text-[56px] md:leading-[1.34]"
          >
            회사소개
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-4 text-[14px] font-medium tracking-[-0.02em] text-white/80 md:mt-6 md:text-[18px]"
          >
            정직한 시공, 끝까지 책임
          </motion.p>
        </div>
      </section>

      {/* ── 2. Vision & Mission ─────────────────────────────────── */}
      <section className="py-[80px] md:py-[140px]">
        <Container>
          <ScrollReveal>
            <h2 className="text-center text-[24px] font-bold tracking-[-0.04em] text-neutral-900 md:text-[42px]">
              핵심 가치
            </h2>
          </ScrollReveal>

          <StaggerContainer className="mt-12 grid gap-8 md:mt-20 md:grid-cols-3 md:gap-10">
            {coreValues.map((v) => (
              <StaggerItem key={v.label}>
                <div className="border border-neutral-200 bg-white p-8 md:p-10">
                  <p className="text-[20px] font-bold tracking-[-0.03em] text-primary md:text-[28px]">
                    {v.label}
                  </p>
                  <p className="mt-3 text-[14px] leading-[1.7] tracking-[-0.02em] text-neutral-600 md:text-[16px]">
                    {v.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ── 3. CEO Message ──────────────────────────────────────── */}
      <section className="bg-neutral-50 py-[80px] md:py-[160px]">
        <Container>
          <ScrollReveal>
            <h2 className="mb-12 text-center text-[24px] font-bold tracking-[-0.04em] text-neutral-900 md:mb-20 md:text-[42px]">
              대표 인사말
            </h2>
          </ScrollReveal>

          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            {/* Photo placeholder */}
            <ScrollReveal>
              <div className="flex aspect-[3/4] w-full items-center justify-center bg-gradient-to-br from-primary-dark via-primary to-primary-light">
                <span className="text-[14px] font-medium tracking-[-0.02em] text-white/50">
                  대표 사진
                </span>
              </div>
            </ScrollReveal>

            {/* Quote */}
            <ScrollReveal delay={0.15}>
              <div>
                <div className="mb-6 h-[2px] w-12 bg-accent" />
                <blockquote className="text-[14px] leading-[1.7] tracking-[-0.02em] text-neutral-900 md:text-[16px]">
                  &ldquo;항상 최선을 다하며, 정직하고 맡은 바 끝까지 책임을 다하는
                  코리아이앤씨가 되도록 노력하고 있습니다.
                  <br />
                  <br />
                  20년 이상의 현장 경험을 바탕으로 병원 내 클린룸 환경을
                  전문적으로 설계하고 시공합니다.&rdquo;
                </blockquote>
                <p className="mt-8 text-[14px] font-bold tracking-[-0.02em] text-neutral-900 md:text-[16px]">
                  남기태
                  <span className="ml-2 font-normal text-neutral-600">
                    대표이사
                  </span>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ── 4. Timeline ─────────────────────────────────────────── */}
      <section className="py-[80px] md:py-[160px]">
        <Container>
          <ScrollReveal>
            <h2 className="mb-12 text-center text-[24px] font-bold tracking-[-0.04em] text-neutral-900 md:mb-20 md:text-[42px]">
              연혁
            </h2>
          </ScrollReveal>

          <div className="relative mx-auto max-w-[600px]">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-neutral-200 md:left-[9px]" />

            <div className="flex flex-col gap-10 md:gap-14">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.1}>
                  <div className="relative pl-10 md:pl-12">
                    {/* Dot */}
                    <div className="absolute left-0 top-[6px] h-4 w-4 border-[3px] border-primary bg-white md:h-5 md:w-5" />
                    <p className="text-[20px] font-bold tracking-[-0.03em] text-primary md:text-[28px]">
                      {item.year}
                    </p>
                    <p className="mt-1 text-[14px] leading-[1.7] tracking-[-0.02em] text-neutral-600 md:text-[16px]">
                      {item.text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 5. Certifications (예약) ────────────────────────────── */}
      <section className="bg-neutral-50 py-[80px] md:py-[140px]">
        <Container>
          <ScrollReveal>
            <h2 className="mb-12 text-center text-[24px] font-bold tracking-[-0.04em] text-neutral-900 md:mb-20 md:text-[42px]">
              인증 및 면허
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid gap-6 md:grid-cols-3 md:gap-8">
            {certifications.map((cert) => (
              <StaggerItem key={cert}>
                <div className="border border-neutral-200 bg-white p-8 text-center opacity-40">
                  <p className="text-[16px] font-bold tracking-[-0.03em] text-neutral-400 md:text-[20px]">
                    {cert}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ── 6. CTA ──────────────────────────────────────────────── */}
      <section className="py-[80px] md:py-[160px]">
        <Container>
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-[24px] font-bold tracking-[-0.04em] text-neutral-900 md:text-[42px]">
                함께 일할 파트너를 찾고 계신가요?
              </h2>
              <Link
                href="/contact"
                className="mt-10 inline-block rounded-[30px] bg-neutral-800 px-10 py-4 text-[16px] font-extrabold tracking-[-0.02em] text-white transition-all duration-150 ease-in-out hover:bg-white hover:text-neutral-800 hover:ring-2 hover:ring-neutral-800 md:mt-14 md:text-[18px]"
              >
                문의하기
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
