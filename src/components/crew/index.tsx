"use client";

import React, { useState } from "react";
import Member from "./member";
import { CrewMemberType } from "@/types/index";

const Crew = ({ content }: { content: CrewMemberType[] }) => {
  const [active, setActive] = useState(0);

  // When button is clicked, add 1 to index to cycle trough the members array. If index is equal to last item index, reset to first item index.
  const changeMember = () => {
    if (active === content?.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  return (
    <Member content={content?.[active]}>
      <button
        onClick={changeMember}
        className={`flex gap-4 p-4 even:bg-accent/100`}
      >
        {content?.map((item) => (
          <div
            key={item.name}
            id={`active-${active}`}
            className="h-2 w-2 rounded-full bg-accent opacity-30 desktop:h-4 desktop:w-4"
          ></div>
        ))}
        <span className="sr-only">next crew</span>
      </button>
    </Member>
  );
};

export default Crew;
