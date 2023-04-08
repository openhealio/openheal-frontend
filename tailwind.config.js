/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js,ts,tsx}", "./components/**/*.{html,js,ts,tsx}"],
  theme: {
    fontFamily: {
      'charter': ['"Charter BT Roman"', 'serif'],
      'camber': ['Camber Regular', 'sans-serif'],
    },
    extend: {},
  },

  plugins: [require('@tailwindcss/forms')],
}
