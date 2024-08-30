import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import slogan from "/assets/slogan.png";
import { AiOutlineProduct } from "react-icons/ai";
import { IoEyeOff } from "react-icons/io5";
import axios from "../axios";


function ProductDetailOne() {
  let navigate = useNavigate();
  const [selectedSeries, setSelectedSeries] = useState(null);

  const {id} = useParams();
  console.log(id)

  const bdlSeries = async () => {
    try {
      let res = await axios.get('/seris');
      const seriesByGroupId = res.data.data?.filter((item)=>{
        return item.groups._id === id
      })
      setSelectedSeries(seriesByGroupId)
      console.log(selectedSeries);
    } catch (error) {
      console.error('Error fetching the group data:', error);
    }
  };

  useEffect(() => {
    bdlSeries()
  }, [])

  // State to manage the displayed product
  const [displayedProduct, setDisplayedProduct] = useState({
    name: "Minimalist 8 Watt Led spot light",
    image: "/assets/product/01.png",
    price: "1550 Tk.",
  });

  const minimalistSeries = [
    {
      id: 1,
      name: "Minimalist 8 Watt Led spot light",
      image: "/assets/product/01.png",
    },
    { id: 2, name: "Minimalist Series B", image: "/assets/product/02.png" },
    { id: 3, name: "Minimalist Series C", image: "/assets/product/03.png" },
    { id: 4, name: "Minimalist Series D", image: "/assets/product/04.png" },
    { id: 5, name: "Minimalist Series E", image: "/assets/product/05.png" },
    {
      id: 6,
      name: "Minimalist 8 Watt Led spot light",
      image: "/assets/product/06.png",
    },
    { id: 7, name: "Minimalist Series B", image: "/assets/product/07.png" },
    { id: 8, name: "Minimalist Series C", image: "/assets/product/08.png" },
    { id: 9, name: "Minimalist Series D", image: "/assets/product/09.png" },
    { id: 10, name: "Minimalist Series E", image: "/assets/product/10.png" },
    {
      id: 11,
      name: "Minimalist 8 Watt Led spot light",
      image: "/assets/product/11.png",
    },
    { id: 12, name: "Minimalist Series B", image: "/assets/product/12.png" },
    { id: 13, name: "Minimalist Series C", image: "/assets/product/13.png" },
    { id: 14, name: "Minimalist Series D", image: "/assets/product/14.png" },
    { id: 15, name: "Minimalist Series E", image: "/assets/product/15.png" },
    {
      id: 16,
      name: "Minimalist 8 Watt Led spot light",
      image: "/assets/product/16.png",
    },
    { id: 17, name: "Minimalist Series B", image: "/assets/product/17.png" },
    { id: 18, name: "Minimalist Series C", image: "/assets/product/18.png" },
    { id: 19, name: "Minimalist Series D", image: "/assets/product/19.png" },
    { id: 20, name: "Minimalist Series E", image: "/assets/product/20.png" },
    {
      id: 21,
      name: "Minimalist 8 Watt Led spot light",
      image: "/assets/product/21.png",
    },
    { id: 22, name: "Minimalist Series B", image: "/assets/product/22.png" },
    { id: 23, name: "Minimalist Series C", image: "/assets/product/23.png" },
    { id: 24, name: "Minimalist Series D", image: "/assets/product/02.png" },
    { id: 25, name: "Minimalist Series E", image: "/assets/product/01.png" },
    {
      id: 26,
      name: "Minimalist 8 Watt Led spot light",
      image: "/assets/product/26.png",
    },
    { id: 27, name: "Minimalist Series B", image: "/assets/product/27.png" },
  ];

  const ledSpotLightSeries = [
    {
      id: 1,
      name: "Elegant",
      nameBottom: "Series A",
      image: "/assets/product/01.png",
    },
    {
      id: 2,
      name: "Elegant",
      nameBottom: "Series B",
      image: "/assets/product/02.png",
    },
    {
      id: 3,
      name: "Slic",
      nameBottom: "Series",
      image: "/assets/product/03.png",
    },
    {
      id: 4,
      name: "Titanium",
      nameBottom: "Series A",
      image: "/assets/product/04.png",
    },
    {
      id: 5,
      name: "Titanium",
      nameBottom: "Series B",
      image: "/assets/product/01.png",
    },
    {
      id: 6,
      name: "Titanium",
      nameBottom: "Series C",
      image: "/assets/product/02.png",
    },
    {
      id: 7,
      name: "Platinum",
      nameBottom: "Series",
      image: "/assets/product/03.png",
    },
    {
      id: 8,
      name: "Gold",
      nameBottom: "Series A",
      image: "/assets/product/04.png",
    },
  ];

  const photoVideo = [
    { id: 1, image: "/assets/b3.png" },
    { id: 2, image: "/assets/b17.png" },
  ];

  const handleProductClick = (product) => {
    setDisplayedProduct({
      name: product.name,
      image: product.image,
      price: product.price || "1550 Tk.", // Set default price if not available
    });
  };

if (!selectedSeries) {
    return <p>BDL</p>
  }

  return (
    <div className="bg-green-100 h-screen flex flex-col">
      <div className="flex items-center justify-between absolute top-0 left-0  h-8 bg-[#000000] z-50 ">
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
      <header className="flex gap-1 h-[40%]  mt-9">
        <div className="w-[20%] flex flex-col gap-y-1">
          <h2 className="text-xs font-bold text-center uppercase bg-[#f15b26] text-white py-1.5">
            All Series
          </h2>
          <div className="flex flex-col gap-1 pl-1 no-scrollbar overflow-y-scroll h-[100%]">
            {selectedSeries.map((item) => (
              
              <div key={item.id} className="shadow-md rounded bg-[#8ac249] overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-11 object-contain"
                />
                <div className="text-[8px] tracking-widest font-semibold text-center bg-[#1d1d1d] text-white uppercase py-1">
                  <h3 className="-mt-0.5">{item.Title}</h3>
                  <h3 className="-mt-0.5">{item._id}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[80%]">
          <div
            onClick={() => navigate("/test")}
            className="flex justify-center items-top h-[50%] bg-[#8ac249] relative"
          >
            <img
              className="displayProduct h-3/4 object-contain"
              src={displayedProduct.image}
              alt="Icon"
            />
            <div className="p-1 bg-black bg-opacity-20 shadow-lg backdrop-blur-[blur(5px)] backdrop-filter border border-black/10 border-r-0 border-opacity-30 absolute left-0 bottom-0 w-full grid grid-cols-4 gap-1 text-[10px]">
              <div className="">
                <p className="bg-black h-1/2 text-[#cc3903] font-bold flex justify-center items-center">
                  Series
                </p>
                <p className="bg-white h-1/2 text-[#cc3903] font-bold flex justify-center items-center">
                  Minimalist
                </p>
              </div>
              <div className="border col-span-2">
                <p className=" text-gray-100 font-bold text-left px-0.5 leading-3 text-[8px]">
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                  amet consectetur
                </p>
              </div>
              <div className="">
                <p className="bg-black h-1/2 text-[#cc3903] font-bold flex justify-center items-center">
                  MRP
                </p>
                <p onClick={() => console.log("ok")
                } className="bg-white h-1/2 text-[#cc3903] font-bold flex justify-center items-center">
                  <IoEyeOff />
                </p>
              </div>
            </div>
          </div>
          <section className="h-[42%]">
            <h2 className="text-xs font-semibold uppercase mb-1 text-left bg-[#F15B26] pl-3 text-white py-1.5">
              Minimalist Series
            </h2>
            <div className="grid grid-cols-5 gap-1 pr-1 no-scrollbar overflow-y-scroll h-[90%]">
              {minimalistSeries.map((product) => (
                <div
                  key={product.id}
                  className="bg-[#8ac249] p-1 shadow-md rounded"
                  onClick={() => handleProductClick(product)}
                >
                  <img
                    src={product.image}
                    className="w-full h-11 object-contain"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </header>

      <main className="flex-1 mt-2 no-scrollbar overflow-x-scroll h-[60%]">
        <section className="h-full">
          <div className="h-[90%] flex flex-col gap-y-1">
            <div className="grid grid-cols-5 grid-rows-3 gap-1 h-1/2">
              <div className="bg-slate-400 col-span-4 row-span-3">
                <h2 className="text-xs font-bold text-center uppercase bg-[#F15B26] pl-3 text-white py-1.5">
                  Reffarance Photo
                </h2>

              </div>
              <div className="bg-slate-400">1</div>
              <div className="bg-slate-400">1</div>
              <div className="bg-slate-400">1</div>
            </div>
            <div className="grid grid-cols-5 grid-rows-3 gap-1 h-1/2">
              <div className="bg-slate-400">
                1
              </div>
              <div className="bg-slate-400 col-span-4 row-span-3">
                <h2 className="text-xs font-bold text-center uppercase bg-[#F15B26] pl-3 text-white py-1.5">
                  Reffarance Video
                </h2>
              </div>
              <div className="bg-slate-400">1</div>
              <div className="bg-slate-400">1</div>
            </div>
          </div>
         
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ProductDetailOne;



// import React, { useEffect, useState } from "react";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import { useNavigate, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Marquee from "react-fast-marquee";
// import slogan from "/assets/slogan.png";
// import { AiOutlineProduct } from "react-icons/ai";
// import { IoEyeOff } from "react-icons/io5";
// import axios from "../axios";

// function ProductDetailOne() {
//   let navigate = useNavigate();
//   const [selectedSeries, setSelectedSeries] = useState(null);

//   const { id } = useParams();

//   const bdlSeries = async () => {
//     try {
//       let res = await axios.get("/seris");
//       const seriesByGroupId = res.data.data?.filter((item) => item.groups._id === id);
//       setSelectedSeries(seriesByGroupId);
//     } catch (error) {
//       console.error("Error fetching the group data:", error);
//     }
//   };

//   useEffect(() => {
//     bdlSeries();
//   }, []);

//   const [displayedProduct, setDisplayedProduct] = useState({
//     name: "Minimalist 8 Watt Led spot light",
//     image: "/assets/product/01.png",
//     price: "1550 Tk.",
//   });

//   const handleProductClick = (product) => {
//     setDisplayedProduct({
//       name: product.name,
//       image: product.image,
//       price: product.price || "1550 Tk.",
//     });
//   };

//   const renderProducts = () => {
//     if (!selectedSeries || selectedSeries.length === 0) {
//       return <p>No products available</p>;
//     }

//     const products = selectedSeries[0].products || selectedSeries[0].subProducts;

//     return (
//       <section className="h-[42%]">
//         <h2 className="text-xs font-semibold uppercase mb-1 text-left bg-[#F15B26] pl-3 text-white py-1.5">
//           {selectedSeries[0].name} Series
//         </h2>
//         <div className="grid grid-cols-5 gap-1 pr-1 no-scrollbar overflow-y-scroll h-[90%]">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-[#8ac249] p-1 shadow-md rounded"
//               onClick={() => handleProductClick(product)}
//             >
//               <img
//                 src={product.image}
//                 className="w-full h-11 object-contain"
//                 alt={product.name}
//               />
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   };

//   if (!selectedSeries) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="bg-green-100 h-screen flex flex-col">
//       <header className="flex gap-1 h-[40%] mt-9">
//         <div className="w-[20%] flex flex-col gap-y-1">
//           <h2 className="text-xs font-bold text-center uppercase bg-[#f15b26] text-white py-1.5">
//             All Series
//           </h2>
//           <div className="flex flex-col gap-1 pl-1 no-scrollbar overflow-y-scroll h-[100%]">
//             {selectedSeries.map((item) => (
//               <div key={item.id} className="shadow-md rounded bg-[#8ac249] overflow-hidden">
//                 <img src={item.image} className="w-full h-11 object-contain" alt={item.Title} />
//                 <div className="text-[8px] tracking-widest font-semibold text-center bg-[#1d1d1d] text-white uppercase py-1">
//                   <h3 className="-mt-0.5">{item.Title}</h3>
//                   <h3 className="-mt-0.5">{item._id}</h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="w-[80%]">
//           <div
//             onClick={() => navigate("/test")}
//             className="flex justify-center items-top h-[50%] bg-[#8ac249] relative"
//           >
//             <img
//               className="displayProduct h-3/4 object-contain"
//               src={displayedProduct.image}
//               alt="Icon"
//             />
//             <div className="p-1 bg-black bg-opacity-20 shadow-lg backdrop-blur-[blur(5px)] backdrop-filter border border-black/10 border-r-0 border-opacity-30 absolute left-0 bottom-0 w-full grid grid-cols-4 gap-1 text-[10px]">
//               <div>
//                 <p className="bg-black h-1/2 text-[#cc3903] font-bold flex justify-center items-center">
//                   Series
//                 </p>
//                 <p className="bg-white h-1/2 text-[#cc3903] font-bold flex justify-center items-center">
//                   Minimalist
//                 </p>
//               </div>
//               <div className="border col-span-2">
//                 <p className="text-gray-100 font-bold text-left px-0.5 leading-3 text-[8px]">
//                   Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur
//                 </p>
//               </div>
//               <div>
//                 <p className="bg-black h-1/2 text-[#cc3903] font-bold flex justify-center items-center">
//                   MRP
//                 </p>
//                 <p className="bg-white h-1/2 text-[#cc3903] font-bold flex justify-center items-center">
//                   <IoEyeOff />
//                 </p>
//               </div>
//             </div>
//           </div>
//           {renderProducts()}
//         </div>
//       </header>
//       <main className="flex-1 mt-2 no-scrollbar overflow-x-scroll h-[60%]">
//         <section className="h-full">
//           <div className="h-[90%] flex flex-col gap-y-1">
//             <div className="grid grid-cols-5 grid-rows-3 gap-1 h-1/2">
//               <div className="bg-slate-400 col-span-4 row-span-3">
//                 <h2 className="text-xs font-bold text-center uppercase bg-[#F15B26] pl-3 text-white py-1.5">
//                   Reference Photo
//                 </h2>
//               </div>
//               <div className="bg-slate-400">1</div>
//               <div className="bg-slate-400">1</div>
//               <div className="bg-slate-400">1</div>
//             </div>
//             <div className="grid grid-cols-5 grid-rows-3 gap-1 h-1/2">
//               <div className="bg-slate-400">1</div>
//               <div className="bg-slate-400 col-span-4 row-span-3">
//                 <h2 className="text-xs font-bold text-center uppercase bg-[#F15B26] pl-3 text-white py-1.5">
//                   Reference Video
//                 </h2>
//               </div>
//               <div className="bg-slate-400">1</div>
//               <div className="bg-slate-400">1</div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default ProductDetailOne;
