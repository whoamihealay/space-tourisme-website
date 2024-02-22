import React from "react";
import Layout from "@/components/Layout";
import Background from "@/components/background";
import { destinations, navigation } from "@/data/data.json";
import Planets from "@/components/planets";

function getPageData() {
  return {
    data: destinations,
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

export default function Index() {
  const { data, layout } = getPageData();

  return (
    <div className="min-h-screen text-center">
      <Background data={data?.page?.background} />
      <Layout data={layout}>
        <div>
          <h1 className="font-sans text-lg uppercase text-white tablet:text-left tablet:pl-8 tracking-widest">
            <span
              aria-hidden="true"
              className="text-lg opacity-25 px-2 font-bold"
            >
              01
            </span>{" "}
            Pick your destination
          </h1>
          <Planets content={data?.content} />
        </div>
      </Layout>
    </div>
  );
}
