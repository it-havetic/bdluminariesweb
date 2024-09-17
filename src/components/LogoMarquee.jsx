import React from "react";
import Marquee from "react-marquee-slider";

const logos = [
  { src: "/public/client/BSRM.png", alt: "BSRM" },
  { src: "/public/client/Bengal.png", alt: "Bengal" },
  { src: "/public/client/Citygroup.png", alt: "Citygroup" },
  { src: "/public/client/Gazi Group.png", alt: "Gazi Group" },
  { src: "/public/client/Partex Star Group.png", alt: "Partex Star Group" },
  { src: "/public/client/Pran-RFL Group.avif", alt: "Pran-RFL Group" },
  { src: "/public/client/Salma Group.webp", alt: "Salma Group" },
  { src: "/public/client/Westin.png", alt: "Westin.png" },
  { src: "/public/client/epic.png", alt: "epic.png" },
  // Add more logos here
];

const LogoMarquee = () => {
  return (
    <div className="marquee-container">
      <Marquee
        velocity={10}
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="m-0 mx-3 h-8"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default LogoMarquee;
