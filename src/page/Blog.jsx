import Footer from "../components/Footer";
import { FaPaperPlane, FaHeart, FaRegHeart } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link, useNavigate } from "react-router-dom";
import slogan from "/assets/slogan.png";
import { HiDotsHorizontal } from "react-icons/hi";

const Blog = () => {
  let navigate = useNavigate();
  const [isItemVisible, setIsItemVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [blogs, setBlogs] = useState([]); // State for storing blog data
  const [favorites, setFavorites] = useState({}); // State for tracking heart counts

  const handleToggle = () => {
    setIsItemVisible(!isItemVisible);
  };

  // Fetch blog data from API
  useEffect(() => {
    fetch("https://code.bdluminaries.com/api/v1/academys")
      .then((response) => response.json())
      .then((data) => {
        // Filter and sort data based on status and priority
        const filteredData = data
          .filter((blog) => blog.status === "active") // Filter by active status
          .sort((a, b) => a.priority - b.priority); // Sort by priority
        setBlogs(filteredData);
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  // Handle social media share
  const handleShare = (platform, blog) => {
    const shareUrl = encodeURIComponent(
      `https://yourwebsite.com/blog/${blog._id}`
    );
    const title = encodeURIComponent(blog.title);

    if (platform === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
        "_blank"
      );
    } else if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?url=${shareUrl}&text=${title}`,
        "_blank"
      );
    }
  };

  // Handle heart count increment
  const handleHeartClick = (blogId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [blogId]: prevFavorites[blogId] ? prevFavorites[blogId] + 1 : 1,
    }));
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex items-center justify-between absolute top-0 left-0 h-8 bg-[#000000]">
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
              <img className="h-8" src={slogan} alt="slogan" />
              <img className="h-8" src={slogan} alt="slogan" />
              <img className="h-8" src={slogan} alt="slogan" />
            </div>
          </Marquee>
          <div
            className="navItem w-[20%] h-full flex justify-center items-center text-[#F15B26] relative"
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

        <div className="bg-gray-100 flex flex-col items-center p-4 pb-12 overflow-y-scroll pt-12">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md mb-6"
              >
                <img
                  src={`https://code.bdluminaries.com/${blog.image}`}
                  alt={blog.title}
                  className="rounded-lg mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                <p className="text-gray-700 mb-4">{blog.description}</p>
                <div className="flex items-baseline justify-between">
                  {/* Heart counter */}
                  <div className="flex items-center">
                    {favorites[blog._id] ? (
                      <FaHeart
                        className="text-red-500 cursor-pointer"
                        onClick={() => handleHeartClick(blog._id)}
                      />
                    ) : (
                      <FaRegHeart
                        className="text-gray-600 cursor-pointer"
                        onClick={() => handleHeartClick(blog._id)}
                      />
                    )}
                    <span className="ml-2 text-sm text-gray-600">
                      {favorites[blog._id] || 0}
                    </span>
                  </div>

                  {/* Share buttons */}
                  <div className="icon flex gap-x-2 justify-end">
                    <p
                      className="text-xs text-gray-500 cursor-pointer"
                      onClick={() => handleShare("facebook", blog)}
                    >
                      Share on Facebook
                    </p>
                    <p
                      className="text-xs text-gray-500 cursor-pointer"
                      onClick={() => handleShare("twitter", blog)}
                    >
                      Share on Twitter
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading blogs...</p>
          )}

          <div
            onClick={() => navigate("/contact")}
            className="bg-gray-200 p-4 rounded-lg shadow-lg w-full max-w-md flex items-center justify-between pr-10 cursor-pointer"
          >
            <p className="text-2xl text-center text-slate-800 relative">
              Make an appointment{" "}
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
