"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Primitives";
import { content } from "@/lib/site";

const c = content.services;

// Icons stay here (visual, not copy). They pair with c.items by order.
const icons = [
  (
    <svg key="i0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <line x1="15.5" y1="15.5" x2="21" y2="21" />
    </svg>
  ),
  (
    <svg key="i1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6A2A" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="7" x2="21" y2="7" />
      <line x1="3" y1="14" x2="21" y2="14" />
      <circle cx="9" cy="7" r="2.6" fill="#0a0908" />
      <circle cx="16" cy="14" r="2.6" fill="#0a0908" />
    </svg>
  ),
  (
    <svg key="i2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 11a8 8 0 1 0-2.3 5.7" />
      <polyline points="20 5 20 11 14 11" />
    </svg>
  ),
];

export function Services() {
  return (
    <section
      id="services"
      className="relative z-[2] overflow-clip bg-[#0a0908] px-5 py-[clamp(90px,11vh,140px)] sm:px-8 lg:px-[72px]"
    >
      <div
        aria-hidden
        className="ss-breathe pointer-events-none absolute -top-[12%] right-[4%] z-0 h-[460px] w-[48vw] max-w-[600px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,67,0,.1), transparent 66%)",
        }}
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

        <div className="mt-[46px] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {c.items.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-full rounded-[18px] border border-white/[0.09] p-[30px] transition-all duration-300 hover:border-brand/50 hover:shadow-card-glow"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,0))",
                }}
              >
                <div className="mb-[22px] flex h-[46px] w-[46px] items-center justify-center rounded-xl border border-brand/30 bg-brand/10">
                  {icons[i]}
                </div>
                <h3 className="mb-3 text-[21px] font-semibold">{s.title}</h3>
                <p className="text-[15px] leading-[1.6] text-[#b0ada7]">
                  {s.body}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
