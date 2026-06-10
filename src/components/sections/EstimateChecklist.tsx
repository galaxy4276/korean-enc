import Container from "@/components/Container";
import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollReveal";

const checklistItems = [
  {
    number: "01",
    title: "시공 면적과 공간 구성",
    description:
      "수술실, 전실, 복도, 오염구역처럼 포함 범위를 먼저 정리해야 자재 물량과 공기를 정확히 산정할 수 있습니다.",
  },
  {
    number: "02",
    title: "목표 청정도와 압력 방향",
    description:
      "수술실은 양압, 격리실은 음압처럼 목적에 따라 급기·배기와 차압 설계가 달라집니다.",
  },
  {
    number: "03",
    title: "공조·필터 사양",
    description:
      "FFU 수량, HEPA 필터 규격, 급·배기 덕트 구성은 초기 공사비와 운영비를 함께 좌우합니다.",
  },
  {
    number: "04",
    title: "기존 시설 철거 범위",
    description:
      "벽체, 천장, 구형 공조, 배관 철거가 필요한지에 따라 폐기물 처리와 공사 일정이 달라집니다.",
  },
  {
    number: "05",
    title: "의료 설비 연동",
    description:
      "의료가스, 자동문, 인터락, 출입통제, 차압 모니터링은 견적서에서 별도 항목으로 확인해야 합니다.",
  },
  {
    number: "06",
    title: "유지보수 조건",
    description:
      "필터 교체 주기, 팬 점검, 차압 확인처럼 완공 이후 운영 기준까지 계약 전에 맞춰야 합니다.",
  },
];

export default function EstimateChecklist() {
  return (
    <section className="bg-neutral-50 py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)]">
      <Container>
        <ScrollReveal>
          <p className="mb-4 text-[13px] font-bold uppercase text-primary md:text-[15px]">
            Estimate Guide
          </p>
          <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end md:gap-16">
            <h2 className="text-[24px] font-bold leading-[1.3] text-neutral-900 md:text-[42px]">
              견적 전에 확인해야 할 6가지
            </h2>
            <p className="text-[14px] leading-[1.8] text-neutral-600 md:text-[16px]">
              병원 클린룸은 단순 평당 단가로 결정하기 어렵습니다. 같은 면적이라도
              청정도, 공조 사양, 철거 범위, 의료 설비 연동에 따라 공사비와
              일정이 크게 달라집니다.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-px bg-neutral-200 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {checklistItems.map((item) => (
            <StaggerItem key={item.number}>
              <article className="h-full bg-white p-7 md:p-8">
                <p className="text-[13px] font-black text-accent md:text-[15px]">
                  {item.number}
                </p>
                <h3 className="mt-5 text-[18px] font-bold leading-[1.35] text-neutral-900 md:text-[22px]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.75] text-neutral-600 md:text-[15px]">
                  {item.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
