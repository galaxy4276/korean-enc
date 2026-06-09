# 코리아이앤씨 Lighthouse 실측 리포트

- 측정일: 2026-06-09
- 대상: Next static export `out/` 로컬 서빙
- 도구: Lighthouse CLI 13.3.0, mobile emulation, simulated throttling
- 비고: `python http.server`는 extensionless route rewrite를 지원하지 않아 서브 페이지는 `.html` 산출물 기준으로 측정했다.

## 점수 요약

| Page | Performance | Accessibility | Best Practices | SEO | FCP | LCP | TBT | CLS | Transfer |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| home | 57 | 96 | 96 | 100 | 7.7 s | 14.2 s | 0 ms | 0.001 | 8,830 KiB |
| services | 57 | 96 | 96 | 100 | 7.7 s | 13.2 s | 20 ms | 0 | 2,578 KiB |
| portfolio | 57 | 94 | 96 | 100 | 7.7 s | 13.6 s | 20 ms | 0 | 2,641 KiB |
| about | 58 | 96 | 96 | 100 | 7.5 s | 11.6 s | 0 ms | 0 | 2,119 KiB |
| contact | 58 | 96 | 96 | 100 | 7.5 s | 12.1 s | 0 ms | 0 | 2,064 KiB |

## 핵심 판단

- Performance는 전 페이지 57-58로 낮다. TBT와 CLS는 양호하지만 FCP/LCP가 늦다.
- 가장 큰 공통 병목은 `WantedSansVariable.woff2` 1,259 KiB다. 모든 페이지에서 가장 큰 리소스다.
- 홈은 `hero-video.mp4` 6,267 KiB가 추가 병목이다. 홈 총 전송량 8,830 KiB 중 대부분을 차지한다.
- 포트폴리오는 아카이브 썸네일 분리 덕분에 아카이브 자체가 병목 1순위는 아니다. 현재 큰 리소스는 폰트, JS chunk, 대표 이미지 순이다.
- Accessibility는 94-96, Best Practices는 96, SEO는 100으로 양호하다.
- `Use efficient cache lifetimes` 경고는 로컬 `python http.server`의 캐시 헤더 부재 영향이 크다. 실제 배포 플랫폼 캐시 헤더로 별도 확인해야 한다.

## 큰 리소스

| Page | 1순위 | 2순위 | 3순위 |
|---|---|---|---|
| home | `/hero-video.mp4` 6,267 KiB | `/fonts/WantedSansVariable.woff2` 1,259 KiB | JS chunk 222 KiB |
| services | `/fonts/WantedSansVariable.woff2` 1,259 KiB | JS chunk 222 KiB | JS chunk 141 KiB |
| portfolio | `/fonts/WantedSansVariable.woff2` 1,259 KiB | JS chunk 222 KiB | `/images/kenc-surgery-panel-process.webp` 165 KiB |
| about | `/fonts/WantedSansVariable.woff2` 1,259 KiB | JS chunk 222 KiB | JS chunk 141 KiB |
| contact | `/fonts/WantedSansVariable.woff2` 1,259 KiB | JS chunk 222 KiB | JS chunk 141 KiB |

## 다음 개선 우선순위

1. 폰트 최적화: WantedSans variable 전체 파일 대신 필요한 subset/weight만 제공하거나 `next/font/local` 및 preload 전략을 재정리한다.
2. 홈 Hero 동영상 최적화: 모바일에서는 자동 로드하지 않거나, poster 우선 + 사용자 환경에 따라 지연 로드한다.
3. 홈 Hero 비디오 파일 자체 압축: 6.27MB는 모바일 LCP에 과하다. 1-2MB 이하의 짧은 WebM/MP4 대체본을 별도로 만든다.
4. client component 범위 축소: Lighthouse가 unused JavaScript 약 298-304 KiB 절감을 제안한다. Motion/인터랙션 섹션을 더 작게 분리한다.
5. 배포 캐시 헤더 확인: Vercel/정적 호스팅에서 `_next/static`, fonts, images에 장기 캐시가 적용되는지 실서버에서 재측정한다.

## 리포트 파일

- `home`: `docs/lighthouse/home.report.html`, `docs/lighthouse/home.report.json`
- `services`: `docs/lighthouse/services.report.html`, `docs/lighthouse/services.report.json`
- `portfolio`: `docs/lighthouse/portfolio.report.html`, `docs/lighthouse/portfolio.report.json`
- `about`: `docs/lighthouse/about.report.html`, `docs/lighthouse/about.report.json`
- `contact`: `docs/lighthouse/contact.report.html`, `docs/lighthouse/contact.report.json`
