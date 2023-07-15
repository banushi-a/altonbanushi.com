/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-dark-blue": "#1c1c41",
        "my-pink": "#e13ee5",
        "my-blue": "#0798f9",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
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
