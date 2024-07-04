import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import b1 from "/assets/mockup/m2.jpg";
// import b2 from'/assets/b2.png'
// import b3 from'/assets/b3.png'
// import b4 from'/assets/b4.png'
// import b5 from'/assets/b5.png'
// import b6 from'/assets/b6.png'
import b7 from "/assets/b7.png";
import b8 from "/assets/b8.png";
// import b9 from'/assets/b9.png'
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

import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineProduct } from "react-icons/ai";
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
  let settings2 = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 10000,
  };

  let bannerImg = [b1, b10, b14];
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
  const [selectedImage, setSelectedImage] = useState(b7);
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };
  return (
    <div className="h-[100vh] md:p-5  ">
      <div className="h-[100%] relative  flex flex-col justify-between">
        <Slider className="md:h-[100%] h-[49%] " {...settings}>
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
            className="h-full "
          >
            <div className="flex">
              <img className=" h-7" src={slogan} alt="" />
              <img className=" h-7" src={slogan} alt="" />
              <img className=" h-7" src={slogan} alt="" />
            </div>
          </Marquee>
          <Link
            className="w-[8%] flex justify-center items-center text-[#F15B26]"
            to="/product/detail/one"
          >
            <AiOutlineProduct />
          </Link>
        </div>
        <div className="h-[48%] bg-slate-200 grid grid-cols-5 grid-rows-5 gap-1">
          <div className="one bg-slate-400">
            <img
              className="h-full w-full object-cover"
              src={b7}
              alt=""
              onClick={() => handleImageClick(b7)}
            />
          </div>
          <div className="one bg-slate-400">
            <img
              className="h-full w-full object-cover"
              src={b8}
              alt=""
              onClick={() => handleImageClick(b8)}
            />
          </div>
          <div className="one bg-slate-400">
            <img
              className="h-full w-full object-cover"
              src={b11}
              alt=""
              onClick={() => handleImageClick(b11)}
            />
          </div>
          <div className="one bg-slate-400">
            <img
              className="h-full w-full object-cover"
              src={b12}
              alt=""
              onClick={() => handleImageClick(b12)}
            />
          </div>
          <div className="one bg-slate-400">
            <img
              className="h-full w-full object-cover"
              src={b13}
              alt=""
              onClick={() => handleImageClick(b13)}
            />
          </div>
          <div className="one bg-slate-400">
            <img
              className="h-full w-full object-cover"
              src={b15}
              alt=""
              onClick={() => handleImageClick(b15)}
            />
          </div>
          <div className="main bg-slate-400 col-span-3 row-span-3">
            {selectedImage && (
              <img
                className="h-full w-full object-cover"
                onClick={() => navigate("/work")}
                src={selectedImage}
                alt=""
              />
            )}
          </div>
          <div className="one bg-slate-400">
            <img
              className="h-full w-full object-cover"
              src={b16}
              alt=""
              onClick={() => handleImageClick(b16)}
            />
          </div>
          <div className="one bg-slate-400">
            <img
              className="h-full w-full object-cover"
              src={b17}
              alt=""
              onClick={() => handleImageClick(b17)}
            />
          </div>
          <div className="one bg-slate-400">
            <img
              className="h-full w-full object-cover"
              src={b18}
              alt=""
              onClick={() => handleImageClick(b18)}
            />
          </div>
          <div className="one bg-slate-400">
            <img
              className="h-full w-full object-cover"
              src={b19}
              alt=""
              onClick={() => handleImageClick(b19)}
            />
          </div>
          <div className="one bg-slate-400">
            <img
              className="h-full w-full object-cover"
              src={b20}
              alt=""
              onClick={() => handleImageClick(b20)}
            />
          </div>
          <div className="one bg-slate-400">
            <img
              className="h-full w-full object-cover"
              src={b21}
              alt=""
              onClick={() => handleImageClick(b21)}
            />
          </div>
          <div className="one bg-slate-400">
            <img
              className="h-full w-full object-cover"
              src={b22}
              alt=""
              onClick={() => handleImageClick(b22)}
            />
          </div>
          <div className="one bg-slate-400">
            <img
              className="h-full w-full object-cover"
              src={b23}
              alt=""
              onClick={() => handleImageClick(b23)}
            />
          </div>
          <div className="one bg-slate-400">
            <img
              className="h-full w-full object-cover"
              src={b24}
              alt=""
              onClick={() => handleImageClick(b24)}
            />
          </div>
          <div className="one bg-slate-400">
            <img
              className="h-full w-full object-cover"
              src={b25}
              alt=""
              onClick={() => handleImageClick(b25)}
            />
          </div>
        </div>
        {/* <Slider className='boottoom md:h-[100%] h-[48%] relative p-20 py-[85px] ' {...settings2}>
                {
                    bannerImg2.map((item,i)=>(
                        <div key={i}  onClick={()=> navigate('/work')} className=' h-full'>
                            <img className='image h-full w-full object-cover' src={item} alt="" />
                        </div>
                    ))
                }
            </Slider> */}
      </div>
    </div>
  );
};

export default Banner;
