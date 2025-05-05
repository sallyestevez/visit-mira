import { StaticImageData } from "next/image";

export type LandmarkList = {
  title: string;
  img: string | StaticImageData;
}[];

export type DestinationData = {
  id: string;
  title: string;
  img: string | StaticImageData;
  img_alt: string;
};

export function getDestinationData(data: LandmarkList): DestinationData[] {
  return data.map((item) => {
    const id = item.title.toLowerCase().replace(/\s+/g, "-").replace("'", "");
    return {
      id,
      title: item.title,
      img: item.img,
      img_alt: item.title,
    };
  });
}
