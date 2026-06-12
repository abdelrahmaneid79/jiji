import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Solo Send brand palette
        ink: "#000000",
        charcoal: "#333333",
        white: "#FEFEFE",
        offwhite: "#F2EFEB",
        brand: {
          DEFAULT: "#FF4300", // primary orange
          red: "#FF0000",
          orange: "#FF7800",
          ember: "#FF1E00",
          glow: "#FF6A2A",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        display: ["var(--font-jane)", "var(--font-geist)", "sans-serif"],
      },
      maxWidth: {
        site: "1240px",
        content: "1180px",
      },
      boxShadow: {
        cta: "0 12px 36px rgba(255,67,0,.34), inset 0 1px 0 rgba(255,255,255,.22)",
        "cta-hover": "0 18px 60px rgba(255,67,0,.62), inset 0 1px 0 rgba(255,255,255,.3)",
        "card-glow": "0 24px 70px -28px rgba(255,67,0,.4)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg,#FF7800,#FF1E00)",
        "brand-text": "linear-gradient(100deg,#FF0000,#FF7800 55%,#FF1E00)",
      },
    },
  },
  plugins: [],
};

export default config;
