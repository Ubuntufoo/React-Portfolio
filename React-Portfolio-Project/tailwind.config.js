//

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswold': ['"Oswald"', "sans-serif"],
        'bebas-neue': ['"Bebas Neue"', 'serif'],
      },
    },
  },
  plugins: [],
}

