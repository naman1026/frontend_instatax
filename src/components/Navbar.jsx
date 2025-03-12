// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
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

  // Separate states for desktop and mobile dropdowns
  const [desktopServicesDropdownOpen, setDesktopServicesDropdownOpen] =
    useState(false);
  const [mobileServicesDropdownOpen, setMobileServicesDropdownOpen] =
    useState(false);

  // Refs for click-away functionality
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Reset mobile dropdown when menu is closed
    if (menuOpen) {
      setMobileServicesDropdownOpen(false);
    }
  };

  const toggleDesktopServicesDropdown = () => {
    setDesktopServicesDropdownOpen(!desktopServicesDropdownOpen);
  };

  const toggleMobileServicesDropdown = () => {
    setMobileServicesDropdownOpen(!mobileServicesDropdownOpen);
  };

  const navigateToServices = () => {
    navigate("/services");
    setDesktopServicesDropdownOpen(false);
    setMobileServicesDropdownOpen(false);
    setMenuOpen(false);
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

  // Click-away functionality
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Handle desktop dropdown click-away
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target) &&
        desktopServicesDropdownOpen
      ) {
        setDesktopServicesDropdownOpen(false);
      }

      // Handle mobile dropdown click-away
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target) &&
        mobileServicesDropdownOpen
      ) {
        setMobileServicesDropdownOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [desktopServicesDropdownOpen, mobileServicesDropdownOpen]);

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
          <div className="dropdown" ref={desktopDropdownRef}>
            <Link
              to="#"
              className={
                location.pathname.includes("/services") ? "active" : ""
              }
              onClick={(e) => {
                e.preventDefault();
                toggleDesktopServicesDropdown();
              }}
            >
              Services <span className="dropdown-arrow">▼</span>
            </Link>
            {desktopServicesDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/services" onClick={navigateToServices}>
                  All Services
                </Link>
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
            to="/blogs"
            className={location.pathname === "/blogs" ? "active" : ""}
          >
            Blog
          </Link>

          <Link
            to="/about-us"
            className={location.pathname === "/about-us" ? "active" : ""}
          >
            About Us
          </Link>
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
        {/* Services in mobile menu */}
        <div
          className={`mobile-dropdown-title ${
            mobileServicesDropdownOpen ? "active" : ""
          }`}
          onClick={toggleMobileServicesDropdown}
        >
          <div
            className="mobile-dropdown-title"
            onClick={toggleMobileServicesDropdown}
          >
            Services <span className="dropdown-arrow">▼</span>
          </div>

          {mobileServicesDropdownOpen && (
            <div className="mobile-dropdown-content">
              <Link
                to="/services"
                onClick={() => {
                  setMenuOpen(false);
                  setMobileServicesDropdownOpen(false);
                }}
              >
                All Services
              </Link>
              <Link
                to="/services/business-registration"
                onClick={() => {
                  setMenuOpen(false);
                  setMobileServicesDropdownOpen(false);
                }}
              >
                Business Registration
              </Link>
              <Link
                to="/services/tax-filing"
                onClick={() => {
                  setMenuOpen(false);
                  setMobileServicesDropdownOpen(false);
                }}
              >
                Tax Filing & Advisory
              </Link>
              <Link
                to="/services/accounting"
                onClick={() => {
                  setMenuOpen(false);
                  setMobileServicesDropdownOpen(false);
                }}
              >
                Accounting Services
              </Link>
              <Link
                to="/services/compliance"
                onClick={() => {
                  setMenuOpen(false);
                  setMobileServicesDropdownOpen(false);
                }}
              >
                Compliance & Legal Support
              </Link>
              <Link
                to="/services/trademark"
                onClick={() => {
                  setMenuOpen(false);
                  setMobileServicesDropdownOpen(false);
                }}
              >
                Trademark & Copyright
              </Link>
              <Link
                to="/services/certification"
                onClick={() => {
                  setMenuOpen(false);
                  setMobileServicesDropdownOpen(false);
                }}
              >
                Certification & Licenses
              </Link>
              <Link
                to="/services/other"
                onClick={() => {
                  setMenuOpen(false);
                  setMobileServicesDropdownOpen(false);
                }}
              >
                Other Services
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/blogs"
          className={location.pathname === "/blogs" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          Blogs
        </Link>

        <Link
          to="/about-us"
          className={location.pathname === "/about-us" ? "active" : ""}
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </Link>
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
