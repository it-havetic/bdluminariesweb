import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

import { HiDotsHorizontal } from "react-icons/hi";
import axios from "../axios";
import MenuIcon from "../components/MenuIcon";
import Preloader from "../components/Preloader";
import b7 from "/assets/b7.png";

import "./Menu.css";

const Menu = () => {
  let navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);
  const [showButton, setShowButton] = useState(true);
  const [groups, setGroups] = useState();
  const [activeImages, setActiveImages] = useState([]); // State to store active images

  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  const bdlGroup = async () => {
    try {
      let res = await axios.get("/groups");
      setGroups(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching the group data:", error);
    }
  };

  // Fetch active images
  const fetchActiveImages = async () => {
    try {
      let res = await axios.get(
        "https://code.bdluminaries.com/api/v1/greeting"
      );
      setActiveImages(res.data.filter((item) => item.status === "active"));
    } catch (error) {
      console.error("Error fetching active images:", error);
    }
  };

  useEffect(() => {
    bdlGroup();
    fetchActiveImages(); // Fetch the images when the component mounts
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
    return <Preloader />;
  }

  return (
    <div className="h-screen pb-9  bg-[#000000]">
      <div className="h-full  flex flex-col justify-between">
        <div className="h-[48%] relative flex justify-center items-center">
          <img className="w-96 h-96" src="/menu.gif" alt="" />
          <ul className="menuDesignUl h-96 w-96 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#e56a6a00]">
            <Link
              className="opacity-0 inline-block bg-orange-600 h-14 w-10 absolute -rotate-[126deg] left-[110px] top-[79px]"
              to={`/product/detail/one/${groups[0]._id}`}
            >
              <button className="text-[5px] p-4 rounded text-white">
                {groups[0].name}
              </button>
            </Link>
            <Link
              className="opacity-0 inline-block bg-orange-600 h-14 w-10 absolute -rotate-[51deg] left-[248px] top-[79px]"
              to={`/product/detail/one/${groups[9]._id}`}
            >
              <button className="text-[5px] p-4 rounded text-white">
                {groups[9].name}
              </button>
            </Link>
            <Link
              className="opacity-0  inline-block bg-orange-600 h-14 w-10 absolute -rotate-[17deg] left-[285px] top-[135px]"
              to={`/product/detail/one/${groups[7]._id}`}
            >
              <button className="text-[5px] p-4 rounded text-white">
                {groups[7].name}
              </button>
            </Link>
            <Link
              className="opacity-0  inline-block bg-orange-600 h-14 w-10 absolute rotate-[19deg] left-[284px] top-[205px]"
              to={`/product/detail/one/${groups[4]._id}`}
            >
              <button className="text-[5px] p-4 rounded text-white">
                {groups[4].name}
              </button>
            </Link>
            <Link
              className="opacity-0  inline-block bg-orange-600 h-14 w-10 absolute rotate-[54deg] left-[244px] top-[260px]"
              to={`/product/detail/one/${groups[5]._id}`}
            >
              <button className="text-[5px] p-4 rounded text-white">
                {groups[5].name}
              </button>
            </Link>
            <Link
              className="opacity-0  inline-block bg-orange-600 h-14 w-10 absolute rotate-[90deg] left-[177px] top-[281px]"
              to={`/product/detail/one/${groups[6]._id}`}
            >
              <button className="text-[5px] p-4 rounded text-white">
                {groups[6].name}
              </button>
            </Link>
            <Link
              className="opacity-0  inline-block bg-orange-600 h-14 w-10 absolute rotate-[126deg] left-[112px] top-[261px]"
              to={`/product/detail/one/${groups[8]._id}`}
            >
              <button className="text-[5px] p-4 rounded text-white">
                {groups[8].name}
              </button>
            </Link>
            <Link
              className="opacity-0  inline-block bg-orange-600 h-14 w-10 absolute rotate-[157deg] left-[71px] top-[207px]"
              to={`/product/detail/one/${groups[2]._id}`}
            >
              <button className="text-[5px] p-4 rounded text-white">
                {groups[2].name}
              </button>
            </Link>
            <Link
              className="opacity-0  inline-block bg-orange-600 h-14 w-10 absolute rotate-[195deg] left-[69px] top-[136px]"
              to={`/product/detail/one/${groups[1]._id}`}
            >
              <button className="text-[5px] p-4 rounded text-white">
                {groups[1].name}
              </button>
            </Link>
            <Link
              className="opacity-0  inline-block bg-orange-600 h-14 w-10 absolute -rotate-[90deg] left-[177px] top-[57px]"
              to={`/product/detail/one/${groups[3]._id}`}
            >
              <button className="text-[5px] p-4 rounded text-white">
                {groups[3].name}
              </button>
            </Link>
          </ul>
          <MenuIcon className={`${show ? "flex" : "hidden"}`} />
        </div>
        <div className="flex items-center justify-between h-7 bg-[#000000] ">
          <Link
            className="flex h-full items-center justify-center w-[20%] text-xs"
            to="/"
          >
            <img
              className="h-full drop-shadow-custom"
              src="/assets/bdl.png"
              alt=""
            />
          </Link>

          {/* Fetching active images and displaying them */}
          <Marquee
            speed={20}
            direction="left"
            pauseOnHover={true}
            reverse={true}
            gradient={false}
            gradientColor={["#6FA710"]}
            className="h-7"
          >
            <div className="flex items-center h-7">
              {activeImages.map((image, index) => (
                <img
                  key={index}
                  className="h-7"
                  src={`https://code.bdluminaries.com/${image.image}`}
                  alt={image.title}
                />
              ))}
            </div>
          </Marquee>

          <div
            className="navItem w-[20%] h-full flex justify-center items-center  text-[#F15B26]  cursor-pointer"
            onClick={handleToggle}
          >
            <HiDotsHorizontal />
          </div>
        </div>
        <div className="h-[48%] p-4">
          <video
            loop
            muted
            poster="/poster.jpg"
            className="w-full h-full object-cover rounded-md shadow-sm"
            controls
            src="/consultancy.mp4"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
