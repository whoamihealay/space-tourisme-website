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

  // When useData hook is completed, map through the fetched data and match the passed prop. Redo when prop changes.
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
    <div className="flex flex-col items-center text-center tablet:flex-col-reverse desktop:flex-row-reverse desktop:text-left desktop:justify-around">
      {image ? (
        <div className="max-w-[456px] mobile:w-3/5 tablet:w-3/4 contrast-[.85] desktop:w-full">
          <Image
            src={image}
            alt={name}
            width={456}
            height={572}
            objectFit="fill"
            layout="responsive"
          />
          <hr className="hidden tablet:block opacity-10" />
        </div>
      ) : (
        <div></div>
      )}
      <hr className="w-full opacity-10 tablet:hidden" />
      <div className="tablet:flex tablet:flex-col-reverse">
        <div className="flex justify-center m-2 gap-4 desktop:justify-start desktop:my-2 desktop:mx-0 relative">
          {children}
        </div>
        <article className="flex flex-col">
          <p className="text-lg uppercase font-serif text-white/50 desktop:px-4">
            {role}
          </p>
          <h2 className="text-2xl uppercase font-serif desktop:px-4">{name}</h2>
          <p className="p-4 text-accent text-center leading-8 desktop:text-left tablet:h-40 desktop:h-52 max-w-[50ch]">
            {bio}
          </p>
        </article>
      </div>
    </div>
  );
};

export default CrewMembers;
