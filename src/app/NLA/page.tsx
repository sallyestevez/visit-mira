"use client";
import React, { useState } from "react";
import Image from "next/image";

import PageHeader from "@/components/PageHeader";
import NLAData from "@/components/page-data/NLAData";

import NewLosAngeles from "@/components/images/nla/New_Los_Angeles.jpg";
import FadeInSection from "@/components/FadeInSection";
import LocationImage from "@/components/LocationImage";

function NLAContent() {
  const [NLADistricts] = useState(NLAData);
  return (
    <div className="nla">
      <div className="destination-content">
        <div className="destination-header">
          <PageHeader
            pageTitle="New Los Angeles"
            backgroundImage={NewLosAngeles}
          />
        </div>
        <div className="destination-page-description">
          <p>
            This location is based on the city of Los Angeles on Earth. It is
            separated into four districts: Administrative, Commercial,
            Industrial, and Residential.
          </p>
          <p>
            Visitors will be staying in the Residential District, and can shop
            to their heart&apos;s content in the Commercial District.
          </p>
          <p>
            The Administrative and Industrial Districts are off-limits to
            visitors.
          </p>
        </div>
        <div className="locations-list nla-districts">
          {NLADistricts.map((district) => {
            return (
              <LocationImage
                key={district.id}
                data={district}
                className="nla-image !h-full"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NLAContent;
