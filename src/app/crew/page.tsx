import Background from "@/components/background";
import Layout from "@/components/Layout";
import { crew as crewData, navigation } from "@/data/data.json";
import Crew from "@/components/crew";

const getPageData = () => {
  return {
    data: crewData,
    layout: {
      navigation: navigation,
    },
  };
};

export async function generateMetadata() {
  const { data } = getPageData();

  return {
    title: `${data?.page?.title} | Frontend Mentor`,
  };
}

const Page = () => {
  const { data, layout } = getPageData();

  return (
    <div className="min-h-screen text-center">
      <Background data={data?.page?.background} />
      <Layout data={layout}>
        <div>
          <h1 className="font-sans text-lg uppercase text-white tablet:text-left tablet:pl-8 desktop:px-4 tracking-widest">
            <span
              className="text-lg opacity-25 px-2 font-bold"
              aria-hidden="true"
            >
              02
            </span>{" "}
            Meet your crew
          </h1>
          <Crew content={data?.content} />
        </div>
      </Layout>
    </div>
  );
};

export default Page;
