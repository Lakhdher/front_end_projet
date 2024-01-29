/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        "primary-100": "var(--primary-100)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],

};
