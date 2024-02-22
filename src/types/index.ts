export type PlanetType = {
  name: string;
  description: string;
  distance: string;
  images: {
    png: string;
    webp: string;
  };
  travel: string;
};

export type CrewMemberType = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
};

export type TechnologyType = {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
};

export type BackgroundType = {
  [key: string]: {
    src: string;
    blur: string;
    alt: string;
  };
};

export type NavigationType = {
  menu: NavigationLinkType[];
};

export type NavigationLinkType = {
  prefix: string;
  name: string;
  link: string;
};
