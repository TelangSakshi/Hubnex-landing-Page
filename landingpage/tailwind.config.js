module.exports = {

 
    theme: {
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  
mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#fdfdfd", A700_01: "#ffffff" },
        gray: {
          50: "#fffafa",
          100: "#f6f6f6",
          700: "#5a5a5a",
          800: "#3b3b3b",
          900: "#1b1b1b",
          "900_01": "#181818",
          "900_03": "#1d1d1d",
          "900_02": "#1e1e1e",
          "50_01": "#fafafa",
          "900_04": "#1f1f1f",
          "700_01": "#6a6a6a",
        },
        deep_purple: { 50: "#eee4ff", 200: "#ad93df", 600: "#5c27c0" },
        orange: { 300: "#ffb649" },
        black: { 900: "#000000" },
        blue_gray: { 400: "#8e8e8e" },
      },
      boxShadow: {
        xs: "0px 4px 4px 0px #0000003f",
        sm: "0px 8px 40px 0px #00000038",
        md: "0px 8px 18px 0px #ad5dfe75",
        lg: "0px 20px 40px 0px #75757559",
        xl: "0px 4px 24px 0px #00000026",
        "2xl": "0px 2px 20px 0px #00000021",
        "3xl": "0px 20px 40px 0px #5c27c059",
        "4xl": "0px -4px 14px 0px #0000003f",
        "5xl": "0px 4px 14px 0px #0000003f",
      },
      fontFamily: {
        garnettsemibold: "Garnett Semibold",
        poppins: "Poppins",
        sfprodisplay: "SF Pro Display",
        librefranklin: "Libre Franklin",
        garnettmedium: "Garnett Medium",
        spacegrotesk: "Space Grotesk",
        outfit: "Outfit",
        gilroyregular: "Gilroy-Regular",
        montserrat: "Montserrat",
        garnettregular: "Garnett Regular",
        garnettlight: "Garnett Light",
        actor: "Actor",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
