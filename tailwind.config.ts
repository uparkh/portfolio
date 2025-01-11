// import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        "main-slate": "#1D1D1D",
        "main-ivory": "#D7D7D7",
        "main-silver": "#C4C4C4",
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
        "1vw": "1vw",
        "2vw": "2vw",
        "3vw": "3vw",
        "4vw": "4vw",
        "5vw": "5vw",
        "10vw": "10vw",
        "13vw": "13vw",
        "15vw": "15vw",
        "20vw": "20vw",
        "25vw": "25vw",
        "30vw": "30vw",
        "35vw": "35vw",
        "40vw": "40vw",
        "45vw": "45vw",
        "50vw": "50vw",
        "55vw": "55vw",
        "60vw": "60vw",
        "65vw": "65vw",
        "70vw": "70vw",
        "75vw": "75vw",
        "80vw": "80vw",
        "85vw": "85vw",
        "90vw": "90vw",
        "95vw": "95vw",
      },
      borderWidth: {
        "1": "1px",
      },
    },
  },
} satisfies Config;
