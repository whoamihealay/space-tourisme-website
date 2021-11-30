import styled from "styled-components";

const StyledContainer = styled.div`
  padding-inline: 1em;
  margin-inline: auto;
  max-width: 80rem;
`;

const Container = ({ children }: JSX.ElementChildrenAttribute) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
