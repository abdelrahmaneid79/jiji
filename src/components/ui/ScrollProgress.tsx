"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gradient scroll-progress bar fixed to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{
        scaleX,
        transformOrigin: "0% 50%",
        background: "linear-gradient(90deg,#FF0000,#FF7800,#FF1E00)",
        boxShadow: "0 0 12px rgba(255,67,0,.55)",
      }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px]"
    />
  );
}
