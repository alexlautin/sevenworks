import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: '#2b2d42',
        lightRed: '#ef233c',
        offWhite: '#edf2f4',
        darkRed: '#91031b',
        lightGray: '#8d99ae',
        mediumGray: '#454545',
        darkGray: '#363636',
        highlightGray: '#666666'
      },
      fontFamily: {
        "markazi": "var(--font-markazi)",
        "inter": "var(--font-inter)",
      },
    },
  },
  plugins: [],
} satisfies Config;
