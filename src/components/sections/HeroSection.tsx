"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import ScrollReveal from "@/components/ScrollReveal";
import Container from "@/components/Container";

function CountUp({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-[48px] font-black tracking-[-0.04em] text-white leading-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] md:text-[56px]">
        {count}
        <span className="text-[24px] text-accent md:text-[28px]">{suffix}</span>
      </div>
      <div className="mt-2 text-[13px] font-medium tracking-[-0.02em] text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">{label}</div>
    </motion.div>
  );
}

function TrustFact({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-center"
    >
      <div className="text-[48px] font-black tracking-[-0.04em] text-white leading-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] md:text-[56px]">
        {value}
      </div>
      <div className="mt-2 text-[13px] font-medium tracking-[-0.02em] text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
        {label}
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[480px] items-center overflow-hidden md:min-h-[70vh]">
      {/* Background video with image fallback */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/complete-beige-twin-lamps.webp"
          className="h-full w-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(13,27,42,0.6)]" />

      <Container className="relative z-10 pt-24 pb-16 md:pt-28 md:pb-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between md:gap-10">
          {/* Left: Copy */}
          <div className="flex-1">
            <ScrollReveal>
              <span className="inline-block border-[1.5px] border-accent text-accent rounded-full px-4 py-1 text-[12px] font-bold tracking-[0.02em] mb-6">
                BCR 등급 전문
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-[36px] leading-[1.25] font-black tracking-[-0.04em] text-white md:text-[48px]">
                수술실 시공 20년,
                <br />
                현장이 다르면
                <br />
                결과가 다릅니다
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-5 text-[16px] font-medium leading-[1.7] tracking-[-0.02em] text-white/85 md:mt-6 md:text-[17px]">
                설계부터 유지보수까지 책임 시공
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-4 md:mt-10">
                <a
                  href="tel:010-8115-0500"
                  className="inline-flex items-center rounded-[30px] bg-primary px-8 py-4 text-[15px] font-extrabold tracking-[-0.02em] text-white transition-all duration-150 hover:bg-primary-light md:text-[16px]"
                >
                  무료 상담 신청
                </a>
                <a
                  href="/portfolio"
                  className="inline-flex items-center rounded-[30px] border-2 border-white/50 px-8 py-4 text-[15px] font-extrabold tracking-[-0.02em] text-white transition-all duration-150 hover:border-white hover:bg-white/10 md:text-[16px]"
                >
                  시공사례 보기
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Trust numbers */}
          <div className="flex shrink-0 flex-row gap-10 md:flex-col md:gap-10 md:border-l md:border-white/15 md:pl-16">
            <CountUp target={20} suffix="년+" label="현장 경험" />
            <div className="w-px bg-white/10 md:h-px md:w-full" />
            <TrustFact value="2023.04" label="법인 설립" />
          </div>
        </div>
      </Container>
    </section>
  );
}
