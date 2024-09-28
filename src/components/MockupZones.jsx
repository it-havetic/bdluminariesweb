import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios";

const MockupZones = () => {
  let navigate = useNavigate();

  // Slider settings
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

  // State to hold API data
  const [zones, setZones] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchMockupZones = async () => {
      try {
        let res = await axios.get("/groups");
        setZones(res.data);
      } catch (error) {
        console.error("Error fetching mockup zones:", error);
      }
    };

    fetchMockupZones();
  }, []);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    navigate("/mockup", { state: { image: imageUrl } });
  };

  return (
    <Slider className="h-[48.5%]" {...settings}>
      {zones.map((zone) =>
        zone.length > 0 && (
          zone.map((image, index) => (
            <div key={index} onClick={() => handleImageClick(image)} className="h-full">
              <img className="image h-full w-full object-cover" src={`https://code.bdluminaries.com/api/v1${image}`} alt={`Zone ${zone.name}`} />
            </div>
          ))
        )
      )}
    </Slider>
  );
};

export default MockupZones;
