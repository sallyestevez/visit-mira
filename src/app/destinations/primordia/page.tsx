"use client";
import React, { useState } from "react";
import Image from "next/image";

import PageHeader from "@/components/PageHeader";
import PrimordiaData from "@/components/page-data/destinations/PrimordiaData";
import DestinationDescriptionData from "@/components/page-data/destinations/DestinationDescriptionData";

import PrimordiaImg from "@/components/images/destinations/primordia/Primordia.jpg";

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
            very "welcoming" region with tons of locations to explore, and lots
            of wildlife to encounter. New Los Angeles (NLA) is located here.
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
          <div className="locations-list customer-reviews-list">
            {PrimordiaLocations.map((location) => {
              return (
                <div className="location" key={location.id}>
                  <Image
                    className="location-image primordia-location-image"
                    width={720}
                    height={400}
                    src={location.img}
                    alt={location.img_alt}
                  />
                  <div className="location-description primordia-description">
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
