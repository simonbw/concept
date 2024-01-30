import headlessPlugin from "@headlessui/tailwindcss";
import opentypePlugin from "tailwindcss-opentype";
import typeographyPlugin from "@tailwindcss/typography";
import defaultTheme from "tailwindcss/defaultTheme";
import { tailwindSvgStopsPlugin } from "./src/client/utils/tailwind-svg-stops";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,js,ts,tsx}"],

  plugins: [
    opentypePlugin,
    headlessPlugin,
    typeographyPlugin,
    tailwindSvgStopsPlugin,
  ],

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
        sm: ["1px 2px 2px rgb(0 0 0 / 0.3)"],
        "sm-strong": [
          "1px 2px 2px rgb(0 0 0 / 0.7)",
          "1px 2px 0.5px rgb(0 0 0 / 0.3)",
        ],
        md: ["2px 4px 4px rgb(0 0 0 / 0.25)", "1px 2px 2px rgb(0 0 0 / 0.15)"],
        "md-strong": [
          "2px 4px 4px rgb(0 0 0 / 0.6)",
          "1px 2px 2px rgb(0 0 0 / 0.3)",
        ],
        lg: ["3px 6px 6px rgb(0 0 0 / 0.25)", "1px 2px 2px rgb(0 0 0 / 0.1)"],
        "lg-strong": [
          "3px 6px 6px rgb(0 0 0 / 0.5)",
          "1px 2px 2px rgb(0 0 0 / 0.2)",
        ],
        concept: [
          "6px 50% 3px rgb(0 0 0 / 0.25)",
          "2px 2px 1px rgb(0 0 0 / 0.1)",
        ],
        fire: [
          "0 0 1px rgba(255, 208, 0, 1)",
          "0 0 2px rgba(255, 208, 0, 1)",
          "0 0 4px rgba(255, 208, 0, 1)",
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
