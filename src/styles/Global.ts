import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    figure,
    picture {
      margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      font-weight: 400;
      font-size: 1.125rem;
    }

    ul,
    ol,
    li {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    a {
      text-decoration: none;
      color: var(--clr-white);
    }

    body {
      font-family: 'Barlow', sans-serif;
      color: ${({ theme }) => theme.colors.light};
      background-color: ${({ theme }) => theme.colors.dark};
      line-height: 1.5;
      min-height: 100vh;
    }

    @media screen and (max-width: 30em) {
      font-size: ${({ theme }) => theme.fontSizes.mobile.fs400};
    }

    @media screen and (min-width: 30em) {
      font-size: ${({ theme }) => theme.fontSizes.tablet.fs400};
    }

    @media screen and (min-width: 48em) {
      font-size: ${({ theme }) => theme.fontSizes.desktop.fs400}
    }

    #__next {
      min-height: 100vh;
    }

    img,
    picture {
      max-width: 100%;
      display: block;
    }

    input,
    button {
      border: none;
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }
    @media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

`;

export default GlobalStyles;
