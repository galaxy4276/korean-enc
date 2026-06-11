# 코리아이앤씨 첨부자료 반영 검수 리포트

작성일: 2026-06-09
대상 원본: `/Users/user/Downloads/홈페관련 -은기첨부26.03.26`

## 결론

첨부 원본의 이미지성 자료는 총 95건으로, 모두 공개용 최적화 이미지와 `src/lib/attachmentArchive.ts` 데이터 레코드로 반영했다. 대표 사례에 직접 쓰지 않은 자료도 `/portfolio`의 “제공자료 전체 아카이브” 섹션에서 카테고리별로 확인할 수 있다. 성능 보호를 위해 기본 20건씩 노출하고 `더보기`로 확장한다.

## 원본별 반영 수량

| 분류 | 반영 건수 | 반영 위치 |
|---|---:|---|
| 수술실 | 39 | 대표 사례, PROCESS/RESULT, 전체 아카이브 |
| 격리실 | 20 | 음압격리실 사례, 설비실 사례, 전체 아카이브 |
| 중환자실 | 9 | 중환자실 사례, 서비스 카드, 전체 아카이브 |
| 기타/회사/PPT 중복자료 | 27 | 검증·측정, 유지보수, 회사/기타 아카이브 |
| 합계 | 95 | `public/images/archive`, `src/lib/attachmentArchive.ts` |

## 대표 사용 자료

| 이미지 | 사용 맥락 |
|---|---|
| `/images/kenc-surgery-complete-white.webp` | 수술실 대표 사례/서비스/PROCESS-RESULT |
| `/images/kenc-surgery-structure-before.webp` | 메인 PROCESS 및 수술실 공정 |
| `/images/kenc-surgery-panel-process.webp` | 수술실 패널 시공 과정 |
| `/images/kenc-icu-open-ward.webp` | 중환자실 대표 사례/서비스 |
| `/images/kenc-icu-nurse-station.webp` | 중환자실 서비스 카드/갤러리 |
| `/images/kenc-isolation-room-bed.webp` | 음압격리실 대표 사례/서비스 |
| `/images/kenc-isolation-corridor.webp` | 격리실 서비스 카드/아카이브 |
| `/images/kenc-isolation-entry-controls.webp` | 격리실 출입통제/차압계 갤러리 |
| `/images/kenc-isolation-wastewater-tanks.webp` | 격리실 설비실 사례 |
| `/images/kenc-isolation-air-handler.webp` | 격리실 공조기 사례 |
| `/images/kenc-maintenance-filter-change.webp` | 유지보수 서비스 카드 |
| `/images/bcr-airquality.webp` | 검증·공기 청정도 카드/갤러리 |

## 아카이브 처리

- 전체 원본 이미지는 `public/images/archive/kenc-archive-001.webp`부터 순번으로 저장했다.
- 모든 레코드는 `src/lib/attachmentArchive.ts`에 `id`, `category`, 의미 기반 `title`, `image`, `sourceGroup`, `sourceFile`, `sourceType`, `usage` 필드를 가진다.
- `/portfolio`는 기존 대표 사례 카드와 별도로 “제공자료 전체 아카이브”를 20건 단위로 렌더링한다.
- 사용자가 수술실/격리실/중환자실/기타 탭을 누르면 대표 사례와 아카이브가 같은 카테고리 기준으로 필터링된다.

## 텍스트/SEO 반영

- `Before/After` 중심 문구는 `PROCESS/RESULT` 및 “제공자료 아카이브” 기준으로 동기화했다.
- `대학병원`처럼 원본에서 일반 대상 범위로만 확인되는 표현은 포트폴리오 메타에서 제거했다.
- `foundingDate`는 `2023-04`로 수정했다.
- 구조화 데이터에서 첨부로 검증되지 않는 좌표/직원수는 제거했다.
- 회사 기본정보에 대표이사, 관리이사, 업태, 업종, 시공 분야를 추가했다.

## 남은 판단 항목

- 원본 사진 일부는 촬영 품질이 낮거나 중복 구도지만, 누락 방지를 위해 아카이브에는 포함했다.
- 회사명 PPT의 대상 병원 범위(대학병원, 종합병원, 중소병원, 전문병원, 개인병원)는 회사소개 문장에는 과장 없이 “병원 클린룸” 범주로 반영했다.
- 무균실 전용 원본 이미지는 별도 폴더로 제공되지 않아 기존 서비스 탭 이미지를 유지했다.

## 2026-06-09 WebP 및 썸네일 최적화

- `public/images`의 본문 이미지와 아카이브 이미지를 WebP로 일괄 전환했다.
- `public/images/archive/thumbs`에 400x300 카드용 WebP 썸네일 95장을 생성했다.
- 포트폴리오 아카이브 그리드는 원본 이미지 대신 `thumbnail` 경로를 사용한다.
- 원본 아카이브 WebP는 `image` 경로로 유지해 전체 자료 보존성을 유지했다.
