// import React, { useState } from 'react'
// import Footer from '../components/Footer'
// import { Link } from 'react-router-dom'
// import Marquee from 'react-fast-marquee'
// import { AiOutlineProduct } from 'react-icons/ai'
// import slogan from'/assets/slogan.png'


// const Test = () => {
//   const [displayedProduct, setDisplayedProduct] = useState({
//     image: "/assets/b1.png",
//   });
//   const mockup = [
//     {
//       id: 1,
//       image: "/assets/mockup/m1.png",
//     },
//     { 
//       id: 2, 
//       image: "/assets/mockup/m2.png" 
//     },
//     { 
//       id: 3,
//       image: "/assets/mockup/m3.png" 
//     },
//     { 
//       id: 4,
//       image: "/assets/mockup/m4.png"
//      },
//     { 
//       id: 5,
//       image: "/assets/mockup/m5.png" 
//     },
//     {
//       id: 6,
//       image: "/assets/mockup/m6.png",
//     },
//     {
//       id: 1,
//       image: "/assets/mockup/m1.png",
//     },
//     { 
//       id: 2, 
//       image: "/assets/mockup/m2.png" 
//     },
//     { 
//       id: 3,
//       image: "/assets/mockup/m3.png" 
//     },
//     { 
//       id: 4,
//       image: "/assets/mockup/m4.png"
//      },
//     { 
//       id: 5,
//       image: "/assets/mockup/m5.png" 
//     },
//     {
//       id: 6,
//       image: "/assets/mockup/m6.png",
//     },
//     {
//       id: 1,
//       image: "/assets/mockup/m1.png",
//     },
//     { 
//       id: 2, 
//       image: "/assets/mockup/m2.png" 
//     },
//     { 
//       id: 3,
//       image: "/assets/mockup/m3.png" 
//     },
//     { 
//       id: 4,
//       image: "/assets/mockup/m4.png"
//      },
//     { 
//       id: 5,
//       image: "/assets/mockup/m5.png" 
//     },
//     {
//       id: 6,
//       image: "/assets/mockup/m6.png",
//     },
    
//   ];
//   const handleProductClick = (mockup) => {
//     setDisplayedProduct({
//       image: mockup.image,
//     });
//   };
//   return (
//     <div className='h-screen pb-9 pt-8 bg-gray-100'>
//         <div className="flex items-center justify-between absolute top-0 left-0  h-8 bg-[#000000] ">
//           <Link
//             className="flex items-center justify-center w-[20%] text-xs"
//             to="/"
//           >
//             <img
//               className="w-4/5 drop-shadow-custom"
//               src="/assets/bdl.png"
//               alt=""
//             />
//           </Link>
//           <Marquee
//             speed={20}
//             direction="left"
//             pauseOnHover={true}
//             reverse={true}
//             gradient={false}
//             gradientColor={["#6FA710"]}
//             className="h-8 "
//           >
//             <div className="flex h-full">
//               <img className=" h-8" src={slogan} alt="" />
//               <img className=" h-8" src={slogan} alt="" />
//               <img className=" h-8" src={slogan} alt="" />
//             </div>
//           </Marquee>
//           <Link
//             className="w-[20%] flex justify-center items-center text-[#F15B26]"
//             to="/product/detail/one"
//           >
//             <AiOutlineProduct />
//           </Link>
//         </div>
//       <div className='h-full  grid grid-rows-2 grid-cols-1'>
//         <div className='bg-green-200'>
//             <img
//               className="displayProduct object-cover h-full w-full"
//               src={displayedProduct.image}
//               alt="Icon"
//             />
//         </div>
//         <div className=' grid grid-cols-4  gap-4  p-2'>
//               <div className='col-span-1 grid grid-cols-1 gap-2 h-full overflow-y-scroll no-scrollbar relative  '>
//                 <h3 className="text-xs bg-[#F15B26] sticky top-0 left-0 py-1.5 text-center text-white font-bold w-full shadow-md rounded">
//                   Recent work
//                 </h3>
//                   {mockup.map((mockup) => (
//                     <div
//                       key={mockup.id}
//                       className=" shadow-md rounded"
//                       onClick={() => handleProductClick(mockup)}
//                     >
//                       <img
//                         src={mockup.image}
//                         className="w-full h-14 object-cover rounded"
//                       />
//                     </div>
//                   ))}
//               </div>
//               <div className='col-span-3 grid grid-cols-3 gap-2 h-full overflow-y-scroll no-scrollbar relative'>
//                   <h3 className="text-xs bg-[#F15B26] sticky top-0 left-0 py-1.5 text-center text-white font-bold w-full col-span-3 shadow-md rounded">
//                   Other's mockup room
//                   </h3>
//                   {mockup.map((mockup) => (
//                     <div
//                       key={mockup.id}
//                       className=" shadow-md rounded"
//                       onClick={() => handleProductClick(mockup)}
//                     >
//                       <img
//                         src={mockup.image}
//                         className="w-full h-14 object-cover rounded"
//                       />
//                     </div>
//                   ))}
//               </div>
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   )
// }

// export default Test
// import React, { useState } from 'react';
// import 'tailwindcss/tailwind.css';

// const SpinningImage = () => {
//   const [rotation, setRotation] = useState(0);
//   const [startX, setStartX] = useState(null);

//   const handleMouseDown = (e) => {
//     setStartX(e.clientX);
//   };

//   const handleMouseUp = () => {
//     setStartX(null);
//   };

//   const handleMouseMove = (e) => {
//     if (startX !== null) {
//       const deltaX = e.clientX - startX;
//       setRotation(rotation + deltaX / 5);
//       setStartX(e.clientX);
//     }
//   };

//   return (
//     <div
//       className="relative w-full h-screen flex items-center justify-center bg-gray-800"
//       onMouseDown={handleMouseDown}
//       onMouseUp={handleMouseUp}
//       onMouseMove={handleMouseMove}
//     >
//       <div
//         className="absolute w-96 h-96 flex items-center justify-center rounded-full"
//         style={{ transform: `rotate(${rotation}deg)` }}
//       >
//         <img src="/new.jpg" alt="Spinning" className="w-full h-full object-cover" />
//         <div className="absolute w-24 h-24 bg-black rounded-full"></div>
//       </div>
//     </div>
//   );
// };

// export default SpinningImage;

import React, { useRef } from 'react';
// import './SpinningDesign.css';

const SpinningDesign = () => {
  const containerRef = useRef(null);

  const handleMouseDown = (event) => {
    const container = containerRef.current;
    let startAngle = 0;
    let currentAngle = 0;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const angle = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);

      currentAngle = angle - startAngle;
      container.style.transform = `rotate(${currentAngle}deg)`;
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    const { clientX, clientY } = event;
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    startAngle = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);
  };

  return (
    <div 
      ref={containerRef} 
      className="relative w-[500px] h-[500px] bg-gray-900 rounded-full flex items-center justify-center overflow-hidden cursor-pointer"
      onMouseDown={handleMouseDown}
    >
      <div className="w-[100px] h-[100px] bg-black rounded-full flex items-center justify-center">
        <img src="/new.jpg" alt="Center" className="w-full h-full object-cover" />
      </div>
      {/* Add your surrounding images here */}
    </div>
  );
};

export default SpinningDesign;

