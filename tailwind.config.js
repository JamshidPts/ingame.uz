/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom': '440px',
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"], // Добавляем шрифт
      },
      boxShadow: {
        'custom-white': '0 0 80px 20px rgba(255, 255, 255, 0.75)',
      },
      backgroundColor: {
        'white-transparent': 'rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [],
}
