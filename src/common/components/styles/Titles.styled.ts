import styled from "styled-components";

export const H1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-size: ${({ theme }) => theme.fontSizes.fs500};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.light};
  span {
    font-size: ${({ theme }) => theme.fontSizes.fs500};
    opacity: 0.25;
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop}) {
    text-align: left;
  }
`;

export const StyledH1 = styled(H1)`
  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    text-align: left;
    padding-left: 2em;
  }
`;
