"use client";
import React, { useState } from "react";
import Image from "next/image";

import PageHeader from "@/components/PageHeader";
import SylvalumData from "@/components/page-data/destinations/SylvalumData";

import SylvalumImg from "@/components/images/destinations/sylvalum/Sylvalum.jpg";

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
