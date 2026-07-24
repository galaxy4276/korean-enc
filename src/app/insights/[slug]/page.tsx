import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import EstimateCTA from "@/components/EstimateCTA";
import PageJsonLd from "@/components/PageJsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import SeoRelatedLinks from "@/components/SeoRelatedLinks";
import { getInsight, insightSlugs } from "@/lib/insights";
import { articleSchema, breadcrumbSchema } from "@/lib/structuredData";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return insightSlugs.map((slug) => ({ slug }));
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) notFound();

  const path = `/insights/${insight.slug}`;
  const article = articleSchema({
    slug: insight.slug,
    path,
    headline: insight.h1,
    description: insight.description,
    images: [insight.heroImage],
    section: insight.category,
    datePublished: insight.publishedAt,
    dateModified: insight.publishedAt,
  });
  const breadcrumbs = breadcrumbSchema([
    { name: "홈", path: "/" },
    { name: "인사이트", path: "/insights" },
    { name: insight.title, path },
  ]);

  return (
    <>
      <PageJsonLd schemas={[article, breadcrumbs]} />

      <article>
        <section className="relative bg-primary-dark pt-[132px] pb-[72px] md:pt-[190px] md:pb-[110px]">
          <Container className="relative z-10">
            <ScrollReveal>
              <nav aria-label="breadcrumb" className="mb-6 text-sm tracking-[-0.02em] text-neutral-400">
                <Link href="/" className="hover:text-white">홈</Link>
                <span className="mx-2 text-neutral-600">/</span>
                <Link href="/insights" className="hover:text-white">인사이트</Link>
              </nav>
              <p className="mb-4 text-sm font-bold tracking-[-0.02em] text-accent">{insight.category}</p>
              <h1 className="max-w-4xl text-[36px] font-bold leading-[1.26] tracking-[-0.04em] text-white md:text-[56px]">
                {insight.h1}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-[1.8] tracking-[-0.02em] text-neutral-300 md:text-lg">
                {insight.description}
              </p>
              <p className="mt-8 text-sm tracking-[-0.02em] text-neutral-400">2026. 07. 24.</p>
            </ScrollReveal>
          </Container>
        </section>

        <section className="bg-white py-[64px] md:py-[100px]">
          <Container>
            <div className="mx-auto max-w-3xl">
              <ScrollReveal>
                <figure className="mb-12 md:mb-16">
                  <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
                    <Image src={insight.heroImage} alt={insight.heroAlt} fill priority sizes="(max-width: 1080px) 100vw, 960px" className="object-cover" />
                  </div>
                  <figcaption className="mt-3 text-xs leading-[1.7] tracking-[-0.01em] text-neutral-500">
                    {insight.heroCaption}
                  </figcaption>
                </figure>
              </ScrollReveal>

              <ScrollReveal>
                <p className="mb-12 text-lg leading-[1.9] tracking-[-0.025em] text-neutral-800 md:mb-16 md:text-xl">
                  {insight.intro}
                </p>
              </ScrollReveal>

              {insight.sections.map((section, index) => (
                <ScrollReveal key={section.heading} delay={index * 0.04}>
                  <section className="mb-12 md:mb-16">
                    <div className="mb-5 flex items-start gap-4">
                      <span className="mt-1 h-7 w-1 shrink-0 bg-accent" />
                      <h2 className="text-2xl font-bold leading-[1.35] tracking-[-0.04em] text-neutral-900 md:text-[30px]">
                        {section.heading}
                      </h2>
                    </div>
                    <div className="space-y-5 pl-5 text-base leading-[1.9] tracking-[-0.02em] text-neutral-600 md:text-lg">
                      {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                    {section.bullets && (
                      <ul className="mt-6 space-y-3 border-l border-neutral-200 py-1 pl-5 text-sm leading-[1.7] tracking-[-0.02em] text-neutral-600 md:ml-5 md:text-base">
                        {section.bullets.map((bullet) => <li key={bullet}>· {bullet}</li>)}
                      </ul>
                    )}
                  </section>
                </ScrollReveal>
              ))}

              <ScrollReveal>
                <section className="border-t border-neutral-200 pt-10 md:pt-12">
                  <p className="mb-4 text-sm font-bold tracking-[-0.02em] text-primary">참고 자료</p>
                  <ul className="space-y-4">
                    {insight.sourceLinks.map((source) => (
                      <li key={source.href} className="text-sm leading-[1.7] tracking-[-0.02em] text-neutral-600 md:text-base">
                        <a href={source.href} target="_blank" rel="noreferrer" className="font-bold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary">
                          {source.label}
                        </a>
                        <span className="ml-2">{source.note}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </ScrollReveal>
            </div>
          </Container>
        </section>
      </article>

      <EstimateCTA heading="수술실 공사를 계획 중이신가요?" description="도면과 운영 조건을 바탕으로 필요한 공사 범위를 함께 검토해 드립니다." />
      <SeoRelatedLinks title="함께 보면 좋은 안내" links={insight.relatedLinks} />
    </>
  );
}
