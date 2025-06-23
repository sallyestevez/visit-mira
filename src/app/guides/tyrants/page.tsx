"use client";
import React from "react";

import PageHeader from "@/components/PageHeader";
import TyrantsList from "@/components/page-data/guides/TyrantsList";
import GuidesData from "@/components/page-data/guides/GuidesData";
import GuidesHeader from "@/components/images/guides/GuidesTyrants.jpg";

function TyrantsContent() {
  return (
    <div className="tyrants">
      <div className="tyrants-content">
        <div className="guides-header">
          <PageHeader pageTitle="Tyrants" backgroundImage={GuidesHeader} />
        </div>
        <div className="guides-description">
          <h2>{GuidesData[3].title}</h2>
          <p>{GuidesData[3].description}</p>
        </div>
        <div className="home-section">
          <TyrantsList />
        </div>
      </div>
    </div>
  );
}

export default function Tyrants() {
  return (
    <main className="tyrants">
      <TyrantsContent />
    </main>
  );
}
