/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "320px",
      // => @media (min-width: 320px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1024px) { ... }

      xxl: "1600px",
      // => @media (min-width: 1280px) { ... }
      xxxl: "2200px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
    fontFamily: {
      body: ["ttnormspro, Helvetica, sans-serif"],
      sans: ["Droid Sans Mono, monospace"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      success: "#d4f8f2",
      primary: "#ddebf9",
      neutral: "#eceef4",
      negative: "#ffe8ee",
      warning: "#f9ebd6",
      secondary: "#F9FAFC",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      secondary: "#565C78",
    }),
    colors: {
      "link-active": "#0B58FE",
      white: "#FFFFFF",
      "icon-neutral": "#6E7492",
      headers: {
        success: "#04585c",
        primary: "#0c2663",
        neutral: "#21253a",
        negative: "#660835",
        warning: "#664b29",
      },
      icons: {
        success: "rgb(6, 166, 147);",
        primary: "rgb(31, 81, 217)",
        neutral: "rgb(86, 92, 120)",
        negative: "rgb(203, 55, 99)",
        warning: "rgb(193, 134, 47)",
      },
    },
  },
  plugins: [],
};
