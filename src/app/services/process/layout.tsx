import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "병원 클린룸 시공순서 6단계 | 코리아이앤씨",
  description:
    "현장 실측·상담부터 설계·견적, 철거·바닥, 클린룸 패널·공조 시공, 검증·인수, 유지보수AS까지 코리아이앤씨의 병원 클린룸 시공순서 6단계를 안내합니다.",
  keywords: [
    "병원 클린룸 시공순서",
    "수술실 공사 과정",
    "클린룸 공정",
    "클린룸 시공 절차",
    "철거 바닥공사",
    "클린룸 검증 측정",
    "BCR 클린룸 공정",
    "클린룸 시공 단계",
    "병원 클린룸 공사",
    "클린룸 패널 시공",
    "클린룸 공조 설비",
    "클린룸 차압 측정",
  ],
  alternates: {
    canonical: "/services/process",
  },
  openGraph: {
    title: "병원 클린룸 시공순서 6단계 | 코리아이앤씨",
    description:
      "현장 실측부터 유지보수까지, 코리아이앤씨의 병원 클린룸 시공순서 6단계 안내.",
    url: "/services/process",
  },
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
