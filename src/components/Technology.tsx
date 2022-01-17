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
  const [content, setContent] = useState({
    name: "",
    landscape: "",
    portrait: "",
    description: "",
  });

  // When useData hook is completed, map through the fetched data and match the passed prop. Redo when prop changes.
  useEffect(() => {
    const getTechnologies = () => {
      if (technolgies != null) {
        technolgies.map((data: TechInterface) => {
          if (data.name === tech) {
            setContent({
              name: data.name,
              landscape: data.images.landscape,
              portrait: data.images.portrait,
              description: data.description,
            });
          }
        });
      }
    };
    getTechnologies();
  }, [tech, technolgies]);

  return (
    <div className="text-center desktop:text-left desktop:flex desktop:flex-row-reverse desktop:items-center">
      {content.landscape && content.portrait ? (
        <div className="my-4">
          <div className="desktop:hidden">
            <Image
              objectFit="cover"
              layout="responsive"
              src={content.landscape}
              alt={content.name}
              width={768}
              height={310}
            />
          </div>
          <div className="hidden desktop:block">
            <Image
              src={content.portrait}
              alt={content.name}
              width={515}
              height={527}
            />
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
          <h2 className="text-2xl uppercase font-serif p-2">{content.name}</h2>
          <p className="text-accent leading-7 px-4 max-w-[50ch] tablet:max-w-prose mx-auto">
            {content.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
