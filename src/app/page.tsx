"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import DestinationDescriptionData from "@/components/page-data/destinations/DestinationDescriptionData";
import CustomerReviewsData from "@/components/page-data/CustomerReviewsData";
import FAQTabs from "@/components/images/faqs/FAQTabs";

import Mira from "@/components/images/home/Mira.png";
import NewLosAngeles from "@/components/images/nla/New_Los_Angeles.jpg";
import ArticleList from "@/components/page-data/guides/ArticleList";

function HomeContent() {
  const [review] = useState(CustomerReviewsData);
  return (
    <div className="home-content">
      <div className="welcome-banner flex-center flex-col self-stretch lg:flex-row">
        <div className="home-title items-center gap-2 sm:gap-4">
          <h1>Welcome to Mira</h1>
          <p>Mira is a brand-new destination for those who love adventure.</p>
        </div>
        <div className="flex-1 gap-2 sm:gap-0">
          <Image
            className="home-image h-auto w-full rounded-2xl md:w-auto lg:h-[356px]"
            src={Mira}
            width={720}
            height={400}
            alt="Mira scenery"
            loading="lazy"
          />
        </div>
      </div>
      <div className="mira-description">
        <h2>{"We're Stuck on a Different Planet"}</h2>
        <p>
          Are you tired of old planet Earth? Do you want some excitement in your
          life? Do you want to start your life over somewhere else? If so, come
          over to Mira!
        </p>
        <p>{"Trust us, you've never seen anything like this!"}</p>
      </div>
      <div className="nla-section home-section">
        <div className="home-section-title">
          <Link href="/NLA" onClick={() => window.scrollTo(0, 0)}>
            <h2>New Los Angeles</h2>
          </Link>
          <p>{"Find out where you'll be staying while on Mira."}</p>
        </div>
        <Link href="/NLA" onClick={() => window.scrollTo(0, 0)}>
          <div className="nla-image">
            <Image
              className="nla-home-image"
              width={720}
              height={400}
              src={NewLosAngeles}
              alt="New Los Angeles overview"
              loading="lazy"
            />
            <div className="nla-title">New Los Angeles</div>
          </div>
        </Link>
      </div>
      <div className="featured-destinations-section home-section">
        <div className="home-section-title">
          <Link href="/destinations" onClick={() => window.scrollTo(0, 0)}>
            <h2>Featured Destinations</h2>
          </Link>
          <p>{"Discover Mira's diverse regions."}</p>
        </div>
        <div className="destinations-list">
          <Link
            href="/destinations/primordia"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="destination primordia-home">
              <Image
                className="destination-image primordia-home-image"
                width={720}
                height={400}
                src={DestinationDescriptionData[0].img}
                alt={DestinationDescriptionData[0].img_alt}
              />
              <div className="destination-title primordia-title">
                {DestinationDescriptionData[0].title}
              </div>
            </div>
          </Link>
          <Link
            href="/destinations/noctilum"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="destination noctilum-home">
              <Image
                className="destination-image noctilum-home-image"
                width={720}
                height={400}
                src={DestinationDescriptionData[1].img}
                alt={DestinationDescriptionData[1].img_alt}
              />
              <div className="destination-title noctilum-title">
                {DestinationDescriptionData[1].title}
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="travel-guides home-section">
        <div className="home-section-title">
          <h2>Travel Guides</h2>
          <p>Learn more to prepare for your trip.</p>
        </div>
        <ArticleList />
      </div>
      <div className="customer-reviews home-section">
        <div className="home-section-title">
          <h2>Customer Reviews</h2>
          <p>See what our visitors have to say.</p>
        </div>
        <div className="customer-reviews-list">
          {review.map((Val) => {
            return (
              <div key={Val.id} className="customer-review">
                <div className="customer-info">
                  <div className="customer-img-name">
                    <div className="customer-image">
                      <Image src={Val.img} alt={Val.img_alt} loading="lazy" />
                    </div>
                    <div className="customer-name">{Val.name}</div>
                  </div>
                  <div className="customer-rating">
                    <p className="rating-stars">⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
                <div className="review-text">{Val.review}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="frequently-asked-questions home-section">
        <div className="home-section-title">
          <Link href="/FAQs" onClick={() => window.scrollTo(0, 0)}>
            <h2>FAQs</h2>
          </Link>
          <p>Do you have any questions regarding your stay?</p>
        </div>
        <FAQTabs
          aboutMiraSectionLink="/visit-mira/FAQs/#about-mira"
          travelInformationSectionLink="/visit-mira/FAQs/#travel-information"
          hotelSectionLink="/visit-mira/FAQs/#hotel"
          transportationSectionLink="/visit-mira/FAQs/#transportation"
          uniqueExperiencesSectionLink="/visit-mira/FAQs/#unique-experiences"
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="home">
      <HomeContent />
    </main>
  );
}
