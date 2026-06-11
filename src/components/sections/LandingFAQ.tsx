import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

export const landingFaqs = [
  {
    question: "현장 방문 없이 대략 견적을 받을 수 있나요?",
    answer:
      "가능한 범위에서 초기 상담은 드릴 수 있지만, 최종 견적은 현장 실측 후 안내하는 것이 정확합니다. 면적뿐 아니라 철거 범위, 공조 사양, 의료 설비 연동 여부가 비용에 영향을 줍니다.",
  },
  {
    question: "수술실과 음압격리실은 견적 기준이 어떻게 다른가요?",
    answer:
      "수술실은 양압 유지와 청정 급기가 핵심이고, 음압격리실은 전실 구성, 배기, 차압 유지, 오염 공기 흐름 제어가 중요합니다. 목적이 다르기 때문에 공조와 출입 설비 구성이 달라집니다.",
  },
  {
    question: "시공 비용은 어떻게 산정되나요?",
    answer:
      "면적만으로 결정되지 않습니다. 철거 범위, 공조·차압 사양, 마감 등급, 의료 설비 연동, 기존 시설 상태가 비용을 좌우합니다. 그래서 현장 실측 후 항목을 분리해 견적을 드리며, 불필요한 공정은 빼고 필요한 범위만 안내합니다.",
  },
  {
    question: "공사 기간은 보통 얼마나 걸리나요?",
    answer:
      "공간 규모와 철거·공조 범위에 따라 달라집니다. 상담 단계에서 현장 조건을 확인한 뒤 단계별 일정과 예상 기간을 함께 정리해 드립니다.",
  },
  {
    question: "병원 운영을 중단하지 않고 시공할 수 있나요?",
    answer:
      "구역 분리와 야간·주말 작업 등으로 운영 영향을 최소화하는 방식을 함께 검토합니다. 다만 차압·공조 연동 구간은 일시적인 사용 제한이 필요할 수 있어, 일정과 차단 범위를 사전에 협의합니다.",
  },
  {
    question: "BCR 등급 기준과 인허가도 챙겨주나요?",
    answer:
      "수술실·격리실은 청정도, 차압, 환기 횟수 등 기준 충족이 중요합니다. 설계 검토 단계에서 적용 기준을 확인하고, 완공 후 차압·소음·필터 상태 점검으로 운영 가능한 상태를 확인합니다.",
  },
  {
    question: "시공 후 유지보수도 맡길 수 있나요?",
    answer:
      "필터 교체, 차압·소음 확인, 팬 점검 등 운영 상태 점검이 가능합니다. 시공 단계에서 유지보수 범위와 점검 주기를 함께 협의하는 것을 권장합니다.",
  },
];

export default function LandingFAQ() {
  return (
    <section className="py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)]">
      <Container>
        <ScrollReveal>
          <p className="mb-4 text-[13px] font-bold uppercase text-primary md:text-[15px]">
            FAQ
          </p>
          <h2 className="text-[24px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 md:text-[42px]">
            상담 전에 자주 묻는 질문
          </h2>
        </ScrollReveal>

        <div className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200 md:mt-14">
          {landingFaqs.map((faq, index) => (
            <ScrollReveal key={faq.question} delay={index * 0.08}>
              <article className="grid gap-4 py-7 md:grid-cols-[0.9fr_1.1fr] md:gap-12 md:py-9">
                <h3 className="text-[17px] font-bold leading-[1.5] text-neutral-900 md:text-[21px]">
                  {faq.question}
                </h3>
                <p className="text-[14px] leading-[1.8] text-neutral-600 md:text-[16px]">
                  {faq.answer}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
