/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0f",
        secondary: "#9ca3af",
        tertiary: "#1a1a2e",
        accent: "#00d4ff",
        "accent-dark": "#0099cc",
        "black-100": "#16213e",
        "black-200": "#0f172a",
        "white-100": "#f8fafc",
        "gray-800": "#1e293b",
        "gray-700": "#334155",
      },
      boxShadow: {
        card: "0px 25px 80px -15px rgba(0, 0, 0, 0.4)",
        "card-hover": "0px 35px 100px -10px rgba(0, 212, 255, 0.2)",
        glow: "0 0 20px rgba(0, 212, 255, 0.3)",
        "glow-intense": "0 0 40px rgba(0, 212, 255, 0.5)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/stars2.jpg')",
      },
    },
  },
  plugins: [],
};