/** @type {import("tailwindcss").Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{html,js,ts,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      charter: ["Charter BT Roman", "serif"],
      camber: ["Camber Regular", "sans-serif"],
    },
    extend: {},
  },

  plugins: [require("@tailwindcss/forms")],
};
