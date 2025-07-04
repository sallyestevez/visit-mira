"use client";
import React from "react";

import PageHeader from "@/components/PageHeader";
import FaunaList from "@/components/page-data/guides/FaunaList";
import GuidesData from "@/components/page-data/guides/GuidesData";
import GuidesHeader from "@/components/images/guides/GuidesFauna.jpg";

function FaunaContent() {
  return (
    <div className="fauna">
      <div className="fauna-content">
        <div className="guides-header">
          <PageHeader pageTitle="Mira's Fauna" backgroundImage={GuidesHeader} />
        </div>
        <div className="guides-description">
          <h2>{GuidesData[1].title}</h2>
          <p>{GuidesData[1].description}</p>
        </div>
        <div className="home-section">
          <FaunaList />
        </div>
      </div>
    </div>
  );
}

export default function Fauna() {
  return (
    <main className="fauna">
      <FaunaContent />
    </main>
  );
}
