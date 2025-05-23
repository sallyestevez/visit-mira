"use client";
import React, { useState } from "react";
import Image from "next/image";

import PageHeader from "@/components/PageHeader";
import CauldrosData from "@/components/page-data/destinations/CauldrosData";

import CauldrosImg from "@/components/images/destinations/cauldros/Cauldros.jpg";

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
              return (
                <div className="location" key={location.id}>
                  <Image
                    className="location-image cauldros-location-image"
                    width={720}
                    height={400}
                    src={location.img}
                    alt={location.img_alt}
                  />
                  <div className="location-title cauldros-title">
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
