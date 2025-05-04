import React, { useState } from "react";

import PageHeader from "../PageHeader";
import NLAData from "./page-data/NLAData";

import NewLosAngeles from "../images/nla/New_Los_Angeles.jpg";

function NLAContent() {
  const [NLADistricts] = useState(NLAData);
  return (
    <div className="destination-content">
      <div className="destination-header">
        <PageHeader
          pageTitle="New Los Angeles"
          backgroundImage={NewLosAngeles}
        />
      </div>
      <div className="destination-description">
        <p>
          This location is based on the city of Los Angeles on Earh. It is
          separated into four districts: Administrative, Commercial, Industrial,
          and Residential.
        </p>
        <p>
          Visitors will be staying in the Residential District, and can shop to
          their heart's content in the Commercial District. The Administrative
          and Industrial Districts are off-limits to visitors.
        </p>
      </div>
      <div className="destinations-list nla-districts">
        {NLADistricts.map((district) => {
          return (
            <div className="destination-card" key={district.id}>
              <div className="destination-card-title">{district.title}</div>
              <div className="destination-card-image">
                <img src={district.img} alt={district.img_alt} loading="lazy" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NLAContent;
