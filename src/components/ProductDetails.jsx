import React from 'react';
import p1 from '/assets/productdetails/1.png'
import p2 from '/assets/productdetails/2.png'
import p3 from '/assets/productdetails/3.png'
import p4 from '/assets/productdetails/4.png'
import p5 from '/assets/productdetails/5.png'
import model from '/assets/productdetails/model.png'
import r1 from '/assets/productdetails/r1.png'
import r2 from '/assets/productdetails/r2.png'
import r3 from '/assets/productdetails/r3.png'
import r4 from '/assets/productdetails/r4.png'
import Footer from './Footer';

const ProductDetails = () => {
  return (
    <div className="">
        <p className='py-5 px-3 bg-[#7bb52b] text-white font-semibold'>Home - Product - Track Light</p>
      <div className="bg-white "> 
        <div className='px-3 pt-3 flex flex-wrap justify-between gap-y-3'>
            <img  src={p1} alt="Track Light" className="w-full rounded-lg " />
            <img  src={p2} alt="Track Light" className=" w-[23%] rounded-md " />
            <img  src={p3} alt="Track Light" className=" w-[23%] rounded-md " />
            <img  src={p4} alt="Track Light" className=" w-[23%] rounded-md " />
            <img  src={p5} alt="Track Light" className=" w-[23%] rounded-md " />
        </div>

        <div className="p-4">
          <h2 className="text-xl font-bold">TECHNICAL SPECIFICATIONS</h2>
          <div className="mt-2 text-gray-600">
            <p><span className="font-bold">Product Name:</span> COB Downlight</p>
            <p><span className="font-bold">Model no:</span> ST03-RD</p>
            <p><span className="font-bold">Power:</span> 7W/12W/15W/18W</p>
            <p><span className="font-bold">Input:</span> AC85-265V, 50/60 HZ</p>
            <p><span className="font-bold">Temperature range:</span> -20~50°C</p>
            <p><span className="font-bold">Light source:</span> COB</p>
            <p><span className="font-bold">Lumen:</span> 80-110 LM/W</p>
            <p><span className="font-bold">Colour Temperature:</span> 3000K-6500K/CCT</p>
            <p><span className="font-bold">Colour Rendering Index:</span> CRI&gt;80</p>
            <p><span className="font-bold">Beam angle:</span> 15°/24°/36°/55°</p>
            <p><span className="font-bold">Power factor:</span> P&gt;0.5/P&gt;0.9</p>
            <p><span className="font-bold">Power efficiency:</span> 92%</p>
            <p><span className="font-bold">Housing material:</span> Die-casting Aluminium Reflective cup+Lens</p>
            <p><span className="font-bold">Lightning protection:</span> 1.5-4KV</p>
            <p><span className="font-bold">Protection class:</span> Ip20</p>
          </div>

          <div className="mt-4 flex flex-col items-center">
            <img src={model} alt="Models" className="w-full" />
          </div>

          <div className="mt-4 text-center">
            <p>Please <a href="#" className="text-red-500">visit our office</a> to share your plans and discover our <strong>BD LUMINARIES</strong></p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-bold">Related Products</h3>
            <div className="flex space-x-2 mt-2">
              <img src={r1} alt="Related Product 1 " className="w-1/4 rounded-md" />
              <img src={r2} alt="Related Product 1 " className="w-1/4 rounded-md" />
              <img src={r3} alt="Related Product 1 " className="w-1/4 rounded-md" />
              <img src={r4} alt="Related Product 1 " className="w-1/4 rounded-md" />
            </div>
          </div>
 
        </div>
          <Footer/>
      </div>
    </div>
  );
};

export default ProductDetails;
