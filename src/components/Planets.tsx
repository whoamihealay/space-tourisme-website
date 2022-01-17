import React, { useEffect, useState } from "react";
import useData from "../hooks/useData";
import Image from "next/image";
import { DestInterface } from "../types/dataTypes";

interface PlanetsProps {
  dest: string;
  children: React.ReactNode;
}

const Planets = ({ dest, children }: PlanetsProps) => {
  const destinations = useData("destinations");
  const [content, setContent] = useState({
    name: "",
    image: "",
    description: "",
    distance: "",
    travel: "",
  });

  // When useData hook is completed, map through the fetched data and match the passed prop. Redo when prop changes.
  useEffect(() => {
    const getDestinations = () => {
      if (destinations != null) {
        destinations.map((data: DestInterface) => {
          if (data.name === dest) {
            setContent({
              name: data.name,
              image: data.images.webp,
              description: data.description,
              distance: data.distance,
              travel: data.travel,
            });
          } else {
            return;
          }
        });
      }
    };
    getDestinations();
  }, [dest, destinations]);

  // desktop:flex-row desktop:justify-around desktop:gap-16

  return (
    <div className="text-center desktop:text-left flex flex-col items-center desktop:items-start desktop:flex-row desktop:justify-around desktop:gap-16">
      {content.image ? (
        <div className="min-w-[250px] w-1/2 p-8 animate-spin-slow desktop:w-full">
          <Image
            src={content.image}
            alt={content.name}
            width={534}
            height={534}
            objectFit="cover"
            layout="responsive"
          />
        </div>
      ) : (
        <div></div>
      )}
      <article className="flex flex-col desktop:min-h-[27rem] desktop:w-full">
        <div className="flex justify-center m-2 gap-4 desktop:justify-start desktop:my-2 mx-0 relative">
          {children}
        </div>
        <h2 className="font-serif text-3xl uppercase">{content.name}</h2>
        <p className="p-4 text-accent text-center leading-8 max-w-[50ch] tablet:px-0 tablet:max-w-prose desktop:max-w-[45ch] desktop:text-left">
          {content.description}
        </p>
        <hr className="w-full opacity-30" />
        <div className="infoFlex tablet:my-8 tablet:flex tablet:justify-center tablet:gap-12 desktop:my-4 desktop:justify-start">
          <div>
            <h3 className="font-sans text-base text-accent">AVG. DISTANCE</h3>
            <p className="font-serif text-2xl uppercase">{content.distance}</p>
          </div>
          <div>
            <h3 className="font-sans text-base text-accent">
              EST. TRAVEL TIME
            </h3>
            <p className="font-serif text-2xl uppercase">{content.travel}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Planets;
