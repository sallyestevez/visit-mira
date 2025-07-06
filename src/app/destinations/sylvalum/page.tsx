"use client";
import React, { useState } from "react";
import Image from "next/image";

import PageHeader from "@/components/PageHeader";
import SylvalumData from "@/components/page-data/destinations/SylvalumData";

import SylvalumImg from "@/components/images/destinations/sylvalum/Sylvalum.jpg";

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

export default function Sylvalum() {
  const [SylvalumLocations] = useState(SylvalumData);
  return (
    <div className="sylvalum">
      <div className="destination-content">
        <div className="destination-header">
          <PageHeader pageTitle="Sylvalum" backgroundImage={SylvalumImg} />
        </div>
        <div className="destination-page-description sylvalum-page-description">
          <p>
            Characterized by its white sand. Contains a lot of weird plants and
            trees, but that&apos;s Mira for you. Lots of people say it looks
            very pretty at night!
          </p>
          <p>Neighboring Regions: Cauldros (north), Primordia (south)</p>
        </div>
        <div className="featured-destinations-section home-section">
          <div className="home-section-title">
            <h2>Must-See Locations!</h2>
          </div>
          <div className="locations-list">
            {SylvalumLocations.map((location) => {
              return (
                <div className="location" key={location.id}>
                  <Image
                    className="location-image"
                    width={720}
                    height={400}
                    src={location.img}
                    alt={location.img_alt}
                    data-fancybox
                    data-caption={location.title}
                  />
                  <div className="location-title sylvalum-title">
                    {location.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
