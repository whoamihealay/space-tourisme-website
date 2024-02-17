import Head from "next/head";
import React from "react";
import Background from "@/components/background";
import Explore from "../components/Explore";
import Layout from "../components/Layout";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { home } from "../data/data.json";

const HomePage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>{data?.page?.title} | Frontend Mentor</title>
      </Head>
      <Background data={data?.page?.background} />
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
              {data?.content?.description}
            </p>
          </article>
          <Explore />
        </div>
      </Layout>
    </div>
  );
};

export const getStaticProps = (() => {
  return {
    props: {
      data: home,
    },
  };
}) satisfies GetStaticProps;

export default HomePage;
