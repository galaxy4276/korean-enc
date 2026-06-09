import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://koreanenc.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "코리아이앤씨",
  authors: [{ name: "코리아이앤씨", url: SITE_URL }],
  creator: "코리아이앤씨",
  publisher: "코리아이앤씨",
  category: "병원 클린룸 시공",
  title: {
    default: "코리아이앤씨 | 병원 클린룸(BCR) 전문 시공",
    template: "%s | 코리아이앤씨",
  },
  description:
    "코리아이앤씨는 병원 클린룸(BCR) 전문 시공사입니다. 수술실 클린룸, 음압격리실, 중환자실, 의료시설 유지보수까지 현장 조건에 맞춰 설계·시공합니다.",
  keywords: [
    "클린룸 시공",
    "크린룸 시공",
    "병원 클린룸 시공",
    "병원 클린룸 시공업체",
    "병원 클린룸 시공 비용",
    "병원 클린룸 시공순서",
    "병원 클린룸 공조설비",
    "병원 크린룸",
    "병원 크린룸 시공",
    "병원 크린룸 수술실",
    "수술실 클린룸",
    "수술실클린룸",
    "수술실 크린룸",
    "수술실 시공 업체",
    "수술실 공사",
    "수술실 내장 판넬공사",
    "BCR 클린룸",
    "BCR 시공",
    "바이오 클린룸",
    "바이오 크린룸",
    "Bio Clean Room",
    "병원 수술실 공사",
    "수술실 시공",
    "무균 수술실",
    "클린룸 설계",
    "클린룸 설계 시공",
    "병원 리모델링",
    "격리실 시공",
    "음압격리실 시공",
    "음압격리병실 설치",
    "음압격리병실 기준",
    "중환자실 시공",
    "무균병동",
    "감염증병실",
    "의료시설 시공",
    "음압격리실",
    "병원 공조설비",
    "HEPA 필터",
    "ULPA 필터",
    "FFU",
    "차압 관리",
    "시설물 유지관리",
    "클린룸 유지보수",
    "병원 인테리어",
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
      "수술실 클린룸, 음압격리실, 중환자실까지 병원 BCR 클린룸을 설계·시공하고 유지관리합니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "코리아이앤씨",
    url: SITE_URL,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "코리아이앤씨 — 병원 클린룸 전문 시공",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "코리아이앤씨 | 병원 클린룸(BCR) 전문 시공",
    description:
      "수술실 클린룸, 음압격리실, 중환자실까지 병원 BCR 클린룸을 설계·시공하고 유지관리합니다.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <JsonLd />
      </head>
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
