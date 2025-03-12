import React from "react";
import "./ChatWidget.css";
import chatIcon from "../assets/smalllogo.png"; // Import your image

const ChatWidget = () => {
  return (
    <div className="chat-widget">
      <button className="chat-btn">
        <img src={chatIcon} alt="Chat" className="chat-icon" />
        <span>Chat with Us!</span>
      </button>
    </div>
  );
};

export default ChatWidget;
