/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mb: "375px",
      mb2: "550px",
      tab: "768px",
      lg: "900px",
      lap: "1024px",
    },
    colors: {
      navy: "#0B0D17",
      blue: "#D0D6F9",
      white: "#FFFFFF",
    },
    fontFamily: {
      barlowCondensed: ["Barlow Condensed", "sans-serif"],
      barlow: ["Barlow", "sans-serif"],
      bellefair: ["Bellefair", "serif"],
    },
    fontSize: {
      sm: "1.6rem",
      base: "1.8rem",

      h1: "15rem",
      h2: "10rem",
      h3: "5.6rem",
      h4: "3.2rem",
      h5: [
        "2.8rem",
        {
          letterSpacing: "4.75px",
        },
      ],
      subh1: "2.8rem",
      subh2: [
        "1.4rem",
        {
          letterSpacing: "2.35px",
        },
      ],
      nav: [
        "1.6rem",
        {
          letterSpacing: "2.7px",
        },
      ],
    },
    extend: {
      backgroundImage: {
        bgDesktop: "url('./assets/home/background-home-desktop.jpg')",
        bgTab: "url('./assets/home/background-home-tablet.jpg')",
        bgMobile: "url('./assets/home/background-home-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
