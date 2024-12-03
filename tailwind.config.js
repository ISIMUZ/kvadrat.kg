/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors')

const colors = {
  transparent: twColors.transparent,
  black: '#292c32',
  red: '#e90000',
  white: twColors.white,
  'bg-color': '#F2F2F5',
  'address-color': '#cdd0d4'
}

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors,
    extend: {
      fontSize: {
        xs: '13px',
        base: '15px',
        lg: '17px',
      },
    },
  },
  plugins: [],
}

