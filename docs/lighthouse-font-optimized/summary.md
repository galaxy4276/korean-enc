# 코리아이앤씨 폰트 최적화 리포트

- 측정일: 2026-06-09
- 작업: `WantedSansVariable.woff2` 사이트 산출물 기준 subset 생성 및 적용
- 원본 폰트: 1259 KiB
- subset 폰트: 78 KiB
- 폰트 파일 절감률: 93.8%
- 검증: 원본 폰트가 지원하는 현재 `src`/`out` 비ASCII 글자 누락 0건

## Lighthouse 전후 비교

| Page | Perf Before | Perf After | Delta | LCP Before | LCP After | Transfer Before | Transfer After | Transfer Delta | Font Before | Font After | A11y | BP | SEO |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| home | 57 | 75 | +18 | 14.2 s | 8.1 s | 8830 KiB | 7651 KiB | -1178 KiB | 1259 KiB | 78 KiB | 96 | 96 | 100 |
| services | 57 | 75 | +18 | 13.2 s | 7.5 s | 2578 KiB | 1400 KiB | -1178 KiB | 1259 KiB | 78 KiB | 96 | 96 | 100 |
| portfolio | 57 | 76 | +19 | 13.6 s | 5.6 s | 2641 KiB | 1463 KiB | -1178 KiB | 1259 KiB | 78 KiB | 94 | 96 | 100 |
| about | 58 | 78 | +20 | 11.6 s | 5.8 s | 2119 KiB | 940 KiB | -1178 KiB | 1259 KiB | 78 KiB | 96 | 96 | 100 |
| contact | 58 | 77 | +19 | 12.1 s | 6.3 s | 2064 KiB | 885 KiB | -1179 KiB | 1259 KiB | 78 KiB | 96 | 96 | 100 |

## 판단

- 폰트 전송량은 페이지별 약 1,259 KiB에서 78 KiB로 줄었다.
- 폰트 파일 자체는 1.2 MiB에서 78 KiB로 줄어 약 93.8% 절감됐다.
- Performance는 전 페이지 +18~+20점 개선됐다.
- LCP는 전 페이지 약 5.6~7.8초 개선됐다.
- 서브 페이지 총 전송량은 약 2.0-2.6 MiB에서 0.88-1.46 MiB 수준으로 감소했다.
- 홈은 여전히 `hero-video.mp4`가 지배적이라 다음 병목은 Hero 영상 최적화다.

## 산출물

- 적용 폰트: `public/fonts/WantedSansVariable.subset.woff2`
- 원본 보존: `public/fonts/WantedSansVariable.woff2`
- 리포트: `docs/lighthouse-font-optimized/*.report.html`, `docs/lighthouse-font-optimized/*.report.json`
