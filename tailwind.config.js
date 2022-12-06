/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        airbnb: "rgba(0, 0, 0, 0.15) 0px 2px 8px;",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
