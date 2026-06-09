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

const faqs = [
  {
    question: "중환자실 클린룸 시공 기간은 얼마나 걸리나요?",
    answer:
      "현장 규모와 기존 설비 상태에 따라 다르지만, 일반적으로 병상 구역 청정화·공조 설치·위생 마감을 포함한 전체 공정은 수주에서 수개월이 소요됩니다. 현장 실측 후 공정표를 사전에 제공해 드립니다.",
  },
  {
    question: "기존 중환자실을 클린룸으로 전환할 수 있나요?",
    answer:
      "가능합니다. 기존 구조물을 최대한 유지하면서 FFU(팬 필터 유닛)·HEPA 필터 교체, 차압 관리 시스템 추가, 위생 마감 보강 등 리노베이션 방식으로 청정 기준을 충족시킬 수 있습니다. 운영 중 공사가 필요한 경우 분리 시공 방안도 검토합니다.",
  },
  {
    question: "무균병동과 감염증병실은 공조 구성이 다른가요?",
    answer:
      "네, 방향이 다릅니다. 무균병동(무균실)은 면역저하 환자를 외부 오염으로부터 보호하기 위해 양압 공조를 구성하고, 감염증병실·음압격리실은 병원체 확산 방지를 위해 음압 공조로 설계합니다. 코리아이앤씨는 두 방식 모두 시공 경험을 보유하고 있습니다.",
  },
  {
    question: "간호 스테이션 동선은 어떻게 반영되나요?",
    answer:
      "청정 구역과 오염 구역의 경계, 오염물 처리 경로, 의료진 이동 동선을 사전에 설계에 반영합니다. 클린존과 더티존 분리, 전실(에어락) 위치, 오염물 배출 경로 등을 병원 운영 방식에 맞춰 협의 후 확정합니다.",
  },
];

const relatedLinks = [
  {
    href: "/services/surgery-cleanroom",
    title: "수술실 클린룸 시공",
    description: "인접 무균 구역 통합 시공",
  },
  {
    href: "/services/hvac-filter-maintenance",
    title: "공조·필터 유지관리",
    description: "청정 병동 공기질 관리",
  },
  {
    href: "/portfolio/icu-clean-zone-review",
    title: "중환자실 클린룸 시공사례",
    description: "무균병동 청정 구역 구축 사례",
  },
];

const serviceDesc =
  "중환자실·무균병동·감염증병실 전문 클린룸 시공. 병상 구역 청정도, 간호 스테이션 동선, 음압·양압 공조, 위생 마감을 통합 시공합니다.";

const schemas = [
  serviceSchema({
    slug: "icu-cleanroom",
    name: "중환자실 클린룸 시공",
    description: serviceDesc,
    serviceType: "중환자실 시공",
  }),
  breadcrumbSchema([
    { name: "홈", path: "/" },
    { name: "서비스", path: "/services" },
    { name: "중환자실 클린룸 시공", path: "/services/icu-cleanroom" },
  ]),
  faqSchema("services/icu-cleanroom", faqs),
];

export default function IcuCleanroomPage() {
  return (
    <>
      <PageJsonLd schemas={schemas} />

      {/* Hero */}
      <section className="relative bg-primary-dark py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/kenc-icu-open-ward.webp"
            alt="중환자실 클린룸 오픈 병동 전경"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-dark/75" />
        </div>
        <Container className="relative z-10">
          <ScrollReveal>
            <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-accent mb-4 md:mb-6 uppercase">
              ICU Cleanroom
            </p>
            <h1 className="text-[42px] md:text-[56px] font-bold leading-[1.24] md:leading-[1.34] tracking-[-0.04em] text-white mb-6">
              중환자실 클린룸 시공
            </h1>
            <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-300 max-w-xl">
              면역저하 환자를 보호하는 병상 청정 구역부터 간호 스테이션 동선
              설계, 천장 공조 통합, 위생 마감까지 — 코리아이앤씨가 중환자실
              환경을 체계적으로 구축합니다.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-[80px] md:py-[140px] bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <ScrollReveal>
              <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6 uppercase">
                Why ICU Cleanroom
              </p>
              <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-6 md:mb-8">
                중환자실·무균병동,
                <br />
                청정 환경이 치료 결과를 바꿉니다
              </h2>
              <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600">
                중환자실(ICU)·무균병동·감염증병실은 병원 내 감염 위험이 가장
                높은 공간입니다. 면역 기능이 저하된 환자는 미세한 공기 오염에도
                심각한 합병증이 발생할 수 있습니다. 코리아이앤씨는 병상 구역의
                청정도 확보, 간호 스테이션과 병상 구역 간 동선 분리, 오염물
                처리 경로 설계, 음압·양압 공조 통합까지 중환자실 환경에 필요한
                모든 공정을 하나의 팀이 책임시공합니다.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/kenc-icu-clean-zone.webp"
                  alt="중환자실 클린존 내부 청정 구역"
                  fill
                  sizes="(max-width: 1080px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 적용 공간 */}
      <section className="py-[80px] md:py-[140px] bg-neutral-50">
        <Container>
          <ScrollReveal>
            <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6 uppercase">
              Application
            </p>
            <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-12 md:mb-16">
              시공 적용 공간
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "중환자실 (ICU)",
                desc: "개방형·폐쇄형 병상 구역 청정화. 천장 FFU 배치, 전실 구성, 환자 이동 동선과 클린존 경계 설계.",
                img: "/images/kenc-icu-open-ward.webp",
                alt: "중환자실 오픈 병동 클린룸 전경",
              },
              {
                title: "무균병동 (Sterile Ward)",
                desc: "면역저하 환자 보호용 양압 구역. HEPA 필터 천장 공조, 양압 유지, 전실 에어락 구성.",
                img: "/images/kenc-icu-nurse-station.webp",
                alt: "중환자실 간호 스테이션 및 청정 병동 구역",
              },
              {
                title: "감염증병실·음압격리",
                desc: "병원체 확산 방지를 위한 음압 구역. 배기 HEPA 필터링, 차압 모니터링, 독립 공조 회로.",
                img: "/images/complete-blue-panorama.webp",
                alt: "음압 격리 병동 파노라마 전경",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-white border border-neutral-200">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={item.img}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1080px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-lg md:text-xl font-bold tracking-[-0.03em] text-neutral-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* 시공 범위 */}
      <section className="py-[80px] md:py-[140px] bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <ScrollReveal delay={0.1}>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/complete-blue-stainless-cabinet.webp"
                  alt="중환자실 스테인리스 캐비닛 위생 마감 시공"
                  fill
                  sizes="(max-width: 1080px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6 uppercase">
                Scope of Work
              </p>
              <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-6 md:mb-8">
                시공 범위
              </h2>
              <ul className="space-y-4">
                {[
                  "천장 공조 시스템: FFU·HEPA·ULPA 필터 유닛 설치 및 균일 기류 설계",
                  "차압 관리: 병상 구역·전실·복도 간 차압 설정 및 모니터링 장비 연동",
                  "위생 마감: 스테인리스 패널, 곡면 처리 벽·바닥 이음새, 항균 도료",
                  "전실(에어락) 구성: 클린존 진입 전 오염 차단 구역 설계 및 시공",
                  "동선 분리 설계: 의료진·환자·오염물 이동 경로 물리적 분리",
                  "철거·바닥 미장: 기존 설비 해체, 자기평탄 미장, 에폭시·비닐 마감",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600"
                  >
                    <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 핵심 품질·검증 */}
      <section className="py-[80px] md:py-[140px] bg-neutral-50">
        <Container>
          <ScrollReveal>
            <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6 uppercase">
              Quality & Validation
            </p>
            <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-12 md:mb-16">
              핵심 품질 및 검증 포인트
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <StaggerContainer className="space-y-6">
              {[
                {
                  label: "기류 균일성 확인",
                  desc: "FFU 배치 후 병상 구역 전 지점의 기류 속도·방향 측정. 데드존 없이 청정 공기가 균일하게 공급되는지 검증합니다.",
                },
                {
                  label: "차압 유지 확인",
                  desc: "구역 간 차압을 측정해 설계값 유지 여부를 확인합니다. 양압 구역은 외부 오염 유입 방지, 음압 구역은 병원체 외부 누출 방지를 목표로 합니다.",
                },
                {
                  label: "입자수·낙하균 측정",
                  desc: "입자 계수기로 부유 입자 농도를, 낙하균 측정으로 미생물 오염 수준을 확인합니다. 결과는 시공 완료 보고서로 제공됩니다.",
                },
                {
                  label: "위생 마감 밀폐 검사",
                  desc: "벽·바닥·천장 이음새, 배관 관통부 등 오염 침투 가능 부위를 전수 점검해 밀폐 처리합니다.",
                },
              ].map((item) => (
                <StaggerItem key={item.label}>
                  <div className="bg-white border border-neutral-200 p-6 md:p-8">
                    <div className="w-10 h-1 bg-accent mb-4" />
                    <h3 className="text-lg font-bold tracking-[-0.03em] text-neutral-900 mb-2">
                      {item.label}
                    </h3>
                    <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600">
                      {item.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <ScrollReveal delay={0.15}>
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/images/complete-blue-table-equipment.webp"
                  alt="중환자실 청정 구역 장비 및 마감 상세"
                  fill
                  sizes="(max-width: 1080px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 유지관리 */}
      <section className="py-[80px] md:py-[140px] bg-white">
        <Container>
          <ScrollReveal>
            <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6 uppercase">
              Maintenance
            </p>
            <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-8 md:mb-12">
              시공 후 유지관리
            </h2>
            <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600 max-w-2xl mb-12">
              클린룸은 초기 시공 품질만큼 유지관리가 중요합니다. 코리아이앤씨는
              시공 이후에도 정기 점검, 필터 교체, 차압·기류 재검증, 위생 마감
              보수 서비스를 제공해 청정 환경이 지속적으로 유지되도록 지원합니다.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "정기 필터 점검·교체",
                desc: "HEPA·ULPA 필터 차압 측정 후 교체 주기 결정. 교체 전후 입자수 측정으로 성능 확인.",
              },
              {
                title: "차압·기류 정기 검증",
                desc: "분기·연간 주기로 구역 간 차압 및 기류 균일성 재측정. 이상 감지 시 즉시 조정.",
              },
              {
                title: "위생 마감 보수",
                desc: "이음새 실링 균열, 패널 손상 등 위생 기준 저하 요인 선제적 보수. 오염 경로 차단 유지.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="border border-neutral-200 bg-white p-6 md:p-8">
                  <div className="w-10 h-1 bg-accent mb-6" />
                  <h3 className="text-lg font-bold tracking-[-0.03em] text-neutral-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-[80px] md:py-[140px] bg-neutral-50">
        <Container>
          <ScrollReveal>
            <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6 uppercase">
              FAQ
            </p>
            <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-12 md:mb-16">
              자주 묻는 질문
            </h2>
          </ScrollReveal>
          <dl className="space-y-6">
            {faqs.map((faq, index) => (
              <ScrollReveal key={faq.question} delay={index * 0.08}>
                <div className="bg-white border border-neutral-200 p-6 md:p-8">
                  <dt className="text-lg font-bold tracking-[-0.03em] text-neutral-900 mb-3">
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

      <EstimateCTA
        heading="중환자실·무균병동 시공 상담"
        description="현장 규모와 운영 방식에 맞는 청정 구역 설계 및 견적을 안내해 드립니다."
      />

      <SeoRelatedLinks title="관련 페이지" links={relatedLinks} />
    </>
  );
}
