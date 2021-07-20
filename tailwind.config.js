module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-1": "#0f4c81",
        "primary-2": "#0094fa",
        "background-1": "#f1f1e6",
        "background-2": "#fff7d6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
