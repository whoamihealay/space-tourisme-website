import Image from "next/image";
import { CrewMemberType } from "../../../types";

interface ICrewMember {
  content: CrewMemberType;
  children?: React.ReactNode;
}

const Member = ({ content, children }: ICrewMember) => {
  return (
    <div className="flex flex-col items-center text-center tablet:flex-col-reverse desktop:flex-row-reverse desktop:justify-between desktop:text-left">
      <div className="max-w-[456px] contrast-[.85] mobile:w-3/5 tablet:w-3/4 desktop:w-full">
        <Image
          src={content?.images.webp}
          alt={content.name}
          width={456}
          height={572}
        />
        <hr className="hidden opacity-10 tablet:block" />
      </div>
      <hr className="w-full opacity-10 tablet:hidden" />
      <div className="tablet:flex tablet:flex-col-reverse">
        <div className="relative m-2 flex justify-center gap-4 desktop:mx-0 desktop:my-2 desktop:justify-start">
          {children}
        </div>
        <article className="flex flex-col">
          <p className="font-serif text-lg uppercase text-white/50 desktop:px-4">
            {content.role}
          </p>
          <h2 className="font-serif text-2xl uppercase desktop:px-4">
            {content.name}
          </h2>
          <p className="max-w-[50ch] p-4 text-center leading-8 text-accent tablet:h-40 desktop:h-52 desktop:text-left">
            {content.bio}
          </p>
        </article>
      </div>
    </div>
  );
};

export default Member;
