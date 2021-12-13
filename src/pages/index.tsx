import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Explore from "../common/components/Explore";
import { Container } from "../common/components/styles/Container.styled";
import { Description } from "../common/components/styles/P.styled";
import Layout from "../common/components/Layout";
import { H1 } from "../common/components/styles/Titles.styled";

const StyledHomePage = styled.div`
  background-image: url(${({ theme }) => theme.backgrounds.mobile.bgHome});
  background-size: cover;
  min-height: 100vh;
  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    background-image: url(${({ theme }) => theme.backgrounds.tablet.bgHome});
  }
  @media screen and (${({ theme }) => theme.breakpoints.desktop}) {
    background-image: url(${({ theme }) => theme.backgrounds.desktop.bgHome});
  }
`;

const HomeContainer = styled(Container)`
  @media screen and (${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3em 0 0 auto;
    max-width: 120rem;
  }
`;

const Article = styled.article`
  text-align: center;
  margin: auto;
`;

const HomeH1 = styled(H1)`
  color: ${({ theme }) => theme.colors.accent};
  padding: 1em;
`;

// !important to override span style precedance.
const Space = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.fs900} !important;
  font-family: ${({ theme }) => theme.fonts.serif};
  color: ${({ theme }) => theme.colors.light};
  line-height: 100%;
  text-transform: uppercase;
  opacity: 1 !important;
`;

const HomePage = () => {
  return (
    <StyledHomePage>
      <Layout>
        <Head>
          <title>Frontend Mentor | Space tourism website</title>
        </Head>
        <HomeContainer>
          <Article>
            <HomeH1>
              So, you want to travel to <br />
              <Space>Space</Space>
            </HomeH1>
            <Description>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </Description>
          </Article>
          <Explore />
        </HomeContainer>
      </Layout>
    </StyledHomePage>
  );
};

export default HomePage;
