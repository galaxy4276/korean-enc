"use client";

import dynamic from "next/dynamic";
import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

// three는 SSR 비용이 크고 정적 export에서 window를 필요로 하므로 클라이언트에서만 로드한다.
const AirflowScene = dynamic(() => import("@/components/AirflowScene"), {
  ssr: false,
  loading: () => (
    <div className="aspect-[16/10] w-full bg-primary-dark md:aspect-[2/1]" />
  ),
});

export default function AirflowSection() {
  return (
    <section className="bg-neutral-50 py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)]">
      <Container>
        <ScrollReveal>
          <p className="mb-4 text-[13px] font-bold uppercase text-primary md:text-[15px]">
            Airflow Simulation
          </p>
          <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end md:gap-16">
            <h2 className="text-[24px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 md:text-[42px]">
              보이지 않는 공기 흐름을 설계합니다
            </h2>
            <p className="text-[14px] leading-[1.8] text-neutral-600 md:text-[16px]">
              클린룸의 핵심은 마감이 아니라 공기 흐름입니다. 수술실은 양압으로
              외부 오염을 밀어내고, 격리실은 음압으로 오염을 가둡니다. 아래에서
              두 방식의 차이를 직접 확인해 보세요.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 md:mt-16">
            <AirflowScene />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
