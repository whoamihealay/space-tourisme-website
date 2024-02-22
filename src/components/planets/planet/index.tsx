import React from "react";
import Image from "next/image";
import { PlanetType } from "../../../types";
interface PlanetsProps {
  content: PlanetType;
  children: React.ReactNode;
}

const Planets = ({ content, children }: PlanetsProps) => {
  return (
    <div className="flex flex-col items-center text-center desktop:flex-row desktop:items-start desktop:justify-around desktop:gap-16 desktop:text-left">
      {content.images && (
        <div className="w-1/2 min-w-[250px] animate-spin-slow p-8 desktop:w-full">
          <Image
            src={content.images.webp}
            alt={content.name}
            width={534}
            height={534}
          />
        </div>
      )}
      <article className="flex flex-col desktop:min-h-[27rem] desktop:w-full">
        <div className="relative m-2 mx-0 flex justify-center gap-4 desktop:my-2 desktop:justify-start">
          {children}
        </div>
        <h2 className="font-serif text-3xl uppercase">{content.name}</h2>
        <p className="max-w-[50ch] p-4 text-center leading-8 text-accent tablet:max-w-prose tablet:px-0 desktop:max-w-[45ch] desktop:text-left">
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
