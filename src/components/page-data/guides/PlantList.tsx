"use client";
import React, { useState } from "react";
import Image from "next/image";

import PlantData from "@/components/page-data/guides/PlantData";

import MiraImg from "@/components/images/home/Mira.png";

export default function PlantList() {
  const [plants] = useState(PlantData);
  return (
    <div className="guide-list">
      {plants.map((plant) => {
        return (
          <div className="guide-item" key={plant.id}>
            <Image className="guide-image" src={plant.img} alt={plant.name} />
            <div className="guide-text">
              <div className="guide-title">{plant.name}</div>
              <p className="guide-item-description">{plant.description}</p>
              <div className="guide-tags">
                <div className="guide-rarity">{plant.rarity}</div>
                <div className="guide-category">{plant.category}</div>
                <div className="guide-region">{plant.region}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
