/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        blue:"#3333cc",
        red:"#e60000",
        secondary:"#555",
        primary:"#f2f2f2",

      },
      fontFamily:{
        primary:["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
}

