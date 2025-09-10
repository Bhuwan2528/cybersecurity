import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTimes } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + Name */}
        <div className="footer-brand">
          <img src={logo} alt="Cybersecurity Council" className="footer-logo" />
          <h3>Cybersecurity Council</h3>
        </div>

        {/* Useful Links */}
        <div className="footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Our Members</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-links">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Joining Roadmap</a></li>
            <li><a href="#">Walkthrough of CSC</a></li>
            <li><a href="#">Council Membership</a></li>
            <li><a href="#">Membership Resources</a></li>
            <li><a href="#">Eligibility Requirements</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTimes /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>©2025. CSC India. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
