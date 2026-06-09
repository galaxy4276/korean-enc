import type { Metadata } from "next";
import { getCaseStudy } from "@/lib/caseStudies";

interface Props {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {
      title: "페이지를 찾을 수 없습니다 | 코리아이앤씨",
    };
  }

  return {
    title: study.metaTitle,
    description: study.metaDescription,
    keywords: study.keywords,
    alternates: {
      canonical: `/portfolio/${slug}`,
    },
    openGraph: {
      title: `${study.metaTitle} | 코리아이앤씨`,
      description: study.metaDescription,
      url: `/portfolio/${slug}`,
    },
  };
}

// generateStaticParams는 page.tsx에 정의됨 (정적 export용 단일 소스).

export default function SlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
