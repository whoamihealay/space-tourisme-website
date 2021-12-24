import Image from "next/image";

export const HomeBackgrounds = () => {
  return (
    <div>
      <div className="tablet:hidden">
        <Image
          src={"/assets/home/background-home-mobile.jpg"}
          alt=""
          width={375}
          height={667}
          layout="fill"
          objectFit="cover"
          className="-z-[1]"
        />
      </div>
      <div className="hidden tablet:block desktop:hidden">
        <Image
          src={"/assets/home/background-home-tablet.jpg"}
          alt=""
          layout="fill"
          objectFit="cover"
          className="-z-[1]  "
        />
      </div>
      <div className="hidden desktop:block">
        <Image
          src={"/assets/home/background-home-desktop.jpg"}
          alt=""
          layout="fill"
          objectFit="cover"
          className="-z-[1]"
        />
      </div>
    </div>
  );
};

export const DestinationBackgrounds = () => {
  return (
    <div>
      <div className="tablet:hidden">
        <Image
          src={"/assets/destination/background-destination-mobile.jpg"}
          alt=""
          width={375}
          height={667}
          layout="fill"
          objectFit="cover"
          className="-z-[1]"
        />
      </div>
      <div className="hidden tablet:block desktop:hidden">
        <Image
          src={"/assets/destination/background-destination-tablet.jpg"}
          alt=""
          layout="fill"
          objectFit="cover"
          className="-z-[1]  "
        />
      </div>
      <div className="hidden desktop:block">
        <Image
          src={"/assets/destination/background-destination-desktop.jpg"}
          alt=""
          layout="fill"
          objectFit="cover"
          className="-z-[1]"
        />
      </div>
    </div>
  );
};

export const CrewBackgrounds = () => {
  return (
    <div>
      <div className="tablet:hidden">
        <Image
          src={"/assets/crew/background-crew-mobile.jpg"}
          alt=""
          width={375}
          height={667}
          layout="fill"
          objectFit="cover"
          className="-z-[1]"
        />
      </div>
      <div className="hidden tablet:block desktop:hidden">
        <Image
          src={"/assets/crew/background-crew-tablet.jpg"}
          alt=""
          layout="fill"
          objectFit="cover"
          className="-z-[1]  "
        />
      </div>
      <div className="hidden desktop:block">
        <Image
          src={"/assets/crew/background-crew-desktop.jpg"}
          alt=""
          layout="fill"
          objectFit="cover"
          className="-z-[1]"
        />
      </div>
    </div>
  );
};

export const TechnologiesBackgrounds = () => {
  return (
    <div>
      <div className="tablet:hidden">
        <Image
          src={"/assets/technology/background-technology-mobile.jpg"}
          alt=""
          width={375}
          height={667}
          layout="fill"
          objectFit="cover"
          className="-z-[1]"
        />
      </div>
      <div className="hidden tablet:block desktop:hidden">
        <Image
          src={"/assets/technology/background-technology-tablet.jpg"}
          alt=""
          layout="fill"
          objectFit="cover"
          className="-z-[1]  "
        />
      </div>
      <div className="hidden desktop:block">
        <Image
          src={"/assets/technology/background-technology-desktop.jpg"}
          alt=""
          layout="fill"
          objectFit="cover"
          className="-z-[1]"
        />
      </div>
    </div>
  );
};
