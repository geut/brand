
const colors = require('tailwindcss/colors')
const { palette } = require('@geut/brand-colors')

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      geutBlue: palette.blue,
      geutGreen: palette.green,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
