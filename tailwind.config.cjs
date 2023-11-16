  /** @type {import('tailwindcss').Config} */
  const defaultTheme = require("tailwindcss/defaultTheme");
  const colors = require("tailwindcss/colors");
  module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        animation: {
          marquee: 'marquee 25s linear infinite',
          marquee2: 'marquee2 25s linear infinite',
          scroller3: 'scroller3 25s linear infinite',
          'spin-slow': 'spin 4s linear infinite',
          'spin-slower': 'spin 6s linear infinite',
          'spin-reverse': 'spin-reverse 1s linear infinite',
          'spin-reverse-slow': 'spin-reverse 4s linear infinite',
          'spin-reverse-slower': 'spin-reverse 6s linear infinite',
          scroller: 'scroller 15s linear infinite',
          scroller2: 'scroller2 20s linear infinite',
          'fade-in': 'fade-in 0.5s linear forwards',
        },
        keyframes: {
          marquee: {
            '0%': {
              transform: 'translateX(0%)'
            },
            '100%': {
              transform: 'translateX(-100%)'
            },
          },
          marquee2: {
            '0%': {
              transform: 'translateX(100%)'
            },
            '100%': {
              transform: 'translateX(0%)'
            },
          },
          scroller: {
            '0%': {
              transform: 'translateY(10em)'
            },
            '100%': {
              transform: 'translateY(-14em)'
            },
          },
          scroller2: {
            '0%': {
              transform: 'translateY(10em)'
            },
            '100%': {
              transform: 'translateY(-14em)'
            },
          },
          'fade-in': {
            from: {
              opacity: 0,
            },
            to: {
              opacity: 1,
            },
          },
          scroller3: {
            '100%': {
              transform: 'translateY(-50%)',
            },
          },
          'spin-reverse': {
            to: {
              transform: 'rotate(-360deg)',
            },
          },
        },
        backgroundImage: (theme) => ({

            // Blue Gradient
          gradientdown: "radial-gradient(140% 107.13% at 50% 10%,transparent 37.41%,#364ef580 69.27%,#6698ff 100%);",
          gradientup: "radial-gradient(131.66% 109.77% at 50% 97.75%, transparent 37.41%,#364ef580   69.27%,  #6698ff 100%);",
// Monochrome gradient
          grayGradientdown: "radial-gradient(140% 107.13% at 50% 10%,transparent 37.41%,#33333380 69.27%,#555555 100%);",
          grayGradientup: "radial-gradient(131.66% 109.77% at 50% 97.75%, transparent 37.41%,#33333380   69.27%,  #555555 100%);",

        }),
        boxShadow: {
          thick: "0px 7px 32px rgb(0 0 0 / 35%);",
          inset: "inset 6px 84px 79px -40px hsla(0,0%,100%,.025), inset 0 -4px 1px -3px hsla(0,0%,100%,.25), inset 0 4px 1px -3px hsla(0,0%,100%,.25);",
        },
        colors: {
            black: "#0f1014",
          ebony: "#1a1c23",
          mirage: "#27292D",
           //
         //black: "#191919",
          //ebony: "#272727",
          //mirage: "#333333",
          accent: {
            50: "#ECEEFE",
            100: "#D8DDFD",
            200: "#ACB7FB",
            300: "#8695F9",
            400: "#5F73F7",
            500: "#364EF5",
            600: "#0B28E4",
            700: "#081EAA",
            800: "#061470",
            900: "#030A3A",
            950: "#01051D"
          },

        },
        borderRadius: {
          "4xl": "2rem",
          "5xl": "3rem",
          "6xl": "5rem",
        },
        fontFamily: {
          display: ["Polysans", ...defaultTheme.fontFamily.sans],
          sans: ["Inter", ...defaultTheme.fontFamily.sans],
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('tailwind-scrollbar-hide')
    ]
  }
