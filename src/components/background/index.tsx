import { BackgroundType } from "@/types/index";
import Image from "next/image";

interface IProps {
  data: BackgroundType;
}

const Background = ({ data }: IProps) => {
  return (
    <div>
      <div className="tablet:hidden bg-dark -z-50 min-h-[100vw] fixed inset-0">
        <Image
          src={data.mobile.src}
          alt={data.alt}
          fill={true}
          className="-z-[1]"
          placeholder="blur"
          blurDataURL={data.mobile.blur}
        />
      </div>
      <div className="hidden tablet:block desktop:hidden bg-dark -z-50 min-h-[100vw] fixed inset-0">
        <Image
          src={data.tablet.src}
          alt={data.alt}
          fill={true}
          className="-z-[1]"
          placeholder="blur"
          blurDataURL={data.tablet.blur}
        />
      </div>
      <div className="hidden desktop:block bg-dark -z-50 min-h-[100vw] fixed inset-0">
        <Image
          src={data.desktop.src}
          alt={data.alt}
          fill={true}
          className="-z-[1]"
          placeholder="blur"
          blurDataURL={data.desktop.blur}
        />
      </div>
    </div>
  );
};

export default Background;
