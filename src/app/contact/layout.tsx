import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의하기",
  description:
    "병원 클린룸 시공 무료 상담. 전화 010-8115-0500 또는 온라인 문의. 현장 실측 기반 정직한 견적, 추가 비용 없는 책임 시공.",
  openGraph: {
    title: "문의하기 | 코리아이앤씨",
    description:
      "병원 클린룸 시공 무료 상담. 전화 010-8115-0500. 정직한 견적, 책임 시공.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
