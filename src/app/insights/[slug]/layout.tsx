import type { Metadata } from "next";
import { getInsight, insightSlugs } from "@/lib/insights";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return insightSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};

  return {
    title: insight.title,
    description: insight.description,
    alternates: { canonical: `/insights/${insight.slug}` },
    openGraph: {
      type: "article",
      title: insight.title,
      description: insight.description,
      url: `/insights/${insight.slug}`,
      publishedTime: insight.publishedAt,
      images: [{ url: insight.heroImage, alt: insight.heroAlt }],
    },
  };
}

export default function InsightDetailLayout({ children }: { children: React.ReactNode }) {
  return children;
}
