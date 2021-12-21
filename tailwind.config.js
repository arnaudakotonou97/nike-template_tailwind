const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      brown: '#B6A179',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      cyan: colors.cyan,
      indigo: colors.indigo,
      yellow: colors.yellow,
    }
  
  },
  plugins: [],
}
