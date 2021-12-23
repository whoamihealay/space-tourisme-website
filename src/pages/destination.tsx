import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Planets from "../components/Planets";

const Destination = () => {
  const [dest, setDest] = useState("Moon");

  const getDest = (planet: string) => {
    setDest(planet);
  };

  return (
    <div className="min-h-screen text-center">
      <Head>
        <title>Frontend Mentor | Destination</title>
      </Head>
      <Layout>
        <div className="px-4 mx-auto max-w-7xl">
          <h1 className="font-sans text-lg uppercase text-white tablet:text-left tablet:pl-8">
            <span aria-hidden="true">01</span> Pick your destination
          </h1>
          <Planets dest={dest}>
            <button
              className="font-sans h-10 text-accent uppercase cursor-pointer hover:border-0 hover:border-b-2 hover:border-solid hover:border-white hover:text-white focus:border-0 focus:border-b-2 focus:border-solid focus:border-white focus:text-white"
              onClick={() => getDest("Moon")}
            >
              Moon
            </button>
            <button
              className="font-sans h-10 text-accent uppercase cursor-pointer hover:border-0 hover:border-b-2  hover:border-solid hover:border-white hover:text-white focus:border-0 focus:border-b-2 focus:border-solid focus:border-white focus:text-white"
              onClick={() => getDest("Mars")}
            >
              Mars
            </button>
            <button
              className="font-sans h-10 text-accent uppercase cursor-pointer hover:border-0 hover:border-b-2 hover:border-solid hover:border-white hover:text-white focus:border-0 focus:border-b-2 focus:border-solid focus:border-white focus:text-white"
              onClick={() => getDest("Europa")}
            >
              Europa
            </button>
            <button
              className="font-sans h-10 text-accent uppercase cursor-pointer hover:border-0 hover:border-b-2 hover:border-solid hover:border-white hover:text-white focus:border-0 focus:border-b-2 focus:border-solid focus:border-white focus:text-white"
              onClick={() => getDest("Titan")}
            >
              Titan
            </button>
          </Planets>
        </div>
      </Layout>
    </div>
  );
};

export default Destination;
