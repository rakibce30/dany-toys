/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: "'Ubuntu', sans-serif",
        prompt: "'Prompt', sans-serif",
        crimson: "'Crimson Text', serif",
      }
    },
  },
  plugins: [require("daisyui")],
}

