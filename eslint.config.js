/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class", // enable dark mode
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5", // Indigo
        secondary: "#6366f1",
      },
    },
  },
  plugins: [],
};
