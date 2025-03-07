import React from "react";
import "./DeliverablesSection.css";
const DeliverablesSection = () => {
  const leftSideDeliverables = [
    "DIN for 2 directors",
    "Digital Signature Token for all promoters",
    "Company name approval",
    "MOA + AOA",
    "Incorporation certificate",
    "New Incorporation Kit",
    "Customized Incorporation Mater File",
  ];

  const rightSideDeliverables = [
    "Company PAN Card",
    "Company TAN/TDS Number",
    "Bank Account Opening Document Support",
    "Domain Name for 1 year",
    "Web Hosting + 10 Email Ids for 1 year",
    "PF + ESIC + Professional Tax Registration",
  ];

  return (
    <div className="deliverables-container">
      <div className="deliverables-content">
        <h2 className="deliverables-title">Deliverables</h2>
        <div className="deliverables-grid">
          <div className="deliverables-column">
            {leftSideDeliverables.map((deliverable, index) => (
              <div key={index} className="deliverable-item">
                <span className="deliverable-icon">✓</span>
                <span className="deliverable-text">{deliverable}</span>
              </div>
            ))}
          </div>
          <div className="deliverables-column">
            {rightSideDeliverables.map((deliverable, index) => (
              <div key={index} className="deliverable-item">
                <span className="deliverable-icon">✓</span>
                <span className="deliverable-text">{deliverable}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverablesSection;
