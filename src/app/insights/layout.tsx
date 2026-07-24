import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "병원 클린룸 시공 인사이트",
  description:
    "수술실·음압격리실·중환자실 등 병원 클린룸 시공을 준비할 때 확인할 공정, 설비, 운영 체크리스트를 안내합니다.",
  alternates: { canonical: "/insights" },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
