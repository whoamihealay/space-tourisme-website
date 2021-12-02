import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Nav from "./Nav";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 2em;

  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 0 0 2em;
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop}) {
    padding: 2em 0 2em 2em;
  }
`;

const Line = styled.hr`
  opacity: 0;
  @media screen and (${({ theme }) => theme.breakpoints.desktop}) {
    opacity: 0.1;
    z-index: 2;
    position: absolute;
    color: white;
    width: 30%;
    transform: translateX(25%);
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Image src="/assets/shared/logo.svg" alt="Logo" width="48" height="48" />
      <Line />
      <Nav />
    </StyledHeader>
  );
};

export default Header;
