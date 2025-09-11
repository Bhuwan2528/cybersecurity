import React from "react";
import "./Hero.css";
import bgImage from "../../assets/redfort.png";

const Hero = () => {
  return (
    <section
      className="hero"
    >
      <div className="hero-overlay">
        {/* Left Text */}
        <div className="hero-left" data-aos="fade-right">
          <h2>CYBERSECURITY COUNCIL</h2>
          <p className="p">JOIN NOW TO BUILD ROBUST</p>
          <h2 className="highlight">CYBER INFRASTRUCTURE</h2>
        </div>

        {/* Right Text */}
        <div className="hero-right">
          <span className="tagline" data-aos="fade-left" data-aos-delay="100">
            Following the visionary approach of Hon'ble Prime Minister of India
          </span>
          <p className="quote" data-aos="fade-left" data-aos-delay="200">
            <span className="quote-mark">“</span>I dream of a Digital India where cyber security becomes an
            integral part of our national security. The world is so worried
            about cyber security. One click can change a lot of things
          </p>
          <p className="author" data-aos="fade-left" data-aos-delay="300">
            <p className="author-name">Shri Narendra Modi</p>
            <p className="author-post">Prime Minister of India</p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
