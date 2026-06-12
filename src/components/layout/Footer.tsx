"use client";

import { siteConfig, content } from "@/lib/site";
import { BookButton } from "@/components/ui/BookButton";
import { useCalendly } from "@/components/calendly/CalendlyProvider";

const c = content.footer;

// A footer link is either a jump link (href) or a booking action.
type FooterLink = { label: string; href?: string; action?: boolean };

export function Footer() {
  const { open } = useCalendly();

  // Only show socials that have a real link. Empty ("") ones stay hidden.
  const activeSocials = siteConfig.social.filter(
    (s) => s.href.trim().length > 0 && s.href.trim() !== "#"
  );
  const hasEmail = siteConfig.email.trim().length > 0;

  return (
    <footer
      id="footer"
      className="relative z-[2] border-t border-white/[0.08] bg-black px-5 pb-12 pt-16 sm:px-8 sm:pt-20 lg:px-[72px] lg:pt-24"
    >
      <div className="mx-auto flex max-w-content flex-wrap justify-between gap-12">
        {/* Brand */}
        <div className="max-w-[380px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo-horizontal-white.svg"
            alt={siteConfig.name}
            className="mb-5 block h-[26px] w-auto"
          />
          <p className="text-[clamp(17px,1.6vw,21px)] font-medium leading-[1.4] text-[#cbc8c2]">
            {c.tagline}
          </p>
          <div className="mt-[26px]">
            <BookButton variant="primary" size="sm">
              {c.button} <span className="text-base">→</span>
            </BookButton>
          </div>
          <div className="mt-[26px] flex items-center gap-3">
            <span className="text-[13px] text-[#8f8c84]">{c.specialistsIn}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/klaviyo-logo-light.svg"
              alt="Klaviyo"
              className="h-[15px] w-auto opacity-70"
            />
          </div>
        </div>

        {/* Nav + contact */}
        <div className="flex flex-wrap gap-x-14 gap-y-11">
          {c.columns.map((col) => (
            <div key={col.heading} className="flex min-w-[130px] flex-col gap-[13px]">
              <span className="mb-1 text-xs font-semibold uppercase tracking-[0.13em] text-[#7d7a72]">
                {col.heading}
              </span>
              {(col.links as FooterLink[]).map((link) =>
                link.action ? (
                  <button
                    key={link.label}
                    onClick={open}
                    className="cursor-pointer p-0 text-left text-[14.5px] text-[#9c998f] transition-colors hover:text-white"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[14.5px] text-[#9c998f] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          ))}

          {/* Contact column — adapts to what's available */}
          <div className="flex min-w-[150px] flex-col gap-[13px]">
            <span className="mb-1 text-xs font-semibold uppercase tracking-[0.13em] text-[#7d7a72]">
              {c.contactHeading}
            </span>

            {hasEmail ? (
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[14.5px] text-[#9c998f] transition-colors hover:text-white"
              >
                {siteConfig.email}
              </a>
            ) : (
              <button
                onClick={open}
                className="cursor-pointer p-0 text-left text-[14.5px] text-[#9c998f] transition-colors hover:text-white"
              >
                {c.bookACall}
              </button>
            )}

            {activeSocials.length > 0 && (
              <div className="mt-0.5 flex gap-2.5">
                {activeSocials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] border border-white/[0.12] text-[12px] font-semibold text-[#9c998f] transition-colors hover:border-brand/50 hover:text-white"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-content flex-wrap justify-between gap-3.5 border-t border-white/[0.07] pt-6 text-[13px] text-[#7d7a72]">
        <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
        <span>{c.tagRight}</span>
      </div>
    </footer>
  );
}
