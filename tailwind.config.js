/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'yeseva': ['"Yeseva One"', 'serif'], // Custom Yeseva One font
        'nunito': ['Nunito', 'sans-serif'],  // Custom Nunito font
      },
    },
  },
  plugins: [],
}

