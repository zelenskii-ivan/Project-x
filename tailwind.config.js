/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mocha: {
          lightest: '#E5DCD6',
          lighter: '#D4C4BC',
          light: '#B4A397',
          DEFAULT: '#967969',
          dark: '#634832',
          darker: '#4A3526',
          deepest: '#2C1810',
          warm: '#A67F6D',
          cool: '#8C7267',
          accent: '#C1B2A6'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair-display)'],
      },
    },
  },
  plugins: [],
} 