/** @type {import('tailwindcss').Config} */
// const { colors: defaultColors } = require("tailwindcss/defaultTheme");
const colors = {
  white: "#FFF",
  primary: {
    blue: {
      100: "#2F80ED",
      200: "#2f60ed",
    },
    gray: {
      300: "#4F4F4F",
      200: "#828282",
      100: "#E0E0E0",
    },
  },
  indicator: {
    orange: "#F8B76B",
    purple: "#8785FF",
    red: "#EB5757",
    yellow: "#F2C94C",
  },
  chat: {
    base: {
      orange: "#FCEED3",
      purple: "#EEDCFF",
      green: "#D2F2EA",
    },
    accent: {
      orange: "#E5A443",
      purple: "#9B51E0",
      green: "#43B78D",
    },
  },
  sticker: {
    blue: "#E9F3FF",
    orange: "#FDCFA4",
    yellow: "#F9E9C3",
    tosca: "#AFEBDB",
    green: "#CBF1C2",
    purple: "#CFCEF9",
    fuchsia: "#F9E0FD",
  },
};

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: colors,
    },
  },
  plugins: [require("tailwindcss-animate")],
};
