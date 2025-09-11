import React, { useEffect, useRef } from "react";
import "./collaboration.css";
import img1 from "../../assets/redfort.png";
import img2 from "../../assets/redfort.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Collaboration = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Split text into words
    const split = new SplitType(textRef.current, { types: "words" });

    gsap.from(split.words, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%", // jab 80% viewport pe aaye tab start
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 20,
      stagger: 0.08, // har word ek ek karke animate hoga
      duration: 0.6,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="collab-container">
      {/* Top Image */}
      <div className="collab-top">
        <img src={img1} alt="Collaboration 1" className="collab-img top-img" />
      </div>

      {/* Text */}
      <div className="collab-text">
        <p ref={textRef}>
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
