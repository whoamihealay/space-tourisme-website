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
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [distance, setDistance] = useState("");
  const [travel, setTravel] = useState("");

  useEffect(() => {
    const getDestinations = () => {
      if (destinations != null) {
        destinations.map((data: DestInterface) => {
          if (data.name === dest) {
            setName(data.name);
            setImage(data.images.webp);
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
    <div className="flex flex-col items-center text-center desktop:flex-row desktop:justify-around desktop:text-left">
      {image ? (
        <div className="max-w-[534px] min-w-[250px] w-1/2 p-8 animate-spin-slow">
          <Image
            src={image}
            alt={name}
            width={534}
            height={534}
            objectFit="cover"
            layout="responsive"
          />
        </div>
      ) : (
        <div></div>
      )}
      <article className="flex flex-col">
        <div className="flex justify-center m-2 gap-4 desktop:justify-start desktop:my-2 mx-0 relative">
          {children}
        </div>
        <h2 className="font-serif text-3xl uppercase">{name}</h2>
        <p className="p-4 text-accent text-center leading-8 max-w-[50ch] tablet:max-w-prose desktop:text-left">
          {description}
        </p>
        <hr className="w-full opacity-30" />
        <div className="infoFlex tablet:m-8 tablet:flex tablet:justify-center tablet:gap-12 desktop:my-4 desktop:justify-start">
          <div>
            <h3 className="font-sans text-base text-accent">AVG. DISTANCE</h3>
            <p className="font-serif text-2xl uppercase">{distance}</p>
          </div>
          <div>
            <h3 className="font-sans text-base text-accent">
              EST. TRAVEL TIME
            </h3>
            <p className="font-serif text-2xl uppercase">{travel}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Planets;
