"use client";
import React from "react";

import PageHeader from "@/components/PageHeader";
import WeatherList from "@/components/page-data/guides/WeatherList";
import GuidesData from "@/components/page-data/guides/GuidesData";
import GuidesHeader from "@/components/images/guides/GuidesWeather.jpg";

function WeatherContent() {
  return (
    <div className="weather">
      <div className="weather-content">
        <div className="guides-header">
          <PageHeader pageTitle="Weather" backgroundImage={GuidesHeader} />
        </div>
        <div className="guides-description">
          <h2>{GuidesData[2].title}</h2>
          <p>{GuidesData[2].description}</p>
        </div>
        <div className="home-section">
          <WeatherList />
        </div>
      </div>
    </div>
  );
}

export default function Weather() {
  return (
    <main className="weather">
      <WeatherContent />
    </main>
  );
}
