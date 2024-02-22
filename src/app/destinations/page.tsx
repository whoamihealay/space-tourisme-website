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
      <div>
        <h1 className="font-sans text-lg uppercase tracking-widest text-white tablet:pl-8 tablet:text-left">
          <span
            aria-hidden="true"
            className="px-2 text-lg font-bold opacity-25"
          >
            01
          </span>{" "}
          Pick your destination
        </h1>
        <Planets content={data?.content} />
      </div>
    </Layout>
  );
}
