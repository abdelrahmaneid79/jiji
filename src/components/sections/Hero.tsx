"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookButton } from "@/components/ui/BookButton";
import { useCalendly } from "@/components/calendly/CalendlyProvider";
import { siteConfig, content } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;
const c = content.hero;

function fade(delay: number) {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  };
}

export function Hero() {
  const { open } = useCalendly();
  const [playing, setPlaying] = useState(false);
  const hasVideo = siteConfig.vslUrl.trim().length > 0;

  // Play button: if a real video is set, play it; otherwise nudge to booking.
  const handlePlay = () => (hasVideo ? setPlaying(true) : open());

  return (
    <section
      id="top"
      className="relative z-[2] flex min-h-screen items-center overflow-clip px-5 pb-[72px] pt-[120px] sm:px-8 lg:px-[72px]"
    >
      {/* Ambient glow + signal pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[6%] -top-[12%] z-0 h-[54vw] max-h-[760px] w-[54vw] max-w-[760px]"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, rgba(255,67,0,.24), rgba(255,67,0,.05) 46%, transparent 70%)",
        }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/pattern-single.svg"
        aria-hidden
        alt=""
        className="ss-drift pointer-events-none absolute right-0 top-1/2 z-0 h-[120%] opacity-[0.09]"
        style={{
          WebkitMaskImage: "linear-gradient(90deg,transparent,#000 74%)",
          maskImage: "linear-gradient(90deg,transparent,#000 74%)",
        }}
      />

      <div className="relative z-[2] mx-auto grid w-full max-w-site grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-center gap-7 lg:gap-12">
        {/* Left column */}
        <div className="min-w-0">
          <motion.div
            {...fade(0)}
            className="mb-7 inline-flex items-center gap-[11px] rounded-full border border-white/10 bg-white/[0.02] py-[7px] pl-3 pr-[15px]"
          >
            <span
              className="h-[7px] w-[7px] rounded-full bg-brand"
              style={{ boxShadow: "0 0 10px #FF4300" }}
            />
            <span className="whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.1em] text-[#cbc8c2]">
              {c.badge}
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.09)}
            className="font-display text-[clamp(2.3rem,4.6vw,5.1rem)] font-bold leading-[0.97] tracking-[-0.005em]"
          >
            {c.headlineLead}
            <span className="text-gradient">{c.headlineAccent}</span>
            {c.headlineTail}
          </motion.h1>

          <motion.p
            {...fade(0.17)}
            className="mt-[30px] max-w-[520px] text-[clamp(16px,1.25vw,19px)] leading-[1.62] text-[#b8b5af]"
          >
            {c.sub}
          </motion.p>

          <motion.div {...fade(0.25)} className="mt-10 flex flex-wrap gap-3.5">
            <BookButton variant="primary" size="md">
              {c.primaryCta} <span className="text-[17px]">→</span>
            </BookButton>
            <a
              href="#vsl"
              className="inline-flex items-center gap-[11px] rounded-xl border border-white/[0.16] px-[26px] py-[17px] text-base font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-white/40 text-[9px]">
                ►
              </span>{" "}
              {c.secondaryCta}
            </a>
          </motion.div>

          <motion.div
            {...fade(0.33)}
            className="mt-9 flex flex-wrap items-center gap-3.5 border-t border-white/[0.07] pt-[26px]"
          >
            <span className="text-[13px] text-[#8f8c84]">{c.specialistsIn}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/klaviyo-logo-light.svg"
              alt="Klaviyo"
              className="h-4 w-auto opacity-85"
            />
            <span className="h-4 w-px bg-white/[0.14]" />
            <span className="text-[13px] text-[#8f8c84]">{c.builtFor}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/shopify.png"
              alt="Shopify"
              className="h-[19px] w-auto opacity-85"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span className="text-[13px] text-[#8f8c84]">{c.builtForSuffix}</span>
          </motion.div>
        </div>

        {/* VSL */}
        <motion.div
          id="vsl"
          {...fade(0.22)}
          className="relative min-w-0 w-full max-w-[520px] justify-self-end"
        >
          {/* broadcast rings */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
          >
            {[0, 1.2, 2.4].map((d) => (
              <span
                key={d}
                className="ss-ping absolute h-[158px] w-[158px] rounded-full border border-brand/45"
                style={{ animationDelay: `${d}s` }}
              />
            ))}
          </div>

          <div
            className="relative z-[1] rounded-[20px] p-[1.5px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,120,0,.9), rgba(255,30,0,.25) 45%, rgba(255,255,255,.08))",
              boxShadow:
                "0 50px 110px rgba(0,0,0,.65), 0 0 0 1px rgba(255,255,255,.03)",
            }}
          >
            <div
              className="relative aspect-video overflow-hidden rounded-[18.5px]"
              style={{
                background:
                  "radial-gradient(130% 130% at 50% 0%, #171310, #050505 72%)",
              }}
            >
              {hasVideo && playing ? (
                /* ---- Real video plays here once siteConfig.vslUrl is set ---- */
                <iframe
                  src={`${siteConfig.vslUrl}${siteConfig.vslUrl.includes("?") ? "&" : "?"}autoplay=1`}
                  title="Solo Send — how it works"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                /* ---- Designed video poster (placeholder until a URL is added) ---- */
                <>
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(135deg, rgba(255,255,255,.022) 0 2px, transparent 2px 10px)",
                    }}
                  />
                  <div
                    aria-hidden
                    className="ss-sheen absolute bottom-0 left-0 top-0 w-[34%]"
                    style={{
                      background:
                        "linear-gradient(100deg, transparent, rgba(255,255,255,.07), transparent)",
                    }}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/signal.svg"
                    aria-hidden
                    alt=""
                    className="absolute left-1/2 top-[46%] w-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      onClick={handlePlay}
                      aria-label={hasVideo ? "Play video" : "Book your free audit"}
                      whileHover={{ scale: 1.07 }}
                      className="relative z-[2] flex h-[84px] w-[84px] items-center justify-center rounded-full"
                      style={{
                        background: "linear-gradient(135deg,#FF7800,#FF1E00)",
                        boxShadow: "0 18px 50px rgba(255,67,0,.55)",
                      }}
                    >
                      <span
                        className="ml-1.5"
                        style={{
                          borderStyle: "solid",
                          borderWidth: "12px 0 12px 20px",
                          borderColor:
                            "transparent transparent transparent #160600",
                        }}
                      />
                    </motion.button>
                  </div>
                  {/* faux scrubber */}
                  <div
                    aria-hidden
                    className="absolute bottom-[54px] left-[18px] right-[18px] h-[3px] rounded-[3px] bg-white/[0.16]"
                  >
                    <div
                      className="h-full w-[34%] rounded-[3px]"
                      style={{
                        background: "linear-gradient(90deg,#FF7800,#FF1E00)",
                        boxShadow: "0 0 10px rgba(255,67,0,.6)",
                      }}
                    />
                  </div>
                  <div
                    className="absolute inset-x-0 bottom-0 flex items-center justify-between px-[18px] py-4"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(0,0,0,.72), transparent)",
                    }}
                  >
                    <span className="flex items-center gap-2.5 text-[13.5px] font-medium text-[#f0ede8]">
                      <span
                        className="h-2 w-2 rounded-full bg-brand"
                        style={{ boxShadow: "0 0 8px #FF4300" }}
                      />{" "}
                      {c.vslCaption}
                    </span>
                    <span className="rounded-md border border-white/[0.14] px-[9px] py-1 text-[12px] font-semibold tracking-[0.06em] text-[#a6a39d]">
                      {c.vslTag}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
