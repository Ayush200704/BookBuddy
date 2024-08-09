/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#FA7C54',
        'custom-gray': '#F3F3F7',
        'custom-gray2': '#4D4D4D',
        'grad1': '#EB5231',
        'grad2': '#571FCF'
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'slabo': ['Slabo 27px', 'serif'],
      },
    },
  },
  plugins: [],
}

