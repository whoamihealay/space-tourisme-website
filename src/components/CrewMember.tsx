import Image from "next/image";
import { CrewMemberType } from "../types";

interface ICrewMember {
  content: CrewMemberType;
  children?: React.ReactNode;
}

const CrewMember = ({ content, children }: ICrewMember) => {
  return (
    <div className="flex flex-col items-center text-center tablet:flex-col-reverse desktop:flex-row-reverse desktop:text-left desktop:justify-between">
      <div className="max-w-[456px] mobile:w-3/5 tablet:w-3/4 contrast-[.85] desktop:w-full">
        <Image
          src={content?.images.webp}
          alt={content.name}
          width={456}
          height={572}
        />
        <hr className="hidden tablet:block opacity-10" />
      </div>
      <hr className="w-full opacity-10 tablet:hidden" />
      <div className="tablet:flex tablet:flex-col-reverse">
        <div className="flex justify-center m-2 gap-4 desktop:justify-start desktop:my-2 desktop:mx-0 relative">
          {children}
        </div>
        <article className="flex flex-col">
          <p className="text-lg uppercase font-serif text-white/50 desktop:px-4">
            {content.role}
          </p>
          <h2 className="text-2xl uppercase font-serif desktop:px-4">
            {content.name}
          </h2>
          <p className="p-4 text-accent text-center leading-8 desktop:text-left tablet:h-40 desktop:h-52 max-w-[50ch]">
            {content.bio}
          </p>
        </article>
      </div>
    </div>
  );
};

export default CrewMember;
