import headlessPlugin from "@headlessui/tailwindcss";
import opentypePlugin from "tailwindcss-opentype";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,js,ts,tsx}"],

  plugins: [opentypePlugin, headlessPlugin],

  theme: {
    screens: {
      xs: "520px",
      ...defaultTheme.screens,
    },

    extend: {
      colors: {
        brown: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#977669",
          800: "#846358",
          900: "#43302b",
        },
      },

      dropShadow: {
        sm: ["1px 2px 2px rgb(0 0 0 / 0.2)"],
        md: ["2px 4px 4px rgb(0 0 0 / 0.22)", "1px 2px 2px rgb(0 0 0 / 0.1)"],
        lg: ["3px 6px 6px rgb(0 0 0 / 0.25)", "1px 2px 2px rgb(0 0 0 / 0.1)"],

        concept: [
          "6px 50% 3px rgb(0 0 0 / 0.25)",
          "2px 2px 1px rgb(0 0 0 / 0.1)",
        ],
      },

      fontSize: {
        xxs: [".625rem", { lineHeight: "0.875rem", letterSpacing: "-0.02rem" }],
        md: defaultTheme.fontSize.base,
      },

      // Allow things like min-w-24
      minWidth: ({ theme }) => ({
        ...theme("spacing"),
      }),
      // Allow things like max-w-24
      maxWidth: ({ theme }) => ({
        ...theme("spacing"),
      }),
    },
  },
};

export default config;
