import React, { useState } from "react";
import "./BenefitsSection.css";
const BenefitsSection = () => {
  const benefits = [
    "Limited Liability Protection to Directors",
    "Limited Liability Protection to Directors",
    "Limited Liability Protection to Directors",
  ];

  return (
    <div className="benefits-container">
      <div className="benefits-content">
        <h2 className="benefits-title">Benefits</h2>
        <div className="benefits-list">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <span className="benefit-text">{benefit}</span>
              <span className="benefit-icon">✓</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
