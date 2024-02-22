import React from "react";
import Background from "@/components/background";
import Explore from "@/components/Explore";
import Layout from "@/components/Layout";
import { home, navigation } from "../data/data.json";

function getPageData() {
  return {
    data: home,
    layout: {
      navigation: navigation,
    },
  };
}

export async function generateMetadata() {
  const { data } = getPageData();

  return {
    title: `${data?.page?.title} | Frontend Mentor`,
  };
}

const Home = () => {
  const { data, layout } = getPageData();

  return (
    <div className="min-h-screen">
      <Background data={data?.page?.background} />
      <Layout data={layout}>
        <div className="px-4 mx-auto max-w-[90rem] desktop:flex desktop:justify-between desktop:items-center desktop:mt-12 desktop:ml-auto desktop:max-w-[120rem]">
          <article className="text-center m-auto">
            <h1 className="font-sans text-lg uppercase text-accent p-4 desktop:text-left">
              So, you want to travel to <br />
              <span className="text-4xl font-serif text-white uppercase">
                Space
              </span>
            </h1>
            <p className="p-4 text-accent text-center leading-8 max-w-[50ch] tablet:max-w-prose m-auto desktop:text-left">
              {data?.content?.description}
            </p>
          </article>
          <Explore />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
