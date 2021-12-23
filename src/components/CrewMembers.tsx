import { useEffect, useState } from "react";
import Image from "next/image";
import useData from "../hooks/useData";
import { CrewInterface } from "../types/dataTypes";

interface MembersProps {
  crewSelect: string;
  children?: React.ReactNode;
}

const CrewMembers = ({ crewSelect, children }: MembersProps) => {
  const crew = useData("crew");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    const getCrew = () => {
      if (crew != null) {
        crew.map((data: CrewInterface) => {
          if (data.name === crewSelect) {
            setName(data.name);
            setImage(data.images.webp);
            setRole(data.role);
            setBio(data.bio);
          } else {
            return;
          }
        });
      }
    };
    getCrew();
  }, [crew, crewSelect]);

  return (
    <div className="flex flex-col items-center text-center">
      {image ? (
        <Image
          src={image}
          alt={name}
          width={223}
          height={223}
          objectFit="contain"
        />
      ) : (
        <div></div>
      )}
      <hr className="w-full opacity-30" />
      <div className="flex justify-center m-2 gap-4 desktop:justify-start desktop:my-2 desktop:mx-0">
        {children}
      </div>
      <article className="flex flex-col">
        <p>{role}</p>
        <h2>{name}</h2>
        <p className="p-4 text-accent text-center leading-8 desktop:text-left">
          {bio}
        </p>
      </article>
    </div>
  );
};

export default CrewMembers;
