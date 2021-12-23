import Head from "next/head";
import React from "react";
import Explore from "../components/Explore";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Head>
        <title>Frontend Mentor | Space tourism website</title>
      </Head>
      <Layout>
        <div className="px-4 mx-auto max-w-[90rem] desktop:flex desktop:justify-between desktop:items-center desktop:mt-12 desktop:ml-auto desktop:max-w-[120rem]">
          <article className="text-center m-auto">
            <h1 className="font-sans text-lg uppercase text-accent p-4 desktop:text-left">
              So, you want to travel to <br />
              <span className="text-4xl font-serif text-white uppercase">
                Space
              </span>
            </h1>
            <p className="p-4 text-accent text-center leading-8 max-w-[50ch] tablet:max-w-prose m-auto desktop:text-left">
              Let{"'"}s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we{"'"}ll give you a truly
              out of this world experience!
            </p>
          </article>
          <Explore />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
