import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { AiOutlineProduct } from "react-icons/ai";
import slogan from "/assets/slogan.png";
import axios from "../axios";

const Mockup = () => {
  const location = useLocation();
  const [displayedProduct, setDisplayedProduct] = useState({
    image: location.state?.image || "/assets/mockup/m2.jpg",
  });



  const [mainMockup, setMainMockup] = useState([]);
    const allMockup = async () => {
      try {
        let res = await axios.get("/mockup");
        setMainMockup(res.data.data);
      } catch (error) {
        console.error("Error fetching the group data:", error);
      }
    };

    
  useEffect(() => {
    allMockup();
  }, []);


  const recent = [
    { id: 1, image: "/assets/recent/r1.png" },
    { id: 2, image: "/assets/recent/r2.png" },
    { id: 3, image: "/assets/recent/r3.png" },
    { id: 4, image: "/assets/recent/r4.png" },
    { id: 5, image: "/assets/recent/r5.png" },
    { id: 6, image: "/assets/recent/r6.png" },
    { id: 7, image: "/assets/recent/r7.png" },
    { id: 8, image: "/assets/recent/r8.png" },
    { id: 9, image: "/assets/recent/r9.png" },
    { id: 10, image: "/assets/recent/r10.png" },
    { id: 11, image: "/assets/recent/r11.png" },
    { id: 12, image: "/assets/recent/r12.png" },
    { id: 13, image: "/assets/recent/r13.png" },
    { id: 14, image: "/assets/recent/r14.png" },
    { id: 15, image: "/assets/recent/r15.png" },
    { id: 16, image: "/assets/recent/r16.png" },
  ];



  const handleProductClick = (mockup) => {
    setDisplayedProduct({
      image: mockup.image,
    });
  };

  return (
    <div className="h-screen pb-9 pt-8 bg-gray-100">
      <div className="flex items-center justify-between absolute top-0 left-0 w-full h-8 bg-[#000000]">
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
          className="h-8"
        >
          <div className="flex h-full">
            <img className="h-8" src={slogan} alt="" />
            <img className="h-8" src={slogan} alt="" />
            <img className="h-8" src={slogan} alt="" />
          </div>
        </Marquee>
        <Link
          className="w-[20%] flex justify-center items-center text-[#F15B26]"
          to="/product/detail/one"
        >
          <AiOutlineProduct />
        </Link>
      </div>

      <div className="h-full grid grid-rows-2 grid-cols-1">
        <div className="bg-green-200">
          <img
            className="object-cover h-full w-full"
            src={displayedProduct.image}
            alt="Please check your network"
          />
        </div>

        <div className="grid grid-cols-4 gap-4 p-2">
          <div className="col-span-1 grid grid-cols-1 gap-2 h-full overflow-y-scroll no-scrollbar relative">
            <h3 className="text-xs bg-[#F15B26] sticky top-0 left-0 py-1.5 text-center text-white font-bold w-full shadow-md rounded">
              Recent Work
            </h3>
            {recent.map((recentItem) => (
              <div key={recentItem.id} className="shadow-md rounded">
                <img
                  src={recentItem.image}
                  className="w-full h-14 object-cover rounded"
                />
              </div>
            ))}
          </div>

          <div className="col-span-3 grid grid-cols-3 gap-2 h-full overflow-y-scroll no-scrollbar relative">
            <h3 className="text-xs bg-[#F15B26] sticky top-0 left-0 py-1.5 text-center flex items-center justify-center text-white font-bold w-full col-span-3 shadow-md rounded">
              Other's Mockup Room
            </h3>
            {mainMockup.map((mockupItem, i) => (
              <div
                key={i}
                className="shadow-md rounded"
                onClick={() => handleProductClick(mockupItem)}
              >
                <img
                  src={mockupItem.image}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Mockup;
