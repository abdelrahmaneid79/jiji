/** Small shared bits used across sections. */
import type { ReactNode } from "react";

/** Orange dot + uppercase label used as a section eyebrow. */
export function Eyebrow({
  children,
  className = "",
  color = "#FF4300",
}: {
  children: ReactNode;
  className?: string;
  color?: string;
}) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className="h-[7px] w-[7px] rounded-full"
        style={{ background: color, boxShadow: `0 0 10px ${color}` }}
      />
      <span
        className="text-[13px] font-semibold uppercase tracking-[0.14em]"
        style={{ color }}
      >
        {children}
      </span>
    </div>
  );
}

/** Gradient check chip used in feature lists. */
export function CheckIcon({ size = 22 }: { size?: number }) {
  return (
    <span
      className="flex shrink-0 items-center justify-center font-bold text-[#160600]"
      style={{
        width: size,
        height: size,
        borderRadius: size / 3,
        fontSize: size * 0.55,
        background: "linear-gradient(135deg,#FF7800,#FF1E00)",
      }}
    >
      ✓
    </span>
  );
}
