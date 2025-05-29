import React from "react";

type FAQTabProps = {
  readonly aboutMiraSectionLink: string;
  readonly travelInformationSectionLink: string;
  readonly hotelSectionLink: string;
  readonly transportationSectionLink: string;
  readonly uniqueExperiencesSectionLink: string;
};

export default function FAQTabs({
  aboutMiraSectionLink,
  travelInformationSectionLink,
  hotelSectionLink,
  transportationSectionLink,
  uniqueExperiencesSectionLink,
}: FAQTabProps) {
  return (
    <div className="faq-section">
      <div className="faq-section-cards">
        <a href={aboutMiraSectionLink}>
          <div className="faq-card">About Mira</div>
        </a>
        <a href={travelInformationSectionLink}>
          <div className="faq-card">Travel Information</div>
        </a>
        <a href={hotelSectionLink}>
          <div className="faq-card">Hotel</div>
        </a>
        <a href={transportationSectionLink}>
          <div className="faq-card">Transportation</div>
        </a>
        <a href={uniqueExperiencesSectionLink}>
          <div className="faq-card">Unique Experiences</div>
        </a>
      </div>
    </div>
  );
}
