import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AppPromotion from "../components/AppPromotion";
import Footer from "../components/Footer";

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
