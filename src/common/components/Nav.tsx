import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

const Menu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  padding: 10rem 2rem;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
`;

const Wrapper = styled.div`
  z-index: 1000;
`;

const Nav = () => {
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
    <StyledNav>
      <Image src="/assets/shared/logo.svg" alt="Logo" width="40" height="40" />
      <Wrapper>
        <Button />
      </Wrapper>
      {menu && (
        <Menu>
          <ul>
            <li>
              <a href="/">00 HOME</a>
            </li>
            <li>
              <a href="/destination">01 DESTINATION</a>
            </li>
            <li>
              <a href="crew">02 CREW</a>
            </li>
            <li>
              <a href="technologies">03 TECHNOLOGIES</a>
            </li>
          </ul>
        </Menu>
      )}
    </StyledNav>
  );
};

export default Nav;
