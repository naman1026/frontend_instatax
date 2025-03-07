import React, { useState } from "react";
import "./FAQsSection.css";
const FAQsSection = () => {
  const faqs = [
    "What Documents are required to setup Pvt. Ltd. Company in India?",
    "What Documents are required to setup Pvt. Ltd. Company in India?",
    "What Documents are required to setup Pvt. Ltd. Company in India?",
    "What Documents are required to setup Pvt. Ltd. Company in India?",
    "What Documents are required to setup Pvt. Ltd. Company in India?",
  ];

  return (
    <div className="faqs-container">
      <div className="faqs-content">
        <h2 className="faqs-title">FAQs</h2>
        <div className="faqs-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <span className="faq-text">{faq}</span>
              <span className="faq-icon">✓</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQsSection;
