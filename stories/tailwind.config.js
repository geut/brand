
const colors = require('tailwindcss/colors')
const { palette } = require('@geut/brand-colors')

module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    colors: {
      ...colors,
      geutBlue: palette.blue,
      geutGreen: palette.green,
      lightBlue: colors.sky,
      warmGray: colors.stone,
      trueGray: colors.neutral,
      coolGray: colors.gray,
      blueGray: colors.slate
    },
    extend: {},
  },
  plugins: [
  ],
}