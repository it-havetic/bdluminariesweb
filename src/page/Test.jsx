import React, { useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { AiOutlineProduct } from "react-icons/ai";
import slogan from "/assets/slogan.png";

const SpecificationItem = ({ title, items, index, checked, sItemClass }) => {
  return (
    <div className={`text-white  ${sItemClass} bg-[#8ac249] border  `}>
      <h2 className="px-1 py-0.5 text-[10px] bg-orange-600 mb-1">{title}</h2>
      <ul className="pl-3 text-black ">
        {items.map((item, index) => (
          <p key={index} className="flex items-center gap-1">
            <input
              type="radio"
              className=" h-1 w-1 border text-blue-500 transition duration-150 ease-in-out"
            />
            <li className="text-[6px]" key={index}>
              {item}
            </li>
          </p>
        ))}
      </ul>
    </div>
  );
};

const Test = () => {

   const minimalistSeries = [
     {
       id: 1,
       name: "Minimalist 8 Watt Led spot light",
       image: "/assets/product/01.png",
     },
     { id: 2, name: "Minimalist Series B", image: "/assets/product/02.png" },
     { id: 3, name: "Minimalist Series C", image: "/assets/product/03.png" },
     { id: 4, name: "Minimalist Series D", image: "/assets/product/04.png" },
     { id: 5, name: "Minimalist Series E", image: "/assets/product/05.png" },
     {
       id: 6,
       name: "Minimalist 8 Watt Led spot light",
       image: "/assets/product/06.png",
     },
     { id: 7, name: "Minimalist Series B", image: "/assets/product/07.png" },
     { id: 8, name: "Minimalist Series C", image: "/assets/product/08.png" },
     { id: 9, name: "Minimalist Series D", image: "/assets/product/09.png" },
     { id: 10, name: "Minimalist Series E", image: "/assets/product/10.png" },
     {
       id: 11,
       name: "Minimalist 8 Watt Led spot light",
       image: "/assets/product/11.png",
     },
     { id: 12, name: "Minimalist Series B", image: "/assets/product/12.png" },
     { id: 13, name: "Minimalist Series C", image: "/assets/product/13.png" },
     { id: 14, name: "Minimalist Series D", image: "/assets/product/14.png" },
     { id: 15, name: "Minimalist Series E", image: "/assets/product/15.png" },
     {
       id: 16,
       name: "Minimalist 8 Watt Led spot light",
       image: "/assets/product/16.png",
     },
     { id: 17, name: "Minimalist Series B", image: "/assets/product/17.png" },
     { id: 18, name: "Minimalist Series C", image: "/assets/product/18.png" },
     { id: 19, name: "Minimalist Series D", image: "/assets/product/19.png" },
     { id: 20, name: "Minimalist Series E", image: "/assets/product/20.png" },
     {
       id: 21,
       name: "Minimalist 8 Watt Led spot light",
       image: "/assets/product/21.png",
     },
     { id: 22, name: "Minimalist Series B", image: "/assets/product/22.png" },
     { id: 23, name: "Minimalist Series C", image: "/assets/product/23.png" },
     { id: 24, name: "Minimalist Series D", image: "/assets/product/02.png" },
     { id: 25, name: "Minimalist Series E", image: "/assets/product/01.png" },
     {
       id: 26,
       name: "Minimalist 8 Watt Led spot light",
       image: "/assets/product/26.png",
     },
     { id: 27, name: "Minimalist Series B", image: "/assets/product/27.png" },
   ];

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
      <div className=" h-full">
        <div className="h-[73%] ">
          <div className="h-[82%]  flex">
            <div className="w-4/5 h-full   ">
              <h2 className="bg-orange-600 p-1 border-l border-t uppercase text-gray-200 font-semibold">
                Minimalist Series
              </h2>
              <div className="h-[90%] grid grid-cols-3 gap-2  overflow-y-scroll p-2">
                {minimalistSeries.map((product) => (
                  <div
                    key={product.id}
                    className="bg-[#8ac249] p-1 shadow-md rounded"
                  >
                    <img
                      src={product.image}
                      className="w-full h-14 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-1/5 h-full bg-pink-500">
              <SpecificationItem
                sItemClass="h-[20%]"
                title="Dimming"
                items={["1-10 volt", "2.4G", "24V/6", "Dali", "Zigbee", "Mash"]}
              />
              <SpecificationItem
                sItemClass="h-[20%]"
                title="Dimming"
                items={["1-10 volt", "2.4G", "24V/6", "Dali", "Zigbee", "Mash"]}
              />
              <SpecificationItem
                sItemClass="h-[20%]"
                title="Dimming"
                items={["1-10 volt", "2.4G", "24V/6", "Dali", "Zigbee", "Mash"]}
              />
              <SpecificationItem
                sItemClass="h-[20%]"
                title="CCT"
                items={["2700K", "3000K", "4000K", "5000K", "6500K"]}
              />
              <SpecificationItem
                sItemClass="h-[20%]"
                title="CRI"
                items={[" >80", " >90", " >92", " >95", " >97"]}
              />
            </div>
          </div>
          <div className="h-[18%] bg-gray-100 grid grid-cols-5">
            <SpecificationItem
              title="Lumen/UGI"
              items={["80-120LM/w", "Henycomb", "Lence"]}
            />
            <SpecificationItem
              title="Beam Angle"
              items={["8°", "16°", "24°", "36°", "48°"]}
            />
            <SpecificationItem
              title="Reflector Color"
              items={["White", "Black", "Chrome", "Rose Gold", "Violet"]}
            />
            <SpecificationItem
              title="Mounting"
              items={["Recessed", "Surface", "Base Plate", "Pendent"]}
            />
            <SpecificationItem
              title="IP"
              items={[
                "IP-20",
                "IP-40",
                "IP-43",
                "IP-50",
                "IP-65",
                "IP-67",
                "IP-68",
              ]}
            />
          </div>
        </div>
        <div className="h-[27%] bg-slate-200">done</div>
      </div>
      <Footer />
    </div>
  );
};

export default Test;
