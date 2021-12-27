import Image from "next/image";

export const HomeBackgrounds = () => {
  return (
    <div>
      <div className="tablet:hidden bg-dark -z-50 min-h-[100vw] fixed inset-0">
        <Image
          src={"/assets/home/background-home-mobile.jpg"}
          alt=""
          layout="fill"
          objectFit="cover"
          className="-z-[1]"
        />
      </div>
      <div className="hidden tablet:block desktop:hidden bg-dark -z-50 min-h-[100vw] fixed inset-0">
        <Image
          src={"/assets/home/background-home-tablet.jpg"}
          alt=""
          layout="fill"
          objectFit="cover"
          className="-z-[1]  "
        />
      </div>
      <div className="hidden desktop:block bg-dark -z-50 min-h-[100vw] fixed inset-0">
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
      <div className="tablet:hidden bg-dark -z-50 min-h-[100vw] fixed inset-0">
        <Image
          src={"/assets/destination/background-destination-mobile.jpg"}
          alt=""
          layout="fill"
          objectFit="cover"
          className="-z-[1]"
        />
      </div>
      <div className="hidden tablet:block desktop:hidden bg-dark -z-50 min-h-[100vw] fixed inset-0">
        <div className="bg-dark -z-50 min-h-[100vw] fixed inset-0"></div>
        <Image
          src={"/assets/destination/background-destination-tablet.jpg"}
          alt=""
          layout="fill"
          objectFit="cover"
          className="-z-[1]  "
        />
      </div>
      <div className="hidden desktop:block bg-dark -z-50 min-h-[100vw] fixed inset-0">
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
      <div className="tablet:hidden bg-dark -z-50 min-h-[100vw] fixed inset-0">
        <Image
          src={"/assets/crew/background-crew-mobile.jpg"}
          alt=""
          layout="fill"
          objectFit="cover"
          className="-z-[1]"
        />
      </div>
      <div className="hidden tablet:block desktop:hidden bg-dark -z-50 min-h-[100vw] fixed inset-0">
        <div className=""></div>
        <Image
          src={"/assets/crew/background-crew-tablet.jpg"}
          alt=""
          layout="fill"
          objectFit="cover"
          className="-z-[1]"
        />
      </div>
      <div className="hidden desktop:block bg-dark -z-50 min-h-[100vw] fixed inset-0">
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
      <div className="tablet:hidden bg-dark -z-50 min-h-[100vw] fixed inset-0">
        <Image
          src={"/assets/technology/background-technology-mobile.jpg"}
          alt=""
          layout="fill"
          objectFit="cover"
          className="-z-[1]"
        />
      </div>
      <div className="hidden tablet:block desktop:hidden bg-dark -z-50 min-h-[100vw] fixed inset-0">
        <Image
          src={"/assets/technology/background-technology-tablet.jpg"}
          alt=""
          layout="fill"
          objectFit="cover"
          className="-z-[1]  "
        />
      </div>
      <div className="hidden desktop:block bg-dark -z-50 min-h-[100vw] fixed inset-0">
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
