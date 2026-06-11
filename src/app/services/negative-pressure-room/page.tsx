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

/* ───────── Section 1: Page Hero ───────── */
function PageHero() {
  return (
    <section className="relative bg-primary-dark py-28 md:py-40">
      <div className="absolute inset-0">
        <Image
          src="/images/kenc-isolation-room-bed.webp"
          alt="음압격리실 시공 완성 사례"
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
            NEGATIVE PRESSURE ROOM
          </p>
          <h1 className="text-[42px] md:text-[56px] font-bold leading-[1.24] md:leading-[1.34] tracking-[-0.04em] text-white mb-5 md:mb-7">
            음압격리실 시공
          </h1>
          <p className="text-base md:text-lg leading-[1.7] tracking-[-0.02em] text-neutral-300 max-w-2xl">
            전실 포함 음압격리병실 설계·시공. 차압 모니터링, HEPA 배기, 인터락
            자동문 통합 구성으로 감염병 확산을 원천 차단합니다.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

/* ───────── Section 2: Intro ───────── */
function IntroSection() {
  return (
    <section className="py-[80px] md:py-[140px] bg-white">
      <Container>
        <ScrollReveal>
          <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
            ISOLATION SOLUTION
          </p>
          <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-6 md:mb-8">
            음압격리실, 설치 기준부터 운영까지
          </h2>
          <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600 max-w-3xl mb-6">
            감염병 확산을 차단하는 음압격리병실은 단순한 차압 설정을 넘어
            전실(前室) 구성, 공조 배기 경로, 차압계·인터락 연동, 폐수 처리까지
            하나의 시스템으로 설계되어야 합니다.
          </p>
          <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600 max-w-3xl">
            코리아이앤씨는 수술실·중환자실 BCR 클린룸 시공과 함께 음압격리병실
            설치 기준에 부합하는 격리실을 설계 단계부터 검증까지 일괄 구축합니다.
            음압 유지, HEPA 배기 필터, 차압 모니터링 패널, 너스콜·사용중표시등
            통합 배선을 포함한 완성형 격리 환경을 제공합니다.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

/* ───────── Section 3: 적용 공간 ───────── */
const applicationSpaces = [
  {
    title: "음압격리병실",
    description:
      "결핵·다제내성균·신종 감염병 환자를 위한 1인 음압격리병실. 전실을 통한 2중 차단 구조로 병동 내 교차 감염을 방지합니다.",
    image: "/images/kenc-isolation-room-bed.webp",
    alt: "음압격리병실 내부 — 전실 구조와 음압 유지 환경",
  },
  {
    title: "격리 복도 및 전실",
    description:
      "격리구역 진입 동선을 명확히 분리하는 전실·복도 설계. 자동문 인터락으로 동시 개방을 차단하여 음압 누출을 방지합니다.",
    image: "/images/kenc-isolation-corridor.webp",
    alt: "음압격리실 격리 복도 및 전실 시공",
  },
  {
    title: "출입 통제 패널",
    description:
      "차압계, 사용중표시등, 너스콜, 자동문 제어를 통합한 출입 통제 패널. 실시간 차압 수치와 경보 기능을 제공합니다.",
    image: "/images/kenc-isolation-entry-controls.webp",
    alt: "음압격리실 출입 통제 패널 및 차압 모니터링 장치",
  },
];

function ApplicationSection() {
  return (
    <section className="py-[80px] md:py-[140px] bg-neutral-50">
      <Container>
        <ScrollReveal>
          <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
            APPLICATION
          </p>
          <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-10 md:mb-14">
            적용 공간
          </h2>
        </ScrollReveal>

        <div className="space-y-10 md:space-y-16">
          {applicationSpaces.map((space, index) => (
            <ScrollReveal key={space.title} delay={index * 0.1}>
              <div
                className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-center`}
              >
                <div className="w-full md:w-1/2 aspect-[4/3] relative">
                  <Image
                    src={space.image}
                    alt={space.alt}
                    fill
                    sizes="(max-width: 1080px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2">
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

/* ───────── Section 4: 시공 범위 ───────── */
const scopeItems = [
  {
    title: "공조 및 배기 시스템",
    details: [
      "HEPA 필터 배기팬(TEF) 설치",
      "급기·배기 풍량 조정 및 차압 형성",
      "오염 공기 외부 직접 배기 경로 구성",
    ],
  },
  {
    title: "차압 관리 설비",
    details: [
      "디지털 차압계 및 차압 경보장치 설치",
      "음압 유지 범위 설정 및 검증",
      "전실·격리실 간 차압 단계 구성",
    ],
  },
  {
    title: "자동문 및 인터락",
    details: [
      "슬라이딩 자동문 또는 여닫이 기밀문 설치",
      "전실·격리실 문 동시 개방 방지 인터락 연동",
      "비상 해제 기능 포함",
    ],
  },
  {
    title: "마감 및 폐수 처리",
    details: [
      "실링재 기밀 처리 및 벽체·천장 패널 설치",
      "격리실 전용 폐수 탱크 및 배관 구성",
      "의료 가스 배관 포함 시공",
    ],
  },
  {
    title: "너스콜 및 표시등",
    details: [
      "격리실 내부 너스콜 시스템 설치",
      "복도 사용중표시등 및 격리표시 연동",
      "간호사 스테이션 연계 배선",
    ],
  },
  {
    title: "검증 및 인수",
    details: [
      "차압·환기횟수·기류방향 측정",
      "자동문 인터락 기능 시험",
      "고객 입회 검수 및 운영 교육",
    ],
  },
];

function ScopeSection() {
  return (
    <section className="py-[80px] md:py-[140px] bg-white">
      <Container>
        <ScrollReveal>
          <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
            SCOPE OF WORK
          </p>
          <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-6 md:mb-8">
            음압격리실 시공 범위
          </h2>
          <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600 max-w-3xl mb-12 md:mb-16">
            구조체 공사부터 공조·배기·차압·전기 배선까지 전 공정을 일괄 진행하여
            인터페이스 문제 없이 완성도 높은 격리 환경을 구축합니다.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {scopeItems.map((item) => (
            <StaggerItem key={item.title}>
              <div className="bg-neutral-50 p-7 md:p-8 h-full">
                <h3 className="text-lg md:text-xl font-bold tracking-[-0.03em] text-neutral-900 mb-4">
                  {item.title}
                </h3>
                <ul className="space-y-2">
                  {item.details.map((detail, i) => (
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
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

/* ───────── Section 5: 핵심 품질·공조 설비 이미지 ───────── */
function AirSystemSection() {
  return (
    <section className="py-[80px] md:py-[140px] bg-neutral-50">
      <Container>
        <ScrollReveal>
          <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
            AIR HANDLING SYSTEM
          </p>
          <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-6 md:mb-8">
            음압 유지의 핵심 — 공조 설비
          </h2>
          <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600 max-w-3xl mb-10 md:mb-14">
            음압격리병실의 음압은 배기량이 급기량을 일정 수준 초과할 때 형성됩니다.
            공조 핸들러(AHU), 배기팬, HEPA 필터 배기 유닛의 풍량 밸런스를 정확하게
            설계하고, 시공 후 측정값으로 검증합니다. 폐수 탱크·배관 역시 격리실
            전용으로 구성하여 오염원의 외부 유출을 차단합니다.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <ScrollReveal delay={0.1}>
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/kenc-isolation-air-handler.webp"
                alt="음압격리실 공조 핸들러(AHU) 설치 현장"
                fill
                sizes="(max-width: 1080px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-sm tracking-[-0.02em] text-neutral-500">
              공조 핸들러 설치 — 급기·배기 풍량 조정으로 음압 형성
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/kenc-isolation-wastewater-tanks.webp"
                alt="음압격리실 전용 폐수 탱크 설치 현장"
                fill
                sizes="(max-width: 1080px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-sm tracking-[-0.02em] text-neutral-500">
              격리실 전용 폐수 탱크 — 오염원 외부 유출 차단
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

/* ───────── Section 6: FAQ ───────── */
const faqs = [
  {
    question: "음압격리실 시공 시 차압은 어느 정도로 유지해야 하나요?",
    answer:
      "음압격리병실은 일반적으로 인접 공간 대비 음압(부압)을 유지하도록 설계합니다. 구체적인 차압 수치는 병원 내규 및 감염관리 지침, 시설 규모에 따라 달라지므로 설계 단계에서 감염관리팀과 협의하여 목표값을 확정합니다. 코리아이앤씨는 시공 완료 후 차압 측정·검증 과정을 통해 설계값 달성 여부를 확인합니다.",
  },
  {
    question: "전실이 반드시 필요한가요?",
    answer:
      "전실(Buffer Room)은 격리실 문 개폐 시 음압이 일시 해제되는 것을 방지하는 2중 차단 공간입니다. 결핵·공기전파 감염병 격리에는 전실 구성을 권고하는 감염관리 지침이 적용되는 경우가 많습니다. 공간 제약이 있는 경우 인터락 자동문만으로 구성하는 방식도 검토할 수 있으므로, 현장 실측 후 최적안을 제안합니다.",
  },
  {
    question: "기존 일반 병실을 음압격리실로 개조할 수 있나요?",
    answer:
      "가능합니다. 다만 기존 공조 덕트 경로, 배기 외부 관통 위치, 차압계 배선, 방화구획 등 현장 조건을 면밀히 확인해야 합니다. 코리아이앤씨는 현장 방문 실측 후 기존 시설을 최대한 활용하면서 감염관리 기준을 충족하는 시공 방안을 제안합니다.",
  },
  {
    question: "시공 기간은 얼마나 걸리나요?",
    answer:
      "1인실 기준 격리실 단독 시공은 통상 2~4주 내외이며, 전실·공조 배기 덕트·폐수 설비를 포함한 복합 공사는 현장 조건에 따라 기간이 달라집니다. 병원 운영 일정에 맞추어 공사 구간을 분리하거나 야간 작업을 병행하는 등 유연한 일정 계획을 지원합니다.",
  },
];

function FaqSection() {
  return (
    <section className="py-[80px] md:py-[140px] bg-white">
      <Container>
        <ScrollReveal>
          <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
            FAQ
          </p>
          <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-10 md:mb-14">
            자주 묻는 질문
          </h2>
        </ScrollReveal>

        <dl className="space-y-0 divide-y divide-neutral-200">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <div className="py-7 md:py-8">
                <dt className="text-base md:text-lg font-bold tracking-[-0.03em] text-neutral-900 mb-3">
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

/* ───────── Related Links ───────── */
const relatedLinks = [
  {
    href: "/services/hvac-filter-maintenance",
    title: "공조·필터 유지관리",
    description: "음압 유지의 핵심인 공조설비와 차압 관리",
  },
  {
    href: "/services/process",
    title: "클린룸 시공순서",
    description: "격리실 구축 공정 단계",
  },
  {
    href: "/portfolio/negative-pressure-room-construction-review",
    title: "음압격리실 시공 사례",
    description: "음압격리병실 설치 사례",
  },
];

/* ───────── JSON-LD ───────── */
const serviceDesc =
  "감염병 확산을 차단하는 음압격리병실 설계·시공. 전실 포함, 차압 모니터링, HEPA 배기, 인터락 자동문 통합 구성.";

const jsonLdSchemas = [
  serviceSchema({
    slug: "negative-pressure-room",
    name: "음압격리실 시공",
    description: serviceDesc,
    serviceType: "음압격리실 시공",
  }),
  breadcrumbSchema([
    { name: "홈", path: "/" },
    { name: "서비스", path: "/services" },
    { name: "음압격리실 시공", path: "/services/negative-pressure-room" },
  ]),
  faqSchema("services/negative-pressure-room", faqs),
];

/* ───────── Page Export ───────── */
export default function NegativePressureRoomPage() {
  return (
    <main>
      <PageJsonLd schemas={jsonLdSchemas} />
      <PageHero />
      <IntroSection />
      <ApplicationSection />
      <ScopeSection />
      <AirSystemSection />
      <FaqSection />
      <EstimateCTA
        heading="음압격리실 시공 상담"
        description="현장 실측 기반으로 전실 구성·공조 배기·차압 검증까지 일괄 견적을 제공합니다."
      />
      <SeoRelatedLinks title="관련 페이지" links={relatedLinks} />
    </main>
  );
}
