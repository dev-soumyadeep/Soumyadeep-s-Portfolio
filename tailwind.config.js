/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        MontserratAlternates: "MontserratAlternates-Bold",
        MontserratAlternatesExtrabold: "MontserratAlternates-ExtraBold",
        MontserratAlternatesMedium: "MontserratAlternates-Medium",
        MontserratAlternatesEl: "MontserratAlternates-Extralight",
        Aboreto: "Aboreto-Regular",
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
