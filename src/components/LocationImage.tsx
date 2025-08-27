"use client";

import { DestinationData } from "@/lib/DestinationData";
import FadeInSection from "./FadeInSection";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {
  theme: "dark",
  mainStyle: {
    "--f-toolbar-padding": "0",
    "--f-button-svg-stroke-width": "1.5",
    "--f-arrow-svg-stroke-width": "1.75",
    "--f-thumb-width": "82px",
    "--f-thumb-height": "82px",
    "--f-thumb-border-radius": "8px",
    "--f-thumb-selected-shadow": "inset 0 0 0 2px #fff, 0 0 0 1.5px #ff2e00",
  },
  zoomEffect: false,
  fadeEffect: false,
  dragToClose: false,
  Carousel: {
    Toolbar: {
      absolute: false,
      display: {
        middle: ["counter"],
        right: ["toggleFull", "thumbs", "close"],
      },
    },
  },
});

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
            data-fancybox
            data-caption={props.data.img_alt}
          />
        </div>
        <div className="location-title">{props.data.title}</div>
      </div>
    </FadeInSection>
  );
}
