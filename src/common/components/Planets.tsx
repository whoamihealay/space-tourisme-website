import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { Description } from "./styles/P.styled";

const StyledPLanets = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: ${({ theme }) => theme.fontSizes.mobile.fs800};
    text-transform: uppercase;
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
`;

const Menu = styled.div`
  display: flex;
  gap: 1em;
`;

const Info = styled.div`
  h3 {
    font-family: ${({ theme }) => theme.fonts.sansSerif};
    font-size: ${({ theme }) => theme.fontSizes.mobile.fs400};
    color: ${({ theme }) => theme.colors.accent};
  }
  p {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: ${({ theme }) => theme.fontSizes.mobile.fs700};
    text-transform: uppercase;
  }
`;

const Planets = ({ children }: JSX.ElementChildrenAttribute) => {
  const destinations = {
    name: "Moon",
    images: {
      png: "/assets/destination/image-moon.png",
      webp: "/assets/destination/image-moon.webp",
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  };

  return (
    <StyledPLanets>
      <Image
        src={destinations.images.png}
        alt="Moon"
        width="170px"
        height="170px"
      />
      <Article className="card-planet">
        <Menu>{children}</Menu>
        <h2>{destinations.name}</h2>
        <Description>{destinations.description}</Description>
        <hr />
        <Info>
          <h3>AVG. DISTANCE</h3>
          <p>{destinations.distance}</p>
        </Info>
        <Info>
          <h3>EST. TRAVEL TIME</h3>
          <p>{destinations.travel}</p>
        </Info>
      </Article>
    </StyledPLanets>
  );
};

export default Planets;
