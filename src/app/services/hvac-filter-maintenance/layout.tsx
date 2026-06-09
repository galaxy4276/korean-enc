import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "병원 클린룸 공조설비·필터 유지관리 | FFU·HEPA·차압 전문 | 코리아이앤씨",
  description:
    "병원 클린룸 공조설비(FFU·BFU), HEPA·ULPA 필터 교체, 차압 관리, 정기 유지보수 전문. 수술실·격리실·중환자실 청정도 유지와 에너지 효율을 함께 관리합니다.",
  keywords: [
    "병원 클린룸 공조설비",
    "FFU",
    "BFU",
    "HEPA 필터",
    "ULPA 필터",
    "차압 관리",
    "클린룸 유지보수",
    "필터 교체",
    "클린룸 공기청정",
    "클린룸 정기점검",
    "수술실 공조",
    "음압격리실 공조",
  ],
  alternates: {
    canonical: "/services/hvac-filter-maintenance",
  },
  openGraph: {
    title: "병원 클린룸 공조설비·필터 유지관리 | 코리아이앤씨",
    description:
      "FFU·BFU, HEPA·ULPA 필터 교체, 차압 관리, 정기 점검 등 병원 클린룸 공조설비 유지관리 전문 서비스.",
    url: "/services/hvac-filter-maintenance",
  },
};

export default function HvacFilterMaintenanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
