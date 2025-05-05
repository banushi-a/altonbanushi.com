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
    },
  },
  variants: {
    extend: {
      fontSize: ["hover", "focus"],
    },
  },
  plugins: [],
};
