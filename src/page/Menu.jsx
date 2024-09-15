import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import slogan from "/assets/slogan.png";

import { HiDotsHorizontal } from "react-icons/hi";
import axios from "../axios";
import b7 from "/assets/b7.png";
import MenuIcon from "../components/MenuIcon";

const Menu = () => {
  let navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);
  const [showButton, setShowButton] = useState(true);
  const [groups, setGroups] = useState();

  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  const bdlGroup = async () => {
    try {
      let res = await axios.get("/group");
      setGroups(res.data.data);
    } catch (error) {
      console.error("Error fetching the group data:", error);
    }
  };

  useEffect(() => {
    bdlGroup();
  }, []);

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
  };

  if (!groups) {
    return <p>BDL</p>;
  }

  return (
    <div className="h-screen pb-9  bg-gray-100">
      <div className="h-full  flex flex-col justify-between">
        <div className="h-[49%] bg-slate-200 relative">
          <ul className="grid grid-cols-2 grid-rows-5 gap-1 p-1 pb-2 h-full">
            {groups.map((item, index) => (
              <Link
                key={index}
                className="bg-orange-600 rounded"
                to={`/product/detail/one/${item._id}`}
              >
                <button
                  className=" text-white w-full h-full flex justify-center items-center p-1 "
                  key={index}
                >
                  {item.Title}
                </button>
              </Link>
            ))}
          </ul>
          <MenuIcon className={`${show ? "flex" : "hidden"}`} />
          {/* <img className="h-full w-full object-contain" src={menu} alt="" /> */}
        </div>
        <div className="flex items-center justify-between h-8 bg-[#000000] ">
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
          <div
            className="navItem w-[20%] h-full flex justify-center items-center  text-[#F15B26]  cursor-pointer"
            onClick={handleToggle}
          >
            <HiDotsHorizontal />
            {/* <HiDotsHorizontal />
          <div
            className={`item px-5 py-2 bg-slate-300 absolute right-0 top-full transition-all duration-300 ${
              isItemVisible
                ? "top-full opacity-100 visible"
                : "top-[140%] opacity-0 !invisible"
            }`}
          >
            <ul className="text-right">
              <li>
                <Link className="text-[#F15B26] capitalize" to="/contact">
                  appointment
                </Link>
              </li>
              <li>
                <Link className="text-[#F15B26] capitalize" to="/profile">
                  profile
                </Link>
              </li>
              <li>
                <Link className="text-[#F15B26] capitalize" to="/blog">
                  academy
                </Link>
              </li>
            </ul>
          </div> */}
          </div>
        </div>
        <div className="h-[47%] ">
          <video
            autoplay
            loop
            muted
            className="w-full h-full object-cover"
            controls="false"
            autoPlay
            src="/consultancy.mp4"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
