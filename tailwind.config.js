/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5B5CE2",
        primaryOpacity: "#6C6DE5",
        secondary: "#1BC58D",
        title: "#212121",
        text: "#B5B5C3",
        red: "#F1419D"
      }
    },
  },
  plugins: [],
}