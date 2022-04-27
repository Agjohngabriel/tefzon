module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      oswald: ["Oswald"],
      nunito: ["Nunito"],
      arcon: ["Arcon-Regular"],
      montserrat: ["Montserrat"],
      poppins: ["Poppins"],
    },
    extend: {
      colors: {
        primary: {
          100: "#8139E6",
          200: "#6544DE",
        },
        black: {
          100: "#3F3E3E",
          150: "222222",
          200: "#3E3D3D",
        },
      },
    },
  },
  plugins: [],
};
