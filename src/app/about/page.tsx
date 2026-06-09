"use client";

import Image from "next/image";
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
  { year: "20년+", text: "수술실, 중환자실, 격리실 클린룸 현장 경험 축적" },
  { year: "2023.04", text: "코리아이앤씨 설립" },
  { year: "현재", text: "병원 클린룸 설계·시공 및 시설물 유지관리 수행" },
];

const companyFacts = [
  { label: "회사명", value: "코리아이앤씨" },
  { label: "대표이사", value: "남기태" },
  { label: "관리이사", value: "남언우" },
  { label: "업태", value: "건설업" },
  {
    label: "주요 업종",
    value: "클린룸 공사, 시설물유지관리, 건축 마무리, 건물 및 구축물 해체",
  },
  {
    label: "시공 분야",
    value: "수술실, 무균실, 중환자실, 격리실 외 병원 클린룸",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <main>
      {/* ── 1. Page Hero ────────────────────────────────────────── */}
      <section className="relative flex min-h-[420px] items-center justify-center md:min-h-[520px]">
        <div className="absolute inset-0">
          <Image
            src="/images/complete-blue-table-equipment.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-primary-dark/70" />
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

      {/* ── 3. Company Facts ───────────────────────────────────── */}
      <section className="bg-neutral-50 py-[80px] md:py-[140px]">
        <Container>
          <ScrollReveal>
            <h2 className="mb-12 text-center text-[24px] font-bold tracking-[-0.04em] text-neutral-900 md:mb-20 md:text-[42px]">
              회사 기본정보
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid gap-0 border-t border-neutral-200 md:grid-cols-2">
            {companyFacts.map((fact) => (
              <StaggerItem key={fact.label}>
                <div className="border-b border-neutral-200 py-6 md:px-8 md:py-8">
                  <p className="text-[13px] font-bold tracking-[-0.02em] text-primary md:text-[14px]">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-[16px] leading-[1.7] tracking-[-0.02em] text-neutral-900 md:text-[18px]">
                    {fact.value}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ── 3. CEO Message ──────────────────────────────────────── */}
      <section className="py-[80px] md:py-[160px]">
        <Container>
          <ScrollReveal>
            <h2 className="mb-12 text-center text-[24px] font-bold tracking-[-0.04em] text-neutral-900 md:mb-20 md:text-[42px]">
              대표 인사말
            </h2>
          </ScrollReveal>

          <div className="mx-auto max-w-[680px]">
            <ScrollReveal>
              <div>
                <div className="mb-6 h-[2px] w-12 bg-accent mx-auto md:mx-0" />
                <blockquote className="text-center text-[16px] leading-[1.8] tracking-[-0.02em] text-neutral-900 md:text-left md:text-[18px]">
                  &ldquo;코리아이앤씨는 BCR 클린룸을 전문으로 설계·시공하며
                  수술실, 무균실, 중환자실, 격리실 현장에서 쌓은 경험을 바탕으로
                  병원 환경에 맞는 공사를 수행합니다.
                  <br />
                  <br />
                  항상 최선을 다하며, 정직하고 맡은 바 끝까지 책임을 다하는
                  회사가 되겠습니다.&rdquo;
                </blockquote>
                <p className="mt-8 text-center text-[14px] font-bold tracking-[-0.02em] text-neutral-900 md:text-left md:text-[16px]">
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

      {/* ── 5. Certifications (예약) — 비활성 ──
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
      ──────────────────────────────────────────── */}

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
