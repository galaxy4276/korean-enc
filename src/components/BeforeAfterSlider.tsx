"use client";

import { useRef, useState } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel: string;
  afterLabel: string;
  sizes?: string;
}

/**
 * 드래그/키보드로 두 이미지를 비교하는 리빌 슬라이더.
 * 동일 지점의 전·후가 아닌 "시공 과정 → 완공" 리빌 용도로도 사용하므로
 * 라벨은 호출부에서 명확히 지정한다.
 */
export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel,
  afterLabel,
  sizes = "(min-width: 1080px) 50vw, 100vw",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // 드래그 중 컨테이너 크기는 변하지 않으므로 rect를 캐싱해 move마다 reflow를 피한다.
  const rectRef = useRef<DOMRect | null>(null);
  const [position, setPosition] = useState(50);

  function updateFromClientX(clientX: number) {
    const rect = rectRef.current ?? containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft") {
      setPosition((p) => Math.max(0, p - 5));
    } else if (e.key === "ArrowRight") {
      setPosition((p) => Math.min(100, p + 5));
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full select-none overflow-hidden"
      onPointerDown={(e) => {
        rectRef.current = containerRef.current?.getBoundingClientRect() ?? null;
        e.currentTarget.setPointerCapture(e.pointerId);
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (e.buttons === 0) return;
        updateFromClientX(e.clientX);
      }}
      onPointerUp={() => {
        rectRef.current = null;
      }}
    >
      {/* After (base layer) */}
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        sizes={sizes}
        className="object-cover"
        draggable={false}
      />
      <span className="absolute top-4 right-4 z-10 bg-[#28a745] px-4 py-1.5 text-[12px] font-bold tracking-[-0.01em] text-white">
        {afterLabel}
      </span>

      {/* Before (clipped overlay — clip-path keeps image undistorted) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes={sizes}
          className="object-cover"
          draggable={false}
        />
        <span className="absolute top-4 left-4 z-10 bg-[#dc3545] px-4 py-1.5 text-[12px] font-bold tracking-[-0.01em] text-white">
          {beforeLabel}
        </span>
      </div>

      {/* Divider + handle */}
      <div
        className="absolute top-0 bottom-0 z-20 w-px -translate-x-1/2 bg-white"
        style={{ left: `${position}%` }}
      >
        <button
          type="button"
          aria-label="비교 슬라이더 핸들"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          role="slider"
          onKeyDown={handleKeyDown}
          className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.3)] outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 6L4 12l5 6M15 6l5 6-5 6"
              stroke="#1b4d8e"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
