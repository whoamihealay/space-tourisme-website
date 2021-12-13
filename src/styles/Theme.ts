import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      dark: string;
      accent: string;
      light: string;
      black: string;
    };
    fonts: {
      body: string;
      serif: string;
      sansSerif: string;
    };
    fontSizes: {
      fs900: string;
      fs800: string;
      fs700: string;
      fs600: string;
      fs500: string;
      fs400: string;
      fs300: string;
      fs200: string;
    };
    charSpacing: {
      csHi: string;
      csMed: string;
      csLow: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    backgrounds: {
      mobile: {
        bgHome: string;
        bgDest: string;
        bgCrew: string;
      };
      tablet: {
        bgHome: string;
        bgDest: string;
        bgCrew: string;
      };
      desktop: {
        bgHome: string;
        bgDest: string;
        bgCrew: string;
      };
    };
  }
}

const theme: DefaultTheme = {
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
    fs900: "clamp(5rem, 10vw, 9.375rem)",
    fs800: "clamp(3.75rem, 3vw, 6.25rem)",
    fs700: "clamp(1.75rem, 3vw, 3.5rem)",
    fs600: "clamp(1.25rem, 5vw, 2rem)",
    fs500: "clamp(1rem, 2.5vw, 1.75rem)",
    fs400: "clamp(0.938rem, 2vw, 1.125rem)",
    fs300: "clamp(0.75rem, 2.5vw, 1rem)",
    fs200: "clamp(0.625rem, 2.5vw, 0.875rem)",
  },
  charSpacing: {
    csHi: "4.75px",
    csMed: "2.7px",
    csLow: "2.35px",
  },
  breakpoints: {
    mobile: "max-width: 30em",
    tablet: "min-width: 30em",
    desktop: "min-width: 64em",
  },
  backgrounds: {
    mobile: {
      bgHome: "./assets/home/background-home-mobile.jpg",
      bgDest: "./assets/destination/background-destination-mobile.jpg",
      bgCrew: "./assets/crew/background-crew-mobile.jpg",
    },
    tablet: {
      bgHome: "./assets/home/background-home-tablet.jpg",
      bgDest: "./assets/destination/background-destination-tablet.jpg",
      bgCrew: "",
    },
    desktop: {
      bgHome: "./assets/home/background-home-desktop.jpg",
      bgDest: "./assets/destination/background-destination-desktop.jpg",
      bgCrew: "",
    },
  },
};

export default theme;
