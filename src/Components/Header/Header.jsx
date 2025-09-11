import React, { useState } from "react";
import "./Header.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import AOS from "aos";
import "aos/dist/aos.css";

import logo from "../../assets/logo.png"; // apna logo path

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <div className="logo" data-aos="fade-up"  >
          <img src={logo} alt="Cybersecurity Council Logo" />
          <span>Cybersecurity Council</span>
        </div>

        {/* Hamburger Icon */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RxCross2 /> : <FaBars />}
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li data-aos="fade-up" data-aos-delay="100"><a href="#">Home</a></li>
          <li data-aos="fade-up" data-aos-delay="200"><a href="#">About Us</a></li>
          <li data-aos="fade-up" data-aos-delay="300"><a href="#">Committees</a></li>
          <li data-aos="fade-up" data-aos-delay="400"><a href="#">Resources</a></li>
          <li data-aos="fade-up" data-aos-delay="500"><a href="#">R&D</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
