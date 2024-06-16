import React from "react";
import Footer from "../components/Footer";
import b1 from "/assets/b3.png";
import Navbar from "../components/Navbar";
import slogan from'/assets/slogan.png'

const RecentWork = () => {

  const minimalistSeries = [
    {
      id: 1,
      image: "/assets/b2.png",
    },
    {
      id: 3,
      image: "/assets/b4.png",
    },
    {
      id: 1,
      image: "/assets/b5.png",
    },
    {
      id: 2,
      image: "/assets/b7.png",
    },
    {
      id: 3,
      image: "/assets/b8.png",
    },
    {
      id: 1,
      image: "/assets/b22.png",
    },
    {
      id: 2,
      image: "/assets/b11.png",
    },
    {
      id: 3,
      image: "/assets/b4.png",
    },
    {
      id: 1,
      image: "/assets/b2.png",
    },
    {
      id: 2,
      image: "/assets/b3.png",
    },
    {
      id: 3,
      image: "/assets/b4.png",
    },
    {
      id: 1,
      image: "/assets/b2.png",
    },
    {
      id: 2,
      image: "/assets/b3.png",
    },
    {
      id: 3,
      image: "/assets/b4.png",
    },
    {
      id: 1,
      image: "/assets/b2.png",
    },
    {
      id: 2,
      image: "/assets/b3.png",
    },
    {
      id: 3,
      image: "/assets/b4.png",
    },
    {
      id: 1,
      image: "/assets/b2.png",
    },
    {
      id: 2,
      image: "/assets/b3.png",
    },
    {
      id: 3,
      image: "/assets/b4.png",
    },
    {
      id: 1,
      image: "/assets/b2.png",
    },
    {
      id: 2,
      image: "/assets/b3.png",
    },
    {
      id: 3,
      image: "/assets/b4.png",
    },
    {
      id: 1,
      image: "/assets/b2.png",
    },
    {
      id: 2,
      image: "/assets/b3.png",
    },
    {
      id: 3,
      image: "/assets/b4.png",
    },
    {
      id: 1,
      image: "/assets/b2.png",
    },
    {
      id: 2,
      image: "/assets/b3.png",
    },
    {
      id: 3,
      image: "/assets/b4.png",
    },
    {
      id: 1,
      image: "/assets/b2.png",
    },
    {
      id: 2,
      image: "/assets/b3.png",
    },
    {
      id: 3,
      image: "/assets/b4.png",
    },
    {
      id: 1,
      image: "/assets/b2.png",
    },
    {
      id: 2,
      image: "/assets/b3.png",
    },
    {
      id: 3,
      image: "/assets/b4.png",
    },
    {
      id: 1,
      image: "/assets/b2.png",
    },
    {
      id: 2,
      image: "/assets/b3.png",
    },
    {
      id: 3,
      image: "/assets/b4.png",
    },
    {
      id: 1,
      image: "/assets/b2.png",
    },
    {
      id: 2,
      image: "/assets/b3.png",
    },
    {
      id: 3,
      image: "/assets/b4.png",
    },
    {
      id: 1,
      image: "/assets/b2.png",
    },
    {
      id: 2,
      image: "/assets/b3.png",
    },
    {
      id: 3,
      image: "/assets/b4.png",
    },
  ];

  const ledSpotLightSeries = [
    {
      id: 1,
      image: "/assets/b23.png",
    },
    {
      id: 2,
      image: "/assets/b3.png",
    },
    {
      id: 3,
      image: "/assets/b4.png",
    },
    {
      id: 12,
      image: "/assets/b3.png",
    },
    {
      id: 3,
      image: "/assets/b4.png",
    },
    {
      id: 11,
      image: "/assets/b2.png",
    },
    {
      id: 20,
      image: "/assets/b3.png",
    },
    {
      id: 12,
      image: "/assets/b3.png",
    },
    {
      id: 3,
      image: "/assets/b4.png",
    },
    {
      id: 11,
      image: "/assets/b2.png",
    },
    {
      id: 20,
      image: "/assets/b3.png",
    },
  ];
  
  const photoVideo = [
    { id: 1, image: "/assets/b3.png" },
    { id: 2, image: "/assets/b17.png" },
  ];

  return (
    <div>
      <div className="main h-screen ">
        <div className="absolute top-0 left-0 bg-white h-10">
          <marquee behavior="" direction="">
            <div className='flex gap-2'>
            <img src={slogan} alt="" />
            <img src={slogan} alt="" />
            <img src={slogan} alt="" />
            <img src={slogan} alt="" />
            <img src={slogan} alt="" />
            <img src={slogan} alt="" />
            <img src={slogan} alt="" />
            <img src={slogan} alt="" />
            <img src={slogan} alt="" />
            <img src={slogan} alt="" />
            <img src={slogan} alt="" />
            <img src={slogan} alt="" />
            <img src={slogan} alt="" />
            <img src={slogan} alt="" />
            <img src={slogan} alt="" />
            </div>
          </marquee>
        </div>


        <div className="top  grid gap-2 grid-cols-4 grid-rows-2  h-2/3">
          <div className="one row-span-2 bg-slate-100 pt-10">
          <div className="w-[100%] h-20  ">
            <Navbar/>
          </div>
          <h3 className="text-xs bg-[#F15B26] py-1 text-center text-white font-bold">Mockup</h3>
            <div className=" h-[77%] no-scrollbar overflow-scroll relative">
                
                


            <div className=" p-1  flex flex-col gap-y-1">
          
          <div className="w-[100%]  grid grid-cols-1 gap-2 p-1 no-scrollbar overflow-y-scroll h-[85%]">
            {ledSpotLightSeries.map((product) => (
              <div
                key={product.id}
                className="  shadow-md rounded "
              >
                <img
                  src={product.image}
                  className=" w-full h-14 object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>






            </div>
          </div>
          <div className="one col-span-3  pt-10">
            <div className="bg-orange-500 h-full">
              <img className='h-full w-full object-cover' src={b1} alt="" />
            </div>
          </div>

          <div className="one col-span-3 bg-slate-400">
            <div className="bg-slate-100 h-full no-scrollbar overflow-scroll">
            <section className="mb-4 h-full ">
            <h2 className="text-xs font-semibold uppercase mb-4 text-left bg-[#F15B26] pl-3 text-white py-1.5">
              Recent work
            </h2>
            <div className="grid grid-cols-3 gap-4 px-3 no-scrollbar overflow-y-scroll h-[83%]">
              {minimalistSeries.map((mockup) => (
                <div
                  key={mockup.id}
                  className="shadow-md rounded"
                >
                  <img
                    src={mockup.image}
                    className=" w-full h-14 object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </section>
            </div>
          </div>
        </div>


        <div className="bottom  h-1/3 pb-10 pt-2">
          <div className="h-full bg-slate-100 ">
          <section className="h-full ">
          <h2 className="text-xs font-bold text-center uppercase mb-4 bg-[#F15B26] pl-3 text-white py-1.5">
            Photo & Video
          </h2>
          <div className="grid grid-cols-2 gap-4 px-3 h-[80%] pb-9 ">
            {photoVideo.map((item) => (
              <div
                key={item.id}
                className="bg-transparent border p-2 h-[100%]  shadow-md rounded"
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
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RecentWork;
