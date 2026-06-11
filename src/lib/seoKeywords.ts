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

export const seoKeywords: SeoKeyword[] = [
  // ── Core ──────────────────────────────────────────────────────────────────
  {
    keyword: "병원 클린룸 시공",
    intent: "service",
    priority: 1,
    targetPath: "/services",
    related: ["병원 크린룸 시공", "BCR 클린룸 시공", "의료 클린룸 설치"],
    cta: "estimate",
  },
  {
    keyword: "병원 크린룸 시공",
    intent: "service",
    priority: 2,
    targetPath: "/services",
    related: ["병원 클린룸 시공", "BCR 클린룸 시공"],
    cta: "estimate",
  },
  {
    keyword: "BCR 클린룸 시공",
    intent: "service",
    priority: 1,
    targetPath: "/services",
    related: ["병원 클린룸 시공", "병원 BCR 공사", "바이오 클린룸"],
    cta: "estimate",
  },

  // ── Contractor ────────────────────────────────────────────────────────────
  {
    keyword: "병원 클린룸 시공업체",
    intent: "contractor",
    priority: 1,
    targetPath: "/about",
    related: ["클린룸 전문 업체", "BCR 시공업체", "수술실 시공 전문"],
    cta: "phone",
  },
  {
    keyword: "수술실 시공 업체",
    intent: "contractor",
    priority: 1,
    targetPath: "/about",
    related: ["수술실 공사 업체", "병원 수술실 인테리어", "클린룸 시공업체"],
    cta: "phone",
  },

  // ── Cost ──────────────────────────────────────────────────────────────────
  {
    keyword: "병원 클린룸 시공 비용",
    intent: "cost",
    priority: 1,
    targetPath: "/services/cost",
    related: ["클린룸 공사 비용", "수술실 공사 비용", "클린룸 시공 단가"],
    cta: "estimate",
  },
  {
    keyword: "수술실 공사 견적",
    intent: "cost",
    priority: 1,
    targetPath: "/services/cost",
    related: ["수술실 공사 비용", "병원 클린룸 시공 비용", "수술실 리모델링 견적"],
    cta: "estimate",
  },

  // ── Process ───────────────────────────────────────────────────────────────
  {
    keyword: "병원 클린룸 시공순서",
    intent: "process",
    priority: 2,
    targetPath: "/services/process",
    related: ["클린룸 공사 절차", "클린룸 시공 과정", "수술실 공사 순서"],
    cta: "service",
  },
  {
    keyword: "수술실 공사 과정",
    intent: "process",
    priority: 2,
    targetPath: "/services/process",
    related: ["수술실 시공 절차", "병원 클린룸 시공순서", "수술실 공사 순서"],
    cta: "service",
  },

  // ── Surgery ───────────────────────────────────────────────────────────────
  {
    keyword: "수술실 클린룸",
    intent: "service",
    priority: 1,
    targetPath: "/services/surgery-cleanroom",
    related: ["수술실 크린룸", "무균 수술실", "수술실 청정 공간"],
    cta: "estimate",
  },
  {
    keyword: "수술실 크린룸",
    intent: "service",
    priority: 2,
    targetPath: "/services/surgery-cleanroom",
    related: ["수술실 클린룸", "무균 수술실", "수술실 클린룸 시공"],
    cta: "estimate",
  },
  {
    keyword: "무균 수술실",
    intent: "service",
    priority: 2,
    targetPath: "/services/surgery-cleanroom",
    related: ["수술실 클린룸", "무균 환경 시공", "수술실 공기 청정"],
    cta: "estimate",
  },

  // ── Negative Pressure Room ────────────────────────────────────────────────
  {
    keyword: "음압격리실 시공",
    intent: "service",
    priority: 1,
    targetPath: "/services/negative-pressure-room",
    related: ["음압병실 설치", "음압격리병실 기준", "음압 격리 공사"],
    cta: "estimate",
  },
  {
    keyword: "음압격리병실 설치",
    intent: "service",
    priority: 1,
    targetPath: "/services/negative-pressure-room",
    related: ["음압격리실 시공", "음압병실 설치 기준", "음압격리병실 기준"],
    cta: "estimate",
  },
  {
    keyword: "음압격리병실 기준",
    intent: "technical",
    priority: 2,
    targetPath: "/services/negative-pressure-room",
    related: ["음압격리실 시공", "음압병실 설치", "음압격리실 차압"],
    cta: "service",
  },

  // ── ICU ───────────────────────────────────────────────────────────────────
  {
    keyword: "중환자실 시공",
    intent: "service",
    priority: 1,
    targetPath: "/services/icu-cleanroom",
    related: ["ICU 클린룸", "중환자실 클린룸 시공", "중환자실 공사"],
    cta: "estimate",
  },
  {
    keyword: "무균병동",
    intent: "service",
    priority: 2,
    targetPath: "/services/icu-cleanroom",
    related: ["무균 병실", "중환자실 시공", "감염 차단 병실"],
    cta: "estimate",
  },
  {
    keyword: "감염증병실",
    intent: "service",
    priority: 2,
    targetPath: "/services/icu-cleanroom",
    related: ["감염 격리병실", "음압격리실 시공", "중환자실 시공"],
    cta: "estimate",
  },

  // ── HVAC / Filter / Maintenance ───────────────────────────────────────────
  {
    keyword: "병원 클린룸 공조설비",
    intent: "technical",
    priority: 2,
    targetPath: "/services/hvac-filter-maintenance",
    related: ["FFU 설치", "HEPA 필터 교체", "병원 공조 시스템"],
    cta: "service",
  },
  {
    keyword: "FFU",
    intent: "technical",
    priority: 3,
    targetPath: "/services/hvac-filter-maintenance",
    related: ["Fan Filter Unit", "HEPA 필터", "병원 클린룸 공조설비"],
    cta: "service",
  },
  {
    keyword: "HEPA 필터",
    intent: "technical",
    priority: 2,
    targetPath: "/services/hvac-filter-maintenance",
    related: ["ULPA 필터", "FFU", "병원 클린룸 공조설비", "클린룸 필터 교체"],
    cta: "service",
  },
  {
    keyword: "ULPA 필터",
    intent: "technical",
    priority: 3,
    targetPath: "/services/hvac-filter-maintenance",
    related: ["HEPA 필터", "FFU", "클린룸 공기 필터"],
    cta: "service",
  },
  {
    keyword: "차압 관리",
    intent: "technical",
    priority: 2,
    targetPath: "/services/hvac-filter-maintenance",
    related: ["음압격리실 차압", "클린룸 차압 측정", "병원 클린룸 공조설비"],
    cta: "service",
  },

  // ── Case Study ────────────────────────────────────────────────────────────
  {
    keyword: "수술실 클린룸 시공 사례",
    intent: "case-study",
    priority: 2,
    targetPath: "/portfolio",
    related: ["수술실 클린룸 사례", "병원 클린룸 시공사례", "수술실 공사 사례"],
    cta: "portfolio",
  },
  {
    keyword: "병원 클린룸 시공사례",
    intent: "case-study",
    priority: 1,
    targetPath: "/portfolio",
    related: ["BCR 클린룸 공사 사례", "수술실 클린룸 시공 사례", "클린룸 포트폴리오"],
    cta: "portfolio",
  },
  {
    keyword: "BCR 클린룸 공사 사례",
    intent: "case-study",
    priority: 2,
    targetPath: "/portfolio",
    related: ["병원 클린룸 시공사례", "BCR 시공 사례", "수술실 클린룸 시공 사례"],
    cta: "portfolio",
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

/** 특정 경로에 매핑된 키워드 목록 반환 */
export function keywordsByPath(path: string): SeoKeyword[] {
  return seoKeywords.filter((k) => k.targetPath === path);
}

/** 특정 경로의 최우선(priority 1 → 2 → 3) 대표 키워드 반환 */
export function primaryKeywordFor(path: string): SeoKeyword | undefined {
  const list = keywordsByPath(path);
  if (list.length === 0) return undefined;
  return list.slice().sort((a, b) => a.priority - b.priority)[0];
}
