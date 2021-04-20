module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-1": "#355c7d",
        "primary-2": "#6c5b7b",
        "secondary-1": "#c06c84",
        "secondary-2": "#f67280",
        "tertiary-1": "#f8b195",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
