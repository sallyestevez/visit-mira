"use client";
import React, { useState } from "react";
import Image from "next/image";

import PageHeader from "@/components/PageHeader";
import CauldrosData from "@/components/page-data/destinations/CauldrosData";

import CauldrosImg from "@/components/images/destinations/cauldros/Cauldros.jpg";

import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import FadeInSection from "@/components/FadeInSection";
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

export default function Cauldros() {
  const [CauldrosLocations] = useState(CauldrosData);
  return (
    <div className="cauldros">
      <div className="destination-content">
        <div className="destination-header">
          <PageHeader pageTitle="Cauldros" backgroundImage={CauldrosImg} />
        </div>
        <div className="destination-page-description cauldros-page-description">
          <p>
            The most dangerous region! Its volcanic terrain is broken by pools
            of molten rock, ancient battlefields, and the ruins of an ancient
            city. Hostile weather is constant. If you feel as if this place is
            too hot, go back to the hotel in NLA. After all, it got five stars
            for its air conditioning.
          </p>
          <p>Neighboring Region: Sylvalum (south)</p>
        </div>
        <div className="featured-destinations-section home-section">
          <div className="home-section-title">
            <h2>Must-See Locations!</h2>
          </div>
          <div className="locations-list">
            {CauldrosLocations.map((location) => {
              return <LocationImage key={location.id} data={location} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
