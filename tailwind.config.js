const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
    },
  },
  variants: {},
  plugins: [],
};
