import { BackgroundType } from "@/types/index";
import Image from "next/image";

interface IProps {
  data: BackgroundType;
  viewport: string;
}

const Background = ({ data, viewport }: IProps) => {
  return (
    <div>
      <div className="fixed inset-0 -z-50 min-h-[100vw] bg-dark">
        <Image
          src={data[viewport].src}
          alt={data[viewport].alt}
          fill={true}
          className="-z-[1]"
          placeholder="blur"
          blurDataURL={data[viewport].blur}
        />
      </div>
    </div>
  );
};

export default Background;
