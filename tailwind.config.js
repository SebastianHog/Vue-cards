/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.hmtl", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#353535",
        secondary: "#7d80da",
        tertiary: "#FFFFFF",
        quaternary: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
