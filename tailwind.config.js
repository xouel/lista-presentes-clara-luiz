/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7F1E7',
        'cream-dark': '#EFE5D3',
        brown: '#6B4226',
        'brown-light': '#8B5A3C',
        ink: '#3A2A1E',
      },
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
