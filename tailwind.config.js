/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#272E71',
        secondary: '#6C757D',
        success: '#28A745',
        danger: '#DC3545',
        warning: '#FFC107',
        info: '#17A2B8',
        secondary_violet:"#e8eaf6"
      },
    },
    fontFamily:{
      'nunito': ['nunito', 'sans-serif'],
    }
  },
  plugins: [],
}
