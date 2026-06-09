import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "병원 클린룸 시공 견적 문의",
  description:
    "병원 클린룸 시공업체 견적 문의. 수술실 클린룸, BCR 클린룸, 음압격리실 시공 비용과 시공순서를 전화 010-8115-0500 또는 온라인 상담으로 확인하세요.",
  keywords: [
    "병원 클린룸 견적",
    "병원 클린룸 시공업체",
    "병원 클린룸 시공 비용",
    "병원 클린룸 시공순서",
    "수술실 클린룸 견적",
    "수술실 공사 견적",
    "클린룸 시공 문의",
    "BCR 클린룸 상담",
    "음압격리실 공사 문의",
    "음압격리병실 설치 견적",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "병원 클린룸 시공 견적 문의 | 코리아이앤씨",
    description:
      "수술실 클린룸, BCR 클린룸, 음압격리실 시공 비용과 현장 실측 견적 상담. 전화 010-8115-0500.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
