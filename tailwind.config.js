/** @type {import('tailwindcss').Config} */
/*global module, require*/

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  //telling tailwind to look those file for css
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        // add custom font -> to our tailwind css file
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        //add custom class -> for tailwind css so that we can use that to our code
        "brand-gray-1": "#dadce0",
      },
    },
  },
  plugins: [],
};
