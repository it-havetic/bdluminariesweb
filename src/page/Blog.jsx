import React from "react";
import Footer from "../components/Footer";
import b1 from "/assets/blog/b1.png";
import b2 from "/assets/blog/b2.png";
import BlogPost from "../components/BlogPost";
import { FaPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import blogheader from '/assets/blog/b2.png'
const Blog = () => {
  let nevigate = useNavigate()
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className={`relative bg-[url(${blogheader})] after:content-[""] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-black/70 after:z-[-1] z-10 py-10`}>
          <h2 className="text-center text-2xl text-white">Our Blog</h2>
        </div>
        <div className=" bg-gray-100 flex flex-col items-center p-4 pb-12 overflow-y-scroll">
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
