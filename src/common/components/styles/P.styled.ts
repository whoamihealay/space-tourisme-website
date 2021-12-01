import styled from "styled-components";

export const Description = styled.p`
  padding: 1em;
  color: ${({ theme }) => theme.colors.accent};
  text-align: center;
  line-height: 167%;
  margin: auto;
  max-width: 50ch;

  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    line-height: 175%;
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop}) {
    text-align: left;
    line-height: 178%;
  }
`;
