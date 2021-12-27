import Head from "next/head";
import { useState } from "react";
import { CrewBackgrounds } from "../components/Backgrounds";
import CrewMembers from "../components/CrewMembers";
import Layout from "../components/Layout";

const Crew = () => {
  const [index, setIndex] = useState(0);
  const members = [
    "Douglas Hurley",
    "Mark Shuttleworth",
    "Victor Glover",
    "Anousheh Ansari",
  ];

  // When button is clicked, add 1 to index to cycle trough the members array. If index is equal to last item index, reset to first item index.
  const changeMember = () => {
    if (index === members.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="min-h-screen text-center">
      <Head>
        <title>Frontend Mentor | Crew</title>
      </Head>
      <CrewBackgrounds />
      <Layout>
        <div className="px-4 mx-auto max-w-7xl">
          <h1 className="font-sans text-lg tracking-widest uppercase text-accent tablet:pl-8 tablet:text-left pb-8">
            <span
              className="text-lg opacity-25 px-2 font-bold"
              aria-hidden="true"
            >
              02
            </span>{" "}
            Meet your crew
          </h1>
          <CrewMembers crewSelect={members[index]}>
            <button
              onClick={changeMember}
              className={`flex gap-4 p-4 even:bg-accent/100`}
            >
              <div
                id={`active-${index}`}
                className="h-2 w-2 rounded-full bg-accent opacity-30 desktop:h-4 desktop:w-4"
              ></div>
              <div
                id={`active-${index}`}
                className="h-2 w-2 rounded-full bg-accent opacity-30 desktop:h-4 desktop:w-4"
              ></div>
              <div
                id={`active-${index}`}
                className="h-2 w-2 rounded-full bg-accent opacity-30 desktop:h-4 desktop:w-4"
              ></div>
              <div
                id={`active-${index}`}
                className="h-2 w-2 rounded-full bg-accent opacity-30 desktop:h-4 desktop:w-4"
              ></div>
              <span className="sr-only">change crew member</span>
            </button>
          </CrewMembers>
        </div>
      </Layout>
    </div>
  );
};

export default Crew;
