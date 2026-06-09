export default function JsonLd() {
  const siteUrl = "https://koreanenc.vercel.app";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "GeneralContractor"],
        "@id": `${siteUrl}/#business`,
        name: "코리아이앤씨",
        alternateName: "Korea I&C",
        description:
          "병원 클린룸(BCR) 전문 설계 및 시공. 수술실 클린룸, 중환자실, 음압격리실, 무균병동, 공조설비 및 시설물 유지관리.",
        url: siteUrl,
        telephone: "+82-10-8115-0500",
        email: "koreaencgo@nate.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "정남면 보통리 78-1",
          addressLocality: "화성시",
          addressRegion: "경기도",
          addressCountry: "KR",
        },
        founder: {
          "@type": "Person",
          name: "남기태",
          jobTitle: "대표이사",
        },
        foundingDate: "2023-04",
        areaServed: {
          "@type": "Country",
          name: "대한민국",
        },
        knowsAbout: [
          "BCR 클린룸",
          "바이오 클린룸",
          "수술실 클린룸",
          "음압격리실",
          "음압격리병실 설치 기준",
          "중환자실",
          "무균병동",
          "감염증병실",
          "병원 공조설비",
          "HEPA 필터",
          "ULPA 필터",
          "FFU",
          "차압 관리",
          "수술실 내장 판넬공사",
          "ISO Class 5~8",
          "클린룸 유지보수",
        ],
        serviceType: [
          "병원 클린룸 시공",
          "병원 클린룸 시공업체",
          "수술실 클린룸 시공",
          "수술실 크린룸 시공",
          "음압격리실 시공",
          "음압격리병실 설치",
          "중환자실 시공",
          "무균병동 시공",
          "감염증병실 시공",
          "병원 클린룸 공조설비",
          "BCR 클린룸 설계",
          "의료시설 유지보수",
          "건축 마무리 공사",
          "건물 및 구축물 해체 공사",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "병원 클린룸 시공 서비스",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "수술실 클린룸 시공",
                serviceType: "수술실 클린룸 시공",
                areaServed: "대한민국",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "음압격리실 시공",
                serviceType: "음압격리실 및 음압격리병실 시공",
                areaServed: "대한민국",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "중환자실 클린룸 시공",
                serviceType: "중환자실, 무균병동, 감염증병실 시공",
                areaServed: "대한민국",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "병원 클린룸 공조설비",
                serviceType: "병원 클린룸 공조설비, FFU, HEPA·ULPA 필터 유지관리",
                areaServed: "대한민국",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "클린룸 유지보수",
                serviceType: "클린룸 유지보수",
                areaServed: "대한민국",
              },
            },
          ],
        },
        image: `${siteUrl}/og-image.png`,
        logo: `${siteUrl}/logo-icon.png`,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "코리아이앤씨",
        inLanguage: "ko-KR",
        publisher: {
          "@id": `${siteUrl}/#business`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "코리아이앤씨는 어떤 클린룸을 시공하나요?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "코리아이앤씨는 병원 BCR 클린룸을 중심으로 수술실 클린룸, 중환자실, 음압격리실, 무균실 시공과 유지보수를 수행합니다.",
            },
          },
          {
            "@type": "Question",
            name: "병원 클린룸 시공 비용 상담은 어떻게 신청하나요?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "전화 010-8115-0500 또는 문의하기 페이지의 온라인 폼으로 현장 실측 기반 비용 상담과 시공순서 안내를 신청할 수 있습니다.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
