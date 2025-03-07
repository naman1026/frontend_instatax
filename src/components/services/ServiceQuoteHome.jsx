import React from "react";
import ChatWidget from "../ChatWidget";
import Footer from "../Footer";
import BenefitsSection from "./BenefitsSection";
import DeliverablesSection from "./DeliverablesSection";
import FAQsSection from "./FAQsSection";
import OverviewSection from "./OverviewSection";
import PreRequisites from "./PreRequisites";
import ServiceQuote from "./ServiceQuote";

function ServiceQuoteHome() {
  return (
    <div>
      <ServiceQuote />
      <OverviewSection />
      <PreRequisites />
      <BenefitsSection />
      <DeliverablesSection />
      <FAQsSection />
      <ChatWidget />
      <Footer />
    </div>
  );
}

export default ServiceQuoteHome;
