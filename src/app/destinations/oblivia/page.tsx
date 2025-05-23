"use client";
import React, { useState } from "react";
import Image from "next/image";

import PageHeader from "@/components/PageHeader";
import ObliviaData from "@/components/page-data/destinations/ObliviaData";

import ObliviaImg from "@/components/images/destinations/oblivia/Oblivia.jpg";

export default function Oblivia() {
  const [ObliviaLocations] = useState(ObliviaData);
  return (
    <div className="oblivia">
      <div className="destination-content">
        <div className="destination-header">
          <PageHeader pageTitle="Oblivia" backgroundImage={ObliviaImg} />
        </div>
        <div className="destination-page-description oblivia-page-description">
          <p>
            A dry, arid region, so make sure to bring plenty of water.
            Vegetation is uncommon. Contains the ruins of an ancient
            civilization. Sandstorms are frequent. Try to avoid the bottomless
            pit to nowhere!
          </p>
          <p>Neighboring Region: Primordia (west)</p>
        </div>
        <div className="featured-destinations-section home-section">
          <div className="home-section-title">
            <h2>Must-See Locations!</h2>
          </div>
          <div className="locations-list">
            {ObliviaLocations.map((location) => {
              return (
                <div className="location" key={location.id}>
                  <Image
                    className="location-image oblivia-location-image"
                    width={720}
                    height={400}
                    src={location.img}
                    alt={location.img_alt}
                  />
                  <div className="location-title oblivia-title">
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
