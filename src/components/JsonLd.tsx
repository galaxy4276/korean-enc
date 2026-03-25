export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "코리아이앤씨",
    description:
      "병원 클린룸(BCR) 전문 설계 및 시공. 수술실, 중환자실, 격리실. 20년 현장 경험.",
    url: "https://koreanenc.vercel.app",
    telephone: "+82-10-8115-0500",
    email: "koreaencgo@nate.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "정남면 보통리 78-1",
      addressLocality: "화성시",
      addressRegion: "경기도",
      postalCode: "",
      addressCountry: "KR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.1,
      longitude: 127.0,
    },
    founder: {
      "@type": "Person",
      name: "남기태",
      jobTitle: "대표이사",
    },
    foundingDate: "2003",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 10,
    },
    areaServed: {
      "@type": "Country",
      name: "대한민국",
    },
    serviceType: [
      "병원 클린룸 시공",
      "수술실 시공",
      "격리실 시공",
      "중환자실 시공",
      "BCR 클린룸 설계",
      "의료시설 유지보수",
    ],
    image: "https://koreanenc.vercel.app/og-image.png",
    logo: "https://koreanenc.vercel.app/logo-icon.png",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
