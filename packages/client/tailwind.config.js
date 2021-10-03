module.exports = {
  purge: {
    enabled: process.env === 'production',
    content: ['./src/**/*.html', './src/**/*.scss']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
