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
    // theme: {
    //   light: {
    //     ...require("daisyui/src/theming/themes")["[data-theme=cmyk]"],
    //   },
    // },
    themes: [
      {
        light: {
          primary: "#65c3c8",
          "primary-focus": "#42b2b8",
          "primary-content": "#ffffff",

          secondary: "#ef9fbc",
          "secondary-focus": "#e7739e",
          "secondary-content": "#ffffff",

          accent: "#eeaf3a",
          "accent-focus": "#e09915",
          "accent-content": "#ffffff",

          neutral: "#261230",
          "neutral-focus": "#200f29",
          "neutral-content": "#ffffff",

          "base-100": "#faf7f5",
          "base-200": "#efeae6",
          "base-300": "#e7e2df",
          "base-content": "#261230",

          info: "#1c92f2",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",

          "--rounded-box": "1rem",
          "--rounded-btn": "1.9rem",
          "--rounded-badge": "1.9rem",

          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": "0.5rem",
          "--border-btn": "1px",
        },
        dark: {
          primary: "#f28c18",
          "primary-focus": "#c9710d",
          "primary-content": "#131616",

          secondary: "#6d3b9b",
          "secondary-focus": "#532c77",
          "secondary-content": "#ffffff",

          accent: "#4fa300",
          "accent-focus": "#367000",
          "accent-content": "#ffffff",

          neutral: "#1b1d1d",
          "neutral-focus": "#131616",
          "neutral-content": "#ffffff",

          "base-100": "#1f1f1f",
          "base-200": "#1b1d1d",
          "base-300": "#131616",
          "base-content": "#ffffff",

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
