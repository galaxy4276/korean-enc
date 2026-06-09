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

/* ───────── FAQ 데이터 ───────── */
const faqs = [
  {
    question: "HEPA 필터와 ULPA 필터는 어떤 차이가 있나요?",
    answer:
      "HEPA 필터는 0.3μm 입자를 99.97% 이상 포집하며 수술실·중환자실 등 일반적인 병원 클린룸에 적용됩니다. ULPA 필터는 0.12μm 입자를 99.9995% 이상 포집해 더 높은 청정도가 요구되는 무균 환경에 사용됩니다. 두 필터 모두 정기적인 상태 확인과 교체가 필수입니다.",
  },
  {
    question: "FFU(Fan Filter Unit)와 BFU(Blower Filter Unit)의 차이는 무엇인가요?",
    answer:
      "FFU는 팬과 HEPA 필터가 일체화된 유닛으로, 클린룸 천장에 설치되어 청정 공기를 직접 공급합니다. BFU(BAS Filter Unit)는 공조기에서 공급되는 공기를 천장 필터 유닛을 통해 재분배하는 방식입니다. 시공 공간의 크기·형태·청정도 요건에 따라 적합한 방식을 선택합니다.",
  },
  {
    question: "차압 관리가 왜 중요한가요?",
    answer:
      "병원 클린룸에서 차압은 오염 공기의 역류를 막는 핵심 기제입니다. 수술실(양압)은 외부 오염이 내부로 유입되지 않도록, 음압격리실은 내부 오염이 외부로 나가지 않도록 차압을 유지합니다. 차압계 수치가 기준 범위를 벗어나면 필터 막힘, 댐퍼 이상, 공조기 풍량 변화 등이 원인일 수 있어 즉각 점검이 필요합니다.",
  },
  {
    question: "필터 교체 주기는 어떻게 결정하나요?",
    answer:
      "필터 교체 주기는 차압 상승 수치, 사용 빈도, 공간의 오염 부하에 따라 달라집니다. 단순 달력 기준보다는 실제 차압 모니터링 결과를 기반으로 교체 시점을 판단하는 것이 정확합니다. 정기 점검 계약을 통해 현장 데이터를 축적하면 최적의 교체 주기를 설정할 수 있습니다.",
  },
];

/* ───────── JSON-LD 스키마 ───────── */
const schemas = [
  serviceSchema({
    slug: "hvac-filter-maintenance",
    name: "병원 클린룸 공조설비·필터 유지관리",
    description:
      "병원 클린룸 공조설비(FFU·BFU), HEPA·ULPA 필터 교체, 차압 관리, 정기 유지보수 전문 서비스.",
    serviceType: "병원 클린룸 공조설비",
  }),
  breadcrumbSchema([
    { name: "홈", path: "/" },
    { name: "서비스", path: "/services" },
    {
      name: "병원 클린룸 공조설비·필터 유지관리",
      path: "/services/hvac-filter-maintenance",
    },
  ]),
  faqSchema("services/hvac-filter-maintenance", faqs),
];

/* ───────── Section 1: Page Hero ───────── */
function PageHero() {
  return (
    <section className="relative bg-primary-dark py-28 md:py-40">
      <div className="absolute inset-0">
        <Image
          src="/images/kenc-maintenance-filter-change.webp"
          alt="병원 클린룸 공조설비 필터 교체 현장"
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
            HVAC &amp; FILTER MAINTENANCE
          </p>
          <h1 className="text-[42px] md:text-[56px] font-bold leading-[1.24] md:leading-[1.34] tracking-[-0.04em] text-white mb-5 md:mb-7">
            병원 클린룸 공조설비·필터 유지관리
          </h1>
          <p className="text-base md:text-lg leading-[1.7] tracking-[-0.02em] text-neutral-300 max-w-2xl">
            FFU·BFU, HEPA·ULPA 필터, 차압 관리까지 — 클린룸 청정도와 에너지 효율을 함께 지킵니다.
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
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <ScrollReveal>
            <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
              ABOUT THIS SERVICE
            </p>
            <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-6 md:mb-8">
              클린룸 성능은 공조설비가 좌우합니다
            </h2>
            <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600 mb-5">
              병원 클린룸의 공기 청정도는 초기 시공 품질만으로 유지되지 않습니다.
              FFU·BFU 공조 유닛이 정상 풍량을 공급하고, HEPA·ULPA 필터가 설계
              포집 효율을 유지해야 하며, 차압이 규정 범위 안에서 안정적으로 관리될 때
              클린룸은 비로소 제 기능을 합니다.
            </p>
            <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600">
              코리아이앤씨는 직접 시공한 현장뿐 아니라 기존 클린룸의 공조설비 점검,
              필터 교체, 차압계 교정, 공조기 보수까지 전 범위의 유지관리 서비스를
              제공합니다. 현장 데이터를 축적해 최적의 점검 주기를 제안드립니다.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/kenc-isolation-air-handler.webp"
                alt="음압격리실 공조기 유닛 점검"
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

/* ───────── Section 3: 적용 공간 ───────── */
const applicationSpaces = [
  {
    title: "수술실(OR)",
    description:
      "수술실은 외부 오염을 차단하는 양압 환경이 필수입니다. FFU 혹은 BFU를 통한 일방향(층류) 기류 공급으로 오염 입자를 신속히 배출하며, HEPA 필터 포집 효율과 차압 수치를 정기적으로 검증합니다.",
    image: "/images/kenc-validation-pressure-meter.webp",
    imageAlt: "수술실 차압 측정 검증",
  },
  {
    title: "음압격리실",
    description:
      "음압격리실은 내부 오염 공기가 외부로 누출되지 않도록 음압을 유지합니다. 배기 풍량과 공급 풍량의 균형, 인터락 도어 작동 시 차압 변화를 모니터링하여 격리 기능이 상시 유지되도록 관리합니다.",
    image: "/images/bcr-airquality.webp",
    imageAlt: "격리실 공기질 청정도 측정",
  },
  {
    title: "중환자실(ICU)·무균병동",
    description:
      "환자 면역 상태가 취약한 공간일수록 공기 중 부유 미립자 농도 관리가 중요합니다. 필터 교체 이력과 파티클 카운터 측정 기록을 체계적으로 관리해 감염 리스크를 최소화합니다.",
    image: "/images/bcr-particle.webp",
    imageAlt: "클린룸 파티클(입자) 측정",
  },
];

function ApplicationSection() {
  return (
    <section className="py-[80px] md:py-[140px] bg-neutral-50">
      <Container>
        <ScrollReveal>
          <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
            APPLICATION SPACE
          </p>
          <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-6 md:mb-8">
            적용 공간별 관리 포인트
          </h2>
          <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600 max-w-3xl mb-12 md:mb-16">
            병원 내 공간마다 요구되는 청정도 조건과 공조 방식이 다릅니다.
            용도에 맞는 맞춤형 유지관리 계획을 수립합니다.
          </p>
        </ScrollReveal>

        <div className="space-y-10 md:space-y-16">
          {applicationSpaces.map((space, index) => (
            <ScrollReveal key={space.title} delay={index * 0.1}>
              <div
                className={`grid md:grid-cols-2 gap-8 md:gap-14 items-center ${
                  index % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={space.image}
                      alt={space.imageAlt}
                      fill
                      sizes="(max-width: 1080px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <h3 className="text-xl md:text-[28px] font-bold tracking-[-0.03em] text-neutral-900 mb-4">
                    {space.title}
                  </h3>
                  <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600">
                    {space.description}
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

/* ───────── Section 4: 시공·관리 범위 ───────── */
const serviceScopes = [
  {
    label: "공조 유닛",
    items: [
      "FFU(Fan Filter Unit) 팬·필터 점검 및 교체",
      "BFU(Blower Filter Unit) 풍량·소음 점검",
      "공조기(AHU) 코일, 벨트, 드레인 팬 청소·보수",
      "배기팬(EF) 작동 상태 및 풍량 확인",
    ],
    icon: (
      <svg
        className="w-7 h-7 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
      </svg>
    ),
  },
  {
    label: "필터 관리",
    items: [
      "HEPA / ULPA 필터 포집 효율 확인",
      "전치 필터(Pre-filter) 청소 및 교체",
      "차압 상승 기반 필터 교체 시점 판단",
      "교체 이력 문서화 및 관리대장 작성",
    ],
    icon: (
      <svg
        className="w-7 h-7 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
        />
      </svg>
    ),
  },
  {
    label: "차압 관리",
    items: [
      "실별 차압계 수치 확인 및 교정",
      "도어 인터락 연동 차압 변화 점검",
      "댐퍼 개도 조정으로 풍량 균형 조절",
      "차압 이상 시 원인 진단 및 조치",
    ],
    icon: (
      <svg
        className="w-7 h-7 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
        />
      </svg>
    ),
  },
  {
    label: "측정·검증",
    items: [
      "파티클 카운터를 이용한 부유 입자 측정",
      "소음·진동 측정으로 이상 설비 조기 탐지",
      "풍속·풍량 밸런싱 재조정",
      "측정 결과 보고서 제공",
    ],
    icon: (
      <svg
        className="w-7 h-7 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
        />
      </svg>
    ),
  },
];

function ServiceScopeSection() {
  return (
    <section className="py-[80px] md:py-[140px]">
      <Container>
        <ScrollReveal>
          <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
            SERVICE SCOPE
          </p>
          <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-6 md:mb-8">
            유지관리 서비스 범위
          </h2>
          <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600 max-w-3xl mb-12 md:mb-16">
            공조 유닛부터 필터, 차압, 측정 검증까지 클린룸 성능 유지에 필요한
            전 과정을 책임집니다.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {serviceScopes.map((scope) => (
            <StaggerItem key={scope.label}>
              <div className="bg-neutral-50 p-8 md:p-10 h-full">
                <div className="mb-5">{scope.icon}</div>
                <h3 className="text-lg md:text-xl font-bold tracking-[-0.03em] text-neutral-900 mb-4">
                  {scope.label}
                </h3>
                <ul className="space-y-2">
                  {scope.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600"
                    >
                      <span className="mt-2 block w-1.5 h-1.5 bg-accent shrink-0" />
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

/* ───────── Section 5: 핵심 품질·검증 포인트 ───────── */
function QualitySection() {
  return (
    <section className="py-[80px] md:py-[140px] bg-neutral-50">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <ScrollReveal delay={0.1}>
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/bcr-airquality.webp"
                alt="병원 클린룸 공기질 청정도 확인"
                fill
                sizes="(max-width: 1080px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
              QUALITY &amp; VERIFICATION
            </p>
            <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-6">
              데이터 기반 품질 검증
            </h2>
            <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600 mb-5">
              클린룸 성능은 &ldquo;대충 괜찮아 보인다&rdquo;로 판단할 수 없습니다.
              파티클 카운터, 청음기, 마노미터 등 측정 장비를 이용해 실제 수치를
              기록하고, 그 데이터를 근거로 점검 결과 보고서를 발행합니다.
            </p>
            <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600 mb-8">
              이력이 쌓일수록 이상 징후를 조기에 탐지할 수 있고,
              필터 교체·설비 보수 시점을 과학적으로 결정할 수 있습니다.
              병원 내부 감염 관리 부서에 제출 가능한 형태로 문서를 제공합니다.
            </p>
            <ul className="space-y-3">
              {[
                "파티클 카운터 부유 입자 농도 측정",
                "마노미터·차압계 수치 기록 및 적정 범위 비교",
                "풍속·풍량 밸런싱 측정",
                "소음·진동 측정으로 설비 이상 조기 감지",
                "점검 결과 보고서 발행",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600"
                >
                  <span className="mt-2 block w-1.5 h-1.5 bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
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

        <dl className="space-y-6">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <div className="border border-neutral-200 bg-white p-8 md:p-10">
                <dt className="text-lg md:text-xl font-bold tracking-[-0.03em] text-neutral-900 mb-4">
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

/* ───────── Page Export ───────── */
export default function HvacFilterMaintenancePage() {
  return (
    <main>
      <PageJsonLd schemas={schemas} />
      <PageHero />
      <IntroSection />
      <ApplicationSection />
      <ServiceScopeSection />
      <QualitySection />
      <FaqSection />
      <EstimateCTA
        heading="공조설비·필터 유지관리 상담"
        description="현장 방문 점검부터 정기 계약까지 클린룸 유지관리 전 범위를 지원합니다. 먼저 전화로 현황을 알려주세요."
      />
      <SeoRelatedLinks
        title="관련 페이지"
        links={[
          {
            href: "/services/negative-pressure-room",
            title: "음압격리실 시공",
            description: "음압 유지를 위한 공조 설계",
          },
          {
            href: "/portfolio/cleanroom-validation-maintenance-review",
            title: "클린룸 유지보수 사례",
            description: "차압·필터·공조 점검 사례",
          },
          {
            href: "/services/process",
            title: "클린룸 시공순서",
            description: "검증·측정·인수 절차",
          },
        ]}
      />
    </main>
  );
}
