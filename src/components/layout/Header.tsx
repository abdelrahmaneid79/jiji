"use client";

import { motion } from "framer-motion";
import { siteConfig, content } from "@/lib/site";
import { BookButton } from "@/components/ui/BookButton";

export function Header() {
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex h-[74px] items-center justify-between border-b border-white/[0.06] bg-black/50 px-5 backdrop-blur-xl sm:px-8 lg:px-[52px]"
    >
      <a href="#top" className="flex items-center" aria-label="Solo Send home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/logo-horizontal-white.svg"
          alt="Solo Send"
          className="block h-[23px] w-auto"
        />
      </a>

      <nav className="flex items-center gap-5 sm:gap-7 lg:gap-9">
        <div className="hidden items-center gap-7 md:flex lg:gap-9">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14.5px] text-[#b8b5af] transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <BookButton variant="primary" size="sm">
          {content.header.cta}
        </BookButton>
      </nav>
    </motion.header>
  );
}
