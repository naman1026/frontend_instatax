// src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="InstaTax.ai" />
            <span>InstaTax.ai</span>
          </Link>
        </div>
        <div className="navbar-menu">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            to="/about-us"
            className={location.pathname === "/about-us" ? "active" : ""}
          >
            About Us
          </Link>
          <Link
            to="/blogs"
            className={location.pathname === "/blogs" ? "active" : ""}
          >
            Blogs
          </Link>
          <div className="dropdown">
            <Link
              to="/services"
              className={location.pathname === "/services" ? "active" : ""}
            >
              Services <span className="dropdown-arrow">▼</span>
            </Link>
          </div>
          <Link
            to="/payment"
            className={location.pathname === "/payment" ? "active" : ""}
          >
            Payment
          </Link>
        </div>
        <div className="navbar-user">
          <button className="user-btn">
            Username <span className="user-icon">👤</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
