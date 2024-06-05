/** @type {import('tailwindcss').Config} */
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
        106: "106rem",
      },
    },
  },
  plugins: [],
};
