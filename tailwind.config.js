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
      fontFamily: {
        // Styles
        terminal: ["Perfect DOS", "monospace"],
        segment: ["DS Digi", "monospace"],
      },

      borderColor: ({ theme }) => ({
        DEFAULT: theme("colors.green.500"),
      }),

      boxShadow: {
        glow: "0px 0px 4px 0.25px var(--tw-shadow-color)",
        "inner-md": "inset 0 2px 4px 2px rgb(0 0 0 / 0.25)",
      },

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

      animation: {
        "placeholder-loading":
          "placeholder-loading 2s cubic-bezier(0.4, 0, 0.6, 1) infinite backwards",
        "spin-reverse": "spin-reverse 1s linear infinite backwards",
        dot: "dot 1000ms ease-in-out infinite backwards",
        "dot-1": "dot 1000ms ease-out infinite backwards",
        "dot-2": "dot 1000ms ease-out 200ms infinite backwards",
        "dot-3": "dot 1000ms ease-out 400ms infinite backwards",
        "grow-in-fast": "grow 150ms ease-in-out",
        "grow-in": "grow 300ms ease-in-out",
        "grow-in-slow": "grow 1000ms ease-in-out",
        "shrink-out": "shrink 150ms ease-in-out",
        "shrink-out-slow": "shrink 1000ms ease-in-out",
        "fade-in": "fade-in 300ms ease-in-out",
        "fade-in-slow": "fade-in 1000ms ease-in-out",
      },
      keyframes: {
        dot: {
          "0%, 100%": { transform: "scale(50%)" },
          "30%": { transform: "scale(140%)" },
          "80%": { transform: "scale(60%)" },
        },
        "spin-reverse": {
          from: {
            transform: "rotate(360deg)",
          },
          to: {
            transform: "rotate(0deg)",
          },
        },
        "placeholder-loading": {
          "0%, 100%": {
            opacity: 0.5,
            transform: "scale(100%)",
          },
          "50%": {
            opacity: 1,
            transform: "scale(105%)",
          },
        },
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        grow: {
          from: { transform: "scale(10%)", opacity: 0 },
          to: { transform: "scale(100%)", opacity: 1 },
        },
        shrink: {
          to: { transform: "scale(10%)", opacity: 0 },
        },
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
