import React from "react";
import Footer from "../components/Footer";
import heroimage11 from "../assets/Payment1.png";
import ChatWidget from "../components/ChatWidget";
function Payment() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "rgb(108 70 214 / 80%)",
          height: "80%",
          width:"100%",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <img src={heroimage11} />
      </div>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default Payment;
