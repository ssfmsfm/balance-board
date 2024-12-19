import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "4k": "2560px",
        fullHD: "1920px",
      },
      fontFamily: {
        allenoire: ["var(--font-allenoire)"],
      },
      listStyleType: {
        circle: "circle",
      },
      backgroundColor: {
        main: "#ffe5b9",
        // "classic-red": "red",
      },
      colors: {
        "classic-red": "red",
      },
      spacing: {
        30: "7.5rem",
      },
      transitionProperty: {
        background: "background-color",
      },
      borderRadius: {
        "2.5xl": "1.5rem",
        10: "2.5rem",
        13: "3.25rem",
        15: "3.75rem",
      },
      fontSize: {
        "4.5xl": "2.5rem",
        "7.5xl": "5rem",
      },
      lineHeight: {
        "x-tight": "110% !important",
      },
    },
  },
  plugins: [],
};
export default config;
