/* =============================================================================
   SOLO SEND — SINGLE EDIT FILE
   -----------------------------------------------------------------------------
   This is the ONLY file you need to edit to change the website's text, links,
   and settings. Each section below maps to a section on the page. Change the
   words between the "quotes", save, and the site updates.

   Quick map:
     • siteConfig  → identity, SEO, booking link, VSL video, nav, socials, email
     • content     → all the words for every section (hero, problem, services…)

   Tips:
     • Anything in "quotes" is safe to edit.
     • Don't delete the quotes, commas, or square brackets [ ].
     • To leave email / socials empty, just keep them as "" — they auto-hide.
   ========================================================================== */

export const siteConfig = {
  /* ---- IDENTITY ------------------------------------------------------------ */
  name: "Solo Send",
  domain: "solosend.agency",

  // Leave email as "" until your inbox is ready — the contact line hides itself
  // and a "Book a call" link shows instead. Add it later, e.g. "hello@solosend.agency".
  email: "",

  /* ---- SEO (what Google + social previews show) ---------------------------- */
  // Canonical URL of the live site. Update once your domain is connected.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://solosend.agency",

  title: "Solo Send — Klaviyo Email Marketing & Retention for Ecommerce Brands",
  description:
    "Solo Send is a Klaviyo email marketing agency for ecommerce brands. We build the flows, segmentation, and lifecycle automation that recover lost revenue and turn one-time buyers into repeat customers — automatically. Book your free Klaviyo audit.",

  // Niche keywords — the world your agency actually operates in. Add/remove freely.
  keywords: [
    "Klaviyo agency",
    "Klaviyo email marketing",
    "Klaviyo flows",
    "email marketing agency",
    "ecommerce email marketing",
    "Shopify email marketing",
    "retention marketing",
    "lifecycle email marketing",
    "email automation",
    "abandoned cart recovery",
    "welcome flow",
    "browse abandonment flow",
    "post-purchase automation",
    "winback campaign",
    "customer segmentation",
    "repeat purchase",
    "customer lifetime value",
    "ecommerce growth",
    "DTC email marketing",
    "Klaviyo audit",
  ],

  /* ---- BOOKING ------------------------------------------------------------- */
  // Paste your Calendly link here. Every "Book … Audit" button opens it in a popup.
  // (You can also set NEXT_PUBLIC_CALENDLY_URL in Vercel instead of editing this.)
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/replace-this",

  /* ---- VSL (hero video) ---------------------------------------------------- */
  // Leave "" to show the designed video poster (play button opens your booking popup).
  // Paste a YouTube / Vimeo / Loom EMBED url to turn it into a real player, e.g.
  //   "https://www.youtube.com/embed/XXXXXXXXXXX"
  //   "https://player.vimeo.com/video/XXXXXXXXX"
  vslUrl: "",

  /* ---- TOP NAV (header links) ---------------------------------------------- */
  nav: [
    { label: "The Problem", href: "#problem" },
    { label: "What We Do", href: "#services" },
    { label: "Process", href: "#process" },
  ],

  /* ---- SOCIAL LINKS (optional) --------------------------------------------- */
  // Add a real "href" to show an icon. Leave href as "" to hide that one.
  social: [
    { label: "in", name: "LinkedIn", href: "" },
    { label: "X", name: "X", href: "" },
    { label: "IG", name: "Instagram", href: "" },
  ],
};

export type SiteConfig = typeof siteConfig;

/* =============================================================================
   PAGE CONTENT — the words for every section, top to bottom.
   ========================================================================== */
export const content = {
  /* ---- HEADER -------------------------------------------------------------- */
  header: {
    // The button label in the top navigation bar.
    cta: "Book Free Audit",
  },

  /* ---- HERO ---------------------------------------------------------------- */
  hero: {
    badge: "Klaviyo Email Marketing for Ecommerce Brands",
    // The headline is split so the middle phrase can be the orange gradient.
    headlineLead: "Turn One-Time Customers Into ",
    headlineAccent: "Repeat Customers",
    headlineTail: " — Automatically.",
    sub: "Solo Send helps ecommerce brands increase repeat purchases, recover lost revenue, and create automated customer journeys that drive revenue around the clock.",
    primaryCta: "Book Your Free Klaviyo Audit",
    secondaryCta: "Watch how it works",
    specialistsIn: "Specialists in",
    builtFor: "Built for",
    builtForSuffix: "brands",
    vslCaption: "Watch the 2-minute breakdown",
    vslTag: "VSL",
  },

  /* ---- THE PROBLEM --------------------------------------------------------- */
  problem: {
    eyebrow: "We Find the Revenue You're Leaving Behind",
    headingLead: "Most brands install Klaviyo.",
    headingMuted: "Very few build it properly.",
    body: "Your customers are already visiting your store. The question is: what happens after they leave? Most brands are missing key automations, sending generic campaigns, and relying too heavily on paid ads to generate sales. That means revenue is being lost every day. We help fix that.",
    dashboardTitle: "Where your revenue goes",
    dashboardSubtitle: "Watch Solo Send seal the leaks — automatically.",
    withoutLabel: "Without Solo Send",
    withLabel: "With Solo Send",
    // Each row in the animated dashboard. "from" = starting bar width (just visual).
    leaks: [
      { title: "Abandoned carts", sub: "never return", from: 15 },
      { title: "First-time customers", sub: "never buy again", from: 11 },
      { title: "Email", sub: "an expense instead of a revenue channel", from: 18 },
    ],
    implementationsHeading: "First Month Implementations include",
    implementations: [
      "Welcome Flow Optimization",
      "Abandoned Cart Recovery",
      "Browse Abandonment Flows",
      "Post-Purchase Automation",
      "Winback Campaigns",
      "Customer Segmentation",
      "Klaviyo Audits",
    ],
    footnoteLead: "Every month, revenue slips through the cracks.",
    footnoteMuted: "We seal them.",
  },

  /* ---- WHAT WE DO ---------------------------------------------------------- */
  services: {
    eyebrow: "What We Do",
    heading: "The systems that turn subscribers into repeat customers.",
    // 3 cards. (The little icons live in the component; the words live here.)
    items: [
      {
        title: "Klaviyo Audit",
        body: "A complete in-depth review of your Klaviyo account, flows, campaigns, segmentation, and customer journey. We identify missed opportunities and provide a clear roadmap for improvement.",
      },
      {
        title: "Klaviyo Setup & Optimization",
        body: "Whether you're starting from scratch or improving an existing setup, we build the systems that drive repeat purchases and customer retention.",
      },
      {
        title: "Lifecycle Email Marketing",
        body: "We create automated customer journeys designed to increase customer lifetime value and generate more revenue from every subscriber.",
      },
    ],
  },

  /* ---- OUR PROCESS --------------------------------------------------------- */
  process: {
    eyebrow: "Our Process",
    heading: "Exactly what happens after you book.",
    steps: [
      { n: "01", title: "Audit", body: "We analyze your current setup and identify revenue leaks." },
      { n: "02", title: "Strategy", body: "We build a custom roadmap based on your customer journey." },
      { n: "03", title: "Build", body: "We implement flows, segmentation, automations, and optimizations." },
      { n: "04", title: "Launch", body: "Everything is tested and deployed correctly." },
      { n: "05", title: "Optimize", body: "We monitor performance and continuously improve results." },
    ],
  },

  /* ---- THE OUTCOME --------------------------------------------------------- */
  outcomes: {
    eyebrow: "The Outcome",
    heading: "The result is a Klaviyo account that works harder for your business.",
    body: "Every recommendation is based on customer behavior, automation logic, and revenue potential — focused on the systems that keep generating revenue long after an email is sent.",
    items: [
      "Increase repeat purchases",
      "Recover lost revenue",
      "Automated journeys that drive revenue around the clock",
      "Higher customer lifetime value",
    ],
  },

  /* ---- WHY SOLO SEND ------------------------------------------------------- */
  why: {
    eyebrow: "Why Solo Send",
    heading: "A successful Klaviyo account isn't built on campaigns alone.",
    leftLabel: "Most Email Agencies",
    leftBody:
      "Focus on sending emails. They rely on campaigns alone — one send at a time, with no system underneath.",
    rightLabel: "Solo Send",
    rightBody:
      "We build on customer journeys, automation, segmentation, and timing — then focus on the system behind them that continues generating revenue long after an email is sent.",
  },

  /* ---- CTA (free audit) ---------------------------------------------------- */
  cta: {
    eyebrow: "Free Klaviyo Audit",
    heading: "See exactly where your revenue is leaking.",
    body: "If you're unsure whether your Klaviyo setup is performing as well as it should be, start with a free audit. We'll review your account and show you:",
    deliverables: [
      "Missing flows",
      "Revenue opportunities",
      "Optimization recommendations",
      "Quick wins you can implement immediately",
    ],
    button: "Book Your Free Audit",
    reassurance: ["No obligation.", "No pressure.", "Just actionable insights."],
  },

  /* ---- FAQ ----------------------------------------------------------------- */
  faq: {
    heading: "Frequently Asked Questions",
    items: [
      { q: "How long does a typical setup take?", a: "Most projects are completed within 1–3 weeks depending on scope." },
      { q: "Do you work with Shopify brands?", a: "Yes. Solo Send is focused primarily on ecommerce brands using Shopify and Klaviyo." },
      { q: "Do you manage campaigns as well?", a: "Yes. Depending on your needs, we can support both automations and ongoing campaigns." },
      { q: "How do I get started?", a: "Book a free audit and we'll review your setup together." },
    ],
  },

  /* ---- FOOTER -------------------------------------------------------------- */
  footer: {
    tagline: "Building Klaviyo systems that turn subscribers into customers.",
    button: "Book Your Free Audit",
    specialistsIn: "Specialists in",
    // Footer link columns. Use "href" for a jump link, or action:true to open booking.
    columns: [
      {
        heading: "Explore",
        links: [
          { label: "The Problem", href: "#problem" },
          { label: "What We Do", href: "#services" },
          { label: "Our Process", href: "#process" },
        ],
      },
      {
        heading: "Get started",
        links: [
          { label: "Free Audit", href: "#cta" },
          { label: "Book a Call", action: true },
          { label: "FAQ", href: "#faq" },
        ],
      },
    ],
    contactHeading: "Contact",
    bookACall: "Book a Call",
    tagRight: "Klaviyo Email Marketing for Ecommerce Brands",
  },
};

export type Content = typeof content;
