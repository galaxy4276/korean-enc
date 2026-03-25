import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  title: "코리아이앤씨 | 병원 클린룸(BCR) 전문 시공",
  description:
    "20년 경험이 만드는 완벽한 수술실. 병원 클린룸(BCR) 전문 설계 및 시공 — 수술실, 중환자실, 격리실.",
  keywords: [
    "병원 클린룸 시공",
    "수술실 시공 업체",
    "BCR 클린룸",
    "병원 수술실 공사",
    "코리아이앤씨",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "코리아이앤씨 | 병원 클린룸(BCR) 전문 시공",
    description:
      "20년 경험이 만드는 완벽한 수술실. 병원 클린룸(BCR) 전문 설계 및 시공.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
