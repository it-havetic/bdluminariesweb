// src/App.jsx
import React, { useState } from "react";
import Footer from "../components/Footer";
import p1 from "/assets/product/01.png";

const SpecificationItem = ({ title, items, index, checked }) => {
  return (
    <div className=" text-white rounded">
      <h2 className="px-1 py-0.5 text-[10px] bg-black mb-1">{title}</h2>
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

function ProductDetailNext() {
  const minimalistSeries = [
    {
      id: 1,
      name: "Minimalist 8 Watt Led spot light",
      image: "/assets/product/01.png",
    },
    { id: 2, name: "Minimalist Series B", image: "/assets/product/01.png" },
    { id: 3, name: "Minimalist Series C", image: "/assets/product/01.png" },
    { id: 4, name: "Minimalist Series D", image: "/assets/product/01.png" },
    { id: 5, name: "Minimalist Series E", image: "/assets/product/01.png" },
    { id: 6, name: "Minimalist Series F", image: "/assets/product/01.png" },
    { id: 7, name: "Minimalist Series E", image: "/assets/product/01.png" },
    { id: 8, name: "Minimalist Series F", image: "/assets/product/01.png" },
    { id: 2, name: "Minimalist Series B", image: "/assets/product/01.png" },
    { id: 3, name: "Minimalist Series C", image: "/assets/product/01.png" },
    { id: 4, name: "Minimalist Series D", image: "/assets/product/01.png" },
    { id: 5, name: "Minimalist Series E", image: "/assets/product/01.png" },
    { id: 6, name: "Minimalist Series F", image: "/assets/product/01.png" },
    { id: 7, name: "Minimalist Series E", image: "/assets/product/01.png" },
    { id: 8, name: "Minimalist Series F", image: "/assets/product/01.png" },
    {
      id: 1,
      name: "Minimalist 8 Watt Led spot light",
      image: "/assets/product/01.png",
    },
    { id: 2, name: "Minimalist Series B", image: "/assets/product/01.png" },
    { id: 3, name: "Minimalist Series C", image: "/assets/product/01.png" },
    { id: 4, name: "Minimalist Series D", image: "/assets/product/01.png" },
    { id: 5, name: "Minimalist Series E", image: "/assets/product/01.png" },
    { id: 6, name: "Minimalist Series F", image: "/assets/product/01.png" },
    { id: 7, name: "Minimalist Series E", image: "/assets/product/01.png" },
    { id: 8, name: "Minimalist Series F", image: "/assets/product/01.png" },
    { id: 2, name: "Minimalist Series B", image: "/assets/product/01.png" },
    { id: 3, name: "Minimalist Series C", image: "/assets/product/01.png" },
    { id: 4, name: "Minimalist Series D", image: "/assets/product/01.png" },
    { id: 5, name: "Minimalist Series E", image: "/assets/product/01.png" },
    { id: 6, name: "Minimalist Series F", image: "/assets/product/01.png" },
    { id: 7, name: "Minimalist Series E", image: "/assets/product/01.png" },
    { id: 8, name: "Minimalist Series F", image: "/assets/product/01.png" },
    { id: 7, name: "Minimalist Series E", image: "/assets/product/01.png" },
    { id: 8, name: "Minimalist Series F", image: "/assets/product/01.png" },
  ];

  const ledSpotLightSeries = [
    {
      id: 1,
      name: "Elegant",
      nameBottom: "Series A",
      image: "/assets/product/01.png",
    },
    {
      id: 2,
      name: "Elegant",
      nameBottom: "Series B",
      image: "/assets/product/02.png",
    },
    {
      id: 3,
      name: "Slic",
      nameBottom: "Series",
      image: "/assets/product/03.png",
    },
    {
      id: 4,
      name: "Titanium",
      nameBottom: "Series A",
      image: "/assets/product/04.png",
    },
    {
      id: 5,
      name: "Titanium",
      nameBottom: "Series B",
      image: "/assets/product/01.png",
    },
    {
      id: 6,
      name: "Titanium",
      nameBottom: "Series C",
      image: "/assets/product/02.png",
    },
    {
      id: 7,
      name: "Platinum",
      nameBottom: "Series",
      image: "/assets/product/03.png",
    },
    {
      id: 8,
      name: "Gold",
      nameBottom: "Series A",
      image: "/assets/product/04.png",
    },
  ];

  const photoVideo = [
    { id: 1, image: "/assets/b5.png" },
    { id: 2, image: "/assets/b6.png" },
  ];
  // Start with the

  return (
    <div className="bg-green-100 h-screen grid gap-y-1 ">
      <div className="top row-span-6 grid gap-1 grid-cols-5 grid-rows-4">
        <div className="one col-span-4 row-span-3 bg-[#8ac249] flex items-center justify-center">
          <img className="w-4/5 h-4/5  object-contain " src={p1} alt="" />
        </div>
        <div className="one bg-[#8ac249]">
          <SpecificationItem
            title="Dimming"
            items={["1-10 volt", "2.4G", "24V/6", "Dali", "Zigbee", "Mash"]}
          />
        </div>
        <div className="one bg-[#8ac249]">
          <SpecificationItem
            title="CCT"
            items={["2700K", "3000K", "4000K", "5000K", "6500K"]}
          />
        </div>
        <div className="one bg-[#8ac249]">
          <SpecificationItem
            title="CRI"
            items={[" >80", " >90", " >92", " >95", " >97"]}
          />
        </div>
        <div className="one bg-[#8ac249]">
          <SpecificationItem
            title="Lumen/UGI"
            items={["80-120LM/w", "Henycomb", "Lence"]}
          />
        </div>
        <div className="one bg-[#8ac249]">
          <SpecificationItem
            title="Beam Angle"
            items={["8°", "16°", "24°", "36°", "48°"]}
          />
        </div>
        <div className="one bg-[#8ac249]">
          <SpecificationItem
            title="Reflector Color"
            items={["White", "Black", "Chrome", "Rose Gold", "Violet"]}
          />
        </div>
        <div className="one bg-[#8ac249]">
          <SpecificationItem
            title="Mounting"
            items={["Recessed", "Surface", "Base Plate", "Pendent"]}
          />
        </div>
        <div className="one bg-[#8ac249]">
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

      <div className="top row-span-3 bg-[#ffffff]">
        <h2 className="text-xs font-bold text-center uppercase bg-[#F15B26] pl-3 text-white py-1.5">
          Remaining Specication
        </h2>

        <div className="main text-[6px] grid grid-cols-5 grid-rows-6">
          <div className="one row-span-2 p-1 border font-bold">
            Light Power :
          </div>
          <div className="one row-span-2 p-1 border font-bold">
            Adjustable Neck
          </div>
          <div className="one row-span-2 p-1 border font-bold">
            Optical Material
          </div>
          <div className="one row-span-2 p-1 border font-bold">
            Product Dimension (L/W/H)
          </div>
          <div className="one row-span-2 p-1 border font-bold">
            Product Dimension (Cut Off)
          </div>
          <div className="one row-span-2 p-1 border ">3W</div>
          <div className="one  flex items-center row-span-10 p-1 border ">
            Tilting
          </div>
          <div className="one  flex items-center row-span-10 p-1 border ">
            Reflective Cup+Lens
          </div>
          <div className="one row-span-2 p-1 border ">70X45X50MM</div>
          <div className="one row-span-2 p-1 border ">60X35MM</div>
          <div className="one row-span-2 p-1 border ">7W</div>
          <div className="one row-span-2 p-1 border ">280X45X50MM</div>
          <div className="one row-span-2 p-1 border ">270X35MM</div>
          <div className="one row-span-2 p-1 border ">9W</div>
          <div className="one row-span-2 p-1 border ">280X45X50MM</div>
          <div className="one row-span-2 p-1 border ">270X35MM</div>
          <div className="one row-span-2 p-1 border ">10W</div>
          <div className="one row-span-2 p-1 border ">280X45X50MM</div>
          <div className="one row-span-2 p-1 border ">270X35MM</div>
          <div className="one row-span-2 p-1 border ">15W</div>
          <div className="one row-span-2 p-1 border ">415X45X50MM</div>
          <div className="one row-span-2 p-1 border ">405X35MM</div>
        </div>
      </div>
      <div className="top row-span-4 ">
        <section className="h-full ">
          <h2 className="text-xs font-bold text-center uppercase mb-2 bg-[#F15B26] pl-3 text-white py-1.5">
            Installation Guideline
          </h2>
          <div className="grid grid-cols-2 gap-4 px-3 h-[80%] pb-9 ">
            {photoVideo.map((item) => (
              <div
                key={item.id}
                className="bg-transparent border border-[#8ac249] p-2 h-[100%]  shadow-md rounded"
              >
                <img
                  src={item.image}
                  alt="Photo"
                  className=" w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetailNext;
