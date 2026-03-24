"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Container from "@/components/Container";
import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollReveal";

/* ───────────────────────── Data ───────────────────────── */

interface Project {
  id: number;
  title: string;
  category: string;
  area: string;
  duration: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "A대학병원 수술실 신축",
    category: "수술실",
    area: "150m\u00B2",
    duration: "4개월",
    color: "from-[#8B7355] to-[#A0937E]",
  },
  {
    id: 2,
    title: "B종합병원 격리실 구축",
    category: "격리실",
    area: "80m\u00B2",
    duration: "2개월",
    color: "from-[#1b4d8e] to-[#2a6cb8]",
  },
  {
    id: 3,
    title: "C의료원 중환자실 리모델링",
    category: "중환자실",
    area: "200m\u00B2",
    duration: "5개월",
    color: "from-[#f8f9fa] to-[#dee2e6]",
  },
  {
    id: 4,
    title: "D대학병원 수술실 2실",
    category: "수술실",
    area: "120m\u00B2",
    duration: "3개월",
    color: "from-[#2d5a27] to-[#4a8c3f]",
  },
  {
    id: 5,
    title: "E종합병원 무균실",
    category: "수술실",
    area: "60m\u00B2",
    duration: "2개월",
    color: "from-[#1b4d8e] to-[#3a7bd5]",
  },
  {
    id: 6,
    title: "F병원 수술실 확장",
    category: "수술실",
    area: "180m\u00B2",
    duration: "4개월",
    color: "from-[#8B7355] to-[#C4A77D]",
  },
];

const categories = ["전체", "수술실", "격리실", "중환자실", "기타"];

/* ───────────────────────── Arrow SVG ───────────────────────── */

function ArrowIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 16H24M24 16L18 10M24 16L18 22"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

/* ───────────────────────── Project Card ───────────────────────── */

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <StaggerItem className="cursor-pointer group" y={30}>
      <div onClick={onClick}>
        {/* Image area */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <div
            className={`w-full h-full bg-gradient-to-br ${project.color}`}
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-100 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-100">
              <ArrowIcon />
            </div>
          </div>
        </div>

        {/* Gold dash + title block */}
        <div className="mt-5">
          <div className="w-12 h-1 bg-accent" />
          <h3 className="mt-3 text-xl md:text-[28px] font-bold tracking-[-0.03em] leading-[1.3]">
            {project.title}
          </h3>
          <p className="ml-12 mt-1 text-sm md:text-base text-neutral-600 tracking-[-0.02em]">
            {project.area} | {project.duration}
          </p>
        </div>
      </div>
    </StaggerItem>
  );
}

/* ───────────────────────── Modal ───────────────────────── */

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const galleryItems = Array.from({ length: 4 }, (_, i) => i);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal content */}
      <motion.div
        className="relative bg-white w-full max-w-[900px] max-h-[90vh] overflow-y-auto z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-colors"
          aria-label="닫기"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Before / After area */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[4/3]">
            <div
              className={`w-full h-full bg-gradient-to-br ${project.color} opacity-60`}
            />
            <span className="absolute top-4 left-4 bg-black/50 text-white text-xs font-bold px-3 py-1 tracking-[-0.01em]">
              BEFORE
            </span>
          </div>
          <div className="relative aspect-[4/3]">
            <div
              className={`w-full h-full bg-gradient-to-br ${project.color}`}
            />
            <span className="absolute top-4 left-4 bg-black/50 text-white text-xs font-bold px-3 py-1 tracking-[-0.01em]">
              AFTER
            </span>
          </div>
        </div>

        {/* Project info */}
        <div className="p-6 md:p-10">
          <div className="w-12 h-1 bg-accent" />
          <h2 className="mt-4 text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3]">
            {project.title}
          </h2>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "프로젝트명", value: project.title },
              { label: "시공 분야", value: project.category },
              { label: "시공 면적", value: project.area },
              { label: "시공 기간", value: project.duration },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs text-neutral-600 tracking-[-0.01em]">
                  {item.label}
                </p>
                <p className="mt-1 text-sm md:text-base font-bold tracking-[-0.02em]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Scope */}
          <div className="mt-8">
            <p className="text-xs text-neutral-600 tracking-[-0.01em]">
              시공 범위
            </p>
            <p className="mt-1 text-sm md:text-base tracking-[-0.02em] leading-[1.7] text-neutral-900">
              클린룸 패널 시공, 공조 시스템 설치, 전기 배선, 의료가스 배관,
              바닥 에폭시 마감, 자동문 설치
            </p>
          </div>

          {/* Gallery thumbnails */}
          <div className="mt-8">
            <p className="text-xs text-neutral-600 tracking-[-0.01em] mb-3">
              시공 갤러리
            </p>
            <div className="grid grid-cols-4 gap-3">
              {galleryItems.map((i) => (
                <div
                  key={i}
                  className={`aspect-square bg-gradient-to-br ${project.color} opacity-${i === 0 ? 100 : 70 - i * 10}`}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-block bg-neutral-800 text-white font-extrabold text-base md:text-lg tracking-[-0.02em] px-8 py-4 rounded-[30px] hover:bg-white hover:text-neutral-800 border border-neutral-800 transition-all duration-150"
            >
              문의하기
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ───────────────────────── Page ───────────────────────── */

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "전체"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-primary-dark pt-[120px] pb-[80px] md:pt-[200px] md:pb-[120px]">
        <Container>
          <ScrollReveal>
            <p className="text-accent text-sm md:text-base font-bold tracking-[-0.02em]">
              PORTFOLIO
            </p>
            <h1 className="mt-4 text-[42px] md:text-[56px] font-bold tracking-[-0.04em] leading-[1.24] md:leading-[1.34] text-white">
              시공사례
            </h1>
            <p className="mt-4 text-lg md:text-xl text-neutral-400 tracking-[-0.02em] leading-[1.7]">
              완벽한 시공, 눈으로 확인하세요
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── Filter Tabs ── */}
      <section className="py-[60px] md:py-[100px]">
        <Container>
          <ScrollReveal>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2.5 text-sm md:text-base font-bold tracking-[-0.02em] rounded-[30px] border transition-all duration-150 ${
                      isActive
                        ? "bg-primary text-white border-primary"
                        : "bg-transparent text-neutral-600 border-neutral-300 hover:border-primary hover:text-primary"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* ── Project Grid ── */}
          <StaggerContainer className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-neutral-100 py-[80px] md:py-[140px]">
        <Container>
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3]">
                비슷한 프로젝트를 계획 중이신가요?
              </h2>
              <p className="mt-4 text-neutral-600 tracking-[-0.02em] leading-[1.7]">
                20년 경험의 전문가가 최적의 솔루션을 제안합니다
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:010-8115-0500"
                  className="inline-flex items-center gap-2 bg-neutral-800 text-white font-extrabold text-base md:text-lg tracking-[-0.02em] px-8 py-4 rounded-[30px] hover:bg-white hover:text-neutral-800 border border-neutral-800 transition-all duration-150"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M2 3.5C2 2.67 2.67 2 3.5 2h3.09c.37 0 .7.24.82.6l1.15 3.44a.85.85 0 01-.22.88l-1.6 1.6a11.5 11.5 0 005.24 5.24l1.6-1.6c.23-.23.56-.3.88-.22l3.44 1.15c.36.12.6.45.6.82v3.09c0 .83-.67 1.5-1.5 1.5A15.5 15.5 0 012 3.5z" />
                  </svg>
                  전화 상담
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-transparent text-neutral-800 font-extrabold text-base md:text-lg tracking-[-0.02em] px-8 py-4 rounded-[30px] border border-neutral-300 hover:border-primary hover:text-primary transition-all duration-150"
                >
                  무료 상담 신청
                </a>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
