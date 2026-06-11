"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Container from "@/components/Container";
import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollReveal";
import Link from "next/link";
import {
  attachmentArchive,
  attachmentArchiveSummary,
  type AttachmentArchiveItem,
} from "@/lib/attachmentArchive";
import { caseStudies } from "@/lib/caseStudies";

/* ───────────────────────── Data ───────────────────────── */

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  summary: string;
  scope: string;
  beforeImage: string;
  gallery: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "수술실 클린룸 완공 사례",
    category: "수술실",
    image: "/images/kenc-surgery-complete-white.webp",
    summary: "수술등, 천장 공조, 벽체 마감, 의료 장비 동선을 고려한 수술실 완공 사례입니다.",
    scope: "벽체 패널, 천장, 조명, 공조 설비, 수술실 마감, 설비 기능 확인",
    beforeImage: "/images/kenc-surgery-structure-before.webp",
    gallery: [
      "/images/kenc-surgery-structure-before.webp",
      "/images/kenc-surgery-panel-process.webp",
      "/images/complete-blue-stainless-cabinet.webp",
      "/images/kenc-surgery-complete-white.webp",
    ],
  },
  {
    id: 2,
    title: "음압격리실 구축 사례",
    category: "격리실",
    image: "/images/kenc-isolation-room-bed.webp",
    summary: "음압병실과 전실, 출입통제, 차압계, 자동문을 함께 구성한 격리실 사례입니다.",
    scope: "음압병실, 전실, 자동문, 인터락, 차압계, 너스콜, 사용중 표시등",
    beforeImage: "/images/kenc-isolation-corridor.webp",
    gallery: [
      "/images/kenc-isolation-corridor.webp",
      "/images/kenc-isolation-room-bed.webp",
      "/images/kenc-isolation-entry-controls.webp",
      "/images/kenc-isolation-air-handler.webp",
    ],
  },
  {
    id: 3,
    title: "중환자실 청정 구역 사례",
    category: "중환자실",
    image: "/images/kenc-icu-open-ward.webp",
    summary: "병상 구역과 간호 스테이션 동선을 고려해 밝고 관리하기 쉬운 중환자실을 구성한 사례입니다.",
    scope: "병상 구역 마감, 간호 스테이션 주변 동선, 천장 공조, 조명, 위생 마감",
    beforeImage: "/images/kenc-icu-nurse-station.webp",
    gallery: [
      "/images/kenc-icu-open-ward.webp",
      "/images/kenc-icu-nurse-station.webp",
      "/images/kenc-icu-clean-zone.webp",
      "/images/complete-blue-stainless-cabinet.webp",
    ],
  },
  {
    id: 4,
    title: "수술실 패널 시공 과정",
    category: "수술실",
    image: "/images/kenc-surgery-panel-process.webp",
    summary: "골조와 천장 구조를 정리한 뒤 클린룸 패널과 설비를 순차 시공한 과정입니다.",
    scope: "골조 정리, 천장 구조, 벽체 패널, 공조 덕트, 마감 전 점검",
    beforeImage: "/images/kenc-surgery-structure-before.webp",
    gallery: [
      "/images/kenc-surgery-structure-before.webp",
      "/images/kenc-surgery-panel-process.webp",
      "/images/construction-floor-primer.webp",
      "/images/construction-self-leveling.webp",
    ],
  },
  {
    id: 5,
    title: "클린룸 검증·측정 사례",
    category: "기타",
    image: "/images/kenc-maintenance-filter-change.webp",
    summary: "완공 후 운영 안정성을 확인하기 위해 차압, 소음, 파티클 등 주요 항목을 점검합니다.",
    scope: "차압 측정, 소음 측정, 파티클 측정, 필터 상태 확인, 설비 기능 점검",
    beforeImage: "/images/kenc-maintenance-filter-change.webp",
    gallery: [
      "/images/kenc-maintenance-filter-change.webp",
      "/images/archive/kenc-archive-076.webp",
      "/images/archive/kenc-archive-070.webp",
      "/images/complete-beige-gas-panel.webp",
    ],
  },
  {
    id: 6,
    title: "격리실 설비실 구성 사례",
    category: "격리실",
    image: "/images/kenc-isolation-wastewater-tanks.webp",
    summary: "격리실 운영을 위한 폐수탱크, 펌프, 밸브, 배관, 공조기, 배기팬 설비 구성 사례입니다.",
    scope: "폐수탱크, 펌프, 밸브, 배관, 공조기, 배기팬, 설비실 점검",
    beforeImage: "/images/kenc-isolation-air-handler.webp",
    gallery: [
      "/images/kenc-isolation-wastewater-tanks.webp",
      "/images/kenc-isolation-air-handler.webp",
      "/images/kenc-isolation-entry-controls.webp",
      "/images/kenc-isolation-corridor.webp",
    ],
  },
];

const categories = ["전체", "수술실", "격리실", "중환자실", "기타"];
const ARCHIVE_PAGE_SIZE = 24;

/* ─────────────────── Gallery Lightbox ─────────────────── */

function GalleryLightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: AttachmentArchiveItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[index];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex flex-col bg-primary-dark/97"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-5 md:px-10 md:py-7">
        <span className="text-xs font-bold tracking-[0.08em] text-accent md:text-sm">
          CURATED WALL
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className="flex h-10 w-10 items-center justify-center text-neutral-300 transition-colors hover:text-white"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Stage */}
      <div className="relative flex flex-1 items-center justify-center px-4 pb-4 md:px-20">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="이전"
          className="absolute left-2 z-10 flex h-12 w-12 items-center justify-center text-neutral-400 transition-colors hover:text-white md:left-6"
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={`${item.title} - ${item.sourceFile}`}
          onClick={(e) => e.stopPropagation()}
          className="max-h-full max-w-full object-contain shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
        />

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="다음"
          className="absolute right-2 z-10 flex h-12 w-12 items-center justify-center text-neutral-400 transition-colors hover:text-white md:right-6"
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Caption plate */}
      <div
        className="flex items-end justify-between gap-6 px-5 py-6 md:px-20 md:py-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="mb-3 h-[2px] w-10 bg-accent" />
          <p className="text-base font-bold tracking-[-0.02em] text-white md:text-xl">
            {item.title}
          </p>
          <p className="mt-1.5 text-xs tracking-[-0.01em] text-neutral-400 md:text-sm">
            {item.category} · {item.sourceType} · {item.sourceFile}
          </p>
        </div>
        <span className="shrink-0 font-mono text-sm tracking-[0.05em] text-neutral-400 md:text-base">
          {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
      </div>
    </motion.div>
  );
}

/* ─────────────────── Curated Wall (Masonry) ─────────────────── */

function SourceArchive({ activeCategory }: { activeCategory: string }) {
  const [visibleCount, setVisibleCount] = useState(ARCHIVE_PAGE_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  // 카테고리 변경 감지: render 중 페이징/라이트박스 초기화 (effect 미사용)
  const [prevCategory, setPrevCategory] = useState(activeCategory);
  if (prevCategory !== activeCategory) {
    setPrevCategory(activeCategory);
    setVisibleCount(ARCHIVE_PAGE_SIZE);
    setLightboxIndex(null);
  }

  const archiveItems =
    activeCategory === "전체"
      ? attachmentArchive
      : attachmentArchive.filter((item) => item.category === activeCategory);

  const visible = Math.min(visibleCount, archiveItems.length);
  const visibleItems = archiveItems.slice(0, visible);
  const hasMore = visible < archiveItems.length;

  return (
    <section className="bg-neutral-900 py-[80px] md:py-[140px]">
      <Container>
        <ScrollReveal>
          <p className="mb-4 text-sm font-medium tracking-[0.08em] text-accent md:mb-6 md:text-base">
            CURATED WALL
          </p>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold leading-[1.3] tracking-[-0.04em] text-white md:text-[42px]">
                제공자료 큐레이션 월
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-[1.7] tracking-[-0.02em] text-neutral-400 md:text-base">
                첨부 원본과 PPT 내부 이미지를 미술관 벽처럼 한 면에 걸었습니다.
                작품을 누르면 큰 화면으로 감상할 수 있습니다.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm tracking-[-0.02em] text-neutral-400 md:text-base">
              <span>전체 {attachmentArchiveSummary.total}점</span>
              <span>수술실 {attachmentArchiveSummary["수술실"]}점</span>
              <span>격리실 {attachmentArchiveSummary["격리실"]}점</span>
              <span>중환자실 {attachmentArchiveSummary["중환자실"]}점</span>
              <span>기타 {attachmentArchiveSummary["기타"]}점</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Masonry wall: CSS columns, 자연 비율 유지 */}
        <div className="mt-12 columns-2 gap-3 md:mt-16 md:columns-3 md:gap-5 lg:columns-4">
          {visibleItems.map((item, i) => (
            <button
              type="button"
              key={item.id}
              onClick={() => setLightboxIndex(i)}
              className="group mb-3 block w-full break-inside-avoid bg-neutral-800 text-left md:mb-5"
            >
              <div className="relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.thumbnail}
                  alt={`${item.title} - ${item.sourceFile}`}
                  loading="lazy"
                  className="w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                {/* Museum plate overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="p-3 md:p-4">
                    <span className="font-mono text-[10px] tracking-[0.05em] text-accent md:text-xs">
                      No.{String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-1 text-[12px] font-bold leading-[1.4] tracking-[-0.02em] text-white md:text-sm">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[10px] tracking-[-0.01em] text-neutral-300 md:text-[11px]">
                      {item.sourceType}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 text-center md:mt-14">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((c) =>
                  Math.min(c + ARCHIVE_PAGE_SIZE, archiveItems.length),
                )
              }
              className="rounded-[30px] border border-neutral-500 px-8 py-3 text-sm font-extrabold tracking-[-0.02em] text-neutral-200 transition-colors duration-150 hover:bg-white hover:text-neutral-900 md:px-10 md:py-4 md:text-base"
            >
              더보기 {visible} / {archiveItems.length}
            </button>
          </div>
        )}
      </Container>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <GalleryLightbox
            items={visibleItems}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={() =>
              setLightboxIndex((i) =>
                i === null ? i : (i - 1 + visibleItems.length) % visibleItems.length,
              )
            }
            onNext={() =>
              setLightboxIndex((i) =>
                i === null ? i : (i + 1) % visibleItems.length,
              )
            }
          />
        )}
      </AnimatePresence>
    </section>
  );
}

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
    <div className="cursor-pointer group">
      <div onClick={onClick}>
        {/* Image area */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1080px) 50vw, 100vw"
            className="object-cover"
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
          <p className="ml-12 mt-1 text-sm md:text-base text-neutral-600 tracking-[-0.02em] leading-[1.6]">
            {project.summary}
          </p>
        </div>
      </div>
    </div>
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
            <Image
              src={project.beforeImage}
              alt="시공 과정"
              fill
              sizes="(min-width: 1080px) 450px, 100vw"
              className="object-cover"
            />
            <span className="absolute top-4 left-4 bg-black/50 text-white text-xs font-bold px-3 py-1 tracking-[-0.01em]">
              PROCESS
            </span>
          </div>
          <div className="relative aspect-[4/3]">
            <Image
              src={project.image}
              alt="완공 또는 점검 결과"
              fill
              sizes="(min-width: 1080px) 450px, 100vw"
              className="object-cover"
            />
            <span className="absolute top-4 left-4 bg-black/50 text-white text-xs font-bold px-3 py-1 tracking-[-0.01em]">
              RESULT
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
              { label: "자료 기준", value: "제공 사진" },
              { label: "공개 범위", value: "익명 사례" },
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
              {project.scope}
            </p>
          </div>

          <p className="mt-6 text-sm md:text-base tracking-[-0.02em] leading-[1.7] text-neutral-600">
            {project.summary}
          </p>

          {/* Gallery thumbnails */}
          <div className="mt-8">
            <p className="text-xs text-neutral-600 tracking-[-0.01em] mb-3">
              시공 갤러리
            </p>
            <div className="grid grid-cols-4 gap-3">
              {project.gallery.map((src, i) => (
                <div key={i} className="relative aspect-square">
                  <Image
                    src={src}
                    alt={`시공 과정 ${i + 1}`}
                    fill
                    sizes="(min-width: 1080px) 100px, 25vw"
                    className="object-cover"
                  />
                </div>
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
      <section className="relative bg-primary-dark pt-[120px] pb-[80px] md:pt-[200px] md:pb-[120px]">
        <div className="absolute inset-0">
          <Image
            src="/images/complete-blue-panorama.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-primary-dark/75" />
        <Container className="relative z-10">
          <ScrollReveal>
            <p className="text-accent text-sm md:text-base font-bold tracking-[-0.02em]">
              PORTFOLIO
            </p>
            <h1 className="mt-4 text-[42px] md:text-[56px] font-bold tracking-[-0.04em] leading-[1.24] md:leading-[1.34] text-white">
              시공사례
            </h1>
            <p className="mt-4 text-lg md:text-xl text-neutral-400 tracking-[-0.02em] leading-[1.7]">
              제공 사진으로 확인하는 시공 과정과 완공 품질
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
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ── SEO: 상세 사례 게시글 링크 ── */}
      <section className="py-[80px] md:py-[140px] bg-white">
        <Container>
          <ScrollReveal>
            <p className="text-sm md:text-base font-medium tracking-[-0.02em] text-primary mb-4 md:mb-6">
              CASE RECORDS
            </p>
            <h2 className="text-2xl md:text-[42px] font-bold tracking-[-0.04em] leading-[1.3] text-neutral-900 mb-10 md:mb-14">
              시공 사례 상세 기록
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {caseStudies.map((study) => (
              <StaggerItem key={study.slug}>
                <Link
                  href={`/portfolio/${study.slug}`}
                  className="block bg-neutral-50 p-8 md:p-10 h-full hover:bg-neutral-100 transition-colors duration-150"
                >
                  <div className="w-8 h-0.5 bg-accent mb-5" />
                  <h3 className="text-lg md:text-xl font-bold tracking-[-0.03em] text-neutral-900 mb-3">
                    {study.title}
                  </h3>
                  <p className="text-sm md:text-base leading-[1.7] tracking-[-0.02em] text-neutral-600">
                    {study.summary}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <SourceArchive activeCategory={activeCategory} />

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
