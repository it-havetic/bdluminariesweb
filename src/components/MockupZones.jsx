import React from "react";
import Slider from "react-slick";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const MockupZones = () => {
  let navigate = useNavigate();
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 4000,
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    navigate("/mockup", { state: { image: imageUrl } });
  };

  let banner = [
    {
      id: 1,
      image: "/assets/mockup/m1.png",
    },
    {
      id: 2,
      image: "/assets/mockup/m1.jpg",
    },
    {
      id: 3,
      image: "/assets/mockup/m2.jpg",
    },
    {
      id: 4,
      image: "/assets/mockup/m3.png",
    },
  ];
  return (
    <Slider className="h-[49%]" {...settings}>
      {banner.map((item, i) => (
        <div
          key={i}
          onClick={() => handleImageClick(item.image)}
          className="h-full"
        >
          <img
            className="image h-full w-full object-cover"
            src={item.image}
            alt=""
          />
        </div>
      ))}
    </Slider>
  );
};

export default MockupZones;
