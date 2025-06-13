"use client";
import React, { useState } from "react";
import Image from "next/image";

import WeatherData from "@/components/page-data/guides/WeatherData";

export default function WeatherList() {
  const [weather] = useState(WeatherData);
  return (
    <div className="guide-list">
      {weather.map((condition) => {
        return (
          <div className="guide-item" key={condition.id}>
            <Image
              className="guide-image"
              src={condition.img}
              alt={condition.title}
            />
            <div className="guide-text">
              <div className="guide-title">{condition.title}</div>
              <p className="guide-item-description">{condition.description}</p>
              <div className="guide-tags">
                <div className="guide-continent">{condition.continent1}</div>
                {condition.continent2 && (
                  <div className="guide-continent">{condition.continent2}</div>
                )}
                {condition.continent3 && (
                  <div className="guide-continent">{condition.continent3}</div>
                )}
                {condition.continent4 && (
                  <div className="guide-continent">{condition.continent4}</div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
