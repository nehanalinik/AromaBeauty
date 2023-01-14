/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      smd: "600px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#FE9F81",
        primaryBlue: "#466493",
        lightPrimary: "#FEECE6",
        secondaryWhite: "#FFFCF9",
        secondaryBlack: "#2E2E2E",
        accentBlue: "#7EC9CF",
        accentYellow: "#FFBA69",
        accentBlueDark: "#53B3BB",
        accentYellowDark: "#D6903E",
        lightWhite: "#FBFBFB",
      },
    },
  },
  plugins: [],
};
