import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { AiOutlineProduct } from "react-icons/ai";
import slogan from "/assets/slogan.png";




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
import b7 from "/assets/b7.png";
import b8 from "/assets/b8.png";
import b10 from "/assets/mockup/m11.jpg";
import b1 from "/assets/mockup/m2.jpg";
import b14 from "/assets/mockup/m7.jpg";
import menu from "/menu.gif";



const Menu = () => {

    let navigate = useNavigate();


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

   
    const [selectedImage, setSelectedImage] = useState(b7);

    const handleImageClick = (imageUrl) => {
      setSelectedImage(imageUrl);
      console.log(imageUrl);
    };

  return (
    <div className="h-screen pb-9 pt-8 bg-gray-100">
      <div className="flex items-center justify-between absolute top-0 left-0  h-8 bg-[#000000] ">
        <Link
          className="flex items-center justify-center w-[20%] text-xs"
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
          className="h-8 "
        >
          <div className="flex h-full">
            <img className=" h-8" src={slogan} alt="" />
            <img className=" h-8" src={slogan} alt="" />
            <img className=" h-8" src={slogan} alt="" />
          </div>
        </Marquee>
        <Link
          className="w-[20%] flex justify-center items-center text-[#F15B26]"
          to="/product/detail/one"
        >
          <AiOutlineProduct />
        </Link>
      </div>

      <div className="h-full bg-fuchsia-300">
        <div className="h-1/2 bg-black">
            <img className="h-full w-full object-contain" src={menu} alt="" />
        </div>
        <div className="h-1/2 bg-fuchsia-200">
        <div
        style={{background:`url(${selectedImage})`}}
          className={`h-full !bg-cover grid grid-cols-5 grid-rows-5 gap-1 relative`}
        >
            <div
              className={`one bg-red-400 ${
                activeIndex >= 1 ? "opacity-100 visible" : "opacity-0 invisible"
              } transition-opacity duration-500 relative`}
            >
              <img
                className="h-full w-full object-cover"
                src={b7}
                alt=""
                onClick={() => handleImageClick(b7)}
              />
              <p className="absolute left-1/2 -translate-x-1/2 bottom-0 textShadow text-lg text-black font-bold opacity-50">
                P-01
              </p>
            </div>
            <div
              className={`sixteen bg-rose-400 ${
                activeIndex >= 16
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              } transition-opacity duration-500`}
            >
              <img
                className="h-full w-full object-cover"
                src={b8}
                alt=""
                onClick={() => handleImageClick(b8)}
              />
            </div>
            <div
              className={`fifteen bg-fuchsia-400 ${
                activeIndex >= 15
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              } transition-opacity duration-500`}
            >
              <img
                className="h-full w-full object-cover"
                src={b11}
                alt=""
                onClick={() => handleImageClick(b11)}
              />
            </div>
            <div
              className={`fourteen bg-emerald-400 ${
                activeIndex >= 14
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              } transition-opacity duration-500`}
            >
              <img
                className="h-full w-full object-cover"
                src={b12}
                alt=""
                onClick={() => handleImageClick(b12)}
              />
            </div>
            <div
              className={`thirteen bg-amber-400 ${
                activeIndex >= 13
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              } transition-opacity duration-500`}
            >
              <img
                className="h-full w-full object-cover"
                src={b13}
                alt=""
                onClick={() => handleImageClick(b13)}
              />
            </div>
            <div
              className={`two bg-blue-400 ${
                activeIndex >= 2 ? "opacity-100 visible" : "opacity-0 invisible"
              } transition-opacity duration-500`}
            >
              <img
                className="h-full w-full object-cover"
                src={b15}
                alt=""
                onClick={() => handleImageClick(b15)}
              />
            </div>
            <div
              className={`seventeen bg-violet-400 col-span-3 row-span-3 ${
                activeIndex === 17 ? "opacity-0" : "opacity-0"
              } transition-opacity duration-500`}
              onClick={() => navigate("/work")}
            >
              <p>17</p>
            </div>
            <div
              className={`twelve bg-lime-400 ${
                activeIndex >= 12
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              } transition-opacity duration-500`}
            >
              <img
                className="h-full w-full object-cover"
                src={b16}
                alt=""
                onClick={() => handleImageClick(b16)}
              />
            </div>
            <div
              className={`three bg-green-400 ${
                activeIndex >= 3 ? "opacity-100 visible" : "opacity-0 invisible"
              } transition-opacity duration-500`}
            >
              <img
                className="h-full w-full object-cover"
                src={b17}
                alt=""
                onClick={() => handleImageClick(b17)}
              />
            </div>
            <div
              className={`eleven bg-cyan-400 ${
                activeIndex >= 11
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              } transition-opacity duration-500`}
            >
              <img
                className="h-full w-full object-cover"
                src={b18}
                alt=""
                onClick={() => handleImageClick(b18)}
              />
            </div>
            <div
              className={`four bg-yellow-400 ${
                activeIndex >= 4 ? "opacity-100 visible" : "opacity-0 invisible"
              } transition-opacity duration-500`}
            >
              <img
                className="h-full w-full object-cover"
                src={b19}
                alt=""
                onClick={() => handleImageClick(b19)}
              />
            </div>
            <div
              className={`ten bg-gray-400 ${
                activeIndex >= 10
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              } transition-opacity duration-500`}
            >
              <img
                className="h-full w-full object-cover"
                src={b20}
                alt=""
                onClick={() => handleImageClick(b20)}
              />
            </div>
            <div
              className={`five bg-purple-400 ${
                activeIndex >= 5 ? "opacity-100 visible" : "opacity-0 invisible"
              } transition-opacity duration-500`}
            >
              <img
                className="h-full w-full object-cover"
                src={b21}
                alt=""
                onClick={() => handleImageClick(b21)}
              />
            </div>
            <div
              className={`six bg-pink-400 ${
                activeIndex >= 6 ? "opacity-100 visible" : "opacity-0 invisible"
              } transition-opacity duration-500`}
            >
              <img
                className="h-full w-full object-cover"
                src={b22}
                alt=""
                onClick={() => handleImageClick(b22)}
              />
            </div>
            <div
              className={`seven bg-teal-400 ${
                activeIndex >= 7 ? "opacity-100 visible" : "opacity-0 invisible"
              } transition-opacity duration-500`}
            >
              <img
                className="h-full w-full object-cover"
                src={b23}
                alt=""
                onClick={() => handleImageClick(b23)}
              />
            </div>
            <div
              className={`eight bg-indigo-400 ${
                activeIndex >= 8 ? "opacity-100 visible" : "opacity-0 invisible"
              } transition-opacity duration-500`}
            >
              <img
                className="h-full w-full object-cover"
                src={b24}
                alt=""
                onClick={() => handleImageClick(b24)}
              />
            </div>
            <div
              className={`nine bg-orange-400 ${
                activeIndex >= 9 ? "opacity-100 visible" : "opacity-0 invisible"
              } transition-opacity duration-500`}
            >
              <img
                className="h-full w-full object-cover"
                src={b25}
                alt=""
                onClick={() => handleImageClick(b25)}
              />
            </div>
            {showButton && (
              <button
                onClick={handleButtonClick}
                className="absolute top-2 left-2  text-white py-1 px-2 border "
              >
                Click
                {/* <img className="w-full h-full" src={clickGif} alt="" /> */}
              </button>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
