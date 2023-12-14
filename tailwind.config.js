/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kumbh Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "primary-orange": "hsl(var(--primary-orange) / <alpha-value>)",
        "primary-pale-orange":
          "hsl(var(--primary-pale-orange) / <alpha-value>)",
        "neutral-very-dark-blue":
          "hsl(var(--neutral-very-dark-blue) / <alpha-value>)",
        "neutral-dark-grayish-blue":
          "hsl(var(--neutral-dark-grayish-blue) / <alpha-value>)",
        "neutral-grayish-blue": "hsl(var(--neutral-grayish-blue))",
        "neutral-light-grayish-blue":
          "hsl(var(--neutral-light-grayish-blue) / <alpha-value>)",
        "neutral-white": "hsl(var(--neutral-white) / <alpha-value>)",
        "neutral-black": "hsl(var(--neutral-black) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
