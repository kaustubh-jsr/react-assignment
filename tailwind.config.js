/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "color-brand-blue": "#2874f0",
        "color-brand-bbd": "#2455f4",
        "color-grey": "#f1f3f6",
      },
    },
  },
  plugins: [],
};
