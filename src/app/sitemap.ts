import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/structuredData";
import { caseStudySlugs } from "@/lib/caseStudies";
import { insightSlugs } from "@/lib/insights";

const BASE_URL = SITE_URL;
const LAST_MODIFIED = new Date("2026-06-09");

export const dynamic = "force-static";

// 서비스 랜딩 우선순위. slug 추가 시 해당 라우트(src/app/services/<slug>)도 함께 생성할 것.
const serviceRoutes: { slug: string; priority: number }[] = [
  { slug: "surgery-cleanroom", priority: 0.9 },
  { slug: "negative-pressure-room", priority: 0.9 },
  { slug: "icu-cleanroom", priority: 0.85 },
  { slug: "hvac-filter-maintenance", priority: 0.8 },
  { slug: "process", priority: 0.8 },
  { slug: "cost", priority: 0.85 },
];

// 사례 게시글 URL은 caseStudies 데이터에서 파생 (단일 진실 출처).
const portfolioRoutes: string[] = caseStudySlugs;
const insightRoutes: string[] = insightSlugs;

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceEntries: MetadataRoute.Sitemap = serviceRoutes.map(
    ({ slug, priority }) => ({
      url: `${BASE_URL}/services/${slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority,
    })
  );

  const portfolioEntries: MetadataRoute.Sitemap = portfolioRoutes.map(
    (slug) => ({
      url: `${BASE_URL}/portfolio/${slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  const insightEntries: MetadataRoute.Sitemap = insightRoutes.map((slug) => ({
    url: `${BASE_URL}/insights/${slug}`,
    lastModified: new Date("2026-07-24"),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...serviceEntries,
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...portfolioEntries,
    {
      url: `${BASE_URL}/insights`,
      lastModified: new Date("2026-07-24"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...insightEntries,
    {
      url: `${BASE_URL}/contact`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
