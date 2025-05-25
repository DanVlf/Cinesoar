/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        myfont: ['MyFont', 'sans-serif'], // název se musí shodovat s @font-face
      },
    },
  },
  plugins: [],
};
