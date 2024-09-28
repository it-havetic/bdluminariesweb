import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import slogan from "/assets/slogan.png";

import {
  FaBriefcase,
  FaHammer,
  FaTrophy,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdOutlineConstruction } from "react-icons/md";
import LogoMarquee from "../components/LogoMarquee";
import b10 from "/assets/mockup/m11.jpg";
import b1 from "/assets/mockup/m2.jpg";
import b14 from "/assets/mockup/m7.jpg";
import Progress from "../components/Progress";

const Profile = () => {
  let navigate = useNavigate();
  const [isItemVisible, setIsItemVisible] = useState(false);

  const handleToggle = () => {
    setIsItemVisible(!isItemVisible);
  };
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
  let bannerImg = [b10, b1, b14];
  return (
    <div className="h-screen pb-8 pt-8 bg-gray-100 grid grid-cols-1 grid-rows-9 gap-0">
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
        <div
          className="navItem w-[20%] z-10 h-full flex justify-center items-center  text-[#F15B26] relative"
          onClick={() => navigate("/menu")}
        >
          <HiDotsHorizontal />
        </div>
      </div>

      <div className="row-span-2 bg-slate-400">
        {/* <Slider className="md:h-full h-full " {...settings}>
            {bannerImg.map((item, i) => (
              <div
                key={i}
                onClick={() => navigate("/mockup")}
                className=" h-full"
              >
                <img
                  className="image h-full w-full object-cover"
                  src={item}
                  alt=""
                />
              </div>
            ))}
          </Slider> */}
        <video
          className="w-full h-full object-cover"
          controls
          autoPlay
          loop
          muted
          src="/profileMid.mp4"
        />
      </div>
      <div className="row-span-3 bg-[#33420a] px-4 pt-5  text-justify text-[#eeeeee] overflow-scroll  grid grid-cols-5 ">
        <div className="col-span-3 flex flex-col justify-center">
        <div className="">
          <h2 className="textShadow uppercase -mb-[18px] ml-[33px] text-[10px] companyText text-[#f15c26d0] font-bold opacity-100 ">
            Company
          </h2>
          <h2 className="textShadow text-5xl text-[#8ac2495d] font-bold opacity-100">
            Profile
          </h2>
        </div>
        <p className="text-xs">
          <br /> products and innovations, continuously <br />{" "}
          pushing the boundaries of excellence. <br />
          Lorem ipsum dolor sit amet consectetur 
        </p>

        <p className="text-lg font-sign">Javed A. Bhuiya</p>

        <p className="text-xs">Chairman & CEO</p>
        </div>

        <img
          className="h-[100%] rounded-b-2xl col-span-2"
          src="/taufik.png"
          alt=""
        />
      </div>
      <div className="row-span-4 grid grid-cols-3 grid-rows-2 px-2 pt-4 pb-0 gap-1 bg-[#33420a]">
      {/* Completed Projects */}
      <Progress
        progressName="Completed Projects"
        progressValue={100}
        progressRate="156"
        icon={FaBriefcase}
      />

      {/* Satisfied Clients */}
      <Progress
        progressName="Satisfied Clients"
        progressValue={100}
        progressRate="156"
        icon={FaUserTie}
      />

      {/* Under Construction */}
      <Progress
        progressName="Under Construction"
        progressValue={70}
        progressRate="6"
        icon={MdOutlineConstruction}
      />

      {/* Ongoing Projects */}
      <Progress
        progressName="Ongoing Projects"
        progressValue={75}
        progressRate="50"
        icon={FaHammer}
      />

      {/* Team Members */}
      <Progress
        progressName="Team Members"
        progressValue={70}
        progressRate="70"
        icon={FaUsers}
      />

      {/* Awards Won */}
      <Progress
        progressName="Awards Won"
        progressValue={80}
        progressRate="16"
        icon={FaTrophy}
      />

      {/* Marquee Section */}
      <div className="col-span-3 bg-[#33420a] flex items-center py-5">
        <LogoMarquee />
      </div>
    </div>

      <Footer />
    </div>
  );
};

export default Profile;
