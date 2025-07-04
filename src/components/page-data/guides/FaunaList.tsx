"use client";
import React, { useState } from "react";
import Image from "next/image";

import FaunaData from "@/components/page-data/guides/FaunaData";

export default function PlantList() {
  const [animals] = useState(FaunaData);
  return (
    <div className="guide-list">
      {animals.map((animal) => {
        return (
          <div className="guide-item" key={animal.id}>
            <Image className="guide-image" src={animal.img} alt={animal.name} />
            <div className="guide-text">
              <div className="guide-title">{animal.name}</div>
              <p className="guide-item-description">{animal.description}</p>
              <div className="guide-tags">
                <div className="guide-rarity">{animal.rarity}</div>
                <div className="guide-category">{animal.category}</div>
                <div className="guide-region">{animal.region}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
