
import Footer from "../components/Footer";
import b1 from "/assets/blog/b1.png";
import b2 from "/assets/blog/b2.png";
import BlogPost from "../components/BlogPost";
import { FaPaperPlane } from "react-icons/fa";
import blogheader from '/assets/blog/b2.png'


import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link, useNavigate } from "react-router-dom";
import slogan from "/assets/slogan.png";

import { HiDotsHorizontal } from "react-icons/hi";
import b7 from "/assets/b7.png";


const Blog = () => {
  let nevigate = useNavigate()
    const [isItemVisible, setIsItemVisible] = useState(false);

    const handleToggle = () => {
      setIsItemVisible(!isItemVisible);
    };
  return (
    <>
      <div className="flex flex-col h-screen">
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
            className="navItem w-[20%] h-full flex justify-center items-center  text-[#F15B26] relative "
            onClick={handleToggle}
          >
            <HiDotsHorizontal />
            <div
              className={`item px-5 py-2 bg-slate-300 absolute right-0 top-full transition-all duration-300 ${
                isItemVisible
                  ? "top-full opacity-100 visible"
                  : "top-[140%] opacity-0 !invisible"
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
        <div className=" bg-gray-100 flex flex-col items-center p-4 pb-12 overflow-y-scroll pt-12">
          <BlogPost
            src={b1}
            title="Title: Enlightening the Future: The Dawn of Smart Lighting Solutions"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit repellat deleniti quos ducimus, fuga ipsa asperiores esse cum qui, laudantium dolorum corporis repudiandae optio eveniet recusandae dicta reprehenderit quaerat."
          />
          <BlogPost
            src={b1}
            title="Title: Enlightening the Future: The Dawn of Smart Lighting Solutions"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit repellat deleniti quos ducimus, fuga ipsa asperiores esse cum qui, laudantium dolorum corporis repudiandae optio eveniet recusandae dicta reprehenderit quaerat."
          />
          <BlogPost
            src={b1}
            title="Title: Enlightening the Future: The Dawn of Smart Lighting Solutions"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit repellat deleniti quos ducimus, fuga ipsa asperiores esse cum qui, laudantium dolorum corporis repudiandae optio eveniet recusandae dicta reprehenderit quaerat."
          />
          <div
            onClick={() => nevigate("/contact")}
            className="bg-gray-200 p-4 rounded-lg shadow-lg w-full max-w-md flex items-center justify-between pr-10 cursor-pointer"
          >
            <p className="text-2xl  text-center relative">
              Make an appoitment{" "}
              <span className="Contactwith absolute -left-2.5 top-7 -rotate-45 text-[#F15B26]">
                with
              </span>{" "}
              <br />
              <span className="font-bold text-[#8AC249]">BD Luminaries</span>
            </p>
            <button>
              <FaPaperPlane />
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
