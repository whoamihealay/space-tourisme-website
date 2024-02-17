import React, { useState } from "react";
import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";

import Layout from "@/components/Layout";
import Planets from "@/components/Planets";
import Background from "@/components/background";
import { destinations, navigation } from "@/data/data.json";

const Destination = ({
  data,
  layout,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [active, setActive] = useState(0);
  const activeStyles = "border-b-2 border-solid border-white text-white";

  return (
    <div className="min-h-screen text-center">
      <Head>
        <title>{`${data?.page?.title} | Frontend Mentor`}</title>
      </Head>
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
          <Planets content={data?.content?.[active]}>
            {data?.content?.map((item, index) => (
              <button
                key={item.name}
                className={`font-sans h-10 text-accent uppercase cursor-pointer hover:border-b-2 hover:border-solid hover:border-white hover:text-white ${index === active ? activeStyles : ""}`}
                onClick={() => setActive(index)}
              >
                {item.name}
              </button>
            ))}
          </Planets>
        </div>
      </Layout>
    </div>
  );
};

export const getStaticProps = (() => {
  return {
    props: {
      data: destinations,
      layout: {
        navigation: navigation,
      },
    },
  };
}) satisfies GetStaticProps;

export default Destination;
