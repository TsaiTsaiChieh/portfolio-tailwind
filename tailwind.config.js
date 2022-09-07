/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      height: {
        'screen-1/2': '50vh'
      },
      screens: {
        sm: "480px",
      },
      spacing: {
        big: '48rem'
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif']
      }
    },
  },
  plugins: [],
}
