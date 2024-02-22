import Image from "next/image";
import { TechnologyType } from "../../../types";

interface TechProps {
  content: TechnologyType;
  children: React.ReactNode;
}

const Technology = ({ content, children }: TechProps) => {
  return (
    <div className="text-center desktop:flex desktop:flex-row-reverse desktop:items-center desktop:text-left">
      {content.images.landscape && content.images.portrait && (
        <div className="my-4">
          <div className="desktop:hidden">
            <Image
              src={content.images.landscape}
              alt={content.name}
              width={768}
              height={310}
            />
          </div>
          <div className="hidden desktop:block">
            <Image
              src={content.images.portrait}
              alt={content.name}
              width={515}
              height={527}
            />
          </div>
        </div>
      )}
      <div className="desktop:flex">
        <div className="relative flex justify-center gap-4 px-4 pb-2 pt-4 desktop:flex-col">
          {children}
        </div>
        <div className="px-4 py-2">
          <p className="p-2 font-sans uppercase tracking-widest text-accent">
            The terminology...
          </p>
          <h2 className="p-2 font-serif text-2xl uppercase">{content.name}</h2>
          <p className="mx-auto max-w-[50ch] px-4 leading-7 text-accent tablet:max-w-prose">
            {content.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
