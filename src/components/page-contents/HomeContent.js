import React, { useState } from "react";
import { Link } from "react-router-dom";

import DestinationDescriptionData from "./page-data/destinations/DestinationDescriptionData";
import CustomerReviewsData from "./page-data/CustomerReviewsData";

function HomeContent() {
  const [review] = useState(CustomerReviewsData);
  return (
    <div className="home-content">
      <div className="welcome-banner">
        <div className="home-title">
          <h1>{DestinationDescriptionData[0].title}</h1>
          <p>Mira is a brand-new destination for those who love adventure.</p>
        </div>
        <div className="home-image">
          <img
            src={DestinationDescriptionData[0].img}
            alt={DestinationDescriptionData[0].img_alt}
            loading="lazy"
          />
        </div>
      </div>
      <div className="mira-description">
        <h2>We're Stuck on a Different Planet</h2>
        <p>{DestinationDescriptionData[0].description}</p>
        <p>{DestinationDescriptionData[0].description2}</p>
      </div>
      <div className="nla-section home-section">
        <div className="home-section-title">
          <Link to={`/NLA`} onClick={() => window.scrollTo(0, 0)}>
            <h2>New Los Angeles</h2>
          </Link>
          <p>Find out where you'll be staying while on Mira.</p>
        </div>
        <Link to={`/NLA`} onClick={() => window.scrollTo(0, 0)}>
          <div className="nla-image">
            <img
              className="nla-home-image"
              src={DestinationDescriptionData[1].img}
              alt={DestinationDescriptionData[1].img_alt}
              loading="lazy"
            />
            <div className="nla-description">
              {DestinationDescriptionData[1].title}
            </div>
          </div>
        </Link>
      </div>
      <div className="featured-destinations-section home-section">
        <div className="home-section-title">
          <Link to={`/destinations`} onClick={() => window.scrollTo(0, 0)}>
            <h2>Featured Destinations</h2>
          </Link>
          <p>Discover Mira's diverse regions.</p>
        </div>
        <div className="destinations-list">
          <Link
            to={`/destinations/primordia`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="destination primordia-home">
              <img
                className="destination-image primordia-home-image"
                src={DestinationDescriptionData[2].img}
                alt={DestinationDescriptionData[2].img_alt}
              ></img>
              <div className="destination-description primordia-description">
                {DestinationDescriptionData[2].title}
              </div>
            </div>
          </Link>
          <Link
            to={`/destinations/noctilum`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="destination noctilum-home">
              <img
                className="destination-image noctilum-home-image"
                src={DestinationDescriptionData[3].img}
                alt={DestinationDescriptionData[3].img_alt}
              ></img>
              <div className="destination-description noctilum-description">
                {DestinationDescriptionData[3].title}
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="travel-guides home-section">
        <div className="home-section-title">
          <h2>Travel Guides</h2>
          <p>Learn more to prepare for your trip.</p>
        </div>
        <div className="article-list">
          <div className="article">
            <img className="article-image" alt="Travel guide article"></img>
            <div className="article-text">
              <p className="article-title">Article Title</p>
              <p className="article-desc">Article Description</p>
            </div>
          </div>
          <div className="article">
            <img className="article-image" alt="Travel guide article"></img>
            <div className="article-text">
              <p className="article-title">Article Title</p>
              <p className="article-desc">Article Description</p>
            </div>
          </div>
          <div className="article">
            <img className="article-image" alt="Travel guide article"></img>
            <div className="article-text">
              <p className="article-title">Article Title</p>
              <p className="article-desc">Article Description</p>
            </div>
          </div>
          <div className="article">
            <img className="article-image" alt="Travel guide article"></img>
            <div className="article-text">
              <p className="article-title">Article Title</p>
              <p className="article-desc">Article Description</p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="customer-reviews home-section">
        <div className="home-section-title">
          <h2>Customer Reviews</h2>
          <p>See what our visitors have to say.</p>
        </div>
        <div className="customer-reviews-list">
          {review.map((Val) => {
            return (
              <div className="customer-review">
                <div className="customer-info">
                  <div className="customer-img-name">
                    <div className="customer-image">
                      <img src={Val.img} alt={Val.img_alt} loading="lazy" />
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
      {/* <div className="frequently-asked-questions home-section">
        <div className="home-section-title">
          <h2>FAQs</h2>
          <p>Do you have any questions regarding your stay?</p>
        </div>
      </div> */}
    </div>
  );
}

export default HomeContent;
