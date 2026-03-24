# DESIGN.md — Korea I&C Design System Reference

> 33design.space 스타일 가이드 기반, 코리아이앤씨 시공 비즈니스에 맞게 커스터마이징.
> 스타일 가이드 시각 참조: [`docs/style-guide.html`](docs/style-guide.html)

---

## 1. Design Philosophy

**Luxury Minimalism** — 33design.space의 핵심 미학을 차용.
- 극도로 넉넉한 여백 (섹션 간 100-200px)
- 제한된 컬러 팔레트 (네이비 + 골드 악센트)
- 풀 블리드 포토그래피, 장식 최소화
- 타이트한 네거티브 letter-spacing으로 프리미엄 에디토리얼 느낌
- 날카로운 이미지 엣지 (border-radius 없음, CTA 버튼만 pill shape)
- 자신감 있고, 세련되고, 전문적이면서 골드 악센트로 따뜻함 부여

---

## 2. Color Tokens

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#1b4d8e` | 브랜드 메인 — 헤딩 악센트, 버튼, 링크 |
| `primary-dark` | `#0d1b2a` | 다크 섹션 배경, 네비게이션, 푸터 |
| `primary-light` | `#2a6cb8` | 그라디언트, 호버 상태 |
| `accent` | `#ecb72f` | 골드 — 장식 요소, 활성 상태, 하이라이트 |
| `accent-25` | `rgb(236 183 47 / 25%)` | 포커스 링, 반투명 악센트 |
| `neutral-900` | `#212529` | 본문 텍스트 |
| `neutral-800` | `#343a40` | CTA 버튼 배경, 다크 UI |
| `neutral-600` | `#6c757d` | 보조 텍스트 |
| `neutral-400` | `#adadad` | 비활성 탭, placeholder |
| `neutral-300` | `#ced4da` | 테두리 |
| `neutral-200` | `#dee2e6` | 구분선 |
| `neutral-100` | `#f8f9fa` | 밝은 배경 |
| `neutral-50` | `#f7f7f7` | 최밝은 배경 |
| `white` | `#ffffff` | 페이지 배경, 밝은 텍스트 |
| `black` | `#000000` | 푸터 배경 |

### 주요 오버레이
- 이미지 호버: `rgba(0, 0, 0, 0.7)`
- Hero 텍스트 배경: `rgba(13, 27, 42, 0.6)` ~ `rgba(13, 27, 42, 0.8)`

---

## 3. Typography

### Font Stack
```
"Wanted Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
```

### Scale

| Element | Mobile | Desktop | Weight | Letter-spacing |
|---------|--------|---------|--------|---------------|
| H1 (Hero) | 42px | 56px | 700-900 | -0.04em |
| H2 (Section Title) | 24px | 42px | 700 | -0.04em |
| H3 (Card Title) | 20px | 28px | 700 | -0.03em |
| Subtitle | 14px | 18px | 500 | -0.02em |
| Body | 14px | 16px | 400 | -0.02em |
| Caption / Small | 12px | 14px | 400 | -0.01em |
| CTA Text | 16px | 18px | 700-800 | -0.02em |

### Line Heights
- Hero title: `1.24` (mobile) → `1.34` (desktop)
- Section title: `1.3`
- Body text: `1.7`
- Description: `1.67`

---

## 4. Spacing System

### Vertical Rhythm (Section Gaps)
| Context | Mobile | Desktop |
|---------|--------|---------|
| 페이지 상단 마진 | 28px | 120px |
| 섹션 간 간격 | 80px | 140-200px |
| 콘텐츠 블록 간격 | 60px | 140px |
| 이미지 하단 마진 | 29px | 60px |
| 서브타이틀 하단 | 30px | 56px |

### Container
| Viewport | Width | Side Padding |
|----------|-------|--------------|
| Mobile (< 1080px) | 78.67% / max 295px | auto margin |
| Tablet (1080-1440px) | calc(100% - 180px) | 90px |
| Desktop (>= 1440px) | calc(100% - 360px) | 180px |

---

## 5. Breakpoints

| Name | Value | Note |
|------|-------|------|
| Mobile (base) | 0 | Mobile-first |
| Tablet / md | 1080px | 33design 커스텀 |
| Desktop / lg | 1440px | 풀 데스크톱 |

Tailwind 매핑:
```css
/* globals.css 또는 tailwind config */
screens: {
  sm: "640px",
  md: "1080px",
  lg: "1440px",
}
```

---

## 6. Component Patterns

### Navigation
- 고정(fixed) 상단, 흰 배경, z-50
- 로고 좌측, 메뉴 우측, CTA 버튼(전화상담) 최우측
- 모바일: 햄버거 메뉴 → 풀스크린 오버레이 (translateY 애니메이션)
- 스크롤 다운 시 compact header (높이 축소 + 그림자)

### Hero Section
- 풀 와이드 배경 이미지/영상 + 반투명 다크 오버레이
- 중앙 또는 좌측 정렬 카피
- Primary CTA (pill 버튼) + Secondary CTA (outline)

### CTA Button (Floating)
- `position: fixed; right: 28px; bottom: 28px`
- Pill shape: `border-radius: 30px`
- Dark 배경 (`#343a40`) → hover 시 반전 (흰 배경 + 다크 텍스트)
- `font-weight: 800`

### Portfolio / Project Card
- 풀 와이드 이미지, border-radius 없음
- 호버 시 다크 오버레이 + 화살표 아이콘 fade-in
- 이미지 아래: 골드 대시 마커 (`#ecb72f`, 32-48px 너비) + 볼드 타이틀
- 서브타이틀은 대시 너비만큼 들여쓰기

### Trust Numbers / Counter
- 3열 그리드, 가운데 정렬
- 대형 숫자 (28px+) + 작은 라벨
- 스크롤 진입 시 카운트업 애니메이션

### Before-After Slider
- 드래그/스와이프로 좌우 비교
- BEFORE/AFTER 라벨 오버레이
- 하단에 프로젝트 정보

### Process Timeline
- 6단계 가로 스텝 (모바일: 세로)
- 스크롤 연동 순차 활성화(highlight)

---

## 7. Motion / Animation

### 원칙
- **절제된 모션** — 과하지 않게, 세련된 인상
- `motion` (framer-motion) 라이브러리 사용

### 패턴

| 효과 | 용도 | 값 |
|------|------|-----|
| fadeInUp | 섹션/카드 스크롤 등장 | duration: 0.8s, y: 30px→0 |
| stagger | 카드 순차 등장 | delay: 0.1s 간격 |
| countUp | 신뢰 수치 | duration: 2s |
| slideIn | 메뉴 토글 | duration: 0.3s, ease-in-out |
| crossFade | Before/After 카드 호버 | duration: 0.3s |
| overlay fade | 포트폴리오 카드 호버 | duration: 0.1s |

### Transition Defaults
```css
transition: all 0.3s ease-in-out;  /* 메뉴, 모달 */
transition: all 0.15s ease-in-out;  /* 버튼 호버 */
```

---

## 8. Image Guidelines

- 포맷: WebP 우선, JPEG 폴백
- Hero 배경: 1920x1080 이상, 오버레이 적용
- 포트폴리오: 최소 1200px 너비
- 모바일 이미지 높이: 300px, 데스크톱: 600px
- Lazy loading 필수
- 에셋 목록: [`docs/코리아이앤씨_에셋/에셋_인덱스.html`](docs/코리아이앤씨_에셋/에셋_인덱스.html)

---

## 9. Korea I&C Brand Info

| 항목 | 값 |
|------|-----|
| 회사명 | 코리아이앤씨 |
| 사업자번호 | 830-01-03365 |
| 대표 | 남기태 |
| 연락처 | 010-8115-0500 |
| 이메일 | koreaencgo@nate.com |
| 주소 | 경기도 화성시 정남면 보통리 78-1 |
| 핵심 카피 | "20년 경험이 만드는 완벽한 수술실" |
| CTA 텍스트 | "무료 상담 신청" / "시공사례 보기" |
