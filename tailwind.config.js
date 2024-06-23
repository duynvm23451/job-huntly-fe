/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        6: "6px",
        3: "3px",
      },
      backgroundColor: {
        "custom-gray": "#f8f8fd",
      },
      colors: {
        "custom-violet": "#4640de",
        "custom-violet-2": "#0000EE",
        "custom-blue": "#4ba2fc",
        "custom-neutral": "#f8f8fd",
        "custom-black": "#202430",
        "custom-neutral-2": "#d6ddeb",
      },
      boxShadow: {
        custom: "0 3px 20px rgba(192, 192, 192, .21)",
        "for-banner": "inset 3rem 0 0 transparent",
      },
      maxWidth: {
        106: "85rem",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("@tailwindcss/forms"),
    plugin(function ({ addVariant }) {
      addVariant("progress-unfilled", ["&::-webkit-progress-bar", "&"]);
      addVariant("progress-filled", [
        "&::-webkit-progress-value",
        "&::-moz-progress-bar",
        "&",
      ]);
    }),
  ],
};
