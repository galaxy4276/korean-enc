# 코리아이앤씨 SEO 콘텐츠 시스템 전체 플랜

Date: 2026-06-09
Repo: `/Volumes/eungu/projects/korean_enc`
Branch: `master`
Status: DRAFT

## Goal

코리아이앤씨 사이트가 `병원 클린룸 시공`, `수술실 클린룸`, `음압격리실 시공`, `병원 클린룸 시공 비용`, `시공 후기` 계열 검색어에 노출되도록 정적 SEO 콘텐츠 시스템을 구축한다.

핵심 방향은 메타 키워드 나열이 아니라, 각 검색 의도별로 색인 가능한 독립 URL, 전문 본문, 실제 시공 이미지, 구조화 데이터, 내부 링크, 문의 CTA를 갖춘 페이지 네트워크를 만드는 것이다.

## Current Context

- Framework: Next.js 16 App Router, static export.
- Existing pages: `/`, `/about`, `/services`, `/portfolio`, `/contact`.
- Existing assets: `public/images/*.webp`, `docs/코리아이앤씨_에셋/*`, `src/lib/attachmentArchive.ts`.
- Existing SEO changes: root/page metadata, sitemap, robots, LocalBusiness JSON-LD, service/contact keyword metadata.
- Verification command: `npm run build`.
- Lint command: `npm run lint`.

## Conventions

- 병원 클린룸(BCR) 전문 시공 기업의 정적 마케팅 사이트.
- 디자인은 `DESIGN.md`와 `docs/style-guide.html` 기준을 따른다.
- 모바일 퍼스트: 360px / 1080px / 1440px.
- SEO는 메타태그, 구조화 데이터, 시맨틱 HTML, sitemap, 이미지 alt를 함께 관리한다.
- Button은 pill shape만 사용하고, 일반 카드/이미지는 둥근 모서리를 쓰지 않는다.
- 이미지 최적화는 WebP, Lazy Loading, LCP 2.5초 이내를 목표로 한다.

## Keyword System

### Keyword Groups

| Group | Main Intent | Target URL Strategy |
|---|---|---|
| Core | 병원 클린룸 시공, 병원 크린룸 시공, BCR 클린룸 시공 | `/services`, 세부 서비스 페이지 |
| Contractor | 병원 클린룸 시공업체, 수술실 시공 업체 | `/about`, `/contact`, 사례 페이지 내부 CTA |
| Cost | 병원 클린룸 시공 비용, 수술실 공사 견적 | `/services/cost`, `/contact` |
| Process | 병원 클린룸 시공순서, 수술실 공사 과정 | `/services/process` |
| Surgery | 수술실 클린룸, 수술실 크린룸, 무균 수술실 | `/services/surgery-cleanroom`, 후기 상세 |
| Negative Pressure | 음압격리실 시공, 음압격리병실 설치, 음압격리병실 기준 | `/services/negative-pressure-room`, 후기 상세 |
| ICU | 중환자실 시공, 무균병동, 감염증병실 | `/services/icu-cleanroom`, 후기 상세 |
| HVAC | 병원 클린룸 공조설비, FFU, HEPA 필터, ULPA 필터, 차압 관리 | `/services/hvac-filter-maintenance` |
| Reviews | 수술실 클린룸 시공 후기, 병원 클린룸 시공사례, BCR 클린룸 공사 후기 | `/portfolio/[slug]` |

### Data Model

Create `src/lib/seoKeywords.ts`.

```ts
export type SeoIntent =
  | "service"
  | "contractor"
  | "cost"
  | "process"
  | "case-study"
  | "technical";

export interface SeoKeyword {
  keyword: string;
  intent: SeoIntent;
  priority: 1 | 2 | 3;
  targetPath: string;
  related: string[];
  cta: "phone" | "estimate" | "portfolio" | "service";
}
```

## Page Architecture

### Service Landing Pages

Create these static pages:

- `/services/surgery-cleanroom`
- `/services/negative-pressure-room`
- `/services/icu-cleanroom`
- `/services/hvac-filter-maintenance`
- `/services/process`
- `/services/cost`

Each page should include:

- Page-specific metadata in `layout.tsx` or `generateMetadata`.
- H1 matching the primary query.
- Intro paragraph that answers the customer problem immediately.
- Sections: applicable spaces, construction scope, process, quality/inspection points, maintenance, related cases.
- Real images with descriptive alt text.
- Internal links to related pages.
- CTA section linking to `/contact`.
- JSON-LD: `Service`, `BreadcrumbList`, and optional `FAQPage`.

### Case Study / Review Pages

Create a case-study data source and static detail route:

- `src/lib/caseStudies.ts`
- `src/app/portfolio/[slug]/page.tsx`
- `src/app/portfolio/[slug]/layout.tsx` or `generateMetadata`

Recommended initial case studies:

1. `surgery-cleanroom-complete-review`
   - H1: `수술실 클린룸 시공 후기 | 병원 BCR 공사 사례`
   - Keywords: `수술실 클린룸 시공 후기`, `수술실 크린룸`, `BCR 클린룸 공사 후기`
2. `negative-pressure-room-construction-review`
   - H1: `음압격리실 시공 후기 | 음압격리병실 설치 사례`
   - Keywords: `음압격리실 시공 후기`, `음압격리병실 설치`, `음압격리병실 기준`
3. `icu-clean-zone-review`
   - H1: `중환자실 클린룸 시공사례 | 무균병동 청정 구역 구축`
   - Keywords: `중환자실 시공`, `무균병동`, `감염증병실`
4. `cleanroom-validation-maintenance-review`
   - H1: `병원 클린룸 유지보수 사례 | 차압·필터·공조 점검`
   - Keywords: `병원 클린룸 공조설비`, `FFU`, `HEPA 필터`, `ULPA 필터`, `차압 관리`

Each review page should use this body structure:

1. Project summary
2. Before condition
3. Construction scope
4. Process timeline
5. Technical details
6. Result and maintenance points
7. Image gallery
8. FAQ
9. Estimate CTA

## Structured Data Plan

Keep root `LocalBusiness` and add page-level schemas:

- Service pages: `Service`, `BreadcrumbList`, optional `FAQPage`.
- Case study pages: `Article`, `ImageObject`, `BreadcrumbList`, `Service`.
- Contact page: `ContactPage` and `LocalBusiness` reference.

Use stable `@id` values:

- Business: `https://koreanenc.vercel.app/#business`
- Website: `https://koreanenc.vercel.app/#website`
- Service page: `https://koreanenc.vercel.app/services/<slug>#service`
- Case page: `https://koreanenc.vercel.app/portfolio/<slug>#article`

## Internal Link System

Add a shared related-link component:

- `src/components/SeoRelatedLinks.tsx`

Usage:

- Service pages link to relevant case studies.
- Case studies link back to service pages and `/contact`.
- `/services` links to all service landing pages.
- `/portfolio` links to all case-study detail pages.
- `/contact` references cost/process/service pages.

## Sitemap and Robots

Update `src/app/sitemap.ts` to include:

- All service landing pages.
- All case study detail pages.

Priority suggestion:

- `/services/surgery-cleanroom`: 0.9
- `/services/negative-pressure-room`: 0.9
- `/services/cost`: 0.85
- `/portfolio/[slug]`: 0.8

## Tracking and Search Console

Next session should confirm whether Google Search Console is available.

Minimum setup:

- Verify property for production domain.
- Submit `/sitemap.xml`.
- Request indexing for core pages.
- Track impressions and clicks by query.

Recommended weekly fields:

```ts
export interface SearchPerformanceSnapshot {
  date: string;
  path: string;
  query: string;
  impressions: number;
  clicks: number;
  averagePosition: number;
}
```

## Session Breakdown

### Session 1: Keyword and URL Map

Goal: 확정 키워드 원장과 URL 매핑을 만든다.

Files:

- `src/lib/seoKeywords.ts`
- `docs/seo-content-system-plan.md`

Tasks:

- Create keyword data model.
- Assign each keyword to one target URL.
- Mark duplicates and synonyms.
- Verify no two new pages target the exact same primary query.

### Session 2: Service Landing Page Content

Goal: 6개 서비스 랜딩 페이지의 상세 기획과 초안을 만든다.

Files:

- `src/app/services/surgery-cleanroom/page.tsx`
- `src/app/services/negative-pressure-room/page.tsx`
- `src/app/services/icu-cleanroom/page.tsx`
- `src/app/services/hvac-filter-maintenance/page.tsx`
- `src/app/services/process/page.tsx`
- `src/app/services/cost/page.tsx`

Tasks:

- Write page-specific H1, intro, H2 sections, FAQ, CTA.
- Select images and alt text.
- Add metadata and canonical URLs.
- Verify with `npm run build`.

### Session 3: 시공 후기 / 사례 게시글

Goal: 전문 후기 게시글 시스템을 만든다.

Files:

- `src/lib/caseStudies.ts`
- `src/app/portfolio/[slug]/page.tsx`
- `src/app/portfolio/[slug]/layout.tsx` or route metadata
- `src/app/portfolio/page.tsx`

Tasks:

- Define case study data model.
- Write first 4 case studies.
- Add article pages with image gallery and CTA.
- Link portfolio listing cards to detail pages.
- Verify static export includes all detail pages.

### Session 4: Structured Data and Sitemap

Goal: 모든 SEO 페이지가 검색엔진에 명확하게 해석되도록 한다.

Files:

- `src/components/JsonLd.tsx`
- `src/lib/structuredData.ts`
- `src/app/sitemap.ts`
- each service/case route metadata file

Tasks:

- Add page-level JSON-LD helpers.
- Add BreadcrumbList.
- Add Service and Article schemas.
- Expand sitemap.
- Validate build output with `rg`.

### Session 5: Internal Link and CTA Optimization

Goal: 검색 유입이 문의로 이어지게 한다.

Files:

- `src/components/SeoRelatedLinks.tsx`
- `src/components/EstimateCTA.tsx`
- service pages
- case pages
- `src/app/contact/page.tsx`

Tasks:

- Add related links to each page.
- Add consistent estimate CTA.
- Ensure mobile CTA is not duplicated awkwardly.
- Verify links are crawlable `<a href>`.

### Session 6: Search Console Operating Loop

Goal: 배포 후 검색 노출을 운영 지표로 관리한다.

Files:

- `docs/seo-search-console-operating-loop.md`
- optional `marketing/search-performance/*.md`

Tasks:

- Define weekly query review process.
- Record target queries and observed queries.
- Decide title/H1/content updates based on impressions.
- Add index request checklist.

## Implementation Checklist

- [ ] Create keyword data source.
- [ ] Create 6 service landing pages.
- [ ] Create case study data source.
- [ ] Create 4 initial case study pages.
- [ ] Add page-level metadata.
- [ ] Add page-level structured data.
- [ ] Add related internal links.
- [ ] Add sitemap entries.
- [ ] Verify static export.
- [ ] Submit sitemap in Google Search Console.
- [ ] Start weekly query review.

## Verification Commands

```bash
npm run build
npm run lint
rg -n "수술실 클린룸 시공 후기|음압격리병실 설치|병원 클린룸 시공 비용|FFU|ULPA" out src
```

Expected:

- `npm run build` passes.
- New service and case routes appear in build output.
- `out/` contains all target keywords in actual generated HTML.
- Sitemap includes every new URL.

## Rollback Plan

If a page causes build failure:

1. Revert only the failing route/page file.
2. Keep `seoKeywords.ts` and `caseStudies.ts` if they still compile.
3. Re-run `npm run build`.
4. Do not revert unrelated dirty worktree changes.

## Next Session Prompt

Use this prompt to continue:

> 코리아이앤씨 SEO 콘텐츠 시스템 플랜을 이어서 진행하자. `/Volumes/eungu/projects/korean_enc/docs/seo-content-system-plan.md`를 읽고, 이번 세션에서는 `[Session N 이름]`만 구체화/구현해줘. 기존 dirty worktree는 건드리지 말고 관련 파일만 수정해줘.

