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
import { FaBriefcase, FaHammer, FaTrophy, FaUsers, FaUserTie } from 'react-icons/fa'
import { MdOutlineConstruction } from 'react-icons/md'


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
    <div className="h-screen pb-8 pt-8 bg-gray-100 grid grid-cols-1 grid-rows-8 gap-0">
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
          <h2 className="textShadow -mb-6 ml-9 text-sm companyText text-[#F15B26] font-bold opacity-100 ">
            Company
          </h2>
          <h2 className="textShadow text-6xl text-[#8ac249] font-bold opacity-100">
            Profile
          </h2>
        </div>
      </div>

      <div className="row-span-3 grid grid-cols-3 grid-rows-2 px-7 pt-9 pb-3  gap-1 bg-[#33420a]">
        {/* Complete Project */}
        <div className='flex flex-col justify-evenly items-center'>
          <h2 className="textShadow text-sm companyText text-[#ffffff] font-bold opacity-100 text-center leading-5">
            Complete <br /> Projects
          </h2>
          <div
            className="radial-progress bg-[#8ac24900] text-[#f15c2688] font-bold text-xl border-0 flex flex-col items-center justify-center shadow-lg"
            style={{ "--value": 100, "--thickness": "4px" }}
            role="progressbar">
            <FaBriefcase className='text-[#8ac249]' />
            <p className='text-[#8ac249]'>156</p>
          </div>
        </div>

        {/* Satisfied Clients */}
        <div className='flex flex-col justify-evenly items-center'>
          <h2 className="textShadow text-sm companyText text-[#ffffff] font-bold opacity-100 text-center leading-5">
            Satisfied <br /> Clients
          </h2>
          <div
            className="radial-progress bg-[#8ac24900] text-[#f15c2688] font-bold text-xl border-0 flex flex-col items-center justify-center shadow-lg"
            style={{ "--value": 100, "--thickness": "4px" }}
            role="progressbar">
            <FaUserTie className='text-[#8ac249]' />
            <p className='text-[#8ac249]'>156</p>
          </div>
        </div>

        {/* Under Construction */}
        <div className='flex flex-col justify-evenly items-center'>
          <h2 className="textShadow text-sm companyText text-[#ffffff] font-bold opacity-100 text-center leading-5">
            Under <br /> Construction
          </h2>
          <div
            className="radial-progress bg-[#8ac24900] text-[#f15c2688] font-bold text-xl border-0 flex flex-col items-center justify-center shadow-lg"
            style={{ "--value": 70, "--thickness": "4px" }}
            role="progressbar">
            <MdOutlineConstruction className='text-[#8ac249]' />
            <p className='text-[#8ac249]'>6</p>
          </div>
        </div>

        {/* Ongoing Projects */}
        <div className='flex flex-col justify-evenly items-center'>
          <h2 className="textShadow text-sm companyText text-[#ffffff] font-bold opacity-100 text-center leading-5">
            Ongoing <br /> Projects
          </h2>
          <div
            className="radial-progress bg-[#8ac24900] text-[#f15c2688] font-bold text-xl border-0 flex flex-col items-center justify-center shadow-lg"
            style={{ "--value": 75, "--thickness": "4px" }}
            role="progressbar">
            <FaHammer className='text-[#8ac249]' />
            <p className='text-[#8ac249]'>50</p>
          </div>
        </div>

        {/* Team Members */}
        <div className='flex flex-col justify-evenly items-center'>
          <h2 className="textShadow text-sm companyText text-[#ffffff] font-bold opacity-100 text-center leading-5">
            Team <br /> Members
          </h2>
          <div
            className="radial-progress bg-[#8ac24900] text-[#f15c2688] font-bold text-xl border-0 flex flex-col items-center justify-center shadow-lg"
            style={{ "--value": 90, "--thickness": "4px" }}
            role="progressbar">
            <FaUsers className='text-[#8ac249]' />
            <p className='text-[#8ac249]'>20</p>
          </div>
        </div>

        {/* Awards Won */}
        <div className='flex flex-col justify-evenly items-center'>
          <h2 className="textShadow text-sm companyText text-[#ffffff] font-bold opacity-100 text-center leading-5">
            Awards <br /> Won
          </h2>
          <div
            className="radial-progress bg-[#8ac24900] text-[#f15c2688] font-bold text-xl border-0 flex flex-col items-center justify-center shadow-lg"
            style={{ "--value": 80, "--thickness": "4px" }}
            role="progressbar">
            <FaTrophy className='text-[#8ac249]' />
            <p className='text-[#8ac249]'>16</p>
          </div>
        </div>
      </div>

      <div className="row-span-3 bg-[#33420a] px-4  text-justify text-[#eeeeee] overflow-scroll relative">
        <p className="text-sm ">
           <br /> our journey, projects, and services. We <br /> strive to deliver the highest quality <br /> products and innovations, continuously <br /> pushing the boundaries of excellence. <br />
          Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Porro perspiciatis <br /> animi aut nemo id magnam <br /> magni dolor quis fuga sed <br /> ducimus, eos eligendi aliquam <br /> obcaecati inventore, officiis <br /> commodi ex error.
          Welcome <br /> to our company pro the.
        </p>

        <p className="text-lg font-sign">Javed A. Bhuiya</p>

        <p className="text-xs">Chairman & CEO</p>
        
        <img className='h-[110%] absolute bottom-0 right-2 opacity-5' src="/taufik.png" alt="" />
      </div>


      <Footer />
    </div>
  );
}

export default Profile
