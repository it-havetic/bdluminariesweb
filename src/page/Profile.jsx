import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'
import { Link, useNavigate } from 'react-router-dom'
import slogan from '/assets/slogan.png'
import { AiOutlineProduct } from 'react-icons/ai'
import Footer from '../components/Footer'
import Slider from 'react-slick'

import b1 from "/assets/mockup/m2.jpg"; 
import b10 from "/assets/mockup/m11.jpg"; 
import b14 from "/assets/mockup/m7.jpg";
import { HiDotsHorizontal } from 'react-icons/hi'


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
      <div className="h-screen pb-9 pt-8 bg-gray-100 grid grid-cols-1 grid-rows-8 gap-2">
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
          className="navItem w-[20%] z-10 h-full flex justify-center items-center  text-[#F15B26] relative "
          onClick={handleToggle}
        >
          <HiDotsHorizontal />
          <div
            className={`item px-5 py-2 bg-slate-300 absolute right-0 top-full transition-all duration-300 ${
              isItemVisible
                ? "top-full !opacity-100 !visible"
                : "top-[140%] opacity-0 invisible"
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
          </div>
        </div>
        </div>

        <div className="row-span-2 bg-slate-400 relative">
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
          <div className="absolute -bottom-5 left-1 z-10">
            <h2 className="textShadow -mb-6 ml-9 text-sm companyText text-[#00c3ff] font-bold opacity-100 ">
              Company
            </h2>
            <h2 className="textShadow text-6xl text-[#c3fe00] font-bold opacity-100">
              Profile
            </h2>
          </div>
        </div>
        <div className="row-span-3 bg-white ">
          <img
            className="w-full h-full object-contain"
            src="/profiledata.png"
          />
        </div>
        <div className="row-span-3 bg-slate-700 px-4 py-2 text-justify text-white">
          <h2 className='font-bold'>BD Luminaries</h2>
  <p className="text-sm">
    Welcome to our company profile! Explore our journey, projects, and services. We strive to deliver the highest quality products and innovations, continuously pushing the boundaries of excellence.
  </p>
</div>


        <Footer />
      </div>
    );
}

export default Profile
