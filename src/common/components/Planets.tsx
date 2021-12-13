import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Description } from "./styles/P.styled";
import { Hr } from "./styles/Hr.styled";
import useData from "../hooks/useData";

const StyledPLanets = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: ${({ theme }) => theme.fontSizes.fs800};
    text-transform: uppercase;
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-around;
    text-align: left;
    p {
      padding: 1em 0 !important;
    }
  }
`;

const Planet = styled.img`
  width: 170px;
  height: 170px;
  @media screen and (${({ theme }) => theme.breakpoints.desktop}) {
    width: 445px;
    height: 445px;
  } ;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    .infoFlex {
      margin: 2em;
      display: flex;
      justify-content: center;
      gap: 3rem;
    }
  }
  @media screen and (${({ theme }) => theme.breakpoints.desktop}) {
    .infoFlex {
      margin: 1em 0;
      justify-content: left;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5em;
  gap: 1em;
  @media screen and (${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: left;
    margin: 0.5em 0;
  }
`;

const Info = styled.div`
  h3 {
    font-family: ${({ theme }) => theme.fonts.sansSerif};
    font-size: ${({ theme }) => theme.fontSizes.fs400};
    color: ${({ theme }) => theme.colors.accent};
  }
  p {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: ${({ theme }) => theme.fontSizes.fs700};
    text-transform: uppercase;
  }
`;

interface PlanetsProps {
  dest: string;
  children: React.ReactNode;
}

const Planets = ({ dest, children }: PlanetsProps) => {
  const destinations = useData("destinations");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [distance, setDistance] = useState("");
  const [travel, setTravel] = useState("");

  useEffect(() => {
    const getDestinations = () => {
      if (destinations != null) {
        destinations?.map((data: object) => {
          if (data.name === dest) {
            setName(data.name);
            setImage(data.images.png);
            setDescription(data.description);
            setDistance(data.distance);
            setTravel(data.travel);
          } else {
            return;
          }
        });
      }
    };
    getDestinations();
  }, [dest, destinations]);

  return (
    <StyledPLanets>
      <Planet src={image} alt={name} />
      <Article className="card-planet">
        <Menu>{children}</Menu>
        <h2>{name}</h2>
        <Description>{description}</Description>
        <Hr />
        <div className="infoFlex">
          <Info>
            <h3>AVG. DISTANCE</h3>
            <p>{distance}</p>
          </Info>
          <Info>
            <h3>EST. TRAVEL TIME</h3>
            <p>{travel}</p>
          </Info>
        </div>
      </Article>
    </StyledPLanets>
  );
};

export default Planets;
