import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import PageJsonLd from "@/components/PageJsonLd";
import EstimateCTA from "@/components/EstimateCTA";
import SeoRelatedLinks from "@/components/SeoRelatedLinks";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/structuredData";
import { getCaseStudy, caseStudySlugs } from "@/lib/caseStudies";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

// 모든 사례 페이지에서 동일한 관련 링크.
const relatedLinks = [
  {
    href: "/services",
    title: "서비스 안내",
    description:
      "수술실·격리실·중환자실 BCR 클린룸 시공과 공조 설비, 유지보수 서비스 전체를 확인하세요.",
  },
  {
    href: "/portfolio",
    title: "시공사례 전체 보기",
    description:
      "다양한 병원 클린룸 시공 사례와 현장 사진을 카테고리별로 확인할 수 있습니다.",
  },
  {
    href: "/contact",
    title: "무료 상담 신청",
    description: "시공 범위와 예산에 대한 궁금증을 전문가와 직접 상담하세요.",
  },
];

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const breadcrumbs = breadcrumbSchema([
    { name: "홈", path: "/" },
    { name: "시공사례", path: "/portfolio" },
    { name: study.title, path: `/portfolio/${slug}` },
  ]);

  const article = articleSchema({
    slug,
    headline: study.h1,
    description: study.metaDescription,
    images: study.gallery,
    section: study.category,
  });

  const faq = faqSchema(`portfolio/${slug}`, study.faqs);

  return (
    <main>
      <PageJsonLd schemas={[article, breadcrumbs, faq]} />

      {/* ── Hero ── */}
      <section className="relative bg-primary-dark pt-[120px] pb-[80px] md:pt-[200px] md:pb-[120px]">
        <div className="absolute inset-0">
          <Image
            src={study.coverImage}
            alt={study.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-primary-dark/75" />
        <Container className="relative z-10">
          <ScrollReveal>
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs md:text-sm tracking-[-0.01em] text-neutral-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    홈
                  </Link>
                </li>
                <li aria-hidden="true" className="text-neutral-600">
                  /
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-white transition-colors">
                    시공사례
                  </Link>
                </li>
                <li aria-hidden="true" className="text-neutral-600">
                  /
                </li>
                <li className="text-neutral-300">{study.title}</li>
              </ol>
            </nav>

            <p className="text-accent text-sm md:text-base font-bold tracking-[-0.02em] mb-4">
              {study.category.toUpperCase()}
            </p>
            <h1 className="text-[36px] md:text-[52px] font-bold tracking-[-0.04em] leading-[1.24] md:leading-[1.3] text-white max-w-3xl">
              {study.h1}
            </h1>
            <p className="mt-6 text-base md:text-lg text-neutral-300 tracking-[-0.02em] leading-[1.7] max-w-2xl">
              {study.summary}
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── Body Sections ── */}
      <section className="py-[80px] md:py-[140px] bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            {study.sections.map((section, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="mb-12 md:mb-16">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-1 h-8 bg-accent flex-shrink-0 mt-1" />
                    <h2 className="text-xl md:text-[28px] font-bold tracking-[-0.03em] leading-[1.3] text-neutral-900">
                      {section.heading}
                    </h2>
                  </div>
                  <p className="text-sm md:text-base leading-[1.85] tracking-[-0.02em] text-neutral-600 pl-5">
                    {section.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Gallery ── */}
      <section className="py-[80px] md:py-[140px] bg-neutral-50">
        <Container>
          <ScrollReveal>
            <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
              GALLERY
            </p>
            <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-10 md:mb-14">
              시공 현장 사진
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {study.gallery.map((src, i) => (
              <StaggerItem key={i} y={20}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={src}
                    alt={`${study.title} 시공 현장 ${i + 1}`}
                    fill
                    sizes="(min-width: 1080px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ── FAQ ── */}
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

          <dl className="max-w-3xl mx-auto divide-y divide-neutral-200">
            {study.faqs.map((faqItem, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <div className="py-8 md:py-10">
                  <dt className="text-base md:text-lg font-bold tracking-[-0.03em] text-neutral-900 mb-4">
                    {faqItem.question}
                  </dt>
                  <dd className="text-sm md:text-base leading-[1.8] tracking-[-0.02em] text-neutral-600">
                    {faqItem.answer}
                  </dd>
                </div>
              </ScrollReveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* ── CTA ── */}
      <EstimateCTA
        heading="비슷한 시공을 계획 중이신가요?"
        description="현장 실측 기반으로 정확한 견적과 공정 계획을 안내해 드립니다."
      />

      {/* ── Related Links ── */}
      <SeoRelatedLinks title="관련 서비스 및 사례" links={relatedLinks} />
    </main>
  );
}
