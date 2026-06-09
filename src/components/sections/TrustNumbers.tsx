"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "motion/react";
import Container from "@/components/Container";

function CountUp({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate(v) {
        setValue(Math.round(v));
      },
    });

    return () => controls.stop();
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center"
    >
      <span className="block text-[42px] font-black tracking-[-0.04em] text-primary md:text-[56px]">
        {value}
        {suffix}
      </span>
      <span className="mt-2 block text-[14px] tracking-[-0.02em] text-neutral-600 md:text-[16px]">
        {label}
      </span>
    </motion.div>
  );
}

const stats = [
  { target: 20, suffix: "년+", label: "현장 경험" },
  { target: 2023, suffix: ".04", label: "법인 설립" },
];

export default function TrustNumbers() {
  return (
    <section className="bg-neutral-100 py-[var(--spacing-section-mobile)] md:py-[var(--spacing-section)]">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8">
          {stats.map((stat) => (
            <CountUp key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
