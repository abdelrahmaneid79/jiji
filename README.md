# Solo Send — Marketing Website

Production **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion** site for **Solo Send**, a Klaviyo email-marketing & retention agency for ecommerce brands. Built to deploy on **Vercel** and connect to a **GoDaddy** domain.

---

## ✏️ How to edit your site (read this first)

**Almost everything you'll want to change lives in one file:**

```
src/lib/site.ts
```

It's split into two clearly-commented parts:

- **`siteConfig`** — your name, SEO title/description/keywords, booking link, hero video, nav links, social links, and email.
- **`content`** — the actual words for every section, top to bottom (hero, problem, services, process, outcome, why, CTA, FAQ, footer).

Open it, change the text between the `"quotes"`, save, and the page updates live in `npm run dev`. You don't need to touch any component code for normal edits.

**Common edits:**

| I want to change… | Edit this in `src/lib/site.ts` |
| --- | --- |
| Any headline or paragraph | the matching field under `content` |
| The booking link | `siteConfig.calendlyUrl` |
| The hero video | `siteConfig.vslUrl` (see "Hero video" below) |
| SEO title / description / keywords | `siteConfig.title` / `.description` / `.keywords` |
| Top-nav links | `siteConfig.nav` |
| Footer link columns | `content.footer.columns` |
| Your email address | `siteConfig.email` (leave `""` to hide it) |
| Social links | `siteConfig.social` (leave `href: ""` to hide an icon) |
| Brand colors / fonts | `tailwind.config.ts` |

> **Email & socials are intentionally empty right now.** While `email` is `""`, the footer shows a **"Book a Call"** link instead. While a social `href` is `""`, that icon is hidden. Fill them in whenever you're ready — nothing breaks.

### Hero video (VSL)

`siteConfig.vslUrl` controls the hero video:

- Leave it `""` → the designed video poster shows, and its play button opens your booking popup.
- Paste an **embed** URL → it becomes a real player. Use the embed form, e.g.
  - YouTube: `https://www.youtube.com/embed/VIDEO_ID`
  - Vimeo: `https://player.vimeo.com/video/VIDEO_ID`
  - Loom: `https://www.loom.com/embed/VIDEO_ID`

---

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS 3.4**
- **Framer Motion 11** (scroll reveals, hero entrance, micro-interactions)
- **react-calendly** (booking popup)
- **geist** body font + a local **Jane Caps Bold** display font

## Quick start

```bash
npm install
cp .env.local.example .env.local   # optional — or just edit src/lib/site.ts
npm run dev                        # http://localhost:3000
```

## Environment variables (optional)

You can set these in Vercel instead of editing `site.ts`:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_CALENDLY_URL` | Your Calendly scheduling link. |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for SEO, `sitemap.xml`, and `robots.txt`. |

---

## Favicon setup

A vector favicon is already wired in `src/app/layout.tsx`:

```ts
icons: { icon: "/assets/favicon-orange.svg" }
```

The file lives at `public/assets/favicon-orange.svg` (there's also `favicon-grey.svg` available in your brand assets if you prefer it).

**To swap the favicon:** replace `public/assets/favicon-orange.svg` with your file (keep the name), or point `icons.icon` at a new path.

**To add a classic `.ico` / PNG set as well** (best browser/tab coverage):
1. Generate them from your signal mark (e.g. realfavicongenerator.net) → `favicon.ico`, `apple-touch-icon.png`, etc.
2. Drop them into the `public/` folder root.
3. Next.js will serve `public/favicon.ico` automatically; for the apple icon add it to `icons` in `layout.tsx`.

---

## Deploy: GitHub → Vercel → GoDaddy

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Solo Send website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/solosend-website.git
git push -u origin main
```

### 2. Deploy on Vercel
1. Go to **vercel.com → Add New → Project** and **Import** your GitHub repo.
2. Vercel auto-detects Next.js — no build settings to change.
3. (Optional) Under **Settings → Environment Variables**, add `NEXT_PUBLIC_CALENDLY_URL` and `NEXT_PUBLIC_SITE_URL`.
4. Click **Deploy**. You'll get a live `*.vercel.app` URL.

### 3. Connect your GoDaddy domain
1. In Vercel: **Project → Settings → Domains → Add**, enter your domain (e.g. `solosend.agency`). Vercel shows the DNS records to set.
2. In GoDaddy: **My Products → your domain → DNS → Manage DNS**.
3. Point the domain at Vercel using **one** of these:
   - **Apex/root** (`solosend.agency`): add an **A record** → Host `@` → Value `76.76.21.21`.
   - **www** subdomain: add a **CNAME** → Host `www` → Value `cname.vercel-dns.com`.
   *(Use the exact values Vercel displays — they're authoritative if they differ.)*
4. Back in Vercel, wait for the domain to verify (DNS can take from minutes up to ~48h). Vercel issues HTTPS automatically.
5. Update `NEXT_PUBLIC_SITE_URL` (or `siteConfig.url`) to your final domain so SEO/sitemap use it.

---

## Project structure

```
solosend-website/
├─ public/assets/             logos, signal mark, patterns, Shopify mark, favicon, font
├─ src/
│  ├─ app/
│  │  ├─ globals.css          Tailwind layers, keyframes, --seal loop, reduced-motion
│  │  ├─ layout.tsx           fonts, SEO metadata, providers, header/footer
│  │  ├─ page.tsx             composes the landing sections
│  │  ├─ robots.ts            /robots.txt
│  │  └─ sitemap.ts           /sitemap.xml
│  ├─ components/
│  │  ├─ calendly/CalendlyProvider.tsx   booking popup (context + PopupModal)
│  │  ├─ layout/Header.tsx
│  │  ├─ layout/Footer.tsx               email/socials auto-hide when empty
│  │  ├─ sections/Hero.tsx               hero + VSL video slot
│  │  ├─ sections/Problem.tsx            auto-looping "seal the leaks" dashboard
│  │  ├─ sections/Services.tsx
│  │  ├─ sections/Process.tsx            vertical timeline
│  │  ├─ sections/Outcomes.tsx
│  │  ├─ sections/WhySoloSend.tsx
│  │  ├─ sections/CTA.tsx
│  │  ├─ sections/FAQ.tsx
│  │  └─ ui/                  Reveal, BookButton, ScrollProgress, NoiseOverlay, Primitives
│  ├─ fonts/JaneCapsBold.ttf
│  └─ lib/site.ts             ⭐ SINGLE EDIT FILE — all copy, links & settings
├─ tailwind.config.ts         brand palette + fonts
├─ next.config.mjs
└─ tsconfig.json
```

## Brand notes

- Palette and gradient live in `tailwind.config.ts` (`brand`, `offwhite`, `charcoal`) plus a few inline gradients for fidelity to the approved design.
- The looping leak → recovered dashboard is driven by a CSS `@property --seal` animation (no JS), so it stays smooth and battery-friendly.
- All copy comes from the approved Solo Send copy document. Logos and the Jane Caps font are your supplied brand assets, used directly.
