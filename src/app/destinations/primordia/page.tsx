"use client";
import React, { useState } from "react";
import Image from "next/image";

import PageHeader from "@/components/PageHeader";
import PrimordiaData from "@/components/page-data/destinations/PrimordiaData";

import PrimordiaImg from "@/components/images/destinations/primordia/Primordia.jpg";

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

export default function Primordia() {
  const [PrimordiaLocations] = useState(PrimordiaData);
  return (
    <div className="primordia">
      <div className="destination-content">
        <div className="destination-header">
          <PageHeader pageTitle="Primordia" backgroundImage={PrimordiaImg} />
        </div>
        <div className="destination-page-description primordia-page-description">
          <p>
            Surrounded by grassy plains, mountains, and beaches. Primordia is a
            very &quot;welcoming&quot; region with tons of locations to explore,
            and lots of wildlife to encounter. New Los Angeles (NLA) is located
            here.
          </p>
          <p>
            Neighboring Regions: Noctilum (northwest), Oblivia (east), Sylvalum
            (north)
          </p>
        </div>
        <div className="featured-destinations-section home-section">
          <div className="home-section-title">
            <h2>Must-See Locations!</h2>
          </div>
          <div className="locations-list">
            {PrimordiaLocations.map((location) => {
              return <LocationImage key={location.id} data={location} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
