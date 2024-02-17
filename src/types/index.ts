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

export type CrewMember = {
  name: string;
      images: {
        png: string;
        webp: string;
      };
      role: string;
      bio: string;
}

export type TechnologyType = {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
};

export type BackgroundType = {
  desktop: string;
  tablet: string;
  mobile: string;
  alt: string;
};
