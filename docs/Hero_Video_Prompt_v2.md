# Hero Background Video — Generation Prompt Guide v2

> 16:9 / 15초 / 3장면(5초x3) / Hero 배경용 (텍스트 오버레이 아래)
> "혼돈 → 정밀 → 완성" 내러티브 압축

---

## 공통 설정

| 항목 | 값 |
|------|-----|
| Mode | Text-to-Video |
| Duration | 5s (장면당) |
| Quality | High / Professional |
| Aspect | 16:9 |
| Camera | Slow, Cinematic |
| FPS | 24fps |

### Negative Prompt (공통)

```
cartoon, anime, 3D render, CGI, unrealistic, blurry, low quality, watermark, text overlay, bright neon colors, fantasy, surreal, distorted faces, extra fingers, deformed hands, fisheye lens, overexposed, underexposed, stock footage watermark, fast motion, shaky camera, handheld camera shake, busy movement, high contrast flashing
```

### Hero 배경 특수 요구사항

- 영상 위에 흰색 텍스트가 올라가므로 **전체적으로 어두운 톤 유지**
- 화면 중앙-좌측에 밝은 영역이 오지 않도록 (카피 영역)
- 움직임은 **극도로 느리게** — 배경 영상이지 메인 콘텐츠가 아님
- 컬러 그레이딩: 디새추레이트 + 블루/네이비 틸트

---

## Scene 1 — 공사 현장 (0:00 ~ 0:05)

**의도**: 거친 현장에서 시작. "이 공간이 어떻게 변하는지" 궁금증 유발. 어두운 톤으로 Hero 텍스트의 배경 역할.

### Kling Prompt

```
Cinematic documentary shot, extremely slow dolly forward through a dimly lit hospital corridor leading into a construction zone. Dark concrete floors partially demolished, exposed ceiling infrastructure with metal conduits and pipes. Fine construction dust particles floating in narrow beams of warm work light. Industrial LED work lights casting isolated warm pools on the floor. Everything else remains in deep shadow. Muted earth tones, desaturated, dark navy-blue color grade. Heavy vignette darkening the edges. Shot on anamorphic lens, very shallow depth of field, 24fps ultra slow cinematic motion. Professional construction site, realistic lighting, photorealistic. Dark moody atmosphere suitable for text overlay.
```

### Settings

| 항목 | 값 |
|------|-----|
| Camera | Slow Dolly Forward |
| Lighting | Low-key, Industrial work lights |
| Mood | Dark, Anticipation |
| Key Detail | 먼지 입자가 빛줄기에 반사 |

### 핵심 포인트
- 전체 화면의 70%가 어두워야 함 (텍스트 가독성)
- 먼지 입자(dust particles in light beams)가 현장감의 핵심
- 카메라 속도: 5초간 1-2미터만 전진하는 극도의 슬로우

---

## Scene 2 — 정밀 시공 (0:05 ~ 0:10)

**의도**: 전문가의 정밀한 작업. 손과 도구에 집중하여 기술력을 보여줌. 밝기가 살짝 올라가지만 여전히 어두운 톤 유지.

### Kling Prompt

```
Cinematic documentary shot, close-up of gloved hands in clean white nitrile gloves precisely aligning a sterile white wall panel joint in a hospital cleanroom. Precision measuring tool checking the gap. Shallow depth of field, background completely blurred showing hints of partially installed white panels. Cool white LED construction lighting from above, creating clean shadows. Camera slowly pulls back to reveal more of the half-completed cleanroom space emerging from the construction. Dark edges and vignette maintained. Desaturated cool blue-white color palette. Photorealistic, professional industrial documentary style, 24fps slow motion. Dark overall tone suitable for text overlay.
```

### Settings

| 항목 | 값 |
|------|-----|
| Camera | Close-up → Slow Pull-back |
| Lighting | Cool white LED, top-down |
| Mood | Precision, Expertise |
| Key Detail | 장갑 낀 손 + 패널 이음새 정밀 작업 |

### 핵심 포인트
- 클로즈업 → 풀백으로 "디테일 → 전체" 한 장면에 표현
- 흰색 장갑 + 흰색 패널의 클린한 대비
- 손과 도구에 집중 → AI 얼굴 생성 문제 회피
- 여전히 가장자리는 어둡게 (비네팅)

---

## Scene 3 — 완성된 수술실 리빌 (0:10 ~ 0:15)

**의도**: 클라이맥스. 완벽하게 완공된 수술실이 처음 드러나는 순간. 수술등이 켜지며 공간에 빛이 채워짐. 영상의 가장 인상적인 순간이지만, Hero 배경이므로 밝기를 제어.

### Kling Prompt

```
Cinematic reveal shot, double doors slowly opening to unveil a pristine completed hospital operating room. Camera moves very slowly forward through the doorway into the space. Immaculate pale blue-green walls with seamless cleanroom panels. A ceiling-mounted surgical lamp slowly powers on, casting a focused pool of warm light downward onto the surgical table, while the rest of the room remains in soft ambient shadow. Polished epoxy floor reflecting the surgical light. Medical gas panels visible on the far wall. Subtle volumetric light in the air. Anamorphic lens with gentle flare from the surgical lamp. Deep navy-blue shadows maintained at screen edges. Desaturated with controlled highlights. Photorealistic, cinematic documentary, 24fps slow motion. Dark atmospheric tone with one bright focal point from the surgical lamp.
```

### Settings

| 항목 | 값 |
|------|-----|
| Camera | Forward Through Doorway (ultra slow) |
| Lighting | Surgical Lamp spotlight + ambient shadow |
| Mood | Reveal, Awe, Completion |
| Key Detail | 수술등 점등 순간 + 렌즈 플레어 |

### 핵심 포인트
- "문이 열리며 공간이 드러나는" 리빌 구조
- 수술등이 켜지는 순간이 감동 포인트
- 밝은 영역은 수술등 아래 한 곳에만 집중, 나머지는 어두운 앰비언트
- 렌즈 플레어는 은은하게 (과하면 텍스트 방해)

---

## 편집 가이드

### 전환 효과

| 전환 | 효과 | 시간 |
|------|------|------|
| Scene 1 → 2 | 크로스 디졸브 | 0.5초 |
| Scene 2 → 3 | 화이트 페이드 | 0.3초 |
| Scene 3 끝 | 페이드 투 블랙 → Scene 1로 루프 | 1.0초 |

### 사운드 (선택)

Hero 배경 영상은 기본 **뮤트** 권장. 사운드를 넣는다면:
- 극도로 낮은 볼륨의 앰비언트 드론 사운드
- Scene 3에서 수술등 켜지는 미세한 "윙" 효과음

### 컬러 그레이딩

- 전체: 채도 -30%, 블루 틸트 +15%
- Scene 1: 가장 어둡고 따뜻한 톤 (작업등)
- Scene 2: 중간 밝기, 쿨 화이트
- Scene 3: 살짝 밝아지지만 가장자리는 여전히 어두움
- 하이라이트 클리핑 절대 금지 (텍스트 가독성)

### 웹 최적화

| 항목 | 값 |
|------|-----|
| 코덱 | H.264 |
| 해상도 | 1920x1080 |
| 비트레이트 | 6-8 Mbps |
| 파일 크기 | 15MB 이내 |
| 포맷 | .mp4 |
| poster | 첫 프레임 또는 Scene 3의 수술등 점등 프레임 추출 |
| preload | metadata (자동 재생 시 none) |

### 대안 프롬프트

**Scene 1 대안 — 항공뷰:**
```
Aerial top-down view slowly descending into a dimly lit hospital building under renovation, seeing through partially removed ceiling panels into the dark construction zone below. Documentary style, very dark muted colors, heavy vignette, cinematic. Suitable for text overlay background.
```

**Scene 3 대안 — 인물 없이 오빗:**
```
Slow cinematic orbit shot around a completed hospital operating room. Surgical lamp centered in frame, slowly rotating 90 degrees. Seamless wall panels, medical gas outlets, pristine floor all visible. Single warm light source from surgical lamp, rest in shadow. Anamorphic, dark atmospheric tone, heavy vignette.
```

---

## 생성 체크리스트

- [ ] 각 장면 3-5회 반복 생성하여 최적 결과 선택
- [ ] 손/장갑 디테일 확인 (Scene 2)
- [ ] 전체 밝기가 Hero 텍스트(흰색)를 방해하지 않는지 확인
- [ ] 3장면 색감 톤이 통일되는지 확인 (블루/네이비 틸트)
- [ ] 카메라 움직임이 충분히 느린지 확인
- [ ] 편집 후 루프 재생 테스트
