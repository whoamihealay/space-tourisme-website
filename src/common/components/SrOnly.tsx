import React from "react";
import styled from "styled-components";

const StyledSrOnly = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const SrOnly = ({ children }: JSX.ElementChildrenAttribute) => {
  return <StyledSrOnly>{children}</StyledSrOnly>;
};

export default SrOnly;
