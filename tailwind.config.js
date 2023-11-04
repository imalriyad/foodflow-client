/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      mainColor: "#FEA116",
      light: "#F1F8FF",
      dark: "#0F172B",
    },
  },
  plugins: [require("daisyui")],
};
