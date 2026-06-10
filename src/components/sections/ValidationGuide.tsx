import Container from "@/components/Container";
import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollReveal";

const validationItems = [
  {
    title: "차압 확인",
    description:
      "양압·음압 방향이 계획대로 유지되는지 확인해 오염 공기 흐름을 관리합니다.",
  },
  {
    title: "소음 점검",
    description:
      "공조기와 팬 가동 상태를 확인해 의료진과 환자 동선에 무리가 없는지 봅니다.",
  },
  {
    title: "필터 상태 확인",
    description:
      "HEPA 필터, FFU, 팬 상태를 점검해 완공 이후 유지보수 기준을 잡습니다.",
  },
  {
    title: "출입 설비 기능",
    description:
      "자동문, 인터락, 차압계, 사용중 표시등 같은 운영 설비를 함께 확인합니다.",
  },
];

export default function ValidationGuide() {
  return (
    <section className="bg-primary-dark py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)]">
      <Container>
        <ScrollReveal>
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start md:gap-16">
            <div>
              <p className="mb-4 text-[13px] font-bold uppercase text-accent md:text-[15px]">
                Handover Standard
              </p>
              <h2 className="text-[24px] font-bold leading-[1.3] text-white md:text-[42px]">
                완공 사진보다 중요한 것은 운영 가능한 상태입니다
              </h2>
            </div>
            <p className="text-[14px] leading-[1.8] text-neutral-300 md:text-[16px]">
              클린룸은 보기 좋게 마감되는 것만으로 끝나지 않습니다. 실제 운영에서
              공기 흐름, 차압, 소음, 필터 상태, 출입 설비가 함께 맞아야 병원
              공간으로 안정적으로 사용할 수 있습니다.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-px bg-white/15 md:mt-16 md:grid-cols-4">
          {validationItems.map((item) => (
            <StaggerItem key={item.title}>
              <article className="h-full bg-primary-dark p-7 md:p-8">
                <div className="mb-6 h-[3px] w-10 bg-accent" />
                <h3 className="text-[18px] font-bold text-white md:text-[22px]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.75] text-neutral-300 md:text-[15px]">
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
