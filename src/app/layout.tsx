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
  title: {
    default: "코리아이앤씨 | 병원 클린룸(BCR) 전문 시공",
    template: "%s | 코리아이앤씨",
  },
  description:
    "수술실 시공 20년, 현장이 다르면 결과가 다릅니다. BCR 등급 병원 클린룸 전문 설계·시공 — 수술실, 중환자실, 격리실. 설계부터 유지보수까지 책임 시공.",
  keywords: [
    "병원 클린룸 시공",
    "수술실 시공 업체",
    "BCR 클린룸",
    "병원 수술실 공사",
    "수술실 시공",
    "클린룸 설계",
    "병원 리모델링",
    "격리실 시공",
    "중환자실 시공",
    "의료시설 시공",
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
      "수술실 시공 20년, 현장이 다르면 결과가 다릅니다. BCR 등급 전문 — 설계부터 유지보수까지 책임 시공.",
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
      "수술실 시공 20년, 현장이 다르면 결과가 다릅니다. BCR 등급 전문 — 설계부터 유지보수까지 책임 시공.",
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
