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
      mobile: {
        fs900: string;
        fs800: string;
        fs700: string;
        fs600: string;
        fs500: string;
        fs400: string;
        fs300: string;
        fs200: string;
      };
      tablet: {
        fs900: string;
        fs800: string;
        fs700: string;
        fs600: string;
        fs500: string;
        fs400: string;
        fs300: string;
        fs200: string;
      };
      desktop: {
        fs900: string;
        fs800: string;
        fs700: string;
        fs600: string;
        fs500: string;
        fs400: string;
        fs300: string;
        fs200: string;
      };
    };
    charSpacing: {
      csHi: string;
      csMed: string;
      csLow: string;
    };
    breakpoints: {
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
    mobile: {
      fs900: "5rem",
      fs800: "3.75rem",
      fs700: "1.75rem",
      fs600: "1.25rem",
      fs500: "1rem",
      fs400: "0.938rem",
      fs300: "0.75rem",
      fs200: "0.625rem",
    },
    tablet: {
      fs900: "9.375rem",
      fs800: "",
      fs700: "",
      fs600: "1.25rem",
      fs500: "1.25rem",
      fs400: "1rem",
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
      bgDest: "",
      bgCrew: "",
    },
    desktop: {
      bgHome: "./assets/home/background-home-desktop.jpg",
      bgDest: "",
      bgCrew: "",
    },
  },
};

export default theme;
