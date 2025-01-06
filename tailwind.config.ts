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
        "main-slate": "#1D1D1D",
        "main-ivory": "#D7D7D7",
      },
      letterSpacing: {
        canyon: "0.3em",
      },
      fontFamily: {
        raleway: "var(--font-raleway), sans-serif",
        montserrat: "var(--font-montserrat), sans-serif",
        "open-sans": "var(--font-open-sans), sans-serif",
      },
    },
  },
  plugins: [],
} satisfies Config;
