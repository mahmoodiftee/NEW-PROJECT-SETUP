/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#0a0a0a',
          200: '#e5c985',
          300: '#151515',
        },
      },
    },
  },
  plugins: [],
}