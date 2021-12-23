export interface DestInterface {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

export interface CrewInterface {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

export interface TechInterface {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}
