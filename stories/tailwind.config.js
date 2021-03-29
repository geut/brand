
const colors = require('tailwindcss/colors')
const { colors: { blue, green } } = require('@geut/brand-colors')

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      geutBlue: blue,
      geutGreen: green
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
