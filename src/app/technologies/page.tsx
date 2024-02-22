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

const Page = () => {
  const { data, layout } = getPageData();

  return (
    <div>
      <Background data={data?.page?.background} />
      <Layout data={layout}>
        <div>
          <h1 className="font-sans text-lg uppercase text-white tablet:text-left tablet:pl-8 desktop:px-4 tracking-widest">
            <span
              aria-hidden="true"
              className="text-lg opacity-25 px-2 font-bold"
            >
              03
            </span>{" "}
            Space Launch 101
          </h1>
          <Technologies content={data?.content} />
        </div>
      </Layout>
    </div>
  );
};

export default Page;
