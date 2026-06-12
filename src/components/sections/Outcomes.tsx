"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Primitives";
import { content } from "@/lib/site";

const c = content.outcomes;

export function Outcomes() {
  return (
    <section
      className="relative z-[2] px-5 py-[clamp(90px,11vh,140px)] sm:px-8 lg:px-[72px]"
      style={{ background: "linear-gradient(180deg,#000,#080604 50%,#000)" }}
    >
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] items-center gap-9 lg:gap-[72px]">
          <div>
            <Reveal>
              <Eyebrow className="mb-[18px]">{c.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-[clamp(2rem,3.8vw,3.3rem)] font-bold leading-[1.02] tracking-[-0.005em]">
                {c.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-[22px] max-w-[480px] text-[clamp(16px,1.3vw,18px)] leading-[1.6] text-[#b8b5af]">
                {c.body}
              </p>
            </Reveal>
          </div>

          <div className="grid gap-3.5">
            {c.items.map((o, i) => (
              <Reveal key={o} delay={0.03 + i * 0.03}>
                <div className="flex items-center gap-4 rounded-[15px] border border-white/[0.09] bg-white/[0.025] px-6 py-[22px] transition-colors duration-300 hover:border-brand/40 hover:bg-white/[0.04]">
                  <span className="shrink-0 font-display text-[22px] text-brand-glow">
                    ↗
                  </span>
                  <span className="text-[17px] font-medium">{o}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
