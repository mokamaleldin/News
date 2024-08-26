/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#F5EDED',
        secondary: '#E2DAD6',
        mkee1: '#7FA1C3',
        mkee2: '#6482AD',
      },
    },
  },
  plugins: [],
};

export default config;
