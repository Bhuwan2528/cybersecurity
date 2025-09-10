import React from "react";
import Slider from "react-slick";
import "./association.css";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Logos
import logo1 from "../../assets/logo1.jpg";
import logo2 from "../../assets/logo2.jpg";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.jpg";
import logo5 from "../../assets/logo5.jpg";
import logo6 from "../../assets/logo1.jpg";
import logo7 from "../../assets/logo2.jpg";
import logo8 from "../../assets/logo3.png";
import logo9 from "../../assets/logo4.jpg";
import logo10 from "../../assets/logo5.jpg";

const Association = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 3 }
      }
    ]
  };

  return (
    <div className="association-container">
      <h2>
        In <span>Association</span> With
      </h2>
      <Slider {...settings} className="association-slider">
        {logos.map((logo, index) => (
          <div key={index} className="logo-card">
            <img src={logo} alt={`Association logo ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Association;
