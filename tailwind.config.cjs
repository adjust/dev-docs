/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme("colors"),
      success: "#d4f8f2",
      primary: "#ddebf9",
      neutral: "#eceef4",
      negative: "#ffe8ee",
      warning: "#f9ebd6",
    }),
    colors: {
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
