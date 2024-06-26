import React from 'react'
import Marquee from "react-fast-marquee";
import b1 from'/assets/b1.png'
// import b2 from'/assets/b2.png'
// import b3 from'/assets/b3.png'
// import b4 from'/assets/b4.png'
// import b5 from'/assets/b5.png'
// import b6 from'/assets/b6.png'
import b7 from'/assets/b7.png'
import b8 from'/assets/b8.png'
// import b9 from'/assets/b9.png'
import b10 from'/assets/b10.png'
import b11 from'/assets/b11.png'
import b12 from'/assets/b12.png'
import b13 from'/assets/b13.png'
import b14 from'/assets/b14.png'
import b15 from'/assets/b15.png'
import b16 from'/assets/b16.png'
import b17 from'/assets/b17.png'
import b18 from'/assets/b18.png'
import b19 from'/assets/b19.png'
import b20 from'/assets/b20.png'
import b21 from'/assets/b21.png'
import b22 from'/assets/b22.png'
import b23 from'/assets/b23.png'
import b24 from'/assets/b24.png'
import b25 from'/assets/b25.png'
import slogan from'/assets/slogan.png'

import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineProduct } from 'react-icons/ai'
const Banner = () => {

    let navigate = useNavigate()

    let settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000,
      };
    let settings2 = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 10000,
      };

      let bannerImg = [
        b1,
        b10,
        b14,
      ]
      let bannerImg2 = [
        b7,
        b8,
        b11,
        b12,
        b13,
        b15,
        b16,
        b17,
        b18,
        b19,
        b20,
        b21,
        b22,
        b23,
        b24,
        b25
      ]
  return (
    <div className='h-[100vh] md:p-5  '> 
        <div className='h-[100%] relative  flex flex-col justify-between'>
            <Slider className='md:h-[100%] h-[49%] ' {...settings}>
                {
                    bannerImg.map((item,i)=>(
                        <div key={i}  onClick={()=> navigate('/mockup')} className=' h-full'>
                            <img className='image h-full w-full object-cover' src={item} alt="" />
                        </div>
                    ))
                }
            </Slider>
            <div className='flex items-center justify-between h-[3%] md:absolute left-0 bottom-0 bg-black md:rounded-b-2xl relative z-30'>
               
                <Link className='flex items-center justify-center w-[15%] text-xs' to='/'>
                    <img className='w-4/5' src="/assets/bdl.png" alt="" />
                </Link>
                            <Marquee
                                speed={20}
                                direction="left"
                                pauseOnHover={true}
                                reverse={true}
                                gradient={false}
                            >
                                <img className='h-6 ' src={slogan} alt="" />
                                <img className='h-6 ' src={slogan} alt="" />
                                <img className='h-6 ' src={slogan} alt="" />
                            </Marquee>
                <Link className='w-[8%] flex justify-center items-center text-[#F15B26]' to='/product/detail/one'><AiOutlineProduct /></Link>
            </div>
            <Slider className='boottoom md:h-[100%] h-[48%] relative p-20 py-[85px] ' {...settings2}>
                {
                    bannerImg2.map((item,i)=>(
                        <div key={i}  onClick={()=> navigate('/work')} className=' h-full'>
                            <img className='image h-full w-full object-cover' src={item} alt="" />
                        </div>
                    ))
                }
            </Slider>
        </div>

        
    </div>
  )
}

export default Banner
