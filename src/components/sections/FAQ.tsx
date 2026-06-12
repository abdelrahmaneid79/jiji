"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { content } from "@/lib/site";

const c = content.faq;

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  return (
    <section
      id="faq"
      className="relative z-[2] overflow-clip bg-black px-5 py-[clamp(90px,11vh,140px)] sm:px-8 lg:px-[72px]"
    >
      <div
        aria-hidden
        className="ss-breathe pointer-events-none absolute left-1/2 top-[8%] z-0 h-[320px] w-[70vw] max-w-[760px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(255,67,0,.07), transparent 68%)",
        }}
      />
      <div className="relative z-[1] mx-auto max-w-[820px]">
        <Reveal>
          <h2 className="mb-9 font-display text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.02] tracking-[-0.005em]">
            {c.heading}
          </h2>
        </Reveal>

        <div className="flex flex-col">
          {c.items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className="border-t border-white/10">
                <button
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                  className="flex w-full cursor-pointer items-center justify-between gap-5 px-1 py-6 text-left"
                >
                  <span className="text-[clamp(16px,1.5vw,19px)] font-semibold text-white">
                    {item.q}
                  </span>
                  <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-white/[0.18] text-[18px] text-brand-glow">
                    {open ? "–" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[680px] px-1 pb-[26px] text-[16px] leading-[1.62] text-[#b0ada7]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
