const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: 'class',
  content: [ "./src/**/*.{html,ts}",],
  theme: {
    extend: {
      colors: {
        slate: colors.slate,
        sky: colors.sky,
        purple: colors.purple,
      }
    },
    colors: {
      // primary: '#529747',
      // secondary: '#2687c6',

      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    }
  },
  plugins: [],
}