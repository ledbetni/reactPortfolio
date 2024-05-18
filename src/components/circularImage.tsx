import React from "react";
import "../App.css";

interface CircularImageProps {
  src: string;
  alt: string;
}

const CircularImage: React.FC<CircularImageProps> = ({ src, alt }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={src} alt={alt} className="circular-image" />
    </div>
  );
};

export default CircularImage;
