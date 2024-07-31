/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#FA7C54'
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'slabo': ['Slabo 27px', 'serif'],
      },
    },
  },
  plugins: [],
}

