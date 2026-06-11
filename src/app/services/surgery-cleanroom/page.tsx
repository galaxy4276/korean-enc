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

/* ───────── JSON-LD 데이터 ───────── */
const faqs = [
  {
    question: "수술실 클린룸에서 양압이 필요한 이유는 무엇인가요?",
    answer:
      "수술실은 외부 복도보다 높은 기압(양압)을 유지해 문이 열릴 때 오염 공기가 유입되지 않도록 합니다. 이를 통해 세균·미립자가 수술 야(field)에 접근하는 것을 물리적으로 차단하여 수술 부위 감염(SSI) 위험을 낮춥니다.",
  },
  {
    question: "HEPA 필터와 FFU(Fan Filter Unit)의 차이는 무엇인가요?",
    answer:
      "HEPA 필터는 0.3 μm 이상 입자를 99.97% 이상 포집하는 필터 소재이고, FFU는 팬과 HEPA 필터를 일체화한 천장 설치 모듈입니다. 수술실 클린룸에서는 FFU를 천장 전체에 배열해 하향층류(Downflow) 급기를 구현하며, 균일한 청정 공기를 수술 야 전면에 공급합니다.",
  },
  {
    question: "수술실 클린룸 시공 기간은 얼마나 걸리나요?",
    answer:
      "시공 범위(신축·리모델링), 수술실 규모, 공조설비 교체 여부에 따라 달라집니다. 현장 실측 상담 후 설계·자재 조달·시공·검증까지 구체적인 일정을 안내해 드립니다. 운영 중인 병원의 경우 야간·주말 공사를 병행해 진료 공백을 최소화합니다.",
  },
  {
    question: "시공 후 차압·파티클 검증은 어떻게 진행되나요?",
    answer:
      "시공 완료 후 차압계로 수술실-전실-복도 간 압력 차이를 측정하고, 파티클 카운터로 공기 청정도를 확인합니다. 소음 측정, 자동문·인터락 동작 확인, 공조기 풍량 검증을 포함한 종합 검수를 고객 입회하에 진행하며 결과 보고서를 제공합니다.",
  },
];

const schemas = [
  serviceSchema({
    slug: "surgery-cleanroom",
    name: "수술실 클린룸 시공",
    description:
      "수술 부위 감염(SSI) 예방을 위한 BCR 무균 수술실 설계·시공. 양압 유지, HEPA 천장 급기, 차압 관리, 의료가스 배관, 내장 판넬공사 통합 제공.",
    serviceType: "수술실 클린룸",
  }),
  breadcrumbSchema([
    { name: "홈", path: "/" },
    { name: "서비스", path: "/services" },
    { name: "수술실 클린룸 시공", path: "/services/surgery-cleanroom" },
  ]),
  faqSchema("services/surgery-cleanroom", faqs),
];

/* ───────── Section 1: Page Hero ───────── */
function PageHero() {
  return (
    <section className="relative bg-primary-dark py-28 md:py-40">
      <div className="absolute inset-0">
        <Image
          src="/images/kenc-surgery-complete-white.webp"
          alt="완공된 수술실 클린룸 내부 전경"
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
            SURGERY CLEAN ROOM
          </p>
          <h1 className="text-[42px] md:text-[56px] font-bold leading-[1.24] md:leading-[1.34] tracking-[-0.04em] text-white mb-5 md:mb-7">
            수술실 클린룸 시공
          </h1>
          <p className="text-base md:text-lg leading-[1.7] tracking-[-0.02em] text-neutral-300 max-w-2xl">
            양압 유지·HEPA 천장 급기·차압 관리로 수술 부위 감염을 원천 차단하는
            BCR 무균 수술실을 설계부터 검증까지 일괄 시공합니다.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

/* ───────── Section 2: Intro ───────── */
function IntroSection() {
  return (
    <section className="py-[80px] md:py-[140px]">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal>
            <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
              WHY BCR SURGERY ROOM
            </p>
            <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-6 md:mb-8">
              무균 수술실이 필요한 이유
            </h2>
            <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600 mb-5">
              수술실은 병원에서 가장 엄격한 공기 청정도 관리가 요구되는 공간입니다.
              수술 부위 감염(SSI, Surgical Site Infection)은 환자 회복을 지연시키고
              재입원·재수술로 이어질 수 있으며, 병원의 의료 신뢰도에도 직접적인
              영향을 미칩니다.
            </p>
            <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600 mb-5">
              BCR(Bio Clean Room) 수술실은 HEPA 필터를 통한 하향층류 급기로
              미립자와 균을 물리적으로 배제하고, 양압 유지로 외부 오염 공기의
              유입을 차단합니다. 전실·복도와의 차압 관리, 의료가스·출입통제 동선
              통합 설계가 함께 이루어져야 완성도 높은 무균 환경이 구현됩니다.
            </p>
            <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600">
              코리아이앤씨는 공조설비 설계부터 내장 판넬공사, 의료가스 배관,
              시공 후 차압·파티클 검증까지 수술실 클린룸 전 공정을 일괄 시공합니다.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/complete-blue-stainless-cabinet.webp"
                alt="수술실 클린룸 완공 전경"
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

/* ───────── Section 3: 시공 범위 ───────── */
const scopeItems = [
  {
    title: "내장 판넬 공사",
    description:
      "항균 코팅 강판 패널로 벽체·천장·문틀을 구성합니다. 청소가 용이한 평활 마감과 코너 R처리로 먼지 적체를 방지하며, 의료가스 콘센트·전기 설비를 패널 내 매립 설치합니다.",
    image: "/images/kenc-surgery-panel-process.webp",
    imageAlt: "수술실 내장 판넬 시공 과정",
  },
  {
    title: "공조설비 및 FFU 설치",
    description:
      "천장 전면에 FFU(Fan Filter Unit)를 배열해 HEPA 필터 하향층류 급기를 구현합니다. 공조기 외기 도입량, 환기횟수, 청정도 구역별 급·배기 밸런싱을 설계 단계에서 산정합니다.",
    image: "/images/complete-beige-twin-lamps.webp",
    imageAlt: "수술실 천장 조명 및 FFU 설치 완료 전경",
  },
  {
    title: "의료가스 배관 통합",
    description:
      "산소·진공·압축공기·N₂O 등 의료가스 배관을 천장·벽체 내에 매립하고, 수술 야(field) 배치에 맞춘 콘센트 위치를 설계합니다. 시공 후 기밀 시험 및 잔류 가스 퍼지를 실시합니다.",
    image: "/images/complete-beige-gas-panel.webp",
    imageAlt: "수술실 의료가스 패널 및 배관 설치",
  },
  {
    title: "차압 관리 및 인터락",
    description:
      "수술실-전실-복도 간 양압 차압계를 설치하고 자동문 인터락을 연동합니다. 두 문이 동시에 열리지 않도록 제어하여 외부 공기 유입을 원천 차단합니다. 차압계는 시공 후 기준값으로 보정합니다.",
    image: "/images/complete-beige-sliding-door.webp",
    imageAlt: "수술실 자동문 및 차압 인터락 시스템",
  },
];

function ScopeSection() {
  return (
    <section className="py-[80px] md:py-[140px] bg-neutral-50">
      <Container>
        <ScrollReveal>
          <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
            SCOPE OF WORK
          </p>
          <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-6 md:mb-8">
            수술실 클린룸 시공 범위
          </h2>
          <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600 max-w-3xl mb-12 md:mb-16">
            내장 마감부터 공조설비, 의료가스, 차압 인터락까지 — 수술실 클린룸
            전 공정을 단일 창구에서 통합 시공합니다.
          </p>
        </ScrollReveal>

        <div className="space-y-16 md:space-y-24">
          {scopeItems.map((item, index) => (
            <ScrollReveal key={item.title} delay={0.1}>
              <div
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
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
                  <h3 className="text-xl md:text-[28px] font-bold tracking-[-0.03em] text-neutral-900 mb-4 md:mb-5">
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

/* ───────── Section 4: 품질 검증 포인트 ───────── */
const qualityPoints = [
  {
    label: "파티클 측정",
    detail:
      "공기 청정도를 파티클 카운터로 측정해 목표 청정 수준 달성 여부를 확인합니다.",
    image: "/images/archive/kenc-archive-070.webp",
  },
  {
    label: "차압 검증",
    detail:
      "수술실-전실-복도 간 차압이 설계 기준 범위 내에 있는지 기기로 측정·기록합니다.",
    image: "/images/archive/kenc-archive-076.webp",
  },
  {
    label: "소음 측정",
    detail:
      "FFU 풍량이 증가해도 소음이 의료 환경 허용 범위 내에 있는지 소음계로 확인합니다.",
    image: "/images/archive/kenc-archive-075.webp",
  },
  {
    label: "공기 청정도 관리",
    detail:
      "급기·배기 밸런스 조정 후 전체 공기 청정도를 재측정하여 균일한 청정 환경을 검증합니다.",
    image: "/images/kenc-isolation-air-handler.webp",
  },
];

function QualitySection() {
  return (
    <section className="py-[80px] md:py-[140px]">
      <Container>
        <ScrollReveal>
          <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
            QUALITY & VALIDATION
          </p>
          <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-6 md:mb-8">
            시공 후 검증 프로세스
          </h2>
          <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600 max-w-3xl mb-12 md:mb-16">
            시공 완료 후 고객 입회하에 측정 장비로 차압·파티클·소음을 실측하고,
            결과 보고서를 제공합니다. 기준에 미달하면 조치 후 재측정을 진행합니다.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {qualityPoints.map((point) => (
            <StaggerItem key={point.label}>
              <div className="bg-neutral-50 overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={point.image}
                    alt={point.label}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold tracking-[-0.03em] text-neutral-900 mb-2">
                    {point.label}
                  </h3>
                  <p className="text-sm leading-[1.7] tracking-[-0.02em] text-neutral-600">
                    {point.detail}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

/* ───────── Section 5: 시공 전 현황 ───────── */
function BeforeAfterSection() {
  return (
    <section className="py-[80px] md:py-[140px] bg-neutral-50">
      <Container>
        <ScrollReveal>
          <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
            BEFORE & AFTER
          </p>
          <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-6 md:mb-8">
            시공 전후 변화
          </h2>
          <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600 max-w-3xl mb-12 md:mb-16">
            노후 수술실 철거부터 신규 클린룸 완공까지의 변화를 확인하세요.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <ScrollReveal delay={0.1}>
            <div>
              <div className="relative aspect-[4/3] mb-4">
                <Image
                  src="/images/kenc-surgery-structure-before.webp"
                  alt="수술실 클린룸 시공 전 구조체 현황"
                  fill
                  sizes="(max-width: 1080px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-medium tracking-[-0.02em] text-neutral-500">
                BEFORE — 시공 전 구조체
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <div className="relative aspect-[4/3] mb-4">
                <Image
                  src="/images/complete-white-lamp.webp"
                  alt="수술실 클린룸 시공 완료 — 천장 조명 및 FFU 완공"
                  fill
                  sizes="(max-width: 1080px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-medium tracking-[-0.02em] text-neutral-500">
                AFTER — 시공 완료
              </p>
            </div>
          </ScrollReveal>
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

        <dl className="space-y-6 md:space-y-8">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="border-t border-neutral-200 pt-6 md:pt-8">
                <dt className="text-lg md:text-xl font-bold tracking-[-0.03em] text-neutral-900 mb-3 md:mb-4">
                  {faq.question}
                </dt>
                <dd className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600">
                  {faq.answer}
                </dd>
              </div>
            </ScrollReveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}

/* ───────── Related Links data ───────── */
const relatedLinks = [
  {
    href: "/services/process",
    title: "클린룸 시공순서",
    description: "현장 실측부터 검증·인수까지 6단계 공정",
  },
  {
    href: "/services/cost",
    title: "시공 비용 안내",
    description: "수술실 공사 견적 기준과 상담 절차",
  },
  {
    href: "/portfolio/surgery-cleanroom-complete-review",
    title: "수술실 클린룸 시공 사례",
    description: "실제 수술실 BCR 완공 사례",
  },
];

/* ───────── Page Export ───────── */
export default function SurgeryCleanroomPage() {
  return (
    <main>
      <PageJsonLd schemas={schemas} />
      <PageHero />
      <IntroSection />
      <ScopeSection />
      <QualitySection />
      <BeforeAfterSection />
      <FaqSection />
      <EstimateCTA
        heading="수술실 클린룸 시공 상담"
        description="현장 실측 후 정확한 범위와 일정을 안내해 드립니다. 운영 중인 병원도 진료 공백 없이 진행할 수 있습니다."
      />
      <SeoRelatedLinks title="관련 페이지" links={relatedLinks} />
    </main>
  );
}
