"use client";

import { DestinationData } from "@/lib/DestinationData";
import FadeInSection from "./FadeInSection";
import Image from "next/image";

type LocationImageProps = {
  readonly className?: string;
  readonly data: DestinationData;
};
export default function LocationImage(props: LocationImageProps) {
  return (
    <FadeInSection>
      <div className={`location ${props.className ?? ""}`}>
        <div className="location-image">
          <Image
            src={props.data.img}
            width={720}
            height={400}
            alt={props.data.img_alt}
            loading="lazy"
          />
        </div>
        <div className="location-title">{props.data.title}</div>
      </div>
    </FadeInSection>
  );
}
