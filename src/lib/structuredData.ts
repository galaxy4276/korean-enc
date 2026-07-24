export const SITE_URL = "https://www.korea-enc.co.kr";

function toAbsoluteImageUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return SITE_URL + path;
}

interface ServiceSchemaInput {
  slug: string;
  name: string;
  description: string;
  serviceType: string;
}

export function serviceSchema({
  slug,
  name,
  description,
  serviceType,
}: ServiceSchemaInput): Record<string, unknown> {
  return {
    "@type": "Service",
    "@id": `${SITE_URL}/services/${slug}#service`,
    name,
    description,
    serviceType,
    areaServed: "대한민국",
    provider: {
      "@id": `${SITE_URL}/#business`,
    },
    url: `${SITE_URL}/services/${slug}`,
  };
}

interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbSchema(
  items: BreadcrumbItem[]
): Record<string, unknown> {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: SITE_URL + item.path,
    })),
  };
}

interface FaqItem {
  question: string;
  answer: string;
}

export function faqSchema(
  slug: string,
  faqs: FaqItem[]
): Record<string, unknown> {
  // slug "" → 루트(`/#faq`). 선행/후행 슬래시를 정규화해 `//#faq` 같은 잘못된 @id를 막는다.
  const path = slug.replace(/^\/+|\/+$/g, "");
  return {
    "@type": "FAQPage",
    "@id": path ? `${SITE_URL}/${path}#faq` : `${SITE_URL}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

interface ArticleSchemaInput {
  slug: string;
  headline: string;
  description: string;
  images: string[];
  section: string;
  path?: string;
  datePublished?: string;
  dateModified?: string;
}

export function articleSchema({
  slug,
  headline,
  description,
  images,
  section,
  path = `/portfolio/${slug}`,
  datePublished,
  dateModified,
}: ArticleSchemaInput): Record<string, unknown> {
  return {
    "@type": "Article",
    "@id": `${SITE_URL}${path}#article`,
    headline,
    description,
    image: images.map(toAbsoluteImageUrl),
    articleSection: section,
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    author: {
      "@id": `${SITE_URL}/#business`,
    },
    publisher: {
      "@id": `${SITE_URL}/#business`,
    },
    mainEntityOfPage: `${SITE_URL}${path}`,
  };
}
