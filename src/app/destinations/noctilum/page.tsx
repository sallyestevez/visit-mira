"use client";
import React, { useState } from "react";
import Image from "next/image";

import PageHeader from "@/components/PageHeader";
import NoctilumData from "@/components/page-data/destinations/NoctilumData";

import NoctilumImg from "@/components/images/destinations/noctilum/Noctilum.jpg";

import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import LocationImage from "@/components/LocationImage";

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

export default function Noctilum() {
  const [NoctilumLocations] = useState(NoctilumData);
  return (
    <div className="noctilum">
      <div className="destination-content">
        <div className="destination-header">
          <PageHeader pageTitle="Noctilum" backgroundImage={NoctilumImg} />
        </div>
        <div className="destination-page-description noctilum-page-description">
          <p>
            Tropical jungle! Full of lush greenery and lots of swamps. Home to
            tons of hostile wildlife. The forest glows at night. If the plants
            seem to be attacking you, don&apos;t worry: that&apos;s their way of
            welcoming you.
          </p>
          <p>Neighboring Region: Primordia (southeast)</p>
        </div>
        <div className="featured-destinations-section home-section">
          <div className="home-section-title">
            <h2>Must-See Locations!</h2>
          </div>
          <div className="locations-list">
            {NoctilumLocations.map((location) => {
              return <LocationImage key={location.id} data={location} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
