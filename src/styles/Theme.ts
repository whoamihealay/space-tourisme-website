const theme = {
  colors: {
    dark: "hsl(230, 35%, 7%)",
    accent: "hsl(231, 77%, 90%)",
    light: "hsl(0, 0%, 100%)",
    black: "hsl(0, 0%, 0%)",
  },
  fonts: {
    body: "'Barlow', sans-serif",
    serif: "'Bellefair', serif",
    sansSerif: "'Barlow Condensed', sans-serif",
  },
  fontSizes: {
    mobile: {
      fs900: "5rem",
      fs800: "3.75rem",
      fs700: "1.75rem",
      fs600: "1.25rem",
      fs500: "1rem",
      fs400: "0.875rem",
      fs300: "0.75rem",
      fs200: "0.625rem",
    },
    tablet: {
      fs900: "5rem",
      fs800: "",
      fs700: "",
      fs600: "1.25rem",
      fs500: "1rem",
      fs400: "0.938rem",
      fs300: "",
      fs200: "",
    },
    desktop: {
      fs900: "9.375rem",
      fs800: "6.25rem",
      fs700: "3.5rem",
      fs600: "2rem",
      fs500: "1.75rem",
      fs400: "1.125rem",
      fs300: "1rem",
      fs200: "0.875",
    },
  },
  charSpacing: {
    csHi: "4.75px",
    csMed: "2.7px",
    csLow: "2.35px",
  },
  breakpoints: {
    tablet: "min-width: 375px",
    desktop: "min-width: 768px",
  },
  backgrounds: {
    mobile: {
      bgHome: "./assets/home/background-home-mobile.jpg",
      bgDest: "./assets/destination/background-destination-mobile.jpg",
      bgCrew: "./assets/crew/background-crew-mobile.jpg",
    },
  },
};

export default theme;
