import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "수술실 클린룸 시공 | 무균 수술실 BCR 공사 전문 — 코리아이앤씨",
  description:
    "수술실 클린룸(BCR) 설계·시공 전문. 양압 유지, HEPA 천장 급기, 차압 관리, 의료가스 배관, 내장 판넬공사까지 수술 부위 감염(SSI) 예방을 위한 무균 수술실을 구현합니다.",
  keywords: [
    "수술실 클린룸",
    "수술실 크린룸",
    "무균 수술실",
    "수술실 공사",
    "수술실 내장 판넬공사",
    "병원 수술실 시공",
    "BCR 수술실",
    "수술실 양압",
    "수술실 HEPA",
    "수술실 차압 관리",
  ],
  alternates: {
    canonical: "/services/surgery-cleanroom",
  },
  openGraph: {
    title: "수술실 클린룸 시공 | 코리아이앤씨",
    description:
      "양압 유지, HEPA 천장 급기, 차압 관리, 의료가스 배관 통합 — BCR 무균 수술실 전문 시공.",
    url: "/services/surgery-cleanroom",
  },
};

export default function SurgeryCleanroomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
