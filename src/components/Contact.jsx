import React, { useState } from 'react';
import Footer from './Footer';
import contactheader from '/assets/blog/b2.png'
import { HiDotsHorizontal } from 'react-icons/hi';
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import slogan from "/assets/slogan.png";


const ContactForm = () => {
  const [isItemVisible, setIsItemVisible] = useState(false);

  const handleToggle = () => {
    setIsItemVisible(!isItemVisible);
  };
  return (
    <>
      <div className="h-[3.7%]  flex items-center justify-between fixed top-0 left-0 bg-[#000000] z-50 ">
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
          className="h-full "
        >
          <div className="flex h-full">
            <img className=" h-9 object-contain" src={slogan} alt="" />
            <img className=" h-9 object-contain" src={slogan} alt="" />
            <img className=" h-9 object-contain" src={slogan} alt="" />
            <img className=" h-9 object-contain" src={slogan} alt="" />
          </div>
        </Marquee>
        <div
          className="navItem w-[20%] z-10 h-full flex justify-center items-center  text-[#F15B26] relative "
          onClick={handleToggle}
        >
          <HiDotsHorizontal />
          <div
            className={`item px-5 py-2 bg-slate-300 absolute right-0 top-full transition-all duration-300 ${
              isItemVisible
                ? "top-full !opacity-100 !visible"
                : "top-[140%] opacity-0 invisible"
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
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 pb-12 mt-9">
        <p className="text-2xl mb-6 text-center relative">
          Make an appoitment <span className='Contactwith absolute -left-2.5 top-7 -rotate-45 text-[#F15B26]'>with</span> <br />
          <span className="font-bold text-[#8AC249]">BD Luminaries</span>
        </p>
        <form>
          <input
            type="text"
            placeholder="Your name *"
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="email"
            placeholder="Email address *"
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="tel"
            placeholder="Phone number *"
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="url"
            placeholder="Website url"
            className="w-full p-2 mb-4 border rounded"
          />
          <label
            htmlFor="file"
            className="block w-full p-2 mb-4 border rounded relative bg-white cursor-text"
          >
            <input type="file" id="file" className="opacity-0" />
            <p className="absolute left-2 top-2 text-gray-400">
              Upload your visiting card *
            </p>
          </label>
          <textarea
            placeholder="Your message"
            className="w-full p-2 mb-4 border rounded"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded"
          >
            Send
          </button>
        </form>
        <div className="w-full my-3">
          <iframe
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.13110424821457!2d90.41109242704812!3d23.81512576088967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c767e22e05c1%3A0xf7911921fd9bc594!2sKing%20Ru%24%24%20Residential%20Complex!5e0!3m2!1sen!2sbd!4v1717258321890!5m2!1sen!2sbd"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <footer className="bg-gray-200 p-4 rounded-lg shadow-lg w-full max-w-md  mt-4">
          <p className="text-gray-700 mb-1 text-xs">
            <strong>Address:</strong> Baridhara DOHS house 122/3
          </p>
          <p className="text-gray-700 mb-1 text-xs">
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p className="text-gray-700 mb-1 text-xs">
            <strong>Email:</strong> info@bdluminaries.com
          </p>
          <p className="text-gray-700 mb-1 text-xs">
            <strong>Hours:</strong> Mon - Sat: 8:00 am to 6:00 pm | Sunday:
            CLOSED
          </p>
        </footer>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
