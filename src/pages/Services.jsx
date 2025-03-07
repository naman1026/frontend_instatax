import React from "react";
import BusinessRegistration from "../components/services/BusinessRegistration";
import ServiceList from "../components/services/ServiceList";
import Footer from "../components/Footer";
import ChatWidget from "../components/ChatWidget";

function Services() {
  return (
    <div>
      <BusinessRegistration />
      <ServiceList />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default Services;
