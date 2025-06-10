"use client";
import React from "react";

import PageHeader from "@/components/PageHeader";
import PlantList from "@/components/page-data/guides/PlantList";
import GuidesData from "@/components/page-data/guides/GuidesData";
import GuidesHeader from "@/components/images/guides/GuidesSkell.jpg";

function PlantsContent() {
  return (
    <div className="plants">
      <div className="plants-content">
        <div className="guides-header">
          <PageHeader pageTitle="Plants" backgroundImage={GuidesHeader} />
        </div>
        <div className="guides-description">
          <h2>{GuidesData[0].title}</h2>
          <p>{GuidesData[0].description}</p>
        </div>
        <div className="home-section">
          <PlantList />
        </div>
      </div>
    </div>
  );
}

export default function Plants() {
  return (
    <main className="plants">
      <PlantsContent />
    </main>
  );
}
