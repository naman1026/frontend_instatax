// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo-02.jpg";
import AuthPopup from "./AuthPopup";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const openPopup = () => {
    setPopupOpen(true);
    setButtonClicked(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleVerifySuccess = () => {
    navigate("/"); // Redirect to home page after verification
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="InstaTax.ai" className="navbar-logo-img" />
            {/* <span>InstaTax.ai</span> */}
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
              onClick={(e) => {
                e.preventDefault();
                toggleServicesDropdown();
              }}
            >
              Services <span className="dropdown-arrow">▼</span>
            </Link>
            {servicesDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/services/business-registration">
                  Business Registration
                </Link>
                <Link to="/services/tax-filing">Tax Filing & Advisory</Link>
                <Link to="/services/accounting">Accounting Services</Link>
                <Link to="/services/compliance">
                  Compliance & Legal Support
                </Link>
                <Link to="/services/trademark">Trademark & Copyright</Link>
                <Link to="/services/certification">
                  Certification & Licenses
                </Link>
                <Link to="/services/other">Other Services</Link>
              </div>
            )}
          </div>
          <Link
            to="/payment"
            className={location.pathname === "/payment" ? "active" : ""}
          >
            Payment
          </Link>
        </div>

        <div className="navbar-user">
          <div
            className={`menu-icon ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <button
            className={`user-btn ${buttonClicked ? "header-color" : ""}`}
            onClick={openPopup}
          >
            Login/ Sign Up <span className="user-icon"></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about-us"
          className={location.pathname === "/about-us" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </Link>
        <Link
          to="/blogs"
          className={location.pathname === "/blogs" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Blogs
        </Link>

        {/* Services in mobile menu */}
        <div className="mobile-dropdown">
          <div
            className="mobile-dropdown-title"
            onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
          >
            Services <span className="dropdown-arrow">▼</span>
          </div>

          {servicesDropdownOpen && (
            <div className="mobile-dropdown-content">
              <Link
                to="/services/business-registration"
                onClick={() => setMenuOpen(false)}
              >
                Business Registration
              </Link>
              <Link
                to="/services/tax-filing"
                onClick={() => setMenuOpen(false)}
              >
                Tax Filing & Advisory
              </Link>
              <Link
                to="/services/accounting"
                onClick={() => setMenuOpen(false)}
              >
                Accounting Services
              </Link>
              <Link
                to="/services/compliance"
                onClick={() => setMenuOpen(false)}
              >
                Compliance & Legal Support
              </Link>
              <Link to="/services/trademark" onClick={() => setMenuOpen(false)}>
                Trademark & Copyright
              </Link>
              <Link
                to="/services/certification"
                onClick={() => setMenuOpen(false)}
              >
                Certification & Licenses
              </Link>
              <Link to="/services/other" onClick={() => setMenuOpen(false)}>
                Other Services
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/payment"
          className={location.pathname === "/payment" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Payment
        </Link>
      </div>

      <AuthPopup
        isOpen={popupOpen}
        onClose={closePopup}
        onVerifySuccess={handleVerifySuccess}
      />
    </nav>
  );
};

export default Navbar;
