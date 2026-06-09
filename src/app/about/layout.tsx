import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "병원 클린룸 시공 전문 회사소개",
  description:
    "코리아이앤씨는 병원 클린룸(BCR) 전문 시공사입니다. 수술실 클린룸, 중환자실, 음압격리실, 시설물 유지관리 공사를 수행합니다.",
  keywords: [
    "병원 클린룸 시공사",
    "BCR 클린룸 전문업체",
    "수술실 클린룸 업체",
    "코리아이앤씨",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "병원 클린룸 시공 전문 회사소개 | 코리아이앤씨",
    description:
      "수술실 클린룸, 중환자실, 음압격리실을 시공하는 BCR 병원 클린룸 전문 시공사.",
    url: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
