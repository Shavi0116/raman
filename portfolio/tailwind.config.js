/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
          'press-start': ['"Press Start 2P"', 'cursive'],
        },
        colors: {
          primary: '#00004D',
          secondary: '#779f06',
          background: '#F0E7DA',
        },
      },
    },
    plugins: [],
  }