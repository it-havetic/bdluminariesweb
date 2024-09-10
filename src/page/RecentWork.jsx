
import React, { useState } from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import { AiOutlineProduct } from 'react-icons/ai'
import slogan from'/assets/slogan.png'


const RecentWork = () => {
  // const [displayedProduct, setDisplayedProduct] = useState({
  //   image: "/assets/recent/r1.png",
  // });
  const recent = [
    {
      id: 1,
      image: "/assets/recent/r1.png",
    },
    {
      id: 1,
      image: "/assets/recent/r2.png",
    },
    { 
      id: 2, 
      image: "/assets/recent/r3.png" 
    },
    { 
      id: 3,
      image: "/assets/recent/r4.png" 
    },
    { 
      id: 4,
      image: "/assets/recent/r5.png"
     },
    { 
      id: 5,
      image: "/assets/recent/r6.png" 
    },
    {
      id: 6,
      image: "/assets/recent/r7.png",
    },
    {
      id: 1,
      image: "/assets/recent/r8.png",
    },
    { 
      id: 2, 
      image: "/assets/recent/r9.png" 
    },
    { 
      id: 3,
      image: "/assets/recent/r10.png" 
    },
    { 
      id: 4,
      image: "/assets/recent/r11.png"
     },
    { 
      id: 5,
      image: "/assets/recent/r12.png" 
    },
    {
      id: 6,
      image: "/assets/recent/r13.png",
    },
    {
      id: 1,
      image: "/assets/recent/r14.png",
    },
    { 
      id: 2, 
      image: "/assets/recent/r15.png" 
    },
    { 
      id: 3,
      image: "/assets/recent/r16.png" 
    },
    {
      id: 1,
      image: "/assets/recent/r1.png",
    },
    {
      id: 1,
      image: "/assets/recent/r2.png",
    },
    { 
      id: 2, 
      image: "/assets/recent/r3.png" 
    },
    { 
      id: 3,
      image: "/assets/recent/r4.png" 
    },
    { 
      id: 4,
      image: "/assets/recent/r5.png"
     },
    { 
      id: 5,
      image: "/assets/recent/r6.png" 
    },
    {
      id: 6,
      image: "/assets/recent/r7.png",
    },
    {
      id: 1,
      image: "/assets/recent/r8.png",
    },
    { 
      id: 2, 
      image: "/assets/recent/r9.png" 
    },
    { 
      id: 3,
      image: "/assets/recent/r10.png" 
    },
    { 
      id: 4,
      image: "/assets/recent/r11.png"
     },
    { 
      id: 5,
      image: "/assets/recent/r12.png" 
    },
    {
      id: 6,
      image: "/assets/recent/r13.png",
    },
    {
      id: 1,
      image: "/assets/recent/r14.png",
    },
    { 
      id: 2, 
      image: "/assets/recent/r15.png" 
    },
    { 
      id: 3,
      image: "/assets/recent/r16.png" 
    }
    
  ];
  const recentVideo = [
    {
      id: 1,
      video: "videos/01.mp4",
      thumbnail: "/assets/mockup/m1.png",
    },
    {
      id: 2,
      video: "videos/02.mp4",
      thumbnail: "/assets/mockup/m1.jpg",
    },
  ];
  const mockup = [
    {
      id: 1,
      image: "/assets/mockup/m11.jpg",
    },
    {
      id: 1,
      image: "/assets/mockup/m1.png",
    },
    { 
      id: 2, 
      image: "/assets/mockup/m1.jpg" 
    },
    { 
      id: 3,
      image: "/assets/mockup/m7.jpg" 
    },
    { 
      id: 4,
      image: "/assets/mockup/m2.jpg"
     },
    { 
      id: 5,
      image: "/assets/mockup/m5.png" 
    },
    {
      id: 6,
      image: "/assets/mockup/m3.jpg",
    },
    {
      id: 1,
      image: "/assets/mockup/m4.jpg",
    },
    { 
      id: 2, 
      image: "/assets/mockup/m5.jpg" 
    },
    { 
      id: 3,
      image: "/assets/mockup/m6.jpg" 
    },
    { 
      id: 4,
      image: "/assets/mockup/m4.png"
     },
    { 
      id: 5,
      image: "/assets/mockup/m1.jpg" 
    },
    {
      id: 6,
      image: "/assets/mockup/m2.jpg",
    },
    {
      id: 1,
      image: "/assets/mockup/m3.jpg",
    },
    { 
      id: 2, 
      image: "/assets/mockup/m2.png" 
    },
    { 
      id: 3,
      image: "/assets/mockup/m4.jpg" 
    },
    { 
      id: 4,
      image: "/assets/mockup/m4.png"
     },
    { 
      id: 5,
      image: "/assets/mockup/m5.jpg" 
    },
    {
      id: 6,
      image: "/assets/mockup/m6.png",
    },
    
  ];
  // const handleProductClick = (recent) => {
  //   setDisplayedProduct({
  //     image: recent.image,
  //   });
  // };

  // for display
   const [selectedContent, setSelectedContent] = useState({
     type: "",
     src: "",
   });

   const displayContent = (type, source) => {
     setSelectedContent({ type, src: source });
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
      <div className="h-full  grid grid-rows-2 grid-cols-1">
        <div className="bg-green-800">
          {/* <img
              className="displayProduct object-cover h-full w-full"
              src={displayedProduct.image}
              alt="Icon"
            /> */}

          {/* <iframe
            src="https://www.youtube.com/embed/jh66Pjtqr4k?list=RDjh66Pjtqr4k&autoplay=1&controls=0&modestbranding=1&showinfo=0&fs=0&rel=0&loop=1"
            title="LUDO: Aabaad Barbaad (Full Video)"
            frameborder="0"
            allow="autoplay; encrypted-media"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            autoplay="1"
            loop="1"
            rel="0"
            fs="0"
            showinfo="0"
            modestbranding="1"
            controls="0"
          ></iframe> */}

          {selectedContent.type === "video" && (
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              src={selectedContent.src}
            />
          )}
          {selectedContent.type === "image" && (
            <img
              className="w-full h-full object-cover"
              src={selectedContent.src}
              alt="Selected"
            />
          )}
          {!selectedContent.src && (
            <div className="text-gray-500">
              Select a video or image to display
            </div>
          )}
        </div>
        <div className=" grid grid-cols-4  gap-4  p-2">
          <div className="col-span-3 grid grid-cols-3 gap-2 h-full overflow-y-scroll no-scrollbar relative  ">
            <h3 className="text-xs col-span-3 bg-[#F15B26] sticky top-0 left-0 py-1.5 text-center text-white font-bold w-full shadow-md rounded">
              Recent work
            </h3>
            {recent.map((recent) => (
              <div
                key={recent.id}
                className=" shadow-md rounded"
                onClick={() => displayContent("image", recent.image)}
              >
                <img
                  src={recent.image}
                  className="w-full h-14 object-cover rounded"
                />
              </div>
            ))}

            {recentVideo.map((recentVideo) => (
              <div
                key={recentVideo.id}
                className=" shadow-md rounded"
                onClick={() => displayContent("video", recentVideo.video)}
              >
                
                <img
                  src={recentVideo.thumbnail}
                  className="w-full h-14 object-cover rounded"
                />
              </div>
            ))}
          </div>
          <div className="col-span-1 grid grid-cols-1 gap-2 h-full overflow-y-scroll no-scrollbar relative">
            <h3 className="text-xs bg-[#F15B26] sticky top-0 left-0 py-1.5 text-center text-white font-bold w-full  shadow-md rounded">
              Mockup
            </h3>
            {mockup.map((mockup) => (
              <div
                key={mockup.id}
                className=" shadow-md rounded"
                onClick={() => handleProductClick(mockup)}
              >
                <img
                  src={mockup.image}
                  className="w-full h-14 object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RecentWork
