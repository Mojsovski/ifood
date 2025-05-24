/** @type {import('tailwindcss').Config} */
import { heroui } from "@heroui/react";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
       fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'sans-serif'], // default
        didot: ['"GFS Didot"', 'serif'], // font khusus
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
