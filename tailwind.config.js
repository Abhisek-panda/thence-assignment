/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        covered: ["Covered By Your Grace", "cursive"],
        switzer: ["Switzer", "sans-serif"],
      },
      boxShadow: {
        "white-shadow": "0px 22.59px 36.14px 0px #1E1E1E17",
        "staff-shadow": "0px 15.21px 35.49px 0px #00000017",
        "green-shadow": " 0px 23.63px 37.81px 0px #1E1E1E17",
      },
    },
  },
  plugins: [],
};
