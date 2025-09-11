import React from "react";
import "./president.css";
import presidentImg from "../../assets/lalit.jpg"; // yaha apni image ka path daalna

const President = () => {
  return (
    <div className="president-container">
      <div className="president-image">
        <img  data-aos="fade-down" data-aos-delay="100"  src={presidentImg} alt="President" />
      </div>
      <div data-aos="fade-right" data-aos-delay="200"  className="president-content">
        <h2>Dr. Lalit Gupta</h2>
        <h4>President, Cybersecurity Council for India</h4>
        <p data-aos="fade-left" data-aos-delay="300" >
          Meet Dr. Lalit Gupta, widely known as{" "}
          <span className="highlight">"The Cyber Doctor"</span>, is a globally
          recognized cybersecurity visionary, AI strategist, and risk governance
          leader with over 25 years of experience in securing enterprises across{" "}
          <b>BFSI, IT/ITES, FinTech, Manufacturing, Energy, Telecom,</b> and
          Government sectors. As President of the{" "}
          <b>Cyber Security Council for India (CSCI)</b>, Dr. Gupta is dedicated
          to strengthening national cybersecurity frameworks, driving awareness,
          and fostering youth empowerment to build a digitally resilient India.
        </p>
        <button data-aos="fade-right" data-aos-delay="100"  className="president-btn">President Desk</button>
      </div>
    </div>
  );
};

export default President;
