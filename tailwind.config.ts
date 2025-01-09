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
        overpass: "var(--font-overpass), sans-serif",
      },
      width: {
        "1/8": "12.5%",
        "1/10": "10%",
        "1/15": "6.666666666666667%",
        "1/20": "5%",
        "5vw": "5vw",
      },
    },
  },
  plugins: [],
} satisfies Config;
