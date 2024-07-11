import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link, useNavigate } from 'react-router-dom'
import slogan from '/assets/slogan.png'
import { AiOutlineProduct } from 'react-icons/ai'
import Footer from '../components/Footer'
import Slider from 'react-slick'

import b1 from "/assets/mockup/m2.jpg"; 
import b10 from "/assets/mockup/m11.jpg"; 
import b14 from "/assets/mockup/m7.jpg";


const Profile = () => {
    let navigate = useNavigate();

    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: "linear",
        autoplay: true,
        autoplaySpeed: 4000,
    };
    let bannerImg = [b1, b10, b14];
    return (
        <div className='h-screen pb-9 pt-8 bg-gray-100 grid grid-cols-1 grid-rows-6 gap-2'>
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

            <div className='row-span-3 bg-slate-400 relative'>
                <Slider className="md:h-full h-full " {...settings}>
                    {bannerImg.map((item, i) => (
                        <div
                            key={i}
                            onClick={() => navigate("/mockup")}
                            className=" h-full"
                        >
                            <img
                                className="image h-full w-full object-cover"
                                src={item}
                                alt=""
                            />
                        </div>
                    ))}
                </Slider>
                <div className='absolute bottom-1 left-1 z-10'>
                    <h2 className='textShadow -mb-6 ml-9 text-sm companyText text-white font-bold opacity-50 '>Company</h2>
                    <h2 className='textShadow text-6xl text-white font-bold opacity-40'>Profile</h2>
                </div>
            </div>
            <div className='row-span-2 bg-slate-400 '>1</div>
            <div className='row-span-1 bg-slate-400 '>1</div>

            <Footer />
        </div>
    )
}

export default Profile
