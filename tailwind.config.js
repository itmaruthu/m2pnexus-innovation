/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0F172A',
          secondary: '#1E3A8A',
          accent: '#10B981',
          bg: '#FFFFFF',
          section: '#F8FAFC',
          text: '#1E293B',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
