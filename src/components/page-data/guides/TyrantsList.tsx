"use client";
import React, { useState } from "react";
import Image from "next/image";

import TyrantsData from "@/components/page-data/guides/TyrantsData";

export default function TyrantsList() {
  const [tyrants] = useState(TyrantsData);
  return (
    <div className="guide-list">
      {tyrants.map((tyrant) => {
        return (
          <div className="guide-item" key={tyrant.id}>
            <Image className="guide-image" src={tyrant.img} alt={tyrant.name} />
            <div className="guide-text tyrants">
              <div className="guide-title">{tyrant.name}</div>
              <div className="guide-location">
                Found in {tyrant.region}'s {tyrant.location}
              </div>
              <p className="guide-item-level">Level {tyrant.level}</p>
              <div className="guide-tags tyrants">
                <div className="guide-species">{tyrant.species}</div>
                <div className="guide-category">{tyrant.category}</div>
                <div className="guide-time">{tyrant.time}</div>
                <div className="guide-weather">{tyrant.weather} Weather</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
