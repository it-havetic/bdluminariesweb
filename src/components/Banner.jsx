// import React, { useState } from "react";
// import Marquee from "react-fast-marquee";
// import b1 from "/assets/mockup/m2.jpg";
// import b7 from "/assets/b7.png";
// import b8 from "/assets/b8.png";
// import b10 from "/assets/mockup/m11.jpg";
// import b11 from "/assets/b11.png";
// import b12 from "/assets/b12.png";
// import b13 from "/assets/b13.png";
// import b14 from "/assets/mockup/m7.jpg";
// import b15 from "/assets/b15.png";
// import b16 from "/assets/b16.png";
// import b17 from "/assets/b17.png";
// import b18 from "/assets/b18.png";
// import b19 from "/assets/b19.png";
// import b20 from "/assets/b20.png";
// import b21 from "/assets/b21.png";
// import b22 from "/assets/b22.png";
// import b23 from "/assets/b23.png";
// import b24 from "/assets/b24.png";
// import b25 from "/assets/b25.png";
// import slogan from "/assets/slogan.png";

// import "slick-carousel/slick/slick.css";
// import Slider from "react-slick";
// import { Link, useNavigate } from "react-router-dom";
// import { AiOutlineProduct } from "react-icons/ai";
// const Banner = () => {
//   let navigate = useNavigate();

//   let settings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 2000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     fade: true,
//     cssEase: "linear",
//     autoplay: true,
//     autoplaySpeed: 4000,
//   };
//   let settings2 = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 2000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     fade: true,
//     cssEase: "linear",
//     autoplay: true,
//     autoplaySpeed: 10000,
//   };

//   let bannerImg = [b1, b10, b14];
//   let bannerImg2 = [
//     b7,
//     b8,
//     b11,
//     b12,
//     b13,
//     b15,
//     b16,
//     b17,
//     b18,
//     b19,
//     b20,
//     b21,
//     b22,
//     b23,
//     b24,
//     b25,
//   ];
// const [selectedImage, setSelectedImage] = useState(b7);
// const handleImageClick = (imageUrl) => {
//   setSelectedImage(imageUrl);
// };
//   return (
//     <div className="h-[100vh] md:p-5  ">
//       <div className="h-[100%] relative  flex flex-col justify-between">
//         <Slider className="md:h-[100%] h-[49%] " {...settings}>
//           {bannerImg.map((item, i) => (
//             <div
//               key={i}
//               onClick={() => navigate("/mockup")}
//               className=" h-full"
//             >
//               <img
//                 className="image h-full w-full object-cover"
//                 src={item}
//                 alt=""
//               />
//             </div>
//           ))}
//         </Slider>
//         <div className="flex items-center justify-between h-[3%] md:absolute left-0 bottom-0 bg-[#000000] md:rounded-b-2xl relative z-30">
//           <Link
//             className="flex items-center justify-center w-[15%] text-xs"
//             to="/"
//           >
//             <img
//               className="w-4/5 drop-shadow-custom"
//               src="/assets/bdl.png"
//               alt=""
//             />
//           </Link>
//           <Marquee
//             speed={20}
//             direction="left"
//             pauseOnHover={true}
//             reverse={true}
//             gradient={false}
//             gradientColor={["#6FA710"]}
//             className="h-full "
//           >
//             <div className="flex">
//               <img className=" h-7" src={slogan} alt="" />
//               <img className=" h-7" src={slogan} alt="" />
//               <img className=" h-7" src={slogan} alt="" />
//             </div>
//           </Marquee>
//           <Link
//             className="w-[8%] flex justify-center items-center text-[#F15B26]"
//             to="/product/detail/one"
//           >
//             <AiOutlineProduct />
//           </Link>
//         </div>

//         <div className="h-[48%] bg-slate-200 grid grid-cols-5 grid-rows-5 gap-1">
//           <div className="one bg-red-400">
//             <p>1</p>
//           </div>
//           <div className="sixteen bg-rose-400">
//             <p>16</p>
//           </div>
//           <div className="fifteen bg-fuchsia-400">
//             <p>15</p>
//           </div>
//           <div className="fourteen bg-emerald-400">
//             <p>14</p>
//           </div>
//           <div className="thirteen bg-amber-400">
//             <p>13</p>
//           </div>
//           <div className="two bg-blue-400">
//             <p>2</p>
//           </div>
//           <div className="seventeen bg-violet-400 col-span-3 row-span-3">
//             <p>17</p>
//           </div>
//           <div className="twelve bg-lime-400">
//             <p>12</p>
//           </div>
//           <div className="three bg-green-400">
//             <p>3</p>
//           </div>
//           <div className="eleven bg-cyan-400">
//             <p>11</p>
//           </div>
//           <div className="four bg-yellow-400">
//             <p>4</p>
//           </div>
//           <div className="ten bg-gray-400">
//             <p>10</p>
//           </div>
//           <div className="five bg-purple-400">
//             <p>5</p>
//           </div>
//           <div className="six bg-pink-400">
//             <p>6</p>
//           </div>
//           <div className="seven bg-teal-400 ">
//             <p>7</p>
//           </div>
//           <div className="eight bg-indigo-400">
//             <p>8</p>
//           </div>
//           <div className="nine bg-orange-400">
//             <p>9</p>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
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
import slogan from "/assets/slogan.png";

import { AiOutlineProduct } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

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

  let bannerImg = [b1, b10, b14];
 
  const [selectedImage, setSelectedImage] = useState(b7);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    console.log(imageUrl);
  };
  
  useEffect(()=>{
    
  },[])

  return (
    <div className="h-[100vh] md:p-5">
      <div className="h-[100%] relative flex flex-col justify-between">
        <Slider className="md:h-[100%] h-[49%]" {...settings}>
          {bannerImg.map((item, i) => (
            <div key={i} onClick={() => navigate("/mockup")} className="h-full">
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
            to="menu"
          >
            <AiOutlineProduct />
          </Link>
        </div>
        
        <div
        style={{background:`url(${selectedImage})`}}
          className={`h-[48%] !bg-cover grid grid-cols-5 grid-rows-5 gap-1 relative`}
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
              activeIndex >= 16 ? "opacity-100 visible" : "opacity-0 invisible"
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
              activeIndex >= 15 ? "opacity-100 visible" : "opacity-0 invisible"
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
              activeIndex >= 14 ? "opacity-100 visible" : "opacity-0 invisible"
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
              activeIndex >= 13 ? "opacity-100 visible" : "opacity-0 invisible"
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
              activeIndex >= 12 ? "opacity-100 visible" : "opacity-0 invisible"
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
              activeIndex >= 11 ? "opacity-100 visible" : "opacity-0 invisible"
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
              activeIndex >= 10 ? "opacity-100 visible" : "opacity-0 invisible"
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
  );
};

export default Banner;
