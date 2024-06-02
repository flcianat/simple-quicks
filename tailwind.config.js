/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      white: "#FFF",
      primary: {
        blue: "#2F80ED",
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
    },
  },
  plugins: [],
};
