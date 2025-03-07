import React from "react";
import Hero from "../components/Hero";
import AppPromotion from "../components/AppPromotion";
import Footer from "../components/Footer";
import Services from "../components/services/Services";

function Home() {
  return (
    <div>
      {" "}
      <Hero />
      <Services />
      <AppPromotion />
      <Footer />
    </div>
  );
}

export default Home;
