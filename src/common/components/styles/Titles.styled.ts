import styled from "styled-components";

export const H1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-size: ${({ theme }) => theme.fontSizes.mobile.fs500};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.light};
  span {
    font-size: ${({ theme }) => theme.fontSizes.mobile.fs500};
    opacity: 0.25;
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.tablet.fs500};
    span {
      font-size: ${({ theme }) => theme.fontSizes.tablet.fs500};
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.desktop.fs500};
    text-align: left;
    span {
      font-size: ${({ theme }) => theme.fontSizes.desktop.fs500};
    }
  }
`;
