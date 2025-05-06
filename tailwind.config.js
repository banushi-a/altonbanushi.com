const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-green": "#41ff11",
        "my-teal": "#3ca6b9",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        abril: ["Abril Fatface", ...defaultTheme.fontFamily.serif],
      },
      animation: {
        "grow-shrink":
          "grow-shrink var(--animation-duration) infinite cubic-bezier(0.42, 0, 0.58, 1)",
      },
      keyframes: {
        "grow-shrink": {
          "0%, 100%": { transform: "scale(var(--scale-start))" },
          "50%": { transform: "scale(var(--scale-end))" },
        },
      },
    },
  },
  variants: {
    extend: {
      fontSize: ["hover", "focus"],
    },
  },
  plugins: [],
};
