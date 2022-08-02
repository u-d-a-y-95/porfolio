/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "canvas": "#0d1117",
        "header":"#161b22",
        "light-white":"#f0f6fc"
      },
    },
  },
  plugins: [],
};
