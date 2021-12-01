import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  font-size: ${({ theme }) => theme.fontSizes.mobile.fs500};
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
    position: fixed;
    top: 0;
    right: 0;
    width: 75%;
    height: 100%;
    ul {
      margin: 8em 1em;
    }
    li {
      padding: 1em;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.tablet.fs500};
    padding: 1em;
    ul {
      display: flex;
      gap: 1em;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.desktop.fs500};
    padding: 1em 5em;
    ul {
      gap: 2em;
    }
  }
`;

const Nav = () => {
  return (
    <StyledNav>
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
          <a href="/crew">
            <span aria-hidden="true">02</span> CREW
          </a>
        </li>
        <li>
          <a href="/technologies">
            <span aria-hidden="true">03</span> TECHNOLOGIES
          </a>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
