import React from "react";
import "./Header.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx"; // example for "X" (Twitter/X)

import logo from "../../assets/logo.png"; // replace with your logo path

const Header = () => {
  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><RxCross2 /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
        </div>
        <div className="top-buttons">
          <button className="top-btn primary">JOIN US AS MEMBER</button>
          <button className="top-btn secondary">VOLUNTEER PROGRAM</button>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Cybersecurity Council Logo" />
          <span>Cybersecurity Council</span>
        </div>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Committees</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">R&D</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
