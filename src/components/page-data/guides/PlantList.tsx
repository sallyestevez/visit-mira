"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import PlantData from "@/components/page-data/guides/PlantData";

import MiraImg from "@/components/images/home/Mira.png";

export default function PlantList() {
  const [plants] = useState(PlantData);
  return (
    <div className="articles-list">
      {plants.map((plant) => {
        return (
          <Link href={plant.id} key={plant.id}>
            <div className="article" key={plant.id}>
              <Image
                className="article-image"
                src={plant.img}
                alt={plant.name}
              />
              <div className="article-text">
                <div className="article-title">{plant.name}</div>
                <p className="article-description">{plant.description}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
