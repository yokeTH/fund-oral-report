import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#44adee",
          "primary-focus": "#3999d5",
          "primary-content": "#ffffff",

          secondary: "#e74689",
          "secondary-focus": "#cd3c79",
          "secondary-content": "#000000",

          accent: "#fff12e",
          "accent-focus": "#ddd12c",
          "accent-content": "#000000",

          neutral: "#1a1a1a",
          "neutral-focus": "#000000",
          "neutral-content": "#ffffff",

          "base-100": "#ffffff",
          "base-200": "#f5f5f5",
          "base-300": "#ebebeb",
          "base-content": "#000000",

          info: "#4aa8bf",
          success: "#81328f",
          warning: "#ed7f31",
          error: "#e83d30",

          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",

          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": "0.5rem",
          "--border-btn": "1px",
        },
        dark: {
          primary: "#ffffff",
          "primary-focus": "#e6e6e6",
          "primary-content": "#000000",

          secondary: "#152747",
          "secondary-focus": "#091120",
          "secondary-content": "#ffffff",

          accent: "#503447",
          "accent-focus": "#32202c",
          "accent-content": "#ffffff",

          neutral: "#171618",
          "neutral-focus": "#2e2d2f",
          "neutral-content": "#dca54c",

          "base-100": "#070708",
          "base-200": "#171618",
          "base-300": "#2e2d2f",
          "base-content": "#dca54c",

          info: "#66c7ff",
          success: "#87cf3a",
          warning: "#e1d460",
          error: "#ff6b6b",

          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",

          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": "0.5rem",
          "--border-btn": "1px",
        },
      },
    ],
  },
};
export default config;
