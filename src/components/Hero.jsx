// src/components/Hero.jsx
import React from "react";
import "./Hero.css";
import heroImage from "../assets/heroimage11.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        
        <div className="hero-content">
          <h1 className="hero-title">
            Your Trusted Partner <br />
            for Startup Legalities.
          </h1>
          <p className="hero-subtext">Write your subtext here.</p>

          <div className="hero-points">
            <p>Write your subpoints here.</p>
            <p>Write your subpoints here.</p>
            <p>Write your subpoints here.</p>
            <p>Write your subpoints here.</p>
            <p>Write your subpoints here.</p>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Tax illustration" />
        </div>

        <div className="quote-form" 
        style={{ backgroundColor: "#EDEFF2",borderRadius:"35px"}}
        >
          <h2>Get Quote Instantly in a Minute!</h2>

          <form>
            <div className="form-row">
              <input
                type="text"
                placeholder="Prefix"
                className="prefix-input"
              />
              <input
                type="text"
                placeholder="Full Name"
                className="fullname-input"
              />
            </div>

            <input type="email" placeholder="E-mail ID" />
            <input type="tel" placeholder="Mobile Number" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Select Service" />

            <div className="form-toggle">
              <label className="toggle">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              <span>Get updates through Whatsapp</span>
            </div>

            <button type="submit" className="quote-btn">
              Get Quote Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
