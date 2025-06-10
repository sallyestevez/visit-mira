"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import PageHeader from "@/components/PageHeader";
import DestinationDescriptionData from "@/components/page-data/destinations/DestinationDescriptionData";

import MiraImg from "@/components/images/home/Mira.png";

function DestinationsContent() {
  const [MiraDestinations] = useState(DestinationDescriptionData);
  return (
    <div className="destinations">
      <div className="destination-content">
        <div className="destination-header">
          <PageHeader pageTitle="Destinations" backgroundImage={MiraImg} />
        </div>
        <div className="destinations-description">
          <h2>5 Continents to Choose From</h2>
          <p>
            5 continents to explore. Pick your favorite to start your adventure!
          </p>
        </div>
        <div className="featured-destinations-section home-section">
          <div className="home-section-title">
            <h2>Must-See Locations!</h2>
          </div>
          <div className="locations-list">
            {MiraDestinations.map((destination) => {
              return (
                <Link href={destination.id} key={destination.id}>
                  <div className="location" key={destination.id}>
                    <Image
                      className="location-image"
                      width={720}
                      height={400}
                      src={destination.img}
                      alt={destination.img_alt}
                    />
                    <div className="location-title">{destination.title}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Destinations() {
  return (
    <main className="destinations">
      <DestinationsContent />
    </main>
  );
}
