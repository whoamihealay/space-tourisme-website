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

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { data, layout } = getPageData();

  const viewport = searchParams.viewport as string;

  return (
    <Layout data={layout}>
      <Background data={data?.page?.background} viewport={viewport} />
      <div className="mx-auto max-w-[90rem] px-4 desktop:ml-auto desktop:mt-12 desktop:flex desktop:max-w-[120rem] desktop:items-center desktop:justify-between">
        <article className="m-auto text-center">
          <h1 className="p-4 font-sans text-lg uppercase text-accent desktop:text-left">
            So, you want to travel to <br />
            <span className="font-serif text-4xl uppercase text-white">
              Space
            </span>
          </h1>
          <p className="m-auto max-w-[50ch] p-4 text-center leading-8 text-accent tablet:max-w-prose desktop:text-left">
            {data?.content?.description}
          </p>
        </article>
        <Explore />
      </div>
    </Layout>
  );
}
