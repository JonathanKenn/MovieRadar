/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#0C0906",
        secondary: "#F8F7F4",
        theYellow: "#E3BA41",
        theGray: "#9E9E9E",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
