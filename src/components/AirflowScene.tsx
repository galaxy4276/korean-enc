"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Mode = "positive" | "negative";

const COUNT = 1600;
const ROOM_X = 3.2;
const ROOM_Y = 2.4;
const ROOM_Z = 2.2;

function seedParticles() {
  const positions = new Float32Array(COUNT * 3);
  const speeds = new Float32Array(COUNT);
  for (let i = 0; i < COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * ROOM_X * 2;
    positions[i * 3 + 1] = (Math.random() - 0.5) * ROOM_Y * 2;
    positions[i * 3 + 2] = (Math.random() - 0.5) * ROOM_Z * 2;
    speeds[i] = 0.45 + Math.random() * 0.85;
  }
  return { positions, speeds };
}

function Particles({ mode }: { mode: Mode }) {
  const ref = useRef<THREE.Points>(null);
  const { positions, speeds } = useMemo(() => seedParticles(), []);

  useFrame((_, delta) => {
    const pts = ref.current;
    if (!pts) return;
    const pos = pts.geometry.attributes.position.array as Float32Array;
    const d = Math.min(delta, 0.05);

    for (let i = 0; i < COUNT; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;
      const v = speeds[i];

      if (mode === "positive") {
        // 양압(수술실): 천장 HEPA 급기가 아래로 흐르며 바깥으로 밀어냄 → 오염 유입 차단
        pos[iy] -= v * d;
        pos[ix] += (pos[ix] >= 0 ? 1 : -1) * v * 0.35 * d;
        pos[iz] += (pos[iz] >= 0 ? 1 : -1) * v * 0.35 * d;
        if (pos[iy] < -ROOM_Y || Math.abs(pos[ix]) > ROOM_X) {
          pos[iy] = ROOM_Y;
          pos[ix] = (Math.random() - 0.5) * ROOM_X;
          pos[iz] = (Math.random() - 0.5) * ROOM_Z;
        }
      } else {
        // 음압(격리실): 공기가 하단 중앙 배기구로 수렴 → 오염이 실외로 못 나감
        pos[iy] -= v * d * 0.7;
        pos[ix] -= pos[ix] * 0.55 * d;
        pos[iz] -= pos[iz] * 0.55 * d;
        if (pos[iy] < -ROOM_Y) {
          pos[iy] = ROOM_Y;
          pos[ix] = (Math.random() - 0.5) * ROOM_X * 2;
          pos[iz] = (Math.random() - 0.5) * ROOM_Z * 2;
        }
      }
    }
    pts.geometry.attributes.position.needsUpdate = true;
    pts.rotation.y += d * 0.04;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={COUNT}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color={mode === "positive" ? "#ecb72f" : "#7fb2e8"}
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function RoomFrame() {
  return (
    <group>
      {/* 방 외곽 와이어프레임 */}
      <lineSegments>
        <edgesGeometry
          args={[new THREE.BoxGeometry(ROOM_X * 2, ROOM_Y * 2, ROOM_Z * 2)]}
        />
        <lineBasicMaterial color="#2f5a96" transparent opacity={0.55} />
      </lineSegments>
      {/* 천장 HEPA 급기 격자 */}
      <gridHelper
        args={[ROOM_X * 1.6, 8, "#ecb72f", "#3a6299"]}
        position={[0, ROOM_Y - 0.01, 0]}
      />
    </group>
  );
}

function Scene({ mode }: { mode: Mode }) {
  return (
    <>
      <RoomFrame />
      <Particles mode={mode} />
    </>
  );
}

export default function AirflowScene() {
  const [mode, setMode] = useState<Mode>("positive");

  return (
    <div className="relative overflow-hidden bg-primary-dark">
      <div className="aspect-[16/10] w-full md:aspect-[2/1]">
        <Canvas
          camera={{ position: [5.5, 2.4, 6.2], fov: 42 }}
          dpr={[1, 1.75]}
          gl={{ antialias: true, alpha: false }}
        >
          <color attach="background" args={["#0d2138"]} />
          <Scene mode={mode} />
        </Canvas>
      </div>

      {/* Overlay: 모드 토글 + 설명 */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6 md:p-8">
        <div className="max-w-[280px]">
          <p className="text-xs font-bold tracking-[0.08em] text-accent md:text-sm">
            AIRFLOW
          </p>
          <p className="mt-2 text-sm leading-[1.6] tracking-[-0.02em] text-white/85 md:text-base">
            {mode === "positive"
              ? "양압 — 천장 HEPA 급기가 아래로 흐르며 외부 오염을 밀어냅니다. 수술실 방식."
              : "음압 — 공기가 배기구로 수렴해 오염이 실외로 빠져나가지 못합니다. 격리실 방식."}
          </p>
        </div>

        <div className="pointer-events-auto flex gap-2">
          <button
            type="button"
            onClick={() => setMode("positive")}
            className={`rounded-[30px] px-5 py-2.5 text-xs font-extrabold tracking-[-0.02em] transition-colors duration-150 md:text-sm ${
              mode === "positive"
                ? "bg-accent text-neutral-900"
                : "border border-white/30 text-white/80 hover:border-white"
            }`}
          >
            양압 · 수술실
          </button>
          <button
            type="button"
            onClick={() => setMode("negative")}
            className={`rounded-[30px] px-5 py-2.5 text-xs font-extrabold tracking-[-0.02em] transition-colors duration-150 md:text-sm ${
              mode === "negative"
                ? "bg-accent text-neutral-900"
                : "border border-white/30 text-white/80 hover:border-white"
            }`}
          >
            음압 · 격리실
          </button>
        </div>
      </div>
    </div>
  );
}
