import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "음압격리실 시공 | 음압격리병실 설치 · 차압 모니터링 | 코리아이앤씨",
  description:
    "음압격리병실 설치 기준에 맞춘 전실 포함 음압격리실 설계·시공. 차압 모니터링, HEPA 배기, 인터락 자동문 통합 시공. 감염병 격리병실 구축 전문.",
  keywords: [
    "음압격리실 시공",
    "음압격리병실 설치",
    "음압격리병실 기준",
    "음압병실 공사",
    "전실 설치",
    "감염병 격리병실",
    "차압 모니터링",
    "음압병실 HEPA",
    "음압격리실 공조",
    "음압인터락",
  ],
  alternates: {
    canonical: "/services/negative-pressure-room",
  },
  openGraph: {
    title: "음압격리실 시공 | 코리아이앤씨",
    description:
      "음압격리병실 설치 기준에 맞춘 전실 포함 음압격리실 설계·시공. 차압 모니터링, HEPA 배기, 인터락 자동문 통합 시공. 감염병 격리병실 구축 전문.",
    url: "/services/negative-pressure-room",
  },
};

export default function NegativePressureRoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
