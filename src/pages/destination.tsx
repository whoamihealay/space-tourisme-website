import React, { useState } from "react";
import Head from "next/head";
import { StyledDestination, BtnDest } from "../styles/Destination.styled";
import Layout from "../common/components/Layout";
import { Container } from "../common/components/styles/Container.styled";
import Planets from "../common/components/Planets";
import { StyledH1 } from "../common/components/styles/Titles.styled";

const Destination = () => {
  const [dest, setDest] = useState("Moon");

  const getDest = (planet: string) => {
    setDest(planet);
  };

  return (
    <StyledDestination>
      <Layout>
        <Head>
          <title>Frontend Mentor | Destination</title>
        </Head>
        <Container>
          <StyledH1>
            <span aria-hidden="true">01</span> Pick your destination
          </StyledH1>
          <Planets dest={dest}>
            <BtnDest onClick={() => getDest("Moon")}>Moon</BtnDest>
            <BtnDest onClick={() => getDest("Mars")}>Mars</BtnDest>
            <BtnDest onClick={() => getDest("Europa")}>Europa</BtnDest>
            <BtnDest onClick={() => getDest("Titan")}>Titan</BtnDest>
          </Planets>
        </Container>
      </Layout>
    </StyledDestination>
  );
};

export default Destination;
