const colors = require("tailwindcss/colors");

module.exports = {
  content: [ "./src/**/*.{html,ts}",],
  theme: {
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