"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";

/** Подключает облегчённый набор анимаций и учитывает prefers-reduced-motion. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
