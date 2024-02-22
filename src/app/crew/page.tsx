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
        <h1 className="font-sans text-lg uppercase tracking-widest text-white tablet:pl-8 tablet:text-left desktop:px-4">
          <span
            className="px-2 text-lg font-bold opacity-25"
            aria-hidden="true"
          >
            02
          </span>{" "}
          Meet your crew
        </h1>
        <Crew content={data?.content} />
      </div>
    </Layout>
  );
}
