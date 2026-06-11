import Image from "next/image";
import Container from "@/components/Container";
import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollReveal";
import ServiceTabs from "@/components/ServiceTabs";
import Link from "next/link";
import SeoRelatedLinks from "@/components/SeoRelatedLinks";

/* ───────── Section 1: Page Hero ───────── */
function PageHero() {
  return (
    <section className="relative bg-primary-dark py-28 md:py-40">
      <div className="absolute inset-0">
        <Image
          src="/images/complete-green-monitor.webp"
          alt=""
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
            SERVICES
          </p>
          <h1 className="text-[42px] md:text-[56px] font-bold leading-[1.24] md:leading-[1.34] tracking-[-0.04em] text-white mb-5 md:mb-7">
            서비스 안내
          </h1>
          <p className="text-base md:text-lg leading-[1.7] tracking-[-0.02em] text-neutral-300 max-w-2xl">
            BCR 클린룸 전문 설계 및 시공
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

/* ───────── Section 2: BCR 클린룸이란? ───────── */
const bcrCards = [
  {
    title: "생물학적 입자 제어",
    description:
      "세균, 바이러스 등 생체 입자를 HEPA 필터를 통해 효과적으로 제거하여 청정 환경을 조성합니다.",
    image: "/images/kenc-maintenance-filter-change.webp",
  },
  {
    title: "비생체 입자 제어",
    description:
      "먼지, 미립자 등 비생체 오염물질을 체계적으로 제어하여 청정 환경을 안정적으로 유지합니다.",
    image: "/images/kenc-surgery-complete-white.webp",
  },
  {
    title: "살균/멸균 환경",
    description:
      "UV 살균, 화학적 멸균 등 다양한 방법으로 무균 상태를 보장하여 감염 위험을 원천 차단합니다.",
    image: "/images/complete-blue-stainless-cabinet.webp",
  },
  {
    title: "공기 청정도 관리",
    description:
      "양압/음압 제어와 공기 순환 시스템 운영으로 실내 공기 청정도를 항시 최적 상태로 관리합니다.",
    image: "/images/kenc-isolation-air-handler.webp",
  },
];

function BcrSection() {
  return (
    <section className="py-[80px] md:py-[140px]">
      <Container>
        <ScrollReveal>
          <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
            BCR CLEAN ROOM
          </p>
          <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-6 md:mb-8">
            BCR 클린룸이란?
          </h2>
          <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600 max-w-3xl mb-12 md:mb-16">
            BCR(Bio Clean Room)은 생물학적 오염을 제어하는 특수 청정 공간입니다.
            세균, 곰팡이 같은 생물학적 입자와 먼지 같은 비생체 입자를 함께
            제어하고, 살균·멸균 운영이 가능한 의료 공간을 말합니다.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {bcrCards.map((card) => (
            <StaggerItem key={card.title}>
              <div className="bg-neutral-50 h-full">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(min-width: 1080px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="text-lg md:text-xl font-bold tracking-[-0.03em] text-neutral-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600">
                    {card.description}
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

/* ───────── Section 3: 시공 분야별 상세 (Tab UI) ───────── */
function ServiceDetailSection() {
  return (
    <section className="py-[80px] md:py-[140px] bg-white">
      <Container>
        <ScrollReveal>
          <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
            SPECIALIZED FIELDS
          </p>
          <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-10 md:mb-14">
            시공 분야별 상세
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <ServiceTabs />
        </ScrollReveal>
      </Container>
    </section>
  );
}

/* ───────── Section 4: 공정 프로세스 ───────── */
const processSteps = [
  {
    step: "01",
    title: "현장 실측 및 상담",
    details: ["현장 방문 및 환경 조사", "시공 범위 확인", "고객 요구사항 파악"],
  },
  {
    step: "02",
    title: "설계 및 견적",
    details: [
      "평면, 천장, 공조 설비 검토",
      "자재 선정 및 사양 확정",
      "투명한 견적서 제공",
    ],
  },
  {
    step: "03",
    title: "철거 및 바닥 공사",
    details: [
      "기존 시설 철거 및 정리",
      "폐기물 처리",
      "바닥 하도 및 셀프레벨링 작업",
    ],
  },
  {
    step: "04",
    title: "클린룸 시공",
    details: [
      "벽체 패널 설치",
      "천장 및 조명 시공",
      "공조 설비, 의료가스 배관, 출입통제 연동",
    ],
  },
  {
    step: "05",
    title: "검증 및 인수",
    details: [
      "파티클, 차압, 소음 측정",
      "자동문, 인터락, 차압계 기능 확인",
      "고객 입회 검수 완료",
    ],
  },
  {
    step: "06",
    title: "유지보수 및 AS",
    details: [
      "정기 점검 서비스",
      "필터 교체 및 소모품 관리",
      "긴급 대응 체계 운영",
    ],
  },
];

function ProcessSection() {
  return (
    <section className="py-[80px] md:py-[140px] bg-neutral-50">
      <Container>
        <ScrollReveal>
          <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
            PROCESS
          </p>
          <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-12 md:mb-20">
            공정 프로세스
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-neutral-300" />

          <div className="space-y-10 md:space-y-14">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.step} delay={index * 0.1}>
                <div className="relative flex gap-6 md:gap-10">
                  {/* Step number circle */}
                  <div className="relative z-10 shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary text-white flex items-center justify-center text-sm md:text-base font-bold">
                    {step.step}
                  </div>

                  {/* Content */}
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

/* ───────── Section 5: After-Service ───────── */
const afterServiceItems = [
  {
    title: "정기 점검",
    description: "차압, 소음, 공조 상태를 확인해 클린룸 운영 상태를 점검합니다.",
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
        />
      </svg>
    ),
  },
  {
    title: "필터 교체",
    description:
      "BFU, FFU, HEPA 필터와 팬 상태를 확인하고 필요한 부품을 교체합니다.",
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M21.015 4.356v4.992"
        />
      </svg>
    ),
  },
  {
    title: "설비 보수",
    description:
      "공조기, 배기팬, 폐수 설비 등 클린룸 운영 설비의 이상을 확인하고 보수합니다.",
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
        />
      </svg>
    ),
  },
  {
    title: "운영 상담",
    description:
      "수술실, 격리실, 중환자실의 운영 조건에 맞춰 유지관리 방향을 안내합니다.",
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
    ),
  },
];

function AfterServiceSection() {
  return (
    <section className="py-[80px] md:py-[140px]">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-20">
            <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
              AFTER SERVICE
            </p>
            <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-5 md:mb-7">
              시공 후에도 함께합니다
            </h2>
            <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600 max-w-2xl mx-auto">
              코리아이앤씨는 시공 완료 후에도 체계적인 유지보수 서비스를 통해
              클린룸의 최적 성능을 보장합니다.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-14 md:mb-20">
          {afterServiceItems.map((item) => (
            <StaggerItem key={item.title}>
              <div className="bg-neutral-50 p-7 md:p-8 h-full">
                <div className="mb-5">{item.icon}</div>
                <h3 className="text-lg md:text-xl font-bold tracking-[-0.03em] text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm leading-[1.7] tracking-[-0.02em] text-neutral-600">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-neutral-800 text-white px-10 py-4 rounded-[30px] text-base md:text-lg font-extrabold tracking-[-0.02em] hover:bg-white hover:text-neutral-800 transition-colors duration-150 border-2 border-neutral-800"
            >
              무료 상담 신청
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

/* ───────── Section: 서비스 상세 링크 ───────── */
function ServiceLinksSection() {
  return (
    <SeoRelatedLinks
      title="서비스 상세"
      links={[
        {
          href: "/services/surgery-cleanroom",
          title: "수술실 클린룸 시공",
          description: "무균 수술실 BCR 설계·시공",
        },
        {
          href: "/services/negative-pressure-room",
          title: "음압격리실 시공",
          description: "음압격리병실 설치 기준 반영",
        },
        {
          href: "/services/icu-cleanroom",
          title: "중환자실 클린룸 시공",
          description: "무균병동 청정 구역",
        },
        {
          href: "/services/hvac-filter-maintenance",
          title: "공조설비·필터 유지관리",
          description: "FFU·HEPA·ULPA·차압 관리",
        },
        {
          href: "/services/process",
          title: "클린룸 시공순서",
          description: "6단계 공정 안내",
        },
        {
          href: "/services/cost",
          title: "시공 비용 안내",
          description: "견적 기준과 상담 절차",
        },
      ]}
    />
  );
}

/* ───────── Page Export ───────── */
export default function ServicesPage() {
  return (
    <main>
      <PageHero />
      <BcrSection />
      <ServiceDetailSection />
      <ServiceLinksSection />
      <ProcessSection />
      <AfterServiceSection />
    </main>
  );
}
