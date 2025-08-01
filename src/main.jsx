// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
