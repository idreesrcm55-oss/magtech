/** @type {import('tailwindcss').Config} */
// Colors come from CSS variables in src/index.css — edit them there to re-theme the site.
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          dark: "rgb(var(--color-primary-dark) / <alpha-value>)",
        },
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        dark: "rgb(var(--color-dark) / <alpha-value>)",
        body: "rgb(var(--color-body) / <alpha-value>)",
        light: "rgb(var(--color-light) / <alpha-value>)",
        danger: "rgb(var(--color-danger) / <alpha-value>)",
        gold: "rgb(var(--color-gold) / <alpha-value>)",
        overlay: "rgb(var(--color-overlay) / <alpha-value>)",
        white: "rgb(var(--color-white) / <alpha-value>)",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        sans: ["\"Open Sans\"", "sans-serif"],
      },
      container: { center: true, padding: "1rem" },
    },
  },
  plugins: [],
};
