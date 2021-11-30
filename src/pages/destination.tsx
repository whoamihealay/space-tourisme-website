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
          <h1>01 Pick your destination</h1>
          <Planets dest={dest}>
            <button onClick={() => getDest("Moon")}>Moon</button> Mars Europa
            Titan
          </Planets>
        </Container>
      </Layout>
    </StyledDestination>
  );
};

export default Destination;
