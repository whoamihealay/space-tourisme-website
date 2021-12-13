import React, { useState } from "react";
import Head from "next/head";
import Layout from "../common/components/Layout";
import { Container } from "../common/components/styles/Container.styled";
import styled from "styled-components";
import Planets from "../common/components/Planets";
import { H1 } from "../common/components/styles/Titles.styled";

const StyledDestination = styled.div`
  background-image: url(${({ theme }) => theme.backgrounds.mobile.bgDest});
  background-size: cover;
  min-height: 100vh;
  text-align: center;
  h1 {
    margin: 1em 0;
    font-family: ${({ theme }) => theme.fonts.sansSerif};
    text-transform: uppercase;
    letter-spacing: ${({ theme }) => theme.charSpacing.csMed};
  }
  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    background-image: url(${({ theme }) => theme.backgrounds.tablet.bgDest});
  }
  @media screen and (${({ theme }) => theme.breakpoints.desktop}) {
    background-image: url(${({ theme }) => theme.backgrounds.desktop.bgDest});
  }
`;

const StyledH1 = styled(H1)`
  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    text-align: left;
    padding-left: 2em;
  }
`;

const Btn = styled.button`
  background-color: transparent;
  border: none;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  height: 2.5rem;
  color: ${({ theme }) => theme.colors.accent};
  text-transform: uppercase;
  &:hover,
  &:focus {
    border-bottom: 3px solid white;
    color: ${({ theme }) => theme.colors.light};
  }
`;

const Destination = () => {
  const [dest, setDest] = useState("Moon");

  const getDest = (planet: string) => {
    setDest(planet);
  };

  return (
    <StyledDestination>
      <Layout>
        <Head>
          <title>Frontend Mentor | Space tourism website</title>
        </Head>
        <Container>
          <StyledH1>
            <span aria-hidden="true">01</span> Pick your destination
          </StyledH1>
          <Planets dest={dest}>
            <Btn onClick={() => getDest("Moon")}>Moon</Btn>
            <Btn onClick={() => getDest("Mars")}>Mars</Btn>
            <Btn onClick={() => getDest("Europa")}>Europa</Btn>
            <Btn onClick={() => getDest("Titan")}>Titan</Btn>
          </Planets>
        </Container>
      </Layout>
    </StyledDestination>
  );
};

export default Destination;
