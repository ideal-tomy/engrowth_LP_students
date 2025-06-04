/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'primary': '#d50006',
        'neutral': '#6A6A6A',
      },
      fontFamily: {
        'serif-jp': ['"Noto Serif JP"', 'serif'],
        'sans-jp': ['"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
