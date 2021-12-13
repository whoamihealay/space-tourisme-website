import React, { useState } from "react";
import styled from "styled-components";
import { SrOnly } from "./SrOnly";

const StyledNav = styled.nav`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-size: ${({ theme }) => theme.fontSizes.fs500};
  padding: 1em;

  li {
  }

  a {
    color: ${({ theme }) => theme.colors.light};
    display: flex;
    gap: 0.5rem;
    span {
      font-weight: 700;
    }
  }
  @media screen and (max-width: 30em) {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    width: 75%;
    height: 100%;
    z-index: 900;
    ul {
      margin: 8em 1em;
    }
    li {
      padding: 1em;
    }
    &[data-visible="true"] {
      display: fixed;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1em;
    ul {
      display: flex;
      gap: 1em;
    }
    span {
      display: none;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop}) {
    padding: 1em 5em;
    ul {
      gap: 2em;
    }
    span {
      display: block;
    }
  }
`;

const Button = ({ toggle }) => {
  const StyledButton = styled.button`
    display: none;
    @media screen and (${({ theme }) => theme.breakpoints.mobile}) {
      display: block;
      position: sticky;
      background: url("./assets/shared/icon-hamburger.svg") no-repeat;
      border: none;
      width: 24px;
      aspect-ratio: 1;
      z-index: 9999;
      top: 2em;
      right: 2em;
    }
  `;

  return (
    <StyledButton onClick={toggle}>
      <SrOnly>Menu</SrOnly>
    </StyledButton>
  );
};

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    if (menu === false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  return (
    <>
      <Button toggle={toggleMenu} />
      <StyledNav data-visible={menu} aria-expanded={menu}>
        <ul>
          <li>
            <a href="/">
              <span aria-hidden="true">00</span> HOME
            </a>
          </li>
          <li>
            <a href="/destination">
              <span aria-hidden="true">01</span> DESTINATION
            </a>
          </li>
          <li>
            <a href="crew">
              <span aria-hidden="true">02</span> CREW
            </a>
          </li>
          <li>
            <a href="#">
              <span aria-hidden="true">03</span> TECHNOLOGIES
            </a>
          </li>
        </ul>
      </StyledNav>
    </>
  );
};

export default Nav;
