// src/pages/ServiceList.jsx
import React from "react";
import "./ServiceList.css";
import servicesIllustration from "../../assets/StartBusiness1.png";
import { useNavigate } from "react-router-dom";

const ServiceList = () => {
  const navigate = useNavigate();

  const servicesList = [
    {
      id: 1,
      title: "Private Limited Company",
      description: "Start your Pvt. Ltd. in 15 days",
      price: "Rs. 6299",
      route: "/services/private-limited-company",
    },
    {
      id: 2,
      title: "One Person Company",
      description: "Start your OPC in 15 days",
      price: "Rs. 4799",
      route: "/services/one-person-company",
    },
    {
      id: 3,
      title: "Limited Liability Partnership",
      description: "Start your LLP in 15 days",
      price: "Rs. 3499",
      route: "/services/limited-liability-partnership",
    },
    {
      id: 4,
      title: "Startup India Registration",
      description: "Get Startup India recognition support",
      price: "Rs. 3999",
      route: "/services/startup-india-registration",
    },
    {
      id: 5,
      title: "GST Registration",
      description: "Get it in 4 days",
      price: "Rs. 1499",
      route: "/services/gst-registration",
    },
  ];

  const handleServiceClick = (route) => {
    navigate(route);
  };

  return (
    <div className="services-page">
      <div className="services-container">
        <div className="services-list">
          <h1>Services</h1>

          {servicesList.map((service) => (
            <div
              className="service-card"
              key={service.id}
              onClick={() => handleServiceClick(service.route)}
            >
              <div className="service-info">
                <h2>{service.title}</h2>
                <p className="service-description">{service.description}</p>
                <p className="service-price">{service.price}</p>
              </div>
              <div className="service-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 8 16 12 12 16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="services-illustration">
          <img src={servicesIllustration} alt="Services" />
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
