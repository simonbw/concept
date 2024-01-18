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
      dropShadow: {
        glow: ["0px 0px 2.5px var(--tw-shadow-color)"],
        "svg-glow": [
          "0px 0px 0.025px var(--tw-shadow-color)",
          "0px 0px 0.045px var(--tw-shadow-color)",
          "0px 0px 0.075px var(--tw-shadow-color)",
        ],
        "svg-sm": ["0 0.5px 0.5px rgb(0 0 0 / 0.3)"],
        "svg-md": ["0 0.6px 0.8px rgb(0 0 0 / 0.5)"],
        "svg-lg": ["0 1px 1px rgb(0 0 0 / 0.4)"],
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
