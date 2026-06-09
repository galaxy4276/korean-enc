import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "수술실 클린룸 시공사례",
  description:
    "코리아이앤씨의 병원 클린룸 시공사례. 수술실 클린룸, 음압격리실, 중환자실, 유지보수 현장 자료와 공정 결과를 확인하세요.",
  keywords: [
    "수술실 클린룸 시공사례",
    "병원 클린룸 시공사례",
    "음압격리실 시공사례",
    "중환자실 시공사례",
    "BCR 클린룸 사례",
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "수술실 클린룸 시공사례 | 코리아이앤씨",
    description:
      "수술실 클린룸, 음압격리실, 중환자실, 유지보수 현장 자료.",
    url: "/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
