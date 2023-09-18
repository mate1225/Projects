/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BlueText: "hsla(212, 97%, 54%, 1)",
        DarkBlue: "hsla(216, 47%, 23%, 1)",
        GrayishBlue: "hsla(223, 38%, 75%, 1)",
        PurpleBg: "hsla(263, 100%, 43%, 1)",
      },
    },
  },
  plugins: [],
};
