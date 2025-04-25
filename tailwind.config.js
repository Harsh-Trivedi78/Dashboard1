/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",      // ✅ For App Router
    "./src/app/components/**/*.{js,ts,jsx,tsx}", // ✅ For your components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
