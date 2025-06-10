"use client";
import React, { useState } from "react";

import PageHeader from "@/components/PageHeader";
import GuidesData from "@/components/page-data/guides/GuidesData";
import ArticleList from "@/components/page-data/guides/ArticleList";

import GuidesHeader from "@/components/images/guides/GuidesSkell.jpg";

function GuidesContent() {
  return (
    <div className="guides">
      <div className="guides-content">
        <div className="guides-header">
          <PageHeader pageTitle="Guides" backgroundImage={GuidesHeader} />
        </div>
        <div className="guides-description">
          <h2>Still Curious? Want to Learn More?</h2>
          <p>
            Check out some of our guides for more information on things
            you&apos;ll experience on Mira, plus tips and tricks!
          </p>
        </div>
        <div className="featured-guides-section home-section">
          <div className="home-section-title">
            <h2>Travel Guides</h2>
          </div>
          <ArticleList />
        </div>
      </div>
    </div>
  );
}

export default function Guides() {
  return (
    <main className="guides">
      <GuidesContent />
    </main>
  );
}
