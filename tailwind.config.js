/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAFAF8',
        charcoal: '#1C1C1C',
        gold: '#B8965A',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Cormorant Garamond', 'serif'],
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
