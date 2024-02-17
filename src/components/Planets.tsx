import React from "react";
import Image from "next/image";
import { PlanetType } from "../types";
interface PlanetsProps {
  content: PlanetType;
  children: React.ReactNode;
}

const Planets = ({ content, children }: PlanetsProps) => {
  return (
    <div className="text-center desktop:text-left flex flex-col items-center desktop:items-start desktop:flex-row desktop:justify-around desktop:gap-16">
      {content.images && (
        <div className="min-w-[250px] w-1/2 p-8 animate-spin-slow desktop:w-full">
          <Image
            src={content.images.webp}
            alt={content.name}
            width={534}
            height={534}
          />
        </div>
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
