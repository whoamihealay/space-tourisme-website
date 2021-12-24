import Image from "next/image";
import { useEffect, useState } from "react";
import useData from "../hooks/useData";
import { TechInterface } from "../types/dataTypes";

interface TechProps {
  tech: string;
  children: React.ReactNode;
}

const Technology = ({ tech, children }: TechProps) => {
  const technolgies = useData("technology");
  const [name, setName] = useState("");
  const [landscape, setLandscape] = useState("");
  const [portrait, setPortrait] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getTechnologies = () => {
      if (technolgies != null) {
        technolgies.map((data: TechInterface) => {
          if (data.name === tech) {
            setName(data.name);
            setLandscape(data.images.landscape);
            setPortrait(data.images.portrait);
            setDescription(data.description);
          }
        });
      }
    };
    getTechnologies();
  }, [tech, technolgies]);

  return (
    <div className="text-center desktop:text-left desktop:flex desktop:flex-row-reverse desktop:items-center">
      {landscape && portrait ? (
        <div className="my-4">
          <div className="desktop:hidden">
            <Image
              objectFit="cover"
              layout="responsive"
              src={landscape}
              alt={name}
              width={768}
              height={310}
            />
          </div>
          <div className="hidden desktop:block">
            <Image src={portrait} alt={name} width={515} height={527} />
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="desktop:flex">
        <div className="flex desktop:flex-col gap-4 justify-center px-4 pt-4 pb-2 relative">
          {children}
        </div>
        <div className="px-4 py-2">
          <p className="text-accent uppercase font-sans tracking-widest p-2">
            The terminology...
          </p>
          <h2 className="text-2xl uppercase font-serif p-2">{name}</h2>
          <p className="text-accent leading-7 px-4 max-w-[50ch] tablet:max-w-prose mx-auto">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
