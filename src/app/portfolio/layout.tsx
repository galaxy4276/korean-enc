import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "시공사례",
  description:
    "코리아이앤씨의 병원 클린룸 시공 실적. 대학병원 수술실, 격리실, 중환자실 Before/After 시공 사례를 확인하세요.",
  openGraph: {
    title: "시공사례 | 코리아이앤씨",
    description:
      "병원 클린룸 시공 실적. 수술실, 격리실, 중환자실 Before/After 사례.",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
