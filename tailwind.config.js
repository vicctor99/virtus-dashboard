/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '1/5': '1fr 5fr'
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}