// src/components/Footer.jsx
import React from "react";
import "./Footer.css";
import logoWhite from "../assets/logo-01.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-info">
            <h3>InstaTax.ai</h3>
            <p>
              Starting a business is exciting, but navigating legal complexities
              can be overwhelming. We simplify the process with expert guidance
              and seamless execution, so you can focus on what matters— growing
              your startup.
            </p>

            {/* <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <i className="social-icon facebook">f</i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="social-icon twitter">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="social-icon instagram"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="social-icon youtube"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="social-icon linkedin"></i>
              </a>
            </div> */}
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </a>
              <a href="#" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a href="#" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
              <a href="#" aria-label="YouTube">
                <FontAwesomeIcon icon={faYoutube} className="social-icon" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              </a>
            </div>
          </div>

          <div className="footer-content">
            <h3>Content</h3>
            {/* <ul ul className="footer-links">
            <li>
              <a href="#" className="footer-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Services
              </a>
            </li>
            </ul> */}
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={logoWhite} alt="InstaTax.ai" />
            {/* <span>InstaTax.ai</span> */}
          </div>

          <div className="footer-copyright">
            <p>
              © {new Date().getFullYear()} InstaTax.ai. All Rights Reserved.
            </p>
            <a href="#" className="privacy-link">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
