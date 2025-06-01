"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import PageHeader from "@/components/PageHeader";
import GuidesData from "@/components/page-data/guides/GuidesData";

import MiraImg from "@/components/images/home/Mira.png";

export default function Guides() {
  const [Guides] = useState(GuidesData);
  return (
    <div className="guides">
      <div className="guides-content">
        <div className="guides-header">
          <PageHeader pageTitle="Guides" backgroundImage={MiraImg} />
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
          <div className="articles-list">
            {Guides.map((article) => {
              return (
                <Link href={article.id} key={article.id}>
                  <div className="location" key={article.id}>
                    <div className="location-title">{article.title}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
