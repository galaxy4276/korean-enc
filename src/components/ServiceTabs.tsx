"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const tabs = [
  {
    id: "surgery",
    label: "수술실",
    title: "BCR 수술실 설계·시공",
    description:
      "도면 검토부터 골조, 패널, 천장, 공조, 의료가스 설비까지 수술실 공정을 통합해 시공합니다. 공사 중 구조와 완공 후 청정 환경을 함께 관리합니다.",
    features: [
      "현장 조건에 맞춘 수술실 레이아웃 검토",
      "벽체 패널, 천장, 조명, 공조 설비 시공",
      "수술등 및 의료가스 설비 통합",
      "완공 후 청정도와 설비 기능 확인",
    ],
    image: "/images/kenc-surgery-complete-white.webp",
  },
  {
    id: "sterile",
    label: "무균실",
    title: "완전 무균 유지 무균실",
    description:
      "외부 오염원을 완벽히 차단하고 내부를 무균 상태로 유지하는 특수 클린룸입니다. 면역 저하 환자의 안전한 치료 환경을 보장합니다.",
    features: [
      "완전 무균 상태 유지 설계",
      "HEPA 필터 기반 공기 정화 시스템",
      "양압 시스템으로 외부 오염 차단",
      "패스박스 설치로 물품 반출입 관리",
    ],
    image: "/images/complete-white-lamp.webp",
  },
  {
    id: "icu",
    label: "중환자실",
    title: "중환자실 리모델링·청정 구역 시공",
    description:
      "병상 구역, 간호 스테이션, 의료 장비 동선을 고려해 중환자실의 청정도와 운영 효율을 함께 설계합니다.",
    features: [
      "병상 간 동선과 간호 관찰 동선 정리",
      "천장 공조 및 조명 설비 연계",
      "청소·소독이 쉬운 마감재 적용",
      "운영 중 유지관리 접근성 확보",
    ],
    image: "/images/kenc-icu-open-ward.webp",
  },
  {
    id: "isolation",
    label: "격리실",
    title: "음압격리실 및 전실 시스템",
    description:
      "음압병실, 환자 전실, 의료진 출입구, 차압계, 인터락, 폐수 설비까지 감염 차단에 필요한 구성을 통합 시공합니다.",
    features: [
      "음압병실과 전실 동선 분리",
      "자동문, 인터락, 출입통제 설비",
      "차압계, 너스콜, 사용중 표시등 연동",
      "폐수탱크, 공조기, 배기팬 설비 시공",
    ],
    image: "/images/kenc-isolation-room-bed.webp",
  },
];

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex gap-2 md:gap-3 mb-10 md:mb-14 overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            className={`relative px-5 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold tracking-[-0.03em] whitespace-nowrap transition-colors duration-150 rounded-[30px] ${
              activeTab === index
                ? "bg-primary text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
        >
          {/* Text Content */}
          <div>
            <h3 className="text-xl md:text-[28px] font-bold tracking-[-0.03em] text-neutral-900 mb-4 md:mb-6">
              {tabs[activeTab].title}
            </h3>
            <p className="text-sm md:text-base leading-[1.7] text-neutral-600 mb-8 md:mb-10">
              {tabs[activeTab].description}
            </p>
            <ul className="space-y-4">
              {tabs[activeTab].features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 block w-2 h-2 bg-accent shrink-0" />
                  <span className="text-sm md:text-base leading-[1.7] text-neutral-900">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Photo */}
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={tabs[activeTab].image}
              alt={`${tabs[activeTab].label} 시공 사진`}
              fill
              sizes="(min-width: 1080px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
