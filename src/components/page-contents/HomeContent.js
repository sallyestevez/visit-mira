import React from "react";
import Mira from "../images/home/Mira.png";

function HomeContent() {
  return (
    <div className="home-content">
      <div className="welcome-banner">
        <div className="home-title">
          <h1>Welcome to Mira</h1>
          <p>Mira is a brand-new destination for those who love adventure.</p>
        </div>
        <div className="home-image">
          <img src={Mira} alt="Mira main art" loading="lazy" />
        </div>
      </div>
      <div className="mira-description">
        <h2>We're Stuck on a Different Planet</h2>
        <p>
          Are you tired of old planet Earth? Do you want some excitement in your
          life? Do you want to start your life over somewhere else? If so, come
          over to Mira!
        </p>
        <p>Trust us, you've never seen anything like this!</p>
      </div>
      <div className="nla-section home-section">
        <div className="home-section-title">
          <h2>New Los Angeles</h2>
          <p>Find out where you'll be staying while on Mira.</p>
        </div>

        <div className="nla-image">
          <img className="nla-home-image" alt="NLA scenery"></img>
          <div className="nla-description">New LA</div>
        </div>
      </div>
      <div className="featured-destinations-section home-section">
        <div className="home-section-title">
          <h2>Featured Destinations</h2>
          <p>Discover Mira's diverse regions.</p>
        </div>
        <div className="destinations-list">
          <div className="destination primordia-home">
            <img
              className="destination-image primordia-home-image"
              alt="Primordia scenery"
            ></img>
            <div className="destination-description primordia-description">
              Primordia
            </div>
          </div>
          <div className="destination noctilum-home">
            <img
              className="destination-image noctilum-home-image"
              alt="Noctilum scenery"
            ></img>
            <div className="destination-description noctilum-description">
              Noctilum
            </div>
          </div>
          <div className="destination oblivia-home">
            <img
              className="destination-image oblivia-home-image"
              alt="Oblivia scenery"
            ></img>
            <div className="destination-description oblivia-description">
              Oblivia
            </div>
          </div>
        </div>
      </div>
      <div className="travel-guides home-section">
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
      </div>
      <div className="customer-reviews home-section">
        <div className="home-section-title">
          <h2>Customer Reviews</h2>
          <p>See what our visitors have to say.</p>
        </div>
      </div>
      <div className="frequently-asked-questions home-section">
        <div className="home-section-title">
          <h2>FAQs</h2>
          <p>Do you have any questions regarding your stay?</p>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
