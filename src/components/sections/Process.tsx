"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Primitives";
import { content } from "@/lib/site";

const c = content.process;

export function Process() {
  return (
    <section
      id="process"
      className="relative z-[2] overflow-clip bg-black px-5 py-[clamp(90px,11vh,140px)] sm:px-8 lg:px-[72px]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/signal.svg"
        aria-hidden
        alt=""
        className="ss-breathe pointer-events-none absolute -right-[70px] top-[12%] z-0 w-[360px] opacity-[0.08]"
        style={{ filter: "drop-shadow(0 0 70px rgba(255,67,0,.55))" }}
      />
      <div className="relative z-[1] mx-auto max-w-content">
        <Reveal>
          <Eyebrow className="mb-[18px]">{c.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-[780px] font-display text-[clamp(2rem,3.8vw,3.3rem)] font-bold leading-[1.02] tracking-[-0.005em]">
            {c.heading}
          </h2>
        </Reveal>

        {/* single-line vertical timeline */}
        <div className="relative mt-[50px] max-w-[760px]">
          <div
            aria-hidden
            className="absolute bottom-6 left-[28px] top-6 w-[2px]"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgba(255,67,0,.55) 8%, rgba(255,67,0,.55) 92%, transparent)",
            }}
          />
          {c.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div
                className={`relative flex gap-6 ${i < c.steps.length - 1 ? "pb-9" : ""}`}
              >
                <div
                  className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border border-brand/45 bg-black font-display text-[21px] text-brand-glow"
                  style={{ boxShadow: "0 0 0 6px #000" }}
                >
                  {s.n}
                </div>
                <div className="pt-[7px]">
                  <h3 className="mb-[7px] text-[21px] font-semibold">
                    {s.title}
                  </h3>
                  <p className="max-w-[540px] text-[15.5px] leading-[1.6] text-[#a8a59d]">
                    {s.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
