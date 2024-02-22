"use client";

import React, { useState } from "react";
import Planet from "./planet";
import { PlanetType } from "@/types/index";

const Planets = ({ content }: { content: PlanetType[] }) => {
  const [active, setActive] = useState(0);
  const activeStyles = "border-b-2 border-solid border-white text-white";

  return (
    <Planet content={content?.[active]}>
      {content?.map((item, index) => (
        <button
          key={item.name}
          className={`h-10 cursor-pointer font-sans uppercase text-accent hover:border-b-2 hover:border-solid hover:border-white hover:text-white ${index === active ? activeStyles : ""}`}
          onClick={() => setActive(index)}
        >
          {item.name}
        </button>
      ))}
    </Planet>
  );
};

export default Planets;
