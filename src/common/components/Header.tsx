import React, { useState } from "react";
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

const Wrapper = styled.div`
  z-index: 1000;
  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
`;

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const Button = () => {
    if (menu) {
      return (
        <Image
          src={`/assets/shared/icon-close.svg`}
          alt="menu-icon"
          width="24"
          height="21"
          onClick={toggleMenu}
        />
      );
    } else {
      return (
        <Image
          src={`/assets/shared/icon-hamburger.svg`}
          alt="menu-icon"
          width="24"
          height="21"
          onClick={toggleMenu}
        />
      );
    }
  };
  return (
    <StyledHeader>
      <Image src="/assets/shared/logo.svg" alt="Logo" width="48" height="48" />
      <Line />
      <Wrapper>
        <Button />
      </Wrapper>
      {menu && <Nav />}
    </StyledHeader>
  );
};

export default Header;
