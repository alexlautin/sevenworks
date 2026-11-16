import type { Config } from "tailwindcss";

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        muted: token("surface-muted"),
        line: token("border"),
        ink: token("text"),
        subtle: token("text-muted"),
        accent: token("accent"),
        "accent-ink": token("accent-ink"),
        primary: token("primary"),
        "on-primary": token("on-primary"),
        // brand colours kept for reference
        navy: "#2b2d42",
        rose: "#E6BDB9",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      boxShadow: {
        page: "0 1px 2px rgb(16 17 30 / 0.06), 0 12px 32px -8px rgb(16 17 30 / 0.18)",
        soft: "0 1px 2px rgb(16 17 30 / 0.05), 0 4px 16px -6px rgb(16 17 30 / 0.12)",
      },
    },
  },
  plugins: [],
} satisfies Config;
