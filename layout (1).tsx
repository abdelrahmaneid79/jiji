import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { CalendlyProvider } from "@/components/calendly/CalendlyProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

const janeCaps = localFont({
  src: "../fonts/JaneCapsBold.ttf",
  weight: "700",
  display: "swap",
  variable: "--font-jane",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Solo Send | Klaviyo Email Marketing for Ecommerce Brands",
    template: "%s | Solo Send",
  },
  description:
    "Turn one-time customers into repeat customers automatically. Solo Send helps ecommerce brands recover lost revenue, increase repeat purchases, and build Klaviyo automations that drive revenue around the clock.",
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Solo Send | Klaviyo Email Marketing for Ecommerce Brands",
    description:
      "Turn one-time customers into repeat customers automatically. Solo Send helps ecommerce brands recover lost revenue, increase repeat purchases, and build Klaviyo automations that drive revenue around the clock.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solo Send | Klaviyo Email Marketing for Ecommerce Brands",
    description:
      "Turn one-time customers into repeat customers automatically. Solo Send helps ecommerce brands recover lost revenue, increase repeat purchases, and build Klaviyo automations that drive revenue around the clock.",
  },
  icons: {
    icon: [
      { url: "/assets/favicon-grey.svg", type: "image/svg+xml" },
    ],
    shortcut: "/assets/favicon-grey.svg",
    apple: "/assets/favicon-grey.svg",
    other: [
      { rel: "mask-icon", url: "/assets/favicon-grey.svg" },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${janeCaps.variable}`}
      style={{ "--font-geist": GeistSans.style.fontFamily } as React.CSSProperties}
    >
      <body className="bg-ink text-white antialiased">
        <CalendlyProvider>
          <NoiseOverlay />
          <ScrollProgress />
          <Header />
          <main className="relative">{children}</main>
          <Footer />
        </CalendlyProvider>
      </body>
    </html>
  );
}
