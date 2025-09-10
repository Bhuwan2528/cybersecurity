import React from "react";
import "./gallery.css";
import redfort from "../../assets/redfort.png";

const Gallery = () => {
  // ek hi image ko 8 baar repeat karne ke liye array bana rahe
  const images = Array(8).fill(redfort);

  return (
    <div className="gallery-section">
      <h2 className="gallery-heading">Gallery</h2>
      <p className="gallery-subheading">
        A glimpse of our events, collaborations, and initiatives.
      </p>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`gallery-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
