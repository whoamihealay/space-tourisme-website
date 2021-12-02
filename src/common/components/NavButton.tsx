import React from "react";
import styled from "styled-components";

const NavButton = () => {
  const StyledButton = styled.button.attrs((props) => ({
    type: "text",
    display: props || "true",
  }))`
    z-index: 1000;
    @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
      display: none;
    }
  `;
  return (
    <>
      <StyledButton></StyledButton>
    </>
  );
};

export default NavButton;
