// src/components/AppPromotion.jsx
import React from "react";
import "./AppPromotion.css";
import googlePlayBadge from "../assets/google-play-badge.svg";
import appStoreBadge from "../assets/app-store-badge.svg";

const AppPromotion = () => {
  return (
    <section className="app-promotion">
      <div className="app-promotion-container">
        <div className="app-promotion-content">
          <h2>Law made simple, startups made easy!</h2>

          <div className="app-ranking">
            <p>
              Ranked #1 Mobile App
              <br />
              in Business Category
            </p>

            <div className="app-badges">
              <a href="#" className="store-badge">
                <img src={googlePlayBadge} alt="Get it on Google Play" />
              </a>
              <a href="#" className="store-badge">
                <img src={appStoreBadge} alt="Download on the App Store" />
              </a>
            </div>
          </div>
        </div>

        <div className="app-promotion-graphic">
          {/* This will be created with CSS for the background gradient and icons */}
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;
