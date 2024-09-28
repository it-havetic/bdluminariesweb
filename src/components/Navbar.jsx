import React from 'react'
import Marquee from 'react-fast-marquee'
import { AiOutlineProduct } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import slogan from "/assets/slogan.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[3%]  bg-[#000000] md:rounded-b-2xl relative z-30">
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
            <div className="flex items-center">
              <img className="h-7" src={slogan} alt="" />
              <img className="h-7" src={slogan} alt="" />
              <img className="h-7" src={slogan} alt="" />
            </div>
          </Marquee>
          <Link
            className="w-[15%] flex justify-center items-center text-[#F15B26]"
            to="/menu"
          >
            <AiOutlineProduct />
          </Link>
        </div>
  )
}

export default Navbar
