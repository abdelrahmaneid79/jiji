"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, CheckIcon } from "@/components/ui/Primitives";
import { content } from "@/lib/site";

const c = content.problem;

// Cross-fading status label driven by the looping --seal value.
function Status({ size = "13px" }: { size?: string }) {
  return (
    <span className="grid" style={{ fontSize: size }}>
      <span
        className="font-semibold tracking-[0.03em] text-[#8a857d] [grid-area:1/1]"
        style={{ opacity: "clamp(0, calc((0.5 - var(--seal)) * 12), 1)" }}
      >
        Leaking
      </span>
      <span
        className="font-semibold tracking-[0.03em] text-brand-glow [grid-area:1/1]"
        style={{ opacity: "clamp(0, calc((var(--seal) - 0.5) * 12), 1)" }}
      >
        Recovered
      </span>
    </span>
  );
}

export function Problem() {
  return (
    <section
      id="problem"
      className="relative z-[2] overflow-clip px-5 py-[clamp(90px,11vh,140px)] sm:px-8 lg:px-[72px]"
      style={{ background: "linear-gradient(180deg,#000,#080604 55%,#000)" }}
    >
      <div className="mx-auto max-w-content">
        <div className="max-w-[760px]">
          <Reveal>
            <Eyebrow className="mb-[22px]">{c.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-[clamp(2rem,3.8vw,3.4rem)] font-bold leading-[1.02] tracking-[-0.005em]">
              {c.headingLead}
              <br />
              <span className="text-[#5e5b56]">{c.headingMuted}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-[22px] text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-[#b8b5af]">
              {c.body}
            </p>
          </Reveal>
        </div>

        {/* Auto-looping dashboard */}
        <Reveal delay={0.05}>
          <div
            className="mt-12 rounded-[22px] border border-white/[0.09] p-[clamp(22px,3vw,38px)] backdrop-blur-[4px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,.028), rgba(255,255,255,0))",
            }}
          >
            <div className="ss-seal-loop">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="font-display text-[clamp(1.25rem,1.9vw,1.8rem)] font-bold tracking-[0.01em]">
                    {c.dashboardTitle}
                  </div>
                  <div className="mt-[7px] text-[13.5px] text-[#9c998f]">
                    {c.dashboardSubtitle}
                  </div>
                </div>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-[15px] py-[9px]">
                  <span
                    className="h-2 w-2 rounded-full bg-brand"
                    style={{ boxShadow: "0 0 8px #FF4300" }}
                  />
                  <span className="grid whitespace-nowrap text-[13px] font-semibold">
                    <span
                      className="text-[#8a857d] [grid-area:1/1]"
                      style={{
                        opacity: "clamp(0, calc((0.5 - var(--seal)) * 12), 1)",
                      }}
                    >
                      Revenue leaking
                    </span>
                    <span
                      className="text-white [grid-area:1/1]"
                      style={{
                        opacity: "clamp(0, calc((var(--seal) - 0.5) * 12), 1)",
                      }}
                    >
                      Revenue recovered
                    </span>
                  </span>
                </div>
              </div>

              {/* progress rail */}
              <div className="mt-[30px] flex items-center justify-between text-[11.5px] font-semibold uppercase tracking-[0.1em]">
                <span className="text-[#9c998f]">{c.withoutLabel}</span>
                <span className="text-brand-glow">{c.withLabel}</span>
              </div>
              <div className="relative mt-[11px] flex h-8 items-center">
                <div className="absolute inset-x-0 h-2 rounded-md bg-white/[0.08]" />
                <div
                  className="absolute left-0 h-2 rounded-md"
                  style={{
                    width: "calc(var(--seal) * 100%)",
                    background: "linear-gradient(90deg,#FF7800,#FF1E00)",
                    boxShadow: "0 0 18px rgba(255,67,0,.5)",
                  }}
                />
                <div
                  className="absolute top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white"
                  style={{
                    left: "calc(var(--seal) * 100%)",
                    boxShadow:
                      "0 5px 16px rgba(0,0,0,.55), 0 0 0 5px rgba(255,67,0,.22)",
                  }}
                >
                  <span className="text-[12px] leading-none text-brand-ember">
                    ↔
                  </span>
                </div>
              </div>

              {/* leak rows */}
              <div className="mt-8">
                {c.leaks.map((row) => (
                  <div
                    key={row.title}
                    className="flex items-center gap-3 border-t border-white/[0.07] py-[17px] sm:gap-[22px]"
                  >
                    <div className="w-[34%] min-w-[140px] shrink-0">
                      <div className="text-base font-semibold text-white">
                        {row.title}
                      </div>
                      <div className="mt-[3px] text-[13px] text-[#9c998f]">
                        {row.sub}
                      </div>
                    </div>
                    <div className="h-3 flex-1 overflow-hidden rounded-[7px] bg-white/[0.06]">
                      <div
                        className="h-full rounded-[inherit]"
                        style={{
                          width: `calc(${row.from}% + 77% * var(--seal))`,
                          background: "linear-gradient(90deg,#FF7800,#FF1E00)",
                          filter:
                            "saturate(calc(0.18 + 0.82*var(--seal))) brightness(calc(0.5 + 0.5*var(--seal)))",
                        }}
                      />
                    </div>
                    <div className="grid w-[92px] shrink-0 justify-items-end">
                      <Status />
                    </div>
                  </div>
                ))}
              </div>

              {/* implementations */}
              <div className="mt-[30px] border-t border-white/[0.07] pt-[26px]">
                <div className="mb-[18px] text-[13px] font-semibold uppercase tracking-[0.13em] text-[#9c998f]">
                  {c.implementationsHeading}
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-[26px] gap-y-[13px]">
                  {c.implementations.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-[15px] text-[#e8e5e0]"
                      style={{ opacity: "calc(0.28 + 0.72*var(--seal))" }}
                    >
                      <CheckIcon size={22} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-[30px] text-center text-[clamp(17px,1.6vw,22px)] font-medium text-white">
            {c.footnoteLead}{" "}
            <span className="text-[#9c998f]">{c.footnoteMuted}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
