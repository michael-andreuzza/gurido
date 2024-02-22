/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        // Buio
        gradientdown:
          "radial-gradient(140% 107.13% at 50% 10%,transparent 37.41%,#364ef580 69.27%,#6698ff 100%);",
        gradientup:
          "radial-gradient(131.66% 109.77% at 50% 97.75%, transparent 37.41%,#364ef580   69.27%,  #6698ff 100%);",
      }),
      boxShadow: {
        thick: "0px 7px 32px rgb(0 0 0 / 35%);",
        inset:
          "inset 6px 84px 79px -40px hsla(0,0%,100%,.025), inset 0 -4px 1px -3px hsla(0,0%,100%,.25), inset 0 4px 1px -3px hsla(0,0%,100%,.25);",
      },
      colors: {
        black: "#0f1014",
        ebony: "#1a1c23",
        mirage: "#27292D",
        grass: "#279e54",
        // Buio
        blue: {
          50: "#ecf4ff",
          100: "#ddebff",
          200: "#c1d8ff",
          300: "#9bbfff",
          400: "#7498ff",
          500: "#5374ff", //default
          600: "#3c51f7",
          700: "#2839da",
          800: "#2332b0",
          900: "#25338a",
          950: "#161d50",
        },
        yellow: {
          50: "#fefbec",
          100: "#fcf1c9",
          200: "#fae28d",
          300: "#f7cd52",
          400: "#f5ba30", //default
          500: "#ee9812",
          600: "#d3730c",
          700: "#af510e",
          800: "#8e3e12",
          900: "#753412",
          950: "#431a05",
        },
        green: {
          50: "#f1fcf5",
          100: "#dff9e8",
          200: "#c1f1d2",
          300: "#91e4b0",
          400: "#59cf85",
          500: "#33b463",
          600: "#279e54", //default
          700: "#207541",
          800: "#1e5d37",
          900: "#1b4c2e",
          950: "#092a17",
        },
        orange: {
          50: "hsl(22, 100%, 96%)",
          100: "hsl(25, 100%, 91%)",
          200: "hsl(22, 100%, 82%)",
          300: "hsl(20, 100%, 71%)",
          400: "hsl(16, 100%, 60%)",
          500: "hsl(14, 100%, 52%)",
          600: "hsl(9, 100%, 50%)", //default
          700: "hsl(6, 98%, 40%)",
          800: "hsl(4, 87%, 34%)",
          900: "hsl(4, 83%, 28%)",
          950: "hsl(1, 89%, 15%)",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
        "6xl": "5rem",
      },
      fontFamily: {
        sans: ["Atipla ND", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
  ],
};
