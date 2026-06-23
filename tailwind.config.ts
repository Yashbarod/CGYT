import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        flame: {
          50: "#fff8f1",
          100: "#feecda",
          200: "#fcd5b0",
          300: "#f9b77d",
          400: "#f59047",
          500: "#f27021",
          600: "#e35413",
          700: "#bc3d12",
          800: "#963216",
          900: "#7a2b15",
          950: "#421308",
        },
        gold: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
        charcoal: {
          900: "#0f0f0f",
          800: "#1a1a1a",
          700: "#2d2d2d",
          600: "#404040",
          500: "#525252",
          400: "#737373",
          300: "#a3a3a3",
        },
        cream: {
          50: "#fffdf9",
          100: "#fff8f0",
          200: "#fef0dc",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        hindi: ["var(--font-hindi)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.8s ease forwards",
        "slide-in": "slideIn 0.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
