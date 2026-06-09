import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "중환자실 클린룸 시공 | ICU 무균병동·감염증병실 청정 구역 구축 — 코리아이앤씨",
  description:
    "중환자실·무균병동·감염증병실 전문 클린룸 시공. 병상 구역 청정도 확보, 간호 스테이션 동선 설계, 음압·양압 공조 통합, 위생 마감까지 코리아이앤씨가 책임시공합니다.",
  keywords: [
    "중환자실 시공",
    "무균병동",
    "감염증병실",
    "ICU 클린룸",
    "중환자실 공사",
    "청정 병동",
    "간호 스테이션 동선",
    "중환자실 공조",
    "음압병실",
    "BCR 클린룸",
    "병원 클린룸",
    "코리아이앤씨",
  ],
  alternates: {
    canonical: "/services/icu-cleanroom",
  },
  openGraph: {
    title: "중환자실 클린룸 시공 | 코리아이앤씨",
    description:
      "중환자실·무균병동·감염증병실 전문 클린룸 시공. 병상 구역 청정도 확보, 간호 스테이션 동선 설계, 음압·양압 공조 통합, 위생 마감까지 코리아이앤씨가 책임시공합니다.",
    url: "/services/icu-cleanroom",
  },
};

export default function IcuCleanroomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
