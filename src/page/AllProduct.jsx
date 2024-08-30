import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import p01 from '/assets/product/01.png'
import p02 from '/assets/product/02.png'
import p03 from '/assets/product/03.png'
import p04 from '/assets/product/04.png'
import p05 from '/assets/product/05.png'
import { Link } from 'react-router-dom'
import axios from '../axios'

const AllProduct = () => {

  const images = [p01, p02, p03, p04, p05, p01, p02, p03, p04, p05, p01, p02, p03, p04, p05, p01, p02, p03, p04, p05];


  return (
    <div className='h-screen  flex flex-col justify-between'>
      <Navbar/>
      <div className='overflow-y-scroll flex flex-wrap justify-between gap-y-3 p-2 pr-3'>
        {images.map((img, index) => (
          <Link to="/product/detail" className="w-[48%] inline-block" key={index}>
            <img className="w-full rounded-md" src={img} alt={`Product ${index + 1}`} />
          </Link>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default AllProduct
