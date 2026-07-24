export interface InsightSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface InsightArticle {
  slug: string;
  category: string;
  title: string;
  h1: string;
  description: string;
  publishedAt: string;
  heroImage: string;
  heroAlt: string;
  heroCaption: string;
  intro: string;
  sections: InsightSection[];
  sourceLinks: { label: string; href: string; note: string }[];
  relatedLinks: { href: string; title: string; description: string }[];
}

const insights: InsightArticle[] = [
  {
    slug: "surgery-room-construction-checklist",
    category: "수술실 클린룸 가이드",
    title: "수술실 클린룸 공사 전, 병원이 먼저 정리할 7가지",
    h1: "수술실 클린룸 공사 전, 병원이 먼저 정리할 7가지",
    description:
      "수술실 클린룸 공사를 계획할 때 병원이 먼저 확인하면 좋은 공간 용도, 공조, 마감, 설비, 운영 중 공사, 견적, 인수 점검 항목을 정리했습니다.",
    publishedAt: "2026-07-24",
    heroImage: "/images/insight-surgery-cleanroom-concept.png",
    heroAlt: "수술실 클린룸 공간을 표현한 콘셉트 이미지",
    heroCaption: "콘텐츠 이해를 돕기 위해 제작한 수술실 클린룸 콘셉트 이미지입니다. 실제 시공 현장 사진이 아닙니다.",
    intro:
      "수술실 공사는 벽과 천장을 새로 마감하는 일로 끝나지 않습니다. 공조, 의료가스, 전기, 배수, 환자와 의료진의 동선까지 함께 움직이기 때문에 공사 전에 무엇을 정리했는지가 이후 일정과 견적의 정확도를 좌우합니다.",
    sections: [
      {
        heading: "1. 어떤 수술을 위한 공간인지부터 정리합니다",
        paragraphs: [
          "수술실은 진료 과목과 수술 방식에 따라 필요한 장비와 공간 구성이 달라집니다. 수술대 위치만 정하는 것이 아니라 의료진 이동, 장비 반입, 소독 물품 보관, 회복 공간과의 연결을 함께 살펴야 합니다.",
          "새로 만드는 공간인지, 기존 수술실을 보수하는 것인지도 중요합니다. 기존 공간이라면 천장 위 덕트와 배관, 전기 용량, 바닥 상태를 먼저 확인해야 공사 중 철거나 재시공 범위를 줄일 수 있습니다.",
        ],
        bullets: [
          "진료 과목과 주요 장비 목록",
          "수술대·장비·출입문 위치가 표시된 평면도",
          "신설인지 기존 시설 보수인지",
        ],
      },
      {
        heading: "2. 공조는 에어컨 설치와 다른 문제입니다",
        paragraphs: [
          "수술실 공조는 온도 조절만을 뜻하지 않습니다. 필요한 공기를 공급하고, 실내 공기 흐름과 필터 상태를 관리할 수 있는지까지 확인해야 합니다.",
          "의료법 시행규칙의 수술실 시설규격은 수술실마다 청정한 공기를 공급할 수 있는 공기정화설비를 갖추도록 정하고 있습니다. 견적을 볼 때도 천장 마감이나 벽체만 보지 말고, 기존 공조기 사용 가능 여부와 급·배기 경로, 필터 교체와 점검 방법까지 함께 검토하는 편이 좋습니다.",
        ],
      },
      {
        heading: "3. 벽·천장·바닥은 청소와 유지관리를 기준으로 봅니다",
        paragraphs: [
          "수술실은 보기 좋은 마감보다 관리하기 쉬운 마감이 중요합니다. 이음부나 틈이 많으면 청소와 유지관리가 어려워지고, 설비 보수 때마다 마감이 훼손될 가능성도 커집니다.",
          "법령에도 수술실 내부 벽면은 불침투성 재질로 하도록 되어 있습니다. 벽체와 천장, 코너, 설비 관통부를 어떻게 마감할지까지 초기에 정리하면 공사 후 보완 범위를 줄이는 데 도움이 됩니다.",
        ],
      },
      {
        heading: "4. 의료가스·전기·배수는 초반에 함께 검토합니다",
        paragraphs: [
          "수술실에는 조명, 의료가스, 콘센트, 배수 등 여러 설비가 연결됩니다. 각각을 따로 결정하면 공사 중 천장이나 벽체를 다시 열어야 하는 일이 생길 수 있습니다.",
          "사용 장비, 수술대, 모니터와 보조 장비 위치를 먼저 공유하면 전기와 의료가스 위치를 검토하기가 수월합니다. 병원 측이 가진 기존 설비 도면이 있다면 상담 전에 함께 준비하는 것이 좋습니다.",
        ],
      },
      {
        heading: "5. 공사 중에도 진료를 계속하는지 확인합니다",
        paragraphs: [
          "병원 리모델링에서 가장 먼저 확인할 질문 중 하나입니다. 공사 기간에도 인접 공간을 운영한다면 공사구역 분리, 분진 관리, 자재 반입 동선, 작업 시간대를 별도로 계획해야 합니다.",
          "의료시설 공사 감염관리 지침은 공사 전에 감염관리 위험평가를 하고, 환자 진료구역으로 분진이 유입되지 않도록 차단과 공조 상태를 관리할 것을 권고합니다. 실제 현장에서는 병원 감염관리 부서와 시설팀, 시공팀이 착공 전부터 협의하는 이유입니다.",
        ],
      },
      {
        heading: "6. 공사 범위와 병원 측 준비 범위를 나눕니다",
        paragraphs: [
          "견적이 달라지는 이유는 면적만이 아닙니다. 철거 범위, 기존 설비의 재사용 여부, 야간 공사 여부, 폐기물 반출 조건, 장비 이전, 병원 내부 협의 일정이 모두 영향을 줍니다.",
          "무엇을 새로 시공하고 무엇을 유지할지, 병원에서 준비할 일은 무엇인지 구분해 두면 비교 견적도 훨씬 정확해집니다.",
        ],
      },
      {
        heading: "7. 공사 완료일보다 확인 절차를 함께 잡습니다",
        paragraphs: [
          "공사가 끝난 날이 바로 운영 시작일은 아닐 수 있습니다. 설비가 도면대로 연결됐는지, 공조와 필터, 조명, 전기, 의료가스 등이 계획대로 작동하는지 확인하는 시간이 필요합니다.",
          "병원마다 운영 기준과 필요한 점검 범위가 다를 수 있으므로, 계약 전부터 완료 검토 항목과 인수 기준을 합의해 두는 것이 좋습니다.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "의료법 시행규칙 별표 4",
        href: "https://law.go.kr/LSW/flDownload.do?bylClsCd=110201&flSeq=159411805&gubun=",
        note: "수술실 시설규격과 공기정화설비·불침투성 벽면 관련 내용",
      },
      {
        label: "CDC 의료시설 공사·리모델링 감염관리 권고",
        href: "https://www.cdc.gov/infection-control/hcp/environmental-control/recommendations.html",
        note: "공사 전 위험평가, 공사구역 차단과 공조 관리 관련 참고 자료",
      },
    ],
    relatedLinks: [
      {
        href: "/services/surgery-cleanroom",
        title: "수술실 클린룸 시공 안내",
        description: "수술실 공간 구성과 시공 방향을 확인하세요.",
      },
      {
        href: "/services/cost",
        title: "병원 클린룸 견적 기준",
        description: "현장 실측 전 준비할 자료와 비용 영향 요인을 안내합니다.",
      },
      {
        href: "/contact",
        title: "현장 상담 신청",
        description: "도면과 운영 조건을 바탕으로 공사 방향을 상담해 드립니다.",
      },
    ],
  },
];

export const insightSlugs = insights.map((insight) => insight.slug);

export function getInsight(slug: string): InsightArticle | undefined {
  return insights.find((insight) => insight.slug === slug);
}

export function getInsights(): InsightArticle[] {
  return insights;
}
