import React from "react";
import "./PreRequisites.css";
const PreRequisites = () => {
  const prerequisites = [
    "Minimum 2 shareholders.",
    "Minimum 2 directors.",
    "The directors and shareholders can be same person.",
    "One of the directors must be Indian Resident.",
    "DIN (Director Identification Number) for all directors.",
    "DSC (Digital Signature Certificate) for all promoters.",
  ];

  return (
    <div className="pre-requisites-container">
      <div className="pre-requisites-content">
        <h2 className="pre-requisites-title">Pre-requisites</h2>
        <ol className="pre-requisites-list">
          {prerequisites.map((prereq, index) => (
            <li key={index}>{prereq}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default PreRequisites;
