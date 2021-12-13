import Head from "next/head";
import styled from "styled-components";
import CrewMembers from "../common/components/CrewMembers";
import Layout from "../common/components/Layout";
import { Container } from "../common/components/styles/Container.styled";
import { StyledH1 } from "../common/components/styles/Titles.styled";

const StyledCrew = styled.div`
  background-image: url(${({ theme }) => theme.backgrounds.mobile.bgCrew});
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
    background-image: url(${({ theme }) => theme.backgrounds.tablet.bgCrew});
  }
  @media screen and (${({ theme }) => theme.breakpoints.desktop}) {
    background-image: url(${({ theme }) => theme.backgrounds.desktop.bgCrew});
  }
`;

const Crew = () => {
  return (
    <StyledCrew>
      <Layout>
        <Head>
          <title>Frontend Mentor | Crew</title>
        </Head>
        <Container>
          <StyledH1>
            <span aria-hidden="true">02</span> Meet your crew
          </StyledH1>
          <CrewMembers crewSelect="Douglas Hurley"></CrewMembers>
        </Container>
      </Layout>
    </StyledCrew>
  );
};

export default Crew;
