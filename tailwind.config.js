module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          lightest: "#464C67",
          light: "#31364D",
          DEFAULT: "#222949",
          dark: "#171E3F",
          darkest: "#0B112F",
        },
        secondary: {
          lightest: "#E3B548",
          light: "#D49E1C",
          DEFAULT: "#AF7F0B",
          dark: "#916600",
          darkest: "#6B4C00",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
