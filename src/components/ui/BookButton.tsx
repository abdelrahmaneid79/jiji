"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useCalendly } from "@/components/calendly/CalendlyProvider";

type Variant = "primary" | "ghostlink";

const base =
  "inline-flex items-center justify-center gap-2.5 font-sans font-semibold cursor-pointer select-none rounded-xl";

/**
 * Calendly-connected CTA. Every "Book ..." button opens the scheduling popup.
 */
export function BookButton({
  children,
  variant = "primary",
  className = "",
  size = "md",
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const { open } = useCalendly();

  const sizes: Record<string, string> = {
    sm: "text-sm px-[19px] py-[11px] rounded-[9px]",
    md: "text-base px-[30px] py-[17px]",
    lg: "text-[17px] px-9 py-[18px] rounded-[13px]",
  };

  if (variant === "ghostlink") {
    return (
      <button
        onClick={open}
        className={`${base} ${sizes[size]} bg-transparent text-white border border-white/10 hover:border-white/40 hover:bg-white/5 transition-colors ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <motion.button
      onClick={open}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={`${base} ${sizes[size]} text-[#140600] shadow-cta hover:shadow-cta-hover transition-shadow ${className}`}
      style={{ background: "linear-gradient(135deg,#FF7800,#FF1E00)" }}
    >
      {children}
    </motion.button>
  );
}
