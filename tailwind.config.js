/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      boxShadow: {
        xxx: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
      },
      colors: {
        primary: '#fbbf24',
        dark: '#0f172a',
      }
    },
  },
  plugins: [],
}

