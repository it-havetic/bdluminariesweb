import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

// for button
import clickGif from "/click.gif";
import b7 from "/assets/recent/r1.png";
import b8 from "/assets/b8.png";
import b11 from "/assets/b11.png";
import b12 from "/assets/b12.png";
import b13 from "/assets/b13.png";
import b15 from "/assets/b15.png";
import b16 from "/assets/b16.png";
import b17 from "/assets/b17.png";
import b18 from "/assets/b18.png";
import b19 from "/assets/b19.png";
import b20 from "/assets/b20.png";
import b21 from "/assets/b21.png";
import b22 from "/assets/b22.png";
import b23 from "/assets/b23.png";
import b24 from "/assets/b24.png";
import b25 from "/assets/b25.png";
const RecentWorks = () => {
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

  let navigate = useNavigate();
  const [works, setWorks] = useState([]);
  const [selectedRecentImage, setSelectedRecentImage] = useState('');

  // Fetch recent works from API
  useEffect(() => {
    const fetchRecentWorks = async () => {
      try {
        let res = await axios.get("/recent-works");
        setWorks(res.data);
        if (res.data.length > 0) {
          setSelectedRecentImage(res.data[0].images[0]); // Set the first image as selected
        }
      } catch (error) {
        console.error("Error fetching recent works:", error);
      }
    };
    fetchRecentWorks();
  }, []);

  // Function to handle clicking on an image
  const handleImageClick = (image) => {
    navigate("/work", { state: { selectedImage: image } });
  };


  // for button
  const [activeIndex, setActiveIndex] = useState(0);
  const [showButton, setShowButton] = useState(true);
  useEffect(() => {
    let autoIncrementTimer;
    let buttonVisibilityTimer;

    if (activeIndex > 0 && activeIndex <= 16) {
      autoIncrementTimer = setTimeout(() => {
        setActiveIndex((prev) => prev + 1);
      }, 100);
    } else if (activeIndex === 17) {
      autoIncrementTimer = setTimeout(() => {
        setActiveIndex(0);
        setShowButton(true);
      }, 10000);
    }

    if (!showButton) {
      buttonVisibilityTimer = setTimeout(() => {
        setShowButton(true);
      }, 10000);
    }

    return () => {
      clearTimeout(autoIncrementTimer);
      clearTimeout(buttonVisibilityTimer);
    };
  }, [activeIndex, showButton]);
  const handleButtonClick = () => {
    setShowButton(false);
    setActiveIndex((prev) => (prev < 16 ? prev + 1 : 17));
  };

  return (
    <div
      style={{ background: `url(${selectedRecentImage})` }}
      className={`h-[48.5%] !bg-cover grid grid-cols-5 grid-rows-5 gap-1 relative z-[1]`}
    >
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <Slider className="h-full w-full" {...settings}>
          {works.map((work) =>
            work.images.filter((image, index) => index < 4).map((image, index) => (
              <div
                key={`${work._id}-${index}`}
                onClick={() => handleImageClick(image)} // Handle image click
                className="h-full"
              >
                <img
                  className="image h-full w-full object-cover"
                  src={`https://code.bdluminaries.com/${image}`}
                  alt="Recent Work"
                />
              </div>
            ))
          )}
        </Slider>
      </div>
      <div
      
      onClick={() => handleImageClick(works[0]?.images[0])}
        className={`one bg-red-400 relative cursor-pointer ${
          activeIndex >= 1 ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity duration-500 `}
      >
        <img
          className="h-full w-full object-cover"
          // src={works.image[0]}
          src={`https://code.bdluminaries.com/${works[0]?.images[0]}`}
          alt=""
        />
        <p className="absolute textShadow-custom bg-white/30 left-1/2 -translate-x-1/2 bottom-0 textShadow text-xs text-white font-bold px-2  rounded-t ">
          {works[0]?.title}
        </p>
      </div>
      <div
      onClick={() => handleImageClick(works[1]?.images[0])}
        className={`sixteen bg-rose-400 relative ${
          activeIndex >= 16 ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity duration-500`}
      >
        <img
          className="h-full w-full object-cover"
          src={`https://code.bdluminaries.com/${works[1]?.images[0]}`}
          alt=""
          onClick={() => handleRecentImageClick(b8)}
        />
        <p className="absolute textShadow-custom bg-white/30 left-1/2 -translate-x-1/2 bottom-0 textShadow text-xs text-white font-bold px-2  rounded-t ">
          {works[1]?.title}
        </p>
      </div>
      <div
        className={`fifteen bg-fuchsia-400 relative ${
          activeIndex >= 15 ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity duration-500`}
      >
        <img
          className="h-full w-full object-cover"
          src={b11}
          alt=""
          onClick={() => handleRecentImageClick(b11)}
        />
        <p className="absolute textShadow-custom bg-white/30 left-1/2 -translate-x-1/2 bottom-0 textShadow text-xs text-white font-bold px-2  rounded-t ">
          P-56
        </p>
      </div>
      <div
        className={`fourteen bg-emerald-400 relative ${
          activeIndex >= 14 ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity duration-500`}
      >
        <img
          className="h-full w-full object-cover"
          src={b12}
          alt=""
          onClick={() => handleRecentImageClick(b12)}
        />
        <p className="absolute textShadow-custom bg-white/30 left-1/2 -translate-x-1/2 bottom-0 textShadow text-xs text-white font-bold px-2  rounded-t ">
          P-27
        </p>
      </div>
      <div
        className={`thirteen bg-amber-400 relative ${
          activeIndex >= 13 ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity duration-500`}
      >
        <img
          className="h-full w-full object-cover"
          src={b13}
          alt=""
          onClick={() => handleRecentImageClick(b13)}
        />
        <p className="absolute textShadow-custom bg-white/30 left-1/2 -translate-x-1/2 bottom-0 textShadow text-xs text-white font-bold px-2  rounded-t ">
          P-69
        </p>
      </div>
      <div
        className={`two bg-blue-400 relative ${
          activeIndex >= 2 ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity duration-500`}
      >
        <img
          className="h-full w-full object-cover"
          src={b15}
          alt=""
          onClick={() => handleRecentImageClick(b15)}
        />
        <p className="absolute textShadow-custom bg-white/30 left-1/2 -translate-x-1/2 bottom-0 textShadow text-xs text-white font-bold px-2  rounded-t ">
          P-45
        </p>
      </div>
      <div
        className={`seventeen bg-violet-400 col-span-3 row-span-3 ${
          activeIndex === 17 ? "opacity-0" : "opacity-0"
        } transition-opacity duration-500`}
        onClick={() => navigate("/work")}
      ></div>
      <div
        className={`twelve bg-lime-400 relative ${
          activeIndex >= 12 ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity duration-500`}
      >
        <img
          className="h-full w-full object-cover"
          src={b16}
          alt=""
          onClick={() => handleRecentImageClick(b16)}
        />
        <p className="absolute textShadow-custom bg-white/30 left-1/2 -translate-x-1/2 bottom-0 textShadow text-xs text-white font-bold px-2  rounded-t ">
          P-75
        </p>
      </div>
      <div
        className={`three bg-green-400 relative ${
          activeIndex >= 3 ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity duration-500`}
      >
        <img
          className="h-full w-full object-cover"
          src={b17}
          alt=""
          onClick={() => handleRecentImageClick(b17)}
        />
        <p className="absolute textShadow-custom bg-white/30 left-1/2 -translate-x-1/2 bottom-0 textShadow text-xs text-white font-bold px-2  rounded-t ">
          P-35
        </p>
      </div>
      <div
        className={`eleven bg-cyan-400 relative ${
          activeIndex >= 11 ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity duration-500`}
      >
        <img
          className="h-full w-full object-cover"
          src={b18}
          alt=""
          onClick={() => handleRecentImageClick(b18)}
        />
        <p className="absolute textShadow-custom bg-white/30 left-1/2 -translate-x-1/2 bottom-0 textShadow text-xs text-white font-bold px-2  rounded-t ">
          P-84
        </p>
      </div>
      <div
        className={`four bg-yellow-400 relative ${
          activeIndex >= 4 ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity duration-500`}
      >
        <img
          className="h-full w-full object-cover"
          src={b19}
          alt=""
          onClick={() => handleRecentImageClick(b19)}
        />
        <p className="absolute textShadow-custom bg-white/30 left-1/2 -translate-x-1/2 bottom-0 textShadow text-xs text-white font-bold px-2  rounded-t ">
          P-134
        </p>
      </div>
      <div
        className={`ten bg-gray-400 relative ${
          activeIndex >= 10 ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity duration-500`}
      >
        <img
          className="h-full w-full object-cover"
          src={b20}
          alt=""
          onClick={() => handleRecentImageClick(b20)}
        />
        <p className="absolute textShadow-custom bg-white/30 left-1/2 -translate-x-1/2 bottom-0 textShadow text-xs text-white font-bold px-2  rounded-t ">
          P-36
        </p>
      </div>
      <div
        className={`five bg-purple-400 relative ${
          activeIndex >= 5 ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity duration-500`}
      >
        <img
          className="h-full w-full object-cover"
          src={b21}
          alt=""
          onClick={() => handleRecentImageClick(b21)}
        />
        <p className="absolute textShadow-custom bg-white/30 left-1/2 -translate-x-1/2 bottom-0 textShadow text-xs text-white font-bold px-2  rounded-t ">
          P-152
        </p>
      </div>
      <div
        className={`six bg-pink-400 relative ${
          activeIndex >= 6 ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity duration-500`}
      >
        <img
          className="h-full w-full object-cover"
          src={b22}
          alt=""
          onClick={() => handleRecentImageClick(b22)}
        />
        <p className="absolute textShadow-custom bg-white/30 left-1/2 -translate-x-1/2 bottom-0 textShadow text-xs text-white font-bold px-2  rounded-t ">
          P-56
        </p>
      </div>
      <div
        className={`seven bg-teal-400 relative ${
          activeIndex >= 7 ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity duration-500`}
      >
        <img
          className="h-full w-full object-cover"
          src={b23}
          alt=""
          onClick={() => handleRecentImageClick(b23)}
        />
        <p className="absolute textShadow-custom bg-white/30 left-1/2 -translate-x-1/2 bottom-0 textShadow text-xs text-white font-bold px-2  rounded-t ">
          P-82
        </p>
      </div>
      <div
        className={`eight bg-indigo-400 relative ${
          activeIndex >= 8 ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity duration-500`}
      >
        <img
          className="h-full w-full object-cover"
          src={b24}
          alt=""
          onClick={() => handleRecentImageClick(b24)}
        />
        <p className="absolute textShadow-custom bg-white/30 left-1/2 -translate-x-1/2 bottom-0 textShadow text-xs text-white font-bold px-2  rounded-t ">
          P-29
        </p>
      </div>
      <div
        className={`nine bg-orange-400 relative ${
          activeIndex >= 9 ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity duration-500`}
      >
        <img
          className="h-full w-full object-cover"
          src={b25}
          alt=""
          onClick={() => handleRecentImageClick(b25)}
        />
        <p className="absolute textShadow-custom bg-white/30 left-1/2 -translate-x-1/2 bottom-0 textShadow text-xs text-white font-bold px-2  rounded-t ">
          P-11
        </p>
      </div>
      {showButton && (
        <button
          onClick={handleButtonClick}
          className="absolute top-2 left-2  text-white p-1 border w-[10%]"
        >
          <img className="w-full" src={clickGif} alt="" />
        </button>
      )} 
    </div>
  );
};

export default RecentWorks;
