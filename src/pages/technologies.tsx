import Head from "next/head";
import { useState } from "react";
import { TechnologiesBackgrounds } from "../components/Backgrounds";
import Layout from "../components/Layout";
import Technology from "../components/Technology";

const Technologies = () => {
  const [tech, setTech] = useState("Launch vehicle");

  return (
    <div>
      <Head>
        <title>Technologies | Frontend Mentor</title>
      </Head>
      <TechnologiesBackgrounds />
      <Layout>
        <div className="mx-auto max-w-7xl">
          <h1 className="p-4 font-sans text-lg tracking-widest uppercase text-center text-white tablet:text-left tablet:p-0 tablet:pl-8 desktop:pl-O desktop:max-w-5xl desktop:mx-auto">
            <span
              aria-hidden="true"
              className="text-lg opacity-25 px-2 font-bold"
            >
              03
            </span>{" "}
            Space Launch 101
          </h1>
          <Technology tech={tech}>
            <button
              className="w-10 h-10 tablet:w-16 tablet:h-16 desktop:w-20 desktop:h-20 border-2 border-solid border-white/30 rounded-full font-serif hover:bg-white hover:text-black focus:bg-white focus:text-black"
              onClick={() => setTech("Launch vehicle")}
            >
              1
            </button>
            <button
              className="w-10 h-10 tablet:w-16 tablet:h-16 desktop:w-20 desktop:h-20 border-2 border-solid border-white/30 rounded-full font-serif hover:bg-white hover:text-black focus:bg-white focus:text-black"
              onClick={() => setTech("Spaceport")}
            >
              2
            </button>
            <button
              className="w-10 h-10 tablet:w-16 tablet:h-16 desktop:w-20 desktop:h-20 border-2 border-solid border-white/30 rounded-full font-serif hover:bg-white hover:text-black focus:bg-white focus:text-black"
              onClick={() => setTech("Space capsule")}
            >
              3
            </button>
          </Technology>
        </div>
      </Layout>
    </div>
  );
};

export default Technologies;
