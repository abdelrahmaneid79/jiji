"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, CheckIcon } from "@/components/ui/Primitives";
import { BookButton } from "@/components/ui/BookButton";
import { content } from "@/lib/site";

const c = content.cta;

export function CTA() {
  return (
    <section
      id="cta"
      className="relative z-[2] overflow-clip bg-[#050403] px-5 py-[clamp(100px,13vh,160px)] sm:px-8 lg:px-[72px]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/pattern-group.svg"
        aria-hidden
        alt=""
        className="pointer-events-none absolute left-1/2 top-1/2 w-[min(120%,1100px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
        style={{
          WebkitMaskImage:
            "radial-gradient(circle at 50% 50%, #000 30%, transparent 70%)",
          maskImage:
            "radial-gradient(circle at 50% 50%, #000 30%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="ss-pulse pointer-events-none absolute left-1/2 top-1/2 h-[680px] w-[680px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(255,67,0,.2), transparent 62%)",
        }}
      />

      <div className="relative mx-auto max-w-[760px] text-center">
        <Reveal>
          <div className="mb-[22px] flex justify-center">
            <Eyebrow>{c.eyebrow}</Eyebrow>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[clamp(2.2rem,4.6vw,4rem)] font-bold leading-none tracking-[-0.005em]">
            {c.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-[560px] text-[clamp(16px,1.3vw,18px)] leading-[1.6] text-[#b8b5af]">
            {c.body}
          </p>
        </Reveal>

        <Reveal delay={0.13}>
          <div className="mx-auto mt-[30px] grid max-w-[560px] grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-3 text-left">
            {c.deliverables.map((d) => (
              <div
                key={d}
                className="flex items-center gap-3 rounded-xl border border-white/[0.09] bg-white/[0.02] px-4 py-3.5 text-[15px]"
              >
                <CheckIcon size={20} />
                {d}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-9 flex flex-col items-center gap-4">
            <BookButton variant="primary" size="lg">
              {c.button} <span className="text-[18px]">→</span>
            </BookButton>
            <div className="flex items-center gap-[18px] text-[13.5px] text-[#9c998f]">
              {c.reassurance.map((r, i) => (
                <span key={r} className="flex items-center gap-[18px]">
                  {i > 0 && (
                    <span className="h-[3px] w-[3px] rounded-full bg-[#7d7a72]" />
                  )}
                  <span>{r}</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
