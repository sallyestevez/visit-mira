"use client";
import React, { useState } from "react";
import Image from "next/image";

import ArchaeologyData from "@/components/page-data/guides/ArchaeologyData";

export default function ArchaeologyList() {
  const [archaeology] = useState(ArchaeologyData);
  return (
    <div className="guide-list">
      {archaeology.map((discovery) => {
        return (
          <div className="guide-item" key={discovery.id}>
            <Image
              className="guide-image"
              src={discovery.img}
              alt={discovery.name}
            />
            <div className="guide-text">
              <div className="guide-title">{discovery.name}</div>
              <p className="guide-item-description">{discovery.description}</p>
              <div className="guide-tags">
                <div className="guide-rarity">{discovery.rarity}</div>
                <div className="guide-category">{discovery.category}</div>
                <div className="guide-region">{discovery.region}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
