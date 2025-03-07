// src/components/Services.jsx
import React from "react";
import "./Services.css";
import serviceImage from "../../assets/Services1.png";

const Services = () => {
  return (
   
    <section className="services">
      <div className="services-container">
        <div className="services-content">
          {/* Left Section: Title, Paragraph, Services */}
          <div className="services-text">
            <div className="services-header">
              <h2>Our Services</h2>
              <p>
                Starting a business is exciting, but navigating legal
                complexities can be overwhelming. We simplify the process with
                expert guidance and seamless execution, so you can focus on what
                matters—growing your startup.
              </p>
            </div>

            <div className="service-categories">
              <div className="service-category">
                <div className="category-icon business-icon">⚙️</div>
                <span>Business Registration</span>
              </div>

              <div className="service-category">
                <div className="category-icon tax-icon">📊</div>
                <span>Tax Filing & Advisory</span>
              </div>

              <div className="service-category">
                <div className="category-icon accounting-icon">📈</div>
                <span>Accounting Services</span>
              </div>

              <div className="service-category">
                <div className="category-icon legal-icon">⚖️</div>
                <span>Compliance & Legal Support</span>
              </div>

              <div className="service-category">
                <div className="category-icon trademark-icon">✍️</div>
                <span>Trademark & Copyright</span>
              </div>

              <div className="service-category">
                <div className="category-icon license-icon">📃</div>
                <span>Certification & Licenses</span>
              </div>

              <div className="service-category">
                <div className="category-icon other-icon">🔒</div>
                <span>Other Services</span>
              </div>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="services-image">
            <img src={serviceImage} alt="Services illustration" />
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <div className="chat-widget">
        <button className="chat-btn">
          <span>Chat with Us!</span>
        </button>
      </div>
    </section>
  );
};

export default Services;
