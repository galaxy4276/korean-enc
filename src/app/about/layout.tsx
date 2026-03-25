import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회사소개",
  description:
    "코리아이앤씨는 20년 이상의 현장 경험을 바탕으로 병원 클린룸을 전문 설계·시공합니다. 정직한 견적, 끝까지 책임지는 시공.",
  openGraph: {
    title: "회사소개 | 코리아이앤씨",
    description:
      "20년 병원 클린룸 전문 시공사. 정직한 견적, 끝까지 책임지는 시공.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
