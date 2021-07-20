module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: {
      darkGray: "#2D2D2D",
      red: "red",
    },
    borderRadius: {
      user: "3px",
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },
    extend: {
      spacing: {
        content: "40rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
