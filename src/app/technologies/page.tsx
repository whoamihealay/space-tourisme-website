import Background from "@/components/background";
import Layout from "@/components/Layout";
import { technology, navigation } from "@/data/data.json";
import Technologies from "@/components/technologies";

const getPageData = () => {
  return {
    data: technology,
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
            aria-hidden="true"
            className="px-2 text-lg font-bold opacity-25"
          >
            03
          </span>{" "}
          Space Launch 101
        </h1>
        <Technologies content={data?.content} />
      </div>
    </Layout>
  );
}
