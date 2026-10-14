import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#0e0e0d",
          surface: "#1c1c1a",
          elevated: "#262623",
        },
        accent: {
          safety: "#ff4d00",
          hover: "#e04400",
        },
        text: {
          primary: "#f6f4f0",
          secondary: "#e7e3dc",
          muted: "#8c877f",
          disabled: "#54514c",
        },
        border: {
          subtle: "rgba(231, 227, 220, 0.14)",
          medium: "rgba(231, 227, 220, 0.28)",
          strong: "#e7e3dc",
        },
      },
      fontFamily: {
        anton: ["var(--font-anton)", "Anton", "sans-serif"],
        archivo: ["var(--font-archivo)", "Archivo", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "'JetBrains Mono'", "monospace"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      maxWidth: {
        container: "1320px",
      },
      keyframes: {
        "marquee-rtl": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-ltr": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "marquee-rtl": "marquee-rtl 35s linear infinite",
        "marquee-ltr": "marquee-ltr 35s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
