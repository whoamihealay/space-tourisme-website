import Link from "next/link";

const Explore = () => {
  return (
    <Link href="/destination" passHref>
      <div className="relative w-36 h-36 my-16 mx-auto bg-white text-dark flex justify-center items-center rounded-full font-serif text-xl uppercase cursor-pointer hover:shadow-white/10 hover:shadow-explore tablet:w-60 tablet:h-60 tablet:shadow-xl desktop:w-72 desktop:h-72 desktop:shadow-2xl">
        Explore
      </div>
    </Link>
  );
};

export default Explore;
