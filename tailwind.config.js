const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-dark-blue": "#1c1c41",
        "my-pink": "#e13ee5",
        "my-blue": "#0798f9",
        "my-green": "#41ff11",
        "my-dark-green": "#00b362",
        "my-teal": "#3d7fff",
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
