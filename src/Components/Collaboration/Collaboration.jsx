import React from "react";
import "./collaboration.css";
import img1 from "../../assets/redfort.png"; // left image
import img2 from "../../assets/redfort.jpg"; // right image

const Collaboration = () => {
  return (
    <div className="collab-container">
  {/* Top Image */}
  <div className="collab-top">
    <img src={img1} alt="Collaboration 1" className="collab-img top-img" />
  </div>

  {/* Text */}
  <div className="collab-text">
    <p>
      We collaborate with governments, NGOs and diverse partners to lead
      pioneering <span className="highlight">CyberPeace initiatives</span>,
      advancing cybersecurity and awareness across global and social divides.
    </p>
  </div>

  {/* Bottom Image */}
  <div className="collab-bottom">
    <img src={img2} alt="Collaboration 2" className="collab-img bottom-img" />
  </div>
</div>

  );
};

export default Collaboration;
