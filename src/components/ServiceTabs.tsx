"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const tabs = [
  {
    id: "surgery",
    label: "수술실",
    title: "BCR 등급 클린룸 수술실",
    description:
      "무균 환경에서 안전한 수술을 수행할 수 있도록 설계된 BCR 등급 클린룸입니다. 공기 중 미립자와 세균을 철저히 제어하여 감염 위험을 최소화합니다.",
    features: [
      "BCR 등급 클린룸 설계 및 시공",
      "무균 환경 유지 시스템 구축",
      "수술등 및 의료가스 설비 통합",
      "에폭시 바닥 마감으로 위생 극대화",
    ],
    gradient: "from-primary-dark to-primary",
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
    gradient: "from-primary to-primary-light",
  },
  {
    id: "icu",
    label: "중환자실",
    title: "최적 환기 중환자실",
    description:
      "중환자의 생명 유지에 필수적인 최적의 환기 및 위생 환경을 제공합니다. 24시간 모니터링이 가능한 설비와 격벽 구조를 갖추고 있습니다.",
    features: [
      "최적 환기 시스템 설계",
      "의료 위생 기준 충족 시공",
      "모니터링 설비 통합 구축",
      "격벽 구조로 환자 간 감염 방지",
    ],
    gradient: "from-primary-light to-primary",
  },
  {
    id: "isolation",
    label: "격리실",
    title: "음압/양압 전환 격리실",
    description:
      "감염병 환자의 안전한 격리를 위해 음압과 양압을 자유롭게 전환할 수 있는 독립 공조 시스템을 갖춘 격리실입니다.",
    features: [
      "음압/양압 자유 전환 시스템",
      "감염 차단을 위한 완벽 밀폐 구조",
      "독립 공조 시스템 설치",
      "전실 설계로 이중 안전 확보",
    ],
    gradient: "from-primary-dark to-primary-light",
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

          {/* Photo Placeholder */}
          <div
            className={`relative aspect-[4/3] bg-gradient-to-br ${tabs[activeTab].gradient} flex items-center justify-center`}
          >
            <div className="text-center text-white/60">
              <svg
                className="w-16 h-16 mx-auto mb-3 opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                />
              </svg>
              <p className="text-sm font-medium">{tabs[activeTab].label} 시공 사진</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
