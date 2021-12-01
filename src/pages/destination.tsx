import React, { useState } from "react";
import Head from "next/head";
import Layout from "../common/components/Layout";
import Container from "../common/components/Container";
import styled from "styled-components";
import Planets from "../common/components/Planets";

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
          <h1>
            <span aria-hidden="true">01</span> Pick your destination
          </h1>
          <Planets>
            <button onClick={() => getDest("Moon")}>Moon</button>{" "}
            <button>Mars</button>
            <button>Europa</button>
            <button>Titan</button>
          </Planets>
        </Container>
      </Layout>
    </StyledDestination>
  );
};

export default Destination;
