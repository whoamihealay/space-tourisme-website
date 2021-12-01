import React from "react";
import styled from "styled-components";

const StyledExplore = styled.div`
  width: 9.375rem;
  height: 9.375rem;
  margin: 4em auto;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: ${({ theme }) => theme.fontSizes.mobile.fs400};
  text-transform: uppercase;
  &:hover {
    box-shadow: 0 0 0 3rem hsla(0, 0%, 100%, 0.1);
    cursor: pointer;
  }
  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    width: 15.125rem;
    height: 15.125rem;
    font-size: ${({ theme }) => theme.fontSizes.tablet.fs600};
    margin: 4em auto;
    &:hover {
      box-shadow: 0 0 0 4.25rem hsla(0, 0%, 100%, 0.1);
    }
  }
  @media screen and (${({ theme }) => theme.breakpoints.desktop}) {
    width: 17.125rem;
    height: 17.125rem;
    font-size: ${({ theme }) => theme.fontSizes.desktop.fs600};
    &:hover {
      box-shadow: 0 0 0 5.5rem hsla(0, 0%, 100%, 0.1);
    }
  }
`;

const Explore = () => {
  return <StyledExplore>Explore</StyledExplore>;
};

export default Explore;
