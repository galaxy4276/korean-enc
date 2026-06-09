import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BCR 클린룸 시공 서비스",
  description:
    "병원 BCR 클린룸 설계·시공 서비스. 수술실 클린룸, 음압격리실, 중환자실, 무균병동 공사와 공조설비, FFU, HEPA·ULPA 필터 유지관리.",
  keywords: [
    "BCR 클린룸 시공",
    "병원 클린룸 시공",
    "병원 클린룸 공조설비",
    "병원 크린룸 시공",
    "수술실 클린룸",
    "수술실 크린룸",
    "수술실 공사",
    "수술실 내장 판넬공사",
    "음압격리실 시공",
    "음압격리병실 설치",
    "음압격리병실 기준",
    "중환자실 시공",
    "무균병동",
    "감염증병실",
    "FFU",
    "ULPA 필터",
    "ISO Class 5",
    "ISO Class 8",
    "클린룸 유지보수",
    "병원 공조설비",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "BCR 클린룸 시공 서비스 | 코리아이앤씨",
    description:
      "수술실 클린룸, 음압격리실, 중환자실, 무균병동 공사와 공조설비 유지관리.",
    url: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
