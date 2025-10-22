import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          lilac: "#B469FF",           // Yeni ana lila (Canva'dan)
          "lilac-light": "#D4B5FF",   // Açık versiyonu
          "lilac-dark": "#9747FF",    // Koyu versiyonu
          charcoal: "#2C2C2C",
          cream: "#FAF8F5",
          stone: "#8B8680",
        },
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        inter: ["var(--font-inter)"],
      },
      fontSize: {
        "display-lg": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "display-sm": ["2rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      borderRadius: {
        subtle: "0.125rem",
      },
    },
  },
  plugins: [],
}
export default config;