const plugin = require('tailwindcss/plugin');

const preflightHeaderStyles = plugin(({ addBase, config }) => {
  addBase({
    html: { fontFamily: config('theme.fontFamily.display') },
    body: { fontFamily: config('theme.fontFamily.display') },
    h1: { fontSize: config('theme.fontSize.3xl'), color: config('theme.colors.gray.800') },
    h2: { fontSize: config('theme.fontSize.2xl'), color: config('theme.colors.gray.800') },
    h3: { fontSize: config('theme.fontSize.xl'), color: config('theme.colors.gray.800') },
    h4: { fontSize: config('theme.fontSize.lg'), color: config('theme.colors.gray.800') },
    h5: { fontSize: config('theme.fontSize.base'), color: config('theme.colors.gray.800') },
  });
});

// spacing by 4 up to a multiple of 10
// 0 index is 0, 11 index is 40
const spacing = new Array(11)
  .fill()
  .reduce((result, _, index) => Object.assign(result, { [index]: `${index * 4}px` }), {
    xl: '100px',
  });

// spacing by 5 up to 100
// 0 index is 0, 11 index is 40
const zIndex = new Array(21)
  .fill()
  .reduce((result, _, index) => Object.assign(result, { [index * 5]: index * 5 }), {
    auto: 'auto',
  });

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Lato, Arial, sans-serif'],
    },
    spacing,
    zIndex,
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
      },
      fontSize: {
        xs: '10px',
        sm: '12px',
        md: '14px',
        base: '16px',
        lg: '18px',
        xl: '22px',
        '2xl': '28px',
        '3xl': '32px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    preflightHeaderStyles,
  ],
};
