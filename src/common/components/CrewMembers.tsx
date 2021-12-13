import { useEffect, useState } from "react";
import styled from "styled-components";
import useData from "../hooks/useData";
import { Hr } from "./styles/Hr.styled";
import { Description } from "./styles/P.styled";

const StyledCrewMembers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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

const Member = styled.img`
  object-fit: contain;
  height: 223px;
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

interface MembersProps {
  crewSelect: string;
  children?: React.ReactNode;
}

const CrewMembers = ({ crewSelect, children }: MembersProps) => {
  const crew = useData("crew");
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [role, setRole] = useState();
  const [bio, setBio] = useState();

  useEffect(() => {
    const getCrew = () => {
      crew?.map((data: object) => {
        if (data.name === crewSelect) {
          setName(data.name);
          setImage(data.images.png);
          setRole(data.role);
          setBio(data.bio);
        }
      });
    };
    getCrew();
  }, [crewSelect, crew]);

  return (
    <StyledCrewMembers>
      <Member src={image} alt={name} />
      <Hr />
      <Menu>{children}</Menu>
      <Article>
        <p>{role}</p>
        <h2>{name}</h2>
        <Description>{bio}</Description>
      </Article>
    </StyledCrewMembers>
  );
};

export default CrewMembers;
