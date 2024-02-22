"use client";

import React, { useState } from "react";
import Technology from "./technology";
import { TechnologyType } from "@/types/index";

const Technologies = ({ content }: { content: TechnologyType[] }) => {
  const [active, setActive] = useState(0);
  const activeStyles = "bg-white text-black";

  return (
    <Technology content={content?.[active]}>
      {content?.map((item, index) => (
        <button
          key={item.name}
          className={`h-10 w-10 rounded-full border-2 border-solid border-white/30 font-serif hover:bg-white hover:text-black tablet:h-16 tablet:w-16 desktop:h-20 desktop:w-20 ${index === active ? activeStyles : ""}`}
          onClick={() => setActive(index)}
        >
          {index + 1}
        </button>
      ))}
    </Technology>
  );
};

export default Technologies;
