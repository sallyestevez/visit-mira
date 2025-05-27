"use client";
import React, { useState } from "react";
import Image from "next/image";

import PageHeader from "@/components/PageHeader";
import FAQsData from "@/components/page-data/faqs/FAQsData";
import FAQTabs from "@/components/images/faqs/FAQTabs";

import FAQImg from "@/components/images/faqs/SkellFlight.jpg";

function FAQs() {
  return (
    <div className="faqs">
      <div className="faqs-content">
        <div className="faqs-header">
          <PageHeader pageTitle="FAQs" backgroundImage={FAQImg} />
        </div>
        <div className="faqs-title faqs-section">
          <div className="faqs-description">
            <h2>Do you have any questions regarding your stay?</h2>
            <p>
              Check out answers to our most-asked questions below. If your
              question isn't listed, or still have more questions, feel free to
              contact us!
            </p>
          </div>
          <FAQTabs
            aboutMiraSectionLink="#about-mira"
            travelInformationSectionLink="#travel-information"
            hotelSectionLink="#hotel"
            transportationSectionLink="#transportation"
            uniqueExperiencesSectionLink="#unique-experiences"
          />
        </div>
        <div className="faqs-section about-mira-section" id="about-mira">
          <div className="faq-section-title">
            <h2>About Mira</h2>
            <p>Questions about the planet and its regions.</p>
          </div>
          <div className="faq-questions">
            <div className="question-answer">
              <h2>{FAQsData[0].question}</h2>
              <p>{FAQsData[0].answer1}</p>
              <p>{FAQsData[0].answer2}</p>
            </div>
            <div className="question-answer">
              <h2>{FAQsData[1].question}</h2>
              <p>{FAQsData[1].answer1}</p>
            </div>
            <div className="question-answer">
              <h2>{FAQsData[2].question}</h2>
              <p>{FAQsData[2].answer1}</p>
            </div>
            <div className="question-answer">
              <h2>{FAQsData[3].question}</h2>
              <p>{FAQsData[3].answer1}</p>
              <p>{FAQsData[3].answer2}</p>
            </div>
          </div>
        </div>
        <div
          className="faqs-section travel-information-section"
          id="travel-information"
        >
          <div className="faq-section-title">
            <h2>Travel Information</h2>
            <p>Questions about travel to and from Mira.</p>
          </div>
          <div className="faq-questions">
            <div className="question-answer">
              <h2>{FAQsData[4].question}</h2>
              <p>{FAQsData[4].answer1}</p>
            </div>
            <div className="question-answer">
              <h2>{FAQsData[5].question}</h2>
              <p>{FAQsData[5].answer1}</p>
            </div>
            <div className="question-answer">
              <h2>{FAQsData[6].question}</h2>
              <p>{FAQsData[6].answer1}</p>
            </div>
            <div className="question-answer">
              <h2>{FAQsData[7].question}</h2>
              <p>{FAQsData[7].answer1}</p>
            </div>
          </div>
        </div>
        <div className="faqs-section hotel-section" id="hotel">
          <div className="faq-section-title">
            <h2>Hotel</h2>
            <p>Questions about your stay on Mira.</p>
          </div>
          <div className="faq-questions">
            <div className="question-answer">
              <h2>{FAQsData[8].question}</h2>
              <p>{FAQsData[8].answer1}</p>
            </div>
            <div className="question-answer">
              <h2>{FAQsData[9].question}</h2>
              <p>{FAQsData[9].answer1}</p>
            </div>
          </div>
        </div>
        <div className="faqs-section transporation-section" id="transportation">
          <div className="faq-section-title">
            <h2>Transportation</h2>
            <p>Questions about transportation on Mira.</p>
          </div>
          <div className="faq-questions">
            <div className="question-answer">
              <h2>{FAQsData[10].question}</h2>
              <p>{FAQsData[10].answer1}</p>
            </div>
            <div className="question-answer">
              <h2>{FAQsData[11].question}</h2>
              <p>{FAQsData[11].answer1}</p>
              <p>{FAQsData[11].answer2}</p>
            </div>
            <div className="question-answer">
              <h2>{FAQsData[12].question}</h2>
              <p>{FAQsData[12].answer1}</p>
            </div>
          </div>
        </div>
        <div
          className="faqs-section unique-experiences-section"
          id="unique-experiences"
        >
          <div className="faq-section-title">
            <h2>Unique Experiences</h2>
            <p>Questions regarding things only found on Mira.</p>
          </div>
          <div className="faq-questions">
            <div className="question-answer">
              <h2>{FAQsData[13].question}</h2>
              <p>{FAQsData[13].answer1}</p>
              <p>{FAQsData[13].answer2}</p>
              <p>{FAQsData[13].answer3}</p>
              <p>{FAQsData[13].answer4}</p>
            </div>
            <div className="question-answer">
              <h2>{FAQsData[14].question}</h2>
              <p>{FAQsData[14].answer1}</p>
            </div>
            <div className="question-answer">
              <h2>{FAQsData[15].question}</h2>
              <p>{FAQsData[15].answer1}</p>
            </div>
            <div className="question-answer">
              <h2>{FAQsData[16].question}</h2>
              <p>{FAQsData[16].answer1}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
