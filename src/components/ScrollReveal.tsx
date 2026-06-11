"use client";

import { motion, useReducedMotion } from "motion/react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  y = 30,
}: ScrollRevealProps) {
  // 모션 민감 유저에게는 y 이동을 제거한다 (opacity 페이드만 유지).
  const reduce = useReducedMotion();
  const ry = reduce ? 0 : y;
  return (
    <motion.div
      initial={{ opacity: 0, y: ry }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  duration = 0.8,
  y = 30,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();
  const ry = reduce ? 0 : y;
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: ry },
        visible: { opacity: 1, y: 0, transition: { duration, ease: "easeOut" } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
