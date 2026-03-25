import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "서비스 안내",
  description:
    "BCR 클린룸 전문 설계 및 시공. 수술실, 격리실, 중환자실, 무균실 — ISO Class 5~7 기준 충족. HEPA 필터, 양압/음압 시스템, 의료가스 배관.",
  openGraph: {
    title: "서비스 안내 | 코리아이앤씨",
    description:
      "BCR 클린룸 전문 설계·시공. 수술실, 격리실, 중환자실 — 설계부터 유지보수까지.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
