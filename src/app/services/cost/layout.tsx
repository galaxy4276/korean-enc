import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "병원 클린룸 시공 비용 안내 | 수술실·음압격리실 견적 기준 — 코리아이앤씨",
  description:
    "병원 클린룸 시공 비용은 면적·청정등급·공조 사양·마감재·철거 범위에 따라 달라집니다. 코리아이앤씨의 투명한 현장 실측 견적 절차와 비용 영향 요인을 안내합니다.",
  keywords: [
    "병원 클린룸 시공 비용",
    "수술실 공사 견적",
    "클린룸 시공 가격",
    "음압격리실 비용",
    "클린룸 견적 기준",
    "시공비 상담",
    "수술실 클린룸 비용",
    "BCR 클린룸 견적",
    "클린룸 공사 비용",
    "병원 공사 견적",
  ],
  alternates: {
    canonical: "/services/cost",
  },
  openGraph: {
    title: "병원 클린룸 시공 비용 안내 | 코리아이앤씨",
    description:
      "병원 클린룸 시공 비용 영향 요인, 견적 산정 방식, 상담 절차를 투명하게 안내합니다. 현장 실측 기반 정확한 견적을 받아보세요.",
    url: "/services/cost",
  },
};

export default function CostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
