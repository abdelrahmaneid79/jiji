"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Primitives";
import { content } from "@/lib/site";

const c = content.why;

export function WhySoloSend() {
  return (
    <section
      className="relative z-[2] overflow-clip bg-black px-5 py-[clamp(90px,11vh,140px)] sm:px-8 lg:px-[72px]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/signal.svg"
        aria-hidden
        alt=""
        className="ss-breathe pointer-events-none absolute -bottom-[50px] -left-[90px] z-0 w-[400px] opacity-[0.07]"
        style={{ filter: "drop-shadow(0 0 80px rgba(255,67,0,.5))" }}
      />
      <div className="relative z-[1] mx-auto max-w-content">
        <Reveal>
          <Eyebrow className="mb-[18px]">{c.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-[860px] font-display text-[clamp(2rem,3.8vw,3.3rem)] font-bold leading-[1.02] tracking-[-0.005em]">
            {c.heading}
          </h2>
        </Reveal>

        <div className="mt-[46px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,290px),1fr))] gap-5">
          <Reveal delay={0.05}>
            <div className="h-full rounded-[18px] border border-white/[0.08] bg-white/[0.015] p-8">
              <div className="mb-5 text-[13px] font-semibold uppercase tracking-[0.13em] text-[#8d8a81]">
                {c.leftLabel}
              </div>
              <p className="text-[clamp(17px,1.4vw,20px)] leading-[1.5] text-[#9c998f]">
                {c.leftBody}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div
              className="relative h-full overflow-hidden rounded-[18px] border border-brand/40 p-8"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,67,0,.08), rgba(255,67,0,.01))",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/signal.svg"
                aria-hidden
                alt=""
                className="absolute -bottom-[30px] -right-[30px] w-[160px] opacity-[0.08]"
              />
              <div className="mb-5 text-[13px] font-semibold uppercase tracking-[0.13em] text-brand-glow">
                {c.rightLabel}
              </div>
              <p className="text-[clamp(17px,1.4vw,20px)] leading-[1.5] text-[#f0ede8]">
                {c.rightBody}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
