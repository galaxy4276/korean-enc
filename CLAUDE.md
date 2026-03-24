# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

코리아이앤씨(Korea I&C) — 병원 클린룸(BCR) 전문 시공 기업의 비즈니스 웹사이트.
정적 마케팅 사이트로, 신뢰 구축과 견적 문의 전환이 목적.

## Tech Stack

- **Framework**: Next.js 16 (App Router, `src/` directory)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Animation**: Motion (framer-motion)
- **Font**: Wanted Sans Variable (`public/fonts/WantedSansVariable.woff2`)
- **Output**: Static Export (`output: "export"` in next.config.ts)

## Commands

```bash
npm run dev      # 개발 서버 (localhost:3000)
npm run build    # 프로덕션 빌드 (정적 export → out/)
npm run lint     # ESLint
```

## Architecture

```
src/
  app/
    layout.tsx          # 루트 레이아웃 (메타데이터, 폰트)
    page.tsx            # 메인 랜딩 페이지
    globals.css         # Tailwind imports, 디자인 토큰(@theme), 폰트
    about/page.tsx      # 회사소개
    services/page.tsx   # 서비스 안내
    portfolio/page.tsx  # 시공사례
    contact/page.tsx    # 문의하기
  components/           # 재사용 컴포넌트
  lib/                  # 유틸리티, 상수
public/
  fonts/                # Wanted Sans woff2
  images/               # 시공 사진, 로고
docs/
  코리아이앤씨_웹사이트_기획안.html   # 상세 기획안 (사이트맵, 와이어프레임, UX 설계)
  코리아이앤씨_Hero영상_Kling프롬프트.html  # Hero 영상 제작 가이드
  코리아이앤씨_에셋/                   # 시공 사진 16장 (PPTX 추출)
  코리아이앤씨_에셋/에셋_인덱스.html   # 에셋별 용도 매핑
  style-guide.html                    # 디자인 시스템 시각 참조
```

## Design System — [DESIGN.md](DESIGN.md)

반드시 [`DESIGN.md`](DESIGN.md)를 참조하여 디자인 일관성을 유지할 것.
시각적 참조는 [`docs/style-guide.html`](docs/style-guide.html).

### 핵심 디자인 원칙 (33design.space 기반)
- **Luxury Minimalism**: 넉넉한 여백 (섹션 간 80-200px), 제한된 컬러, 장식 최소화
- **Font**: Wanted Sans, letter-spacing -0.04em (헤딩) / -0.02em (본문)
- **Color**: 네이비 `#1b4d8e` + 골드 악센트 `#ecb72f` + 뉴트럴 스케일
- **Button**: pill shape(`border-radius: 30px`)만 사용, 다른 요소에 radius 없음
- **Image**: border-radius 없음, 날카로운 엣지
- **Motion**: 절제된 fadeInUp, stagger, countUp (motion 라이브러리)
- **Breakpoints**: Mobile-first / md: 1080px / lg: 1440px

### CSS Design Tokens (globals.css @theme)
- `--color-primary`, `--color-primary-dark`, `--color-accent` 등
- `--font-sans`: Wanted Sans 기반 스택
- `--spacing-section`: 140px (desktop), `--spacing-section-mobile`: 80px

## Site Structure (기획안 기준)

5페이지 구성, 메인은 원페이지 스크롤 랜딩 겸용:

1. **메인(랜딩)**: Hero → 신뢰 수치 → 서비스 요약 → Before/After → 공정 프로세스 → 대표 인사말 → CTA
2. **회사소개**: 비전/미션, 대표 인사말, 연혁, 인증(예약)
3. **서비스 안내**: BCR 클린룸 설명, 분야별 탭(수술실/격리실/중환자실), 공정 상세
4. **시공사례**: 필터 + 카드 그리드, Before-After 슬라이더, 프로젝트 상세
5. **문의하기**: 문의폼 + 연락정보 + 지도

### 주요 인터랙션
- 모바일 Sticky CTA Bar (전화/문의)
- Before-After 이미지 슬라이더
- 카운트업 애니메이션 (신뢰 수치)
- 스크롤 기반 fadeInUp (각 섹션)
- 포트폴리오 카드 호버 (Before→After 크로스페이드)
- 플로팅 문의 버튼 (데스크톱 우하단)

## Business Context

| 항목 | 값 |
|------|-----|
| 회사명 | 코리아이앤씨 |
| 대표 | 남기태 |
| 연락처 | 010-8115-0500 |
| 이메일 | koreaencgo@nate.com |
| 주소 | 경기도 화성시 정남면 보통리 78-1 |
| 핵심 카피 | "20년 경험이 만드는 완벽한 수술실" |
| 타겟 A | 병원 원장/경영진 — 신뢰성, 실적 |
| 타겟 B | 시설관리 담당자 — 시공 스펙, 가격 |
| Primary CTA | 전화 바로 걸기 + 문의폼 |

## Coding Conventions

- 시스템 이모지 코드에 사용 금지 — 아이콘은 SVG/PNG 에셋 사용
- 이미지 최적화: WebP, Lazy Loading, LCP 2.5초 이내
- SEO: 메타태그, 구조화 데이터(LocalBusiness), 시맨틱 HTML
- 모바일 퍼스트 반응형: 360px / 1080px / 1440px
- 컴포넌트 파일명: PascalCase (e.g., `HeroSection.tsx`)
- CSS: Tailwind utility-first, 커스텀 값은 globals.css @theme 토큰 사용
