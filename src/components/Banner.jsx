

import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
// import axios from "../axios";
import { AiOutlineProduct } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import clickGif from "/click.gif";
import b1 from "/assets/mockup/m2.jpg";
import b7 from "/assets/recent/r1.png";
import b8 from "/assets/b8.png";
import b10 from "/assets/mockup/m11.jpg";
import b11 from "/assets/b11.png";
import b12 from "/assets/b12.png";
import b13 from "/assets/b13.png";
import b14 from "/assets/mockup/m7.jpg";
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
import slogan from "/assets/slogan.png";

const Banner = () => {
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

  const [activeIndex, setActiveIndex] = useState(0);
  const [showButton, setShowButton] = useState(true);
  const [mock, setMock] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const [selectedRecentImage, setSelectedRecentImage] = useState(b7);

  const handleRecentImageClick = (imageUrl) => {
    setSelectedRecentImage(imageUrl);
  };

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

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    navigate("/mockup", { state: { image: imageUrl } });
  };

  let bannerImg2 = [
    b7,
    b8,
    b11,
    b12,
    b13,
    b15,
    b16,
    b17,
    b18,
    b19,
    b20,
    b21,
    b22,
    b23,
    b24,
    b25,
  ];

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
    <div className="h-[100vh] md:p-5">
      <div className="h-[100%] relative flex flex-col justify-between">
        <Slider className="md:h-[100%] h-[49%]" {...settings}>
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

        <div className="flex items-center justify-between h-[3%] md:absolute left-0 bottom-0 bg-[#000000] md:rounded-b-2xl relative z-30">
          <Link
            className="flex items-center justify-center w-[15%] text-xs"
            to="/"
          >
            <img
              className="w-4/5 drop-shadow-custom"
              src="/assets/bdl.png"
              alt=""
            />
          </Link>
          <Marquee
            speed={20}
            direction="left"
            pauseOnHover={true}
            reverse={true}
            gradient={false}
            gradientColor={["#6FA710"]}
            className="h-full"
          >
            <div className="flex">
              <img className="h-7" src={slogan} alt="" />
              <img className="h-7" src={slogan} alt="" />
              <img className="h-7" src={slogan} alt="" />
            </div>
          </Marquee>
          <Link
            className="w-[8%] flex justify-center items-center text-[#F15B26]"
            to="/menu"
          >
            <AiOutlineProduct />
          </Link>
        </div>

        <div
          style={{ background: `url(${selectedRecentImage})` }}
          className={`h-[48%] !bg-cover grid grid-cols-5 grid-rows-5 gap-1 relative z-[1]`}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-red-700 z-[-1]">
            <Slider className="h-full w-full" {...settings}>
              {bannerImg2.map((item, i) => (
                <div
                  key={i}
                  onClick={() => handleImageClick(item)}
                  className="h-full"
                >
                  <img
                    className="image h-full w-full object-cover"
                    src={item}
                    alt=""
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div
            className={`one bg-red-400 relative ${
              activeIndex >= 1 ? "opacity-100 visible" : "opacity-0 invisible"
            } transition-opacity duration-500 `}
          >
            <img
              className="h-full w-full object-cover"
              src={b7}
              alt=""
              onClick={() => handleRecentImageClick(b7)}
            />
            <p className="absolute textShadow-custom bg-white/30 left-1/2 -translate-x-1/2 bottom-0 textShadow text-xs text-white font-bold px-2  rounded-t ">
              P-01
            </p>
          </div>
          <div
            className={`sixteen bg-rose-400 relative ${
              activeIndex >= 16 ? "opacity-100 visible" : "opacity-0 invisible"
            } transition-opacity duration-500`}
          >
            <img
              className="h-full w-full object-cover"
              src={b8}
              alt=""
              onClick={() => handleRecentImageClick(b8)}
            />
            <p className="absolute textShadow-custom bg-white/30 left-1/2 -translate-x-1/2 bottom-0 textShadow text-xs text-white font-bold px-2  rounded-t ">
              P-02
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
      </div>
    </div>
  );
};

export default Banner;

