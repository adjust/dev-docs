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
    fontFamily: {
      body: ["ttnormspro, Helvetica, sans-serif"],
      sans: ["Droid Sans Mono, monospace"],
      mono: [
        "IBM Plex Mono",
        "Consolas",
        "Andale Mono WT",
        "Andale Mono",
        "Lucida Console",
        "Lucida Sans Typewriter",
        "DejaVu Sans Mono",
        "Bitstream Vera Sans Mono",
        "Liberation Mono",
        "Nimbus Mono L",
        "Monaco",
        "Courier New",
        "Courier",
        "monospace",
      ],
    },

    extend: {
      spacing: {
        "external-toc": "calc(100vw - (100vw - 100rem + 1rem)/ 2)",
        "open-toc": "calc(100vw - 19rem - (100vw - 100rem + 1rem)/2)",
        "closed-toc": "calc(100vw - 2rem - (100vw - 100rem + 1rem)/2)",
        "toc-closed-article": "calc(100% - 2rem)",
        "toc-open-article": "calc(100% - 19rem)",
      },
      backgroundColor: {
        "body-main": "#f9fafb",
        success: "#d4f8f2",
        primary: "#ddebf9",
        neutral: "#eceef4",
        negative: "#ffe8ee",
        warning: "#f9ebd6",
        secondary: "#F9FAFC",
        code: "#6E7D911A",
        selection: "hsla(212, 100%, 61%, 0.15)",
        quote: "hsla(215, 14%, 95%, 1)",
        blue: {
          light: "#F4F7FD",
          30: "hsla(220.65, 100%, 93.92%, 1)",
        },
        callout: {
          note: "#ddebf9",
          info: "#eceef4",
          tip: "#d4f8f2",
          warning: "#ffe8ee",
          important: "#f9ebd6",
          seealso: "#d4f8f2",
        },
      },
      colors: {
        "link-active": "#0B58FE",
        white: "#FFFFFF",
        black: "#16191d",
        blue: {
          DEFAULT: "hsla(212, 100%, 61%, 1)",
          5: "hsla(212, 100%, 5%, 1)",
          10: "hsla(212, 100%, 10%, 1)",
          20: "hsla(212, 100%, 20%, 1)",
          30: "hsla(212, 100%, 30%, 1)",
          40: "hsla(212, 100%, 40%, 1)",
          50: "hsla(212, 100%, 50%, 1)",
          60: "hsla(212, 100%, 60%, 1)",
          70: "hsla(212, 100%, 70%, 1)",
          80: "hsla(212, 100%, 80%, 1)",
          90: "hsla(212, 100%, 90%, 1)",
          95: "hsla(212, 100%, 95%, 1)",
        },
        gray: {
          DEFAULT: "hsla(215, 14%, 100, 1)",
          5: "hsla(215, 14%, 5%, 1)",
          10: "hsla(215, 14%, 10%, 1)",
          20: "hsla(215, 14%, 20%, 1)",
          30: "hsla(215, 14%, 30%, 1)",
          40: "hsla(215, 14%, 40%, 1)",
          50: "hsla(215, 14%, 50%, 1)",
          60: "hsla(215, 14%, 60%, 1)",
          70: "hsla(215, 14%, 70%, 1)",
          80: "hsla(215, 14%, 80%, 1)",
          90: "hsla(215, 14%, 90%, 1)",
          95: "hsla(215, 14%, 95%, 1)",
        },
        green: {
          DEFAULT: "hsla(158, 79%, 100%, 1)",
          5: "hsla(158, 79%, 5%, 1)",
          10: "hsla(158, 79%, 10%, 1)",
          20: "hsla(158, 79%, 20%, 1)",
          30: "hsla(158, 79%, 30%, 1)",
          40: "hsla(158, 79%, 40%, 1)",
          50: "hsla(158, 79%, 50%, 1)",
          60: "hsla(158, 79%, 60%, 1)",
          70: "hsla(158, 79%, 70%, 1)",
          80: "hsla(158, 79%, 80%, 1)",
          90: "hsla(158, 79%, 90%, 1)",
          95: "hsla(158, 79%, 95%, 1)",
        },
        orange: {
          DEFAULT: "hsla(22, 100%, 100%, 1)",
          5: "hsla(22, 100%, 5%, 1)",
          10: "hsla(22, 100%, 10%, 1)",
          20: "hsla(22, 100%, 20%, 1)",
          30: "hsla(22, 100%, 30%, 1)",
          40: "hsla(22, 100%, 40%, 1)",
          50: "hsla(22, 100%, 50%, 1)",
          60: "hsla(22, 100%, 60%, 1)",
          70: "hsla(22, 100%, 70%, 1)",
          80: "hsla(22, 100%, 80%, 1)",
          90: "hsla(22, 100%, 90%, 1)",
          95: "hsla(22, 100%, 95%, 1)",
        },
        purple: {
          DEFAULT: "hsla(269, 79%, 100%, 1)",
          5: "hsla(269, 79%, 5%, 1)",
          10: "hsla(269, 79%, 10%, 1)",
          20: "hsla(269, 79%, 20%, 1)",
          30: "hsla(269, 79%, 30%, 1)",
          40: "hsla(269, 79%, 40%, 1)",
          50: "hsla(269, 79%, 50%, 1)",
          60: "hsla(269, 79%, 60%, 1)",
          70: "hsla(269, 79%, 70%, 1)",
          80: "hsla(269, 79%, 80%, 1)",
          90: "hsla(269, 79%, 90%, 1)",
          95: "hsla(269, 79%, 95%, 1)",
        },
        red: {
          DEFAULT: "hsla(351, 100%, 100%, 1)",
          5: "hsla(351, 100%, 5%, 1)",
          10: "hsla(351, 100%, 10%, 1)",
          20: "hsla(351, 100%, 20%, 1)",
          30: "hsla(351, 100%, 30%, 1)",
          40: "hsla(351, 100%, 40%, 1)",
          50: "hsla(351, 100%, 50%, 1)",
          60: "hsla(351, 100%, 60%, 1)",
          70: "hsla(351, 100%, 70%, 1)",
          80: "hsla(351, 100%, 80%, 1)",
          90: "hsla(351, 100%, 90%, 1)",
          95: "hsla(351, 100%, 95%, 1)",
        },
        yellow: {
          DEFAULT: "hsla(41, 100%, 100%, 1)",
          5: "hsla(41, 100%, 5%, 1)",
          10: "hsla(41, 100%, 10%, 1)",
          20: "hsla(41, 100%, 20%, 1)",
          30: "hsla(41, 100%, 30%, 1)",
          40: "hsla(41, 100%, 40%, 1)",
          50: "hsla(41, 100%, 50%, 1)",
          60: "hsla(41, 100%, 60%, 1)",
          70: "hsla(41, 100%, 70%, 1)",
          80: "hsla(41, 100%, 80%, 1)",
          90: "hsla(41, 100%, 90%, 1)",
          95: "hsla(41, 100%, 95%, 1)",
        },
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
        neutral: {
          30: "#e0e2ec",
        },
      },
      fontSize: {
        "heading-1": ["45px", { lineHeight: "49px" }],
        "heading-2": ["33px", { lineHeight: "37px" }],
        "heading-3": ["25px", { lineHeight: "29.5px" }],
        "heading-4": ["22px", { lineHeight: "25.5px" }],
        "heading-5": ["16px", { lineHeight: "20px" }],
      },
      fontWeight: {
        link: "450",
      },
      margin: {
        code: "calc(0.2rem * -1) -0.125em",
      },
      textColor: {
        secondary: "#565C78",
        primary: "#191D2F",
        "search-primary": "#252525",
        success: "#04585c",
        primary: "#0c2663",
        neutral: "#21253a",
        negative: "#660835",
        warning: "#664b29",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("sidebar-open", ".mobile-sidebar-toggle &");
    },
    function ({ addVariant }) {
      addVariant("not-first", "&:not(:first-child)");
    },
    function ({ addVariant }) {
      addVariant("not-last", "&:not(:last-child)");
    },
  ],
};
