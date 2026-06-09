import Image from "next/image";
import Container from "@/components/Container";
import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollReveal";
import EstimateCTA from "@/components/EstimateCTA";
import SeoRelatedLinks from "@/components/SeoRelatedLinks";
import PageJsonLd from "@/components/PageJsonLd";
import {
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/structuredData";

/* ───────── FAQ 데이터 ───────── */
const faqs = [
  {
    question: "병원 클린룸 시공 비용은 어떻게 산정되나요?",
    answer:
      "시공 비용은 시공 면적, 목표 청정 등급(ISO Class), 공조 설비 사양(FFU 수량·HEPA/ULPA 필터 규격·차압 설계), 내장 마감재 종류, 기존 시설 철거 범위, 의료가스 배관 및 출입통제 연동 여부 등 복합 요인에 따라 달라집니다. 동일 면적이라도 설비 사양과 마감 수준에 따라 최종 금액 차이가 크게 발생하므로 반드시 현장 실측 후 정확한 견적을 받으시길 권장합니다.",
  },
  {
    question: "견적을 받으려면 어떻게 해야 하나요?",
    answer:
      "전화(010-8115-0500) 또는 온라인 문의 양식을 통해 상담을 신청하시면, 담당자가 현장 방문 일정을 조율하고 실측·조사 후 세부 견적서를 제공합니다. 방문 상담은 무료로 진행되며, 평면도 또는 설계 도면이 있으면 사전 검토도 가능합니다.",
  },
  {
    question: "기존 시설을 철거해야 하는 경우 비용이 추가되나요?",
    answer:
      "기존 벽체·천장 마감재, 구형 공조 설비, 배관 등을 철거해야 하는 경우 철거·폐기물 처리 비용이 별도로 산정됩니다. 현장 실측 시 철거 범위와 폐기물 종류를 확인하여 견적에 포함하므로, 추가 비용이 발생하는 경우 사전에 투명하게 안내해 드립니다.",
  },
  {
    question: "시공 완료 후 유지보수 비용은 따로 드나요?",
    answer:
      "시공 완료 후 정기 점검 및 HEPA/ULPA 필터 교체, 차압계·공조기 유지관리 등은 별도 유지보수 계약으로 진행됩니다. 점검 주기와 소모품 교체 범위에 따라 연간 유지비용이 달라지므로, 시공 계약 시 유지보수 조건도 함께 협의하시길 권장합니다.",
  },
];

/* ───────── JSON-LD 데이터 ───────── */
const jsonLdSchemas = [
  serviceSchema({
    slug: "cost",
    name: "병원 클린룸 시공 비용 안내",
    description:
      "병원 클린룸 시공 비용은 면적·청정등급·공조 사양·마감재·철거 범위에 따라 달라집니다. 투명한 현장 실측 기반 견적을 제공합니다.",
    serviceType: "병원 클린룸 시공 비용",
  }),
  breadcrumbSchema([
    { name: "홈", path: "/" },
    { name: "서비스", path: "/services" },
    { name: "병원 클린룸 시공 비용 안내", path: "/services/cost" },
  ]),
  faqSchema("services/cost", faqs),
];

/* ───────── Section 1: Page Hero ───────── */
function PageHero() {
  return (
    <section className="relative bg-primary-dark py-28 md:py-40">
      <div className="absolute inset-0">
        <Image
          src="/images/complete-blue-panorama.webp"
          alt="병원 클린룸 시공 완료 전경"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-primary-dark/75" />
      <Container className="relative z-10">
        <ScrollReveal>
          <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-accent mb-4 md:mb-6">
            COST GUIDE
          </p>
          <h1 className="text-[42px] md:text-[56px] font-bold leading-[1.24] md:leading-[1.34] tracking-[-0.04em] text-white mb-5 md:mb-7">
            병원 클린룸 시공 비용 안내
          </h1>
          <p className="text-base md:text-lg leading-[1.7] tracking-[-0.02em] text-neutral-300 max-w-2xl">
            면적·등급·설비 사양에 따라 달라지는 시공 비용, 투명한 견적 절차로
            안내해 드립니다.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

/* ───────── Section 2: Intro — 검색 의도에 즉답 ───────── */
function IntroSection() {
  return (
    <section className="py-[80px] md:py-[140px]">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <ScrollReveal>
            <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
              COST OVERVIEW
            </p>
            <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-6 md:mb-8">
              시공 비용, 왜 현장 실측이 필요한가요?
            </h2>
            <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600 mb-5">
              병원 클린룸 시공 비용은 면적·청정등급·공조 사양·마감·기존 시설
              철거 범위에 따라 달라집니다. 단순 평당 단가로 산정하는 것은
              실제 공사비와 큰 차이가 생길 수 있어, 신뢰할 수 있는 견적을
              위해서는 반드시 현장 실측이 필요합니다.
            </p>
            <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600">
              코리아이앤씨는 현장 방문부터 견적서 제출까지 투명한 절차로
              진행하며, 예상치 못한 추가 비용 없이 계약서에 명시된 범위 내에서
              시공을 완료합니다.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/kenc-surgery-design-drawing.webp"
                alt="병원 클린룸 시공 설계 도면 검토 — 코리아이앤씨"
                fill
                sizes="(max-width: 1080px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

/* ───────── Section 3: 비용 영향 요인 ───────── */
const costFactors = [
  {
    number: "01",
    title: "시공 면적 및 공간 구성",
    description:
      "시공 대상 공간의 면적과 방 수, 복도·전실·오염구역 등 버퍼존 구성이 전체 자재 물량과 공기에 직접 영향을 줍니다.",
  },
  {
    number: "02",
    title: "목표 청정 등급",
    description:
      "수술실·무균 조제실처럼 높은 청정 등급이 요구되는 공간일수록 고사양 HEPA/ULPA 필터와 FFU 수량이 늘어나 비용이 증가합니다.",
  },
  {
    number: "03",
    title: "공조 설비 사양",
    description:
      "환기 횟수, FFU 대수, 급·배기 덕트 구성, 양압·음압 제어 방식, 차압계 설치 수량 등 공조 설계 수준에 따라 설비 비용이 크게 달라집니다.",
  },
  {
    number: "04",
    title: "내장 마감재 종류",
    description:
      "벽체 패널 재질(항균 강판·스테인리스·알루미늄), 바닥 에폭시 두께, 천장 그리드 사양, 조명 기구 등 마감재 선택에 따라 자재 단가가 변동됩니다.",
  },
  {
    number: "05",
    title: "기존 시설 철거 범위",
    description:
      "기존 벽체·천장·구형 공조 설비·배관 등의 철거 범위와 폐기물 처리 방식에 따라 철거 공사비가 추가로 산정됩니다.",
  },
  {
    number: "06",
    title: "부대 설비 연동",
    description:
      "의료가스 배관, 자동문·인터락 시스템, 출입통제, 차압 모니터링 등 연동 설비가 많을수록 설비 공사 범위가 확대됩니다.",
  },
];

function CostFactorsSection() {
  return (
    <section className="py-[80px] md:py-[140px] bg-neutral-50">
      <Container>
        <ScrollReveal>
          <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
            COST FACTORS
          </p>
          <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-5 md:mb-7">
            비용에 영향을 주는 주요 요인
          </h2>
          <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600 max-w-3xl mb-12 md:mb-16">
            아래 여섯 가지 요인이 복합적으로 작용하여 최종 시공 비용이 결정됩니다.
            각 항목을 현장에서 확인한 후 세부 견적서를 작성합니다.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {costFactors.map((factor) => (
            <StaggerItem key={factor.number}>
              <div className="bg-white p-8 h-full">
                <p className="text-4xl font-bold tracking-[-0.04em] text-neutral-200 mb-4">
                  {factor.number}
                </p>
                <h3 className="text-lg md:text-xl font-bold tracking-[-0.03em] text-neutral-900 mb-3">
                  {factor.title}
                </h3>
                <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600">
                  {factor.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

/* ───────── Section 4: 견적 산정 방식 및 시공 분야별 안내 ───────── */
const scopeItems = [
  {
    title: "수술실 클린룸",
    description:
      "양압 유지, HEPA 천장 급기, 의료가스 배관, 차압 관리, 내장 패널 공사가 포함됩니다. 공조 사양과 마감재 등급에 따라 범위가 달라집니다.",
    image: "/images/kenc-surgery-complete-white.webp",
    imageAlt: "수술실 클린룸 시공 완료 — 코리아이앤씨",
  },
  {
    title: "음압격리실",
    description:
      "음압 유지, 오염 공기 외부 배출 방지, 전실·버퍼존 구성, 폐수 설비, 출입통제 연동이 핵심 시공 범위입니다.",
    image: "/images/kenc-isolation-room-bed.webp",
    imageAlt: "음압격리실 시공 완료 — 코리아이앤씨",
  },
];

function ScopeSection() {
  return (
    <section className="py-[80px] md:py-[140px]">
      <Container>
        <ScrollReveal>
          <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
            SCOPE OF WORK
          </p>
          <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-5 md:mb-7">
            분야별 시공 범위와 견적 구성
          </h2>
          <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600 max-w-3xl mb-12 md:mb-16">
            코리아이앤씨의 견적서는 설계비, 자재비, 설비 공사비, 마감 공사비,
            철거·폐기물 처리비를 항목별로 구분하여 투명하게 제시합니다.
          </p>
        </ScrollReveal>

        <div className="space-y-10 md:space-y-14">
          {scopeItems.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1}>
              <div
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 1080px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <h3 className="text-xl md:text-[28px] font-bold tracking-[-0.03em] text-neutral-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ───────── Section 5: 견적 상담 절차 ───────── */
const consultSteps = [
  {
    step: "01",
    title: "상담 신청",
    details: [
      "전화 또는 온라인 문의 양식으로 신청",
      "시공 공간 종류·규모 사전 공유",
    ],
  },
  {
    step: "02",
    title: "현장 방문 실측",
    details: [
      "담당자 현장 방문(무료)",
      "공간 실측 및 기존 시설 상태 조사",
      "시공 범위·사양 협의",
    ],
  },
  {
    step: "03",
    title: "견적서 제출",
    details: [
      "항목별 세부 비용 명시",
      "설계·자재·설비·마감·철거비 구분",
      "일정 및 공정 계획 함께 제공",
    ],
  },
  {
    step: "04",
    title: "계약 및 착공",
    details: [
      "견적 내용 확인 후 계약 체결",
      "계약서에 시공 범위·금액·일정 명시",
      "착공 일정 확정",
    ],
  },
];

function ConsultProcessSection() {
  return (
    <section className="py-[80px] md:py-[140px] bg-neutral-50">
      <Container>
        <ScrollReveal>
          <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
            ESTIMATE PROCESS
          </p>
          <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-12 md:mb-20">
            투명한 견적 상담 절차
          </h2>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-neutral-300" />
          <div className="space-y-10 md:space-y-14">
            {consultSteps.map((step, index) => (
              <ScrollReveal key={step.step} delay={index * 0.1}>
                <div className="relative flex gap-6 md:gap-10">
                  <div className="relative z-10 shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary text-white flex items-center justify-center text-sm md:text-base font-bold">
                    {step.step}
                  </div>
                  <div className="pt-1 md:pt-2">
                    <h3 className="text-lg md:text-xl font-bold tracking-[-0.03em] text-neutral-900 mb-3 md:mb-4">
                      {step.title}
                    </h3>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600"
                        >
                          <span className="mt-2 block w-1.5 h-1.5 bg-accent shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───────── Section 6: FAQ ───────── */
function FaqSection() {
  return (
    <section className="py-[80px] md:py-[140px]">
      <Container>
        <ScrollReveal>
          <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
            FAQ
          </p>
          <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-12 md:mb-16">
            자주 묻는 질문
          </h2>
        </ScrollReveal>

        <StaggerContainer className="space-y-6">
          {faqs.map((faq) => (
            <StaggerItem key={faq.question}>
              <div className="bg-neutral-50 p-8 md:p-10">
                <h3 className="text-lg md:text-xl font-bold tracking-[-0.03em] text-neutral-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600">
                  {faq.answer}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

/* ───────── Page Export ───────── */
export default function CostPage() {
  return (
    <main>
      <PageJsonLd schemas={jsonLdSchemas} />
      <PageHero />
      <IntroSection />
      <CostFactorsSection />
      <ScopeSection />
      <ConsultProcessSection />
      <FaqSection />
      <EstimateCTA
        heading="현장 실측 기반 정확한 견적을 받아보세요"
        description="병원 클린룸 시공 비용은 현장마다 다릅니다. 담당자가 직접 방문하여 공간을 확인하고 투명한 견적서를 제공해 드립니다."
      />
      <SeoRelatedLinks
        title="관련 페이지"
        links={[
          {
            href: "/services/process",
            title: "클린룸 시공순서",
            description: "견적 후 진행되는 공정",
          },
          {
            href: "/services/surgery-cleanroom",
            title: "수술실 클린룸 시공",
            description: "분야별 시공 범위",
          },
          {
            href: "/contact",
            title: "견적 문의하기",
            description: "현장 실측 상담 신청",
          },
        ]}
      />
    </main>
  );
}
