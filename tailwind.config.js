import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bell: "bell 1s infinite",
      },
      width: {
        "1/5.5": "22%",
      },
      maxWidth: {
        xxs: "240px",
      },
      keyframes: {
        bell: {
          "0%": { transform: "rotate(8deg)" },
          "50%": { transform: "rotate(-8deg)" },
          "100%": { transform: "rotate(8deg)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
