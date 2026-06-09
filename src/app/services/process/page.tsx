import Image from "next/image";
import Container from "@/components/Container";
import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollReveal";
import PageJsonLd from "@/components/PageJsonLd";
import EstimateCTA from "@/components/EstimateCTA";
import SeoRelatedLinks from "@/components/SeoRelatedLinks";
import {
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/structuredData";

/* ───────── 구조화 데이터 ───────── */
const faqs = [
  {
    question: "병원 클린룸 시공순서는 어떻게 되나요?",
    answer:
      "현장 실측 및 상담 → 설계 및 견적 → 철거 및 바닥 공사 → 클린룸 시공(패널·공조·의료가스) → 검증 및 인수 → 유지보수 및 AS의 6단계로 진행됩니다. 각 단계마다 고객과 진행 상황을 공유하며 품질을 확인합니다.",
  },
  {
    question: "클린룸 시공 기간은 얼마나 걸리나요?",
    answer:
      "시공 범위와 현장 여건에 따라 달라지며, 현장 실측 후 구체적인 공정표를 제공해 드립니다. 설계 확정부터 검증 완료까지의 일정을 투명하게 안내드립니다.",
  },
  {
    question: "클린룸 검증(검수) 단계에서 어떤 항목을 측정하나요?",
    answer:
      "파티클 카운트(부유 미립자), 차압(양압·음압), 소음, 온습도, 기류 속도, 자동문·인터락·차압계 기능 등을 측정합니다. 고객이 입회한 상태에서 검수를 완료합니다.",
  },
  {
    question: "시공 완료 후 유지보수도 맡길 수 있나요?",
    answer:
      "네. 시공 완료 후 정기 점검, HEPA·FFU 필터 교체, 공조 설비 보수, 차압계 교정 등 유지보수 서비스를 제공합니다. 긴급 대응이 필요한 경우에도 신속히 현장에 출동합니다.",
  },
];

const schemas = [
  serviceSchema({
    slug: "process",
    name: "병원 클린룸 시공순서",
    description:
      "현장 실측·상담부터 설계·견적, 철거·바닥, 패널·공조 시공, 검증·인수, 유지보수까지 코리아이앤씨의 6단계 병원 클린룸 시공순서",
    serviceType: "병원 클린룸 시공순서",
  }),
  breadcrumbSchema([
    { name: "홈", path: "/" },
    { name: "서비스", path: "/services" },
    { name: "병원 클린룸 시공순서", path: "/services/process" },
  ]),
  faqSchema("services/process", faqs),
];

/* ───────── Section 1: PageHero ───────── */
function PageHero() {
  return (
    <section className="relative bg-primary-dark py-28 md:py-40">
      <div className="absolute inset-0">
        <Image
          src="/images/construction-demolition.webp"
          alt="병원 클린룸 시공 철거 공정 현장"
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
            CONSTRUCTION PROCESS
          </p>
          <h1 className="text-[42px] md:text-[56px] font-bold leading-[1.24] md:leading-[1.34] tracking-[-0.04em] text-white mb-5 md:mb-7">
            병원 클린룸 시공순서
          </h1>
          <p className="text-base md:text-lg leading-[1.7] tracking-[-0.02em] text-neutral-300 max-w-2xl">
            현장 실측부터 검증 인수까지, 6단계 공정으로 완성하는 코리아이앤씨의
            병원 클린룸 시공 절차
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
        <ScrollReveal>
          <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
            OVERVIEW
          </p>
          <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-6 md:mb-8">
            수술실 공사, 어떤 순서로 진행되나요?
          </h2>
          <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600 max-w-3xl">
            병원 클린룸 시공은 일반 인테리어와 다릅니다. 기류·차압·미립자
            제어라는 기능적 요건이 있고, 의료 운영 중단을 최소화해야 하므로
            체계적인 공정 계획이 필수입니다. 코리아이앤씨는
            현장 실측·상담 → 설계·견적 → 철거·바닥 → 클린룸 시공 → 검증·인수
            → 유지보수 AS의 6단계로 시공을 진행하며, 각 단계마다 고객과 진행
            현황을 공유합니다.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

/* ───────── Section 3: 6단계 공정 타임라인 ───────── */
const processSteps = [
  {
    step: "01",
    title: "현장 실측 및 상담",
    summary: "공간 파악과 요구사항 확인",
    description:
      "담당 엔지니어가 직접 현장을 방문해 공간 치수, 기존 설비 상태, 인접 구역과의 관계를 조사합니다. 운영 중인 병동과의 동선 분리, 의료가스 배관 위치, 공조 덕트 경로 등 시공에 영향을 주는 요소를 사전에 파악해 이후 설계 오류를 예방합니다.",
    details: [
      "현장 방문 및 공간 실측",
      "기존 설비·배관·전기 상태 조사",
      "운영 동선 및 시공 범위 협의",
      "고객 요구사항 및 클린룸 용도 확인",
    ],
    image: "/images/kenc-surgery-design-drawing.webp",
    imageAlt: "병원 클린룸 설계 도면 검토",
  },
  {
    step: "02",
    title: "설계 및 견적",
    summary: "평면·공조·전기 설계 확정",
    description:
      "실측 데이터를 바탕으로 평면 레이아웃, 패널 시스템, 공조(FFU·HEPA·ULPA) 배치, 차압 구성, 의료가스 배관 경로를 설계합니다. 자재 사양이 확정된 후 투명한 견적서를 제공하며, 고객 요청에 따라 대안 사양 비교도 안내합니다.",
    details: [
      "평면, 천장, 공조 설비 상세 설계",
      "패널·필터·장비 자재 사양 결정",
      "의료가스·전기·차압 계획 확정",
      "항목별 투명 견적서 제공",
    ],
    image: "/images/kenc-surgery-panel-process.webp",
    imageAlt: "클린룸 패널 시공 공정",
  },
  {
    step: "03",
    title: "철거 및 바닥 공사",
    summary: "기존 시설 해체와 바닥 기초 작업",
    description:
      "기존 시설을 해체·철거하고 폐기물을 법정 절차에 따라 처리합니다. 이후 바닥 하도(프라이머) 도포와 셀프레벨링 작업으로 클린룸 패널·바닥재 시공에 필요한 평탄도를 확보합니다. 바닥의 수평도와 방수 처리는 클린룸 장기 성능에 직결되는 핵심 공정입니다.",
    details: [
      "기존 벽체·천장·바닥 철거",
      "의료 폐기물 포함 현장 정리",
      "바닥 프라이머(하도) 도포",
      "셀프레벨링 모르타르 타설 및 평탄화",
    ],
    image: "/images/construction-floor-primer.webp",
    imageAlt: "클린룸 바닥 프라이머 시공",
  },
  {
    step: "04",
    title: "클린룸 시공",
    summary: "패널·공조·의료가스 종합 시공",
    description:
      "클린룸의 핵심 공정입니다. 벽체 패널, 천장 패널(FFU 통합), LED 조명을 설치하고, 공조 설비·HEPA 필터·배기 덕트를 연결합니다. 이와 동시에 의료가스 배관, 차압계, 자동문·인터락 시스템, 콘센트·스위치 전기 배선을 종합적으로 시공합니다.",
    details: [
      "벽체·천장 패널 설치 및 조인트 마감",
      "FFU, HEPA·ULPA 필터 유닛 설치",
      "공조 덕트·배기 팬 연결",
      "의료가스 배관 및 콘센트 시공",
      "차압계, 자동문, 인터락 설치",
    ],
    image: "/images/kenc-surgery-panel-process.webp",
    imageAlt: "수술실 클린룸 패널 시공 현장",
  },
  {
    step: "05",
    title: "검증 및 인수",
    summary: "측정·기능 확인 후 고객 입회 검수",
    description:
      "시공이 완료되면 파티클 카운터, 차압계, 소음 측정기를 활용해 클린룸 성능을 검증합니다. 측정 항목별 결과를 기록한 검수 보고서를 제공하며, 고객이 입회한 자리에서 자동문·인터락·차압계 작동 상태를 최종 확인합니다.",
    details: [
      "파티클 카운트(부유 미립자) 측정",
      "차압(양압·음압) 기준치 확인",
      "소음·온습도·기류 측정",
      "자동문, 인터락, 차압계 기능 점검",
      "고객 입회 검수 및 검수 보고서 제공",
    ],
    image: "/images/kenc-validation-pressure-meter.webp",
    imageAlt: "클린룸 차압 측정 검증",
  },
  {
    step: "06",
    title: "유지보수 및 AS",
    summary: "정기 점검과 긴급 대응 체계",
    description:
      "인수 후에도 클린룸이 최적 상태를 유지할 수 있도록 정기 점검 서비스를 제공합니다. HEPA·FFU 필터 교체, 공조 설비 점검, 차압계 교정을 주기적으로 수행하며, 긴급 상황 발생 시 신속히 현장에 출동합니다. 수술실 운영 중단을 최소화하는 것이 유지보수의 핵심 목표입니다.",
    details: [
      "정기 차압·소음·공조 상태 점검",
      "HEPA·FFU 필터 및 소모품 교체",
      "공조기·배기팬·폐수 설비 보수",
      "차압계·자동문 교정 및 기능 유지",
      "긴급 현장 출동 체계 운영",
    ],
    image: "/images/kenc-maintenance-filter-change.webp",
    imageAlt: "클린룸 HEPA 필터 유지보수",
  },
];

function ProcessTimelineSection() {
  return (
    <section className="py-[80px] md:py-[140px] bg-neutral-50">
      <Container>
        <ScrollReveal>
          <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
            6-STEP PROCESS
          </p>
          <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-4 md:mb-6">
            6단계 시공 공정
          </h2>
          <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600 max-w-2xl mb-14 md:mb-20">
            각 단계는 독립적으로 완결되며, 다음 공정 진입 전 품질을 확인합니다.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical timeline line — visible on md+ */}
          <div className="hidden md:block absolute left-[23px] top-0 bottom-0 w-px bg-neutral-300" />

          <div className="space-y-14 md:space-y-20">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.step} delay={index * 0.08}>
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-12">
                  {/* Step circle */}
                  <div className="relative z-10 shrink-0 self-start w-12 h-12 bg-primary text-white flex items-center justify-center text-base font-bold">
                    {step.step}
                  </div>

                  {/* Content */}
                  <div className="flex-1 grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Text block */}
                    <div>
                      <p className="text-xs font-medium tracking-[0.08em] text-neutral-400 uppercase mb-2">
                        {step.summary}
                      </p>
                      <h3 className="text-xl md:text-[28px] font-bold tracking-[-0.03em] text-neutral-900 mb-4 md:mb-5">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600 mb-5 md:mb-6">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600"
                          >
                            <span className="mt-[10px] block w-1.5 h-1.5 bg-accent shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Image */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        sizes="(max-width: 1080px) 100vw, 480px"
                        className="object-cover"
                      />
                    </div>
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

/* ───────── Section 4: 검증 측정 상세 ───────── */
const validationItems = [
  {
    title: "파티클 카운트",
    description:
      "부유 미립자 수를 측정해 클린룸 공기 청정도가 설계 기준에 부합하는지 확인합니다.",
    image: "/images/bcr-particle.webp",
    imageAlt: "클린룸 파티클 측정",
  },
  {
    title: "차압 측정",
    description:
      "양압(수술실)·음압(격리실) 클린룸의 내외부 차압을 측정해 설계값을 충족하는지 검증합니다.",
    image: "/images/kenc-validation-pressure-meter.webp",
    imageAlt: "클린룸 차압계 측정",
  },
  {
    title: "소음 측정",
    description:
      "공조 설비 가동 시 클린룸 내부 소음 수준을 측정해 의료 환경 기준에 적합한지 확인합니다.",
    image: "/images/kenc-validation-noise-meter.webp",
    imageAlt: "클린룸 소음 측정기",
  },
];

function ValidationSection() {
  return (
    <section className="py-[80px] md:py-[140px]">
      <Container>
        <ScrollReveal>
          <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
            VERIFICATION
          </p>
          <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-6 md:mb-8">
            검증 및 측정 항목
          </h2>
          <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600 max-w-3xl mb-12 md:mb-16">
            시공이 완료된 후 고객이 입회한 상태에서 측정 장비로 성능을
            검증합니다. 측정 결과는 항목별로 문서화해 검수 보고서로 제공하며,
            기준을 충족하지 못한 항목은 즉시 보완 조치합니다.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {validationItems.map((item) => (
            <StaggerItem key={item.title}>
              <div className="bg-neutral-50 h-full flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1080px) 100vw, 380px"
                    className="object-cover"
                  />
                </div>
                <div className="p-7 md:p-8 flex-1">
                  <h3 className="text-lg md:text-xl font-bold tracking-[-0.03em] text-neutral-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600">
                    {item.description}
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

/* ───────── Section 5: 공정별 자재·설비 ───────── */
function MaterialSection() {
  return (
    <section className="py-[80px] md:py-[140px] bg-neutral-50">
      <Container>
        <ScrollReveal>
          <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
            MATERIALS & EQUIPMENT
          </p>
          <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-6 md:mb-8">
            시공에 사용되는 주요 자재 및 설비
          </h2>
          <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600 max-w-3xl mb-12 md:mb-16">
            클린룸 성능은 자재 품질과 설비 선정에서 출발합니다. 코리아이앤씨는
            공간 용도와 요구 청정도에 맞는 자재·설비를 선정해 제안합니다.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              category: "패널 시스템",
              items: [
                "샌드위치 패널(암석면·우레탄 심재)",
                "스테인리스 스틸 마감 패널",
                "항균 도장 처리 패널",
                "조인트 실링재 및 코너 몰딩",
              ],
            },
            {
              category: "공조 설비",
              items: [
                "FFU(Fan Filter Unit) — HEPA/ULPA 통합형",
                "HEPA 필터(H13, H14급)",
                "ULPA 필터(고효율 미립자 제거)",
                "차압 유지용 배기 팬 및 댐퍼",
              ],
            },
            {
              category: "출입·차압 관리",
              items: [
                "자동 슬라이딩 도어 및 에어타이트 도어",
                "인터락(동시 개방 방지) 시스템",
                "디지털 차압계 및 알람 시스템",
                "패스박스(물품 이송용 통로)",
              ],
            },
            {
              category: "바닥·마감",
              items: [
                "에폭시 수지 바닥(항균, 논슬립)",
                "우레탄 코팅 마감",
                "셀프레벨링 모르타르(평탄화)",
                "바닥 줄눈 방수 실링",
              ],
            },
          ].map((block) => (
            <StaggerItem key={block.category}>
              <div className="bg-white border border-neutral-200 p-8 md:p-10 h-full">
                <div className="w-8 h-1 bg-accent mb-6" />
                <h3 className="text-lg md:text-xl font-bold tracking-[-0.03em] text-neutral-900 mb-5">
                  {block.category}
                </h3>
                <ul className="space-y-3">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600"
                    >
                      <span className="mt-[10px] block w-1.5 h-1.5 bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

/* ───────── Section 6: 공정 사진 갤러리 ───────── */
function ProcessGallerySection() {
  const galleryImages = [
    {
      src: "/images/construction-demolition.webp",
      alt: "클린룸 철거 공정",
      label: "철거",
    },
    {
      src: "/images/construction-floor-primer.webp",
      alt: "클린룸 바닥 프라이머 도포",
      label: "바닥 하도",
    },
    {
      src: "/images/construction-self-leveling.webp",
      alt: "클린룸 바닥 셀프레벨링",
      label: "셀프레벨링",
    },
    {
      src: "/images/kenc-surgery-panel-process.webp",
      alt: "클린룸 패널 시공 공정",
      label: "패널 시공",
    },
    {
      src: "/images/kenc-validation-pressure-meter.webp",
      alt: "클린룸 차압 측정 검증",
      label: "차압 측정",
    },
    {
      src: "/images/kenc-validation-noise-meter.webp",
      alt: "클린룸 소음 측정 검증",
      label: "소음 측정",
    },
  ];

  return (
    <section className="py-[80px] md:py-[140px]">
      <Container>
        <ScrollReveal>
          <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
            SITE PHOTOS
          </p>
          <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-12 md:mb-16">
            공정별 현장 사진
          </h2>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img) => (
            <StaggerItem key={img.src}>
              <div className="relative aspect-[4/3] overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-dark/30 group-hover:bg-primary-dark/10 transition-colors duration-300" />
                <span className="absolute bottom-3 left-3 text-xs font-bold tracking-[-0.02em] text-white bg-primary-dark/70 px-2 py-1">
                  {img.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

/* ───────── Section 7: FAQ ───────── */
function FaqSection() {
  return (
    <section className="py-[80px] md:py-[140px] bg-neutral-50">
      <Container>
        <ScrollReveal>
          <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
            FAQ
          </p>
          <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-12 md:mb-16">
            자주 묻는 질문
          </h2>
        </ScrollReveal>

        <StaggerContainer className="space-y-4 md:space-y-6 max-w-3xl">
          {faqs.map((faq, i) => (
            <StaggerItem key={i}>
              <dl className="bg-white border border-neutral-200 p-7 md:p-8">
                <dt className="text-base md:text-lg font-bold tracking-[-0.03em] text-neutral-900 mb-3">
                  {faq.question}
                </dt>
                <dd className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600">
                  {faq.answer}
                </dd>
              </dl>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

/* ───────── Page Export ───────── */
export default function ProcessPage() {
  return (
    <main>
      <PageJsonLd schemas={schemas} />
      <PageHero />
      <IntroSection />
      <ProcessTimelineSection />
      <ValidationSection />
      <MaterialSection />
      <ProcessGallerySection />
      <FaqSection />
      <EstimateCTA
        heading="병원 클린룸 시공순서, 직접 안내해 드립니다"
        description="현장 실측 후 공정표와 견적을 함께 제공합니다. 상담 비용은 없습니다."
      />
      <SeoRelatedLinks
        title="관련 페이지"
        links={[
          {
            href: "/services/cost",
            title: "시공 비용 안내",
            description: "견적 산정 기준",
          },
          {
            href: "/services/surgery-cleanroom",
            title: "수술실 클린룸 시공",
            description: "대표 시공 분야",
          },
          {
            href: "/portfolio",
            title: "시공사례 보기",
            description: "공정별 실제 사진",
          },
        ]}
      />
    </main>
  );
}
