module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "var(--theme-primary)",
      secondary: "var(--theme-secondary)",
      accent: "var(--theme-accent)",
      "accent-light": "var(--theme-accent-light)",
      white: "white",
      "text-base": "var(--theme-test-base)",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
