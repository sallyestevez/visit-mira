"use client";
import React from "react";

import PageHeader from "@/components/PageHeader";
import ArchaeologyList from "@/components/page-data/guides/ArchaeologyList";
import GuidesData from "@/components/page-data/guides/GuidesData";
import GuidesHeader from "@/components/images/guides/GuidesSkell.jpg";

function ArchaeologyContent() {
  return (
    <div className="archaeology">
      <div className="archaeology-content">
        <div className="guides-header">
          <PageHeader
            pageTitle="Archaeological Wonders"
            backgroundImage={GuidesHeader}
          />
        </div>
        <div className="guides-description">
          <h2>{GuidesData[1].title}</h2>
          <p>{GuidesData[1].description}</p>
        </div>
        <div className="home-section">
          <ArchaeologyList />
        </div>
      </div>
    </div>
  );
}

export default function Archaeology() {
  return (
    <main className="archaeology">
      <ArchaeologyContent />
    </main>
  );
}
