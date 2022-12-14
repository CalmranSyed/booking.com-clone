/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
      },
      colors: {
        white: "#fff",
        black: "#000",
        primary: "#003580",
        btnbg: "#0071c2",
        btnhover: "#00487a",
        navhover: "#ffffff1a",
        yellow: "#febb02",
        opaque: "transparent",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
        8: "8px",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
  },
  plugins: [],
};
