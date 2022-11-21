module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors : {
      "primary": "#dd0069",
      "secondary": "#02073e",
      "background": "#f6f8fb",
      "muted-text": '#566272',
      "shadow": "#3062901e",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
