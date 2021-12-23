import Head from "next/head";
import CrewMembers from "../components/CrewMembers";
import Layout from "../components/Layout";

const Crew = () => {
  return (
    <div className="min-h-screen text-center">
      <Head>
        <title>Frontend Mentor | Crew</title>
      </Head>
      <Layout>
        <div className="px-4 mx-auto max-w-7xl">
          <h1 className="font-sans text-lg uppercase text-white tablet:pl-8 tablet:text-left">
            <span className="text-lg opacity-25" aria-hidden="true">
              02
            </span>{" "}
            Meet your crew
          </h1>
          <CrewMembers crewSelect="Douglas Hurley"></CrewMembers>
        </div>
      </Layout>
    </div>
  );
};

export default Crew;
