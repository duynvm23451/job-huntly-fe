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
        "custom-violet": "#4f40db",
        "custom-blue": "#4ba2fc",
      },
      boxShadow: {
        custom: "0 3px 20px rgba(192, 192, 192, .21)",
      },
      maxWidth: {
        106: "106rem",
      },
    },
  },
  plugins: [],
};
