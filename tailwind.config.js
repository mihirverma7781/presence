module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#dd0069",
      secondary: "#02073e",
      background: "#f6f8fb",
      "muted-text": "#566272",
      shadow: "#3062901e",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      white: "#ffffff",
      black: "#00000",
      bs: "#020718",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
