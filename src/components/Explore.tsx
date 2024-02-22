import Link from "next/link";

const Explore = () => {
  return (
    <Link href="/destinations">
      <div className="relative mx-auto my-16 flex h-36 w-36 cursor-pointer items-center justify-center rounded-full bg-white font-serif text-xl uppercase text-dark hover:shadow-explore hover:shadow-white/10 tablet:h-60 tablet:w-60 tablet:shadow-xl desktop:h-72 desktop:w-72 desktop:shadow-2xl">
        Explore
      </div>
    </Link>
  );
};

export default Explore;
