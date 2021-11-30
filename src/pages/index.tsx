import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Explore from "../common/components/Explore";
import Container from "../common/components/Container";
import Layout from "../common/components/Layout";

const StyledHomePage = styled.div`
  background-image: url(${({ theme }) => theme.backgrounds.mobile.bgHome});
  background-size: cover;
  min-height: 100vh;
`;

const Article = styled.article`
  text-align: center;
`;

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.mobile.fs900};
  font-family: ${({ theme }) => theme.fonts.serif};
  text-transform: uppercase;
  max-height: 100px;
  margin: 1rem;
`;

const P1 = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.mobile.fs500};
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: ${({ theme }) => theme.charSpacing.csMed};
  text-transform: uppercase;
`;

const P2 = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.mobile.fs400};
  color: ${({ theme }) => theme.colors.accent};
  padding: 0.5rem;
  line-height: 167%;
`;

const HomePage = () => {
  return (
    <StyledHomePage>
      <Layout>
        <Head>
          <title>Frontend Mentor | Space tourism website</title>
        </Head>

        <Container>
          <Article>
            <P1>So, you want to travel to</P1>
            <H1>Space</H1>
            <P2>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </P2>
          </Article>
          <Explore />
        </Container>
      </Layout>
    </StyledHomePage>
  );
};

export default HomePage;
