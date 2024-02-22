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
          className={`w-10 h-10 tablet:w-16 tablet:h-16 desktop:w-20 desktop:h-20 border-2 border-solid border-white/30 rounded-full font-serif hover:bg-white hover:text-black ${index === active ? activeStyles : ""}`}
          onClick={() => setActive(index)}
        >
          {index + 1}
        </button>
      ))}
    </Technology>
  );
};

export default Technologies;
