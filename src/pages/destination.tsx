import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Planets from "../components/Planets";
import { DestinationBackgrounds } from "../components/Backgrounds";

const Destination = () => {
  const [dest, setDest] = useState("Moon");
  const [activeMoon, setActiveMoon] = useState("");
  const [activeMars, setActiveMars] = useState("");
  const [activeEuropa, setActiveEuropa] = useState("");
  const [activeTitan, setActiveTitan] = useState("");

  const resetActive = () => {
    setActiveMoon("");
    setActiveMars("");
    setActiveEuropa("");
    setActiveTitan("");
  };

  useEffect(() => {
    switch (dest) {
      case "Moon":
        resetActive();
        setActiveMoon("border-b-2 border-solid border-white text-white");
        break;
      case "Mars":
        resetActive();
        setActiveMars("border-b-2 border-solid border-white text-white");
        break;
      case "Europa":
        resetActive();
        setActiveEuropa("border-b-2 border-solid border-white text-white");
        break;
      case "Titan":
        resetActive();
        setActiveTitan("border-b-2 border-solid border-white text-white");
        break;
      default:
        break;
    }
  }, [dest]);

  return (
    <div className="min-h-screen text-center">
      <Head>
        <title>Destination | Frontend Mentor </title>
      </Head>
      <DestinationBackgrounds />
      <Layout>
        <div className="px-4 mx-auto max-w-7xl">
          <h1 className="font-sans text-lg uppercase text-white tablet:text-left tablet:pl-8">
            <span
              aria-hidden="true"
              className="text-lg opacity-25 px-2 font-bold"
            >
              01
            </span>{" "}
            Pick your destination
          </h1>
          <Planets dest={dest}>
            <button
              className={`font-sans h-10 text-accent uppercase cursor-pointer hover:border-b-2 hover:border-solid hover:border-white hover:text-white ${activeMoon}`}
              onClick={() => setDest("Moon")}
            >
              Moon
            </button>
            <button
              className={`font-sans h-10 text-accent uppercase cursor-pointer hover:border-0 hover:border-b-2 hover:border-solid hover:border-white hover:text-white ${activeMars}`}
              onClick={() => setDest("Mars")}
            >
              Mars
            </button>
            <button
              className={`font-sans h-10 text-accent uppercase cursor-pointer hover:border-0 hover:border-b-2 hover:border-solid hover:border-white hover:text-white ${activeEuropa}`}
              onClick={() => setDest("Europa")}
            >
              Europa
            </button>
            <button
              className={`font-sans h-10 text-accent uppercase cursor-pointer hover:border-0 hover:border-b-2 hover:border-solid hover:border-white hover:text-white ${activeTitan}`}
              onClick={() => setDest("Titan")}
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
