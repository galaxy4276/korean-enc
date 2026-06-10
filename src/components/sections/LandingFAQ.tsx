import Container from "@/components/Container";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
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
          <h2 className="text-[24px] font-bold leading-[1.3] text-neutral-900 md:text-[42px]">
            상담 전에 자주 묻는 질문
          </h2>
        </ScrollReveal>

        <div className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200 md:mt-14">
          {faqs.map((faq, index) => (
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
