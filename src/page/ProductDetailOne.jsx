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
import { HiDotsHorizontal } from "react-icons/hi";

function ProductDetailOne() {
  const [isItemVisible, setIsItemVisible] = useState(false);

  const handleToggle = () => {
    setIsItemVisible(!isItemVisible);
  };
  let navigate = useNavigate();
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [productsToShow, setProductsToShow] = useState([]);
  const [seriseID, setSeriseID] = useState();

  const { id } = useParams();
  // const bdlSeries = async () => {
  //   try {
  //     let res = await axios.get("/seris");
  //     const seriesByGroupId = res.data.data?.filter((item) => item.groups._id === id);
  //     setSelectedSeries(seriesByGroupId);
  //   } catch (error) {
  //     console.error("Error fetching the group data:", error);
  //   }
  // };

  const bdlSeries = async () => {
    try {
      let res = await axios.get("/seris");
      const seriesByGroupId = res.data.data?.filter((item) => item.groups._id === id);



      setSelectedSeries(seriesByGroupId);
    } catch (error) {
      console.error("Error fetching the group data:", error);
    }
  };

  useEffect(() => {
    bdlSeries();
  }, []);

  useEffect(() => {
    const filttedProducts = async () => {
      let { data } = await axios.get('/prouduct');
      const filteredProducts = data?.data?.filter((item) => (item?.seris?._id === seriseID));
      setProductsToShow(filteredProducts);
    }
    filttedProducts();
  }, [seriseID]);

  const [displayedProduct, setDisplayedProduct] = useState({
    name: "Minimalist 8 Watt Led spot light",
    image: "/assets/product/01.png",
    price: "1550 Tk.",
  });

  const handleProductClick = (product) => {
    setDisplayedProduct({
      name: product.name,
      image: product.image,
      price: product.price || "1550 Tk.",
    });
  };

  const renderProducts = () => {
    // if (!selectedSeries || selectedSeries.length === 0) {
    //   return <p>No products available</p>;
    // }

    // const products = selectedSeries[0].products || selectedSeries[0].subProducts;

    // if (!products || products.length === 0) {
    //   return <p>No products available for this series</p>;
    // }
    return (
      <section className="h-[42%]">
        {/* <h2 className="text-xs font-semibold uppercase mb-1 text-left bg-[#F15B26] pl-3 text-white py-1.5">
          {selectedSeries[0].name} Series
        </h2> */}
        <div className="grid grid-cols-5 items-start w-full gap-1 pr-1 no-scrollbar overflow-y-scroll h-full">

            {productsToShow.map((product, i) => (
              <div
                key={i}
                className="bg-[#8ac249] p-1 shadow-md rounded"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={product.image}
                  className="w-full h-11 object-contain"
                  alt={product.name || "Product image"}
                />
              </div>
            ))}
        </div>
      </section>
    );
  };

  if (!selectedSeries) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-green-100 h-screen flex flex-col">
      <div className="h-[3.7%]  flex items-center justify-between absolute top-0 left-0 bg-[#000000] z-50 ">
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
      <header className="flex gap-1 h-[48%] mt-9">
        <div className="w-[20%] flex flex-col gap-y-1">
          <h2 className="text-xs font-bold text-center uppercase bg-[#f15b26] text-white py-1.5">
            All Series
          </h2>
          <div className="flex flex-col gap-1 pl-1 no-scrollbar overflow-y-scroll h-[100%]">
            {selectedSeries.map((item) => (
              <div
                key={item.id}
                className="shadow-md rounded bg-[#8ac249] cursor-pointer"
                onClick={() => setSeriseID(item._id)} // Set the products or sub-products on click
              >
                <img
                  src={item.image}
                  className="w-full h-11 object-contain"
                  alt={item.Title}
                />
                <div className="text-[8px] tracking-widest font-semibold text-center bg-[#1d1d1d] text-white uppercase py-1">
                  <h3 className="-mt-0.5">{item.Title}</h3>
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
              <div>
                <p className="bg-black h-1/2 text-[#cc3903] font-bold flex justify-center items-center">
                  Series
                </p>
                <p className="bg-white h-1/2 text-[#cc3903] font-bold flex justify-center items-center">
                  Minimalist
                </p>
              </div>
              <div className="border col-span-2">
                <p className="text-gray-100 font-bold text-left px-0.5 leading-3 text-[8px]">
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                  amet consectetur
                </p>
              </div>
              <div>
                <p className="bg-black h-1/2 text-[#cc3903] font-bold flex justify-center items-center">
                  MRP
                </p>
                <p className="bg-white h-1/2 text-[#cc3903] font-bold flex justify-center items-center">
                  <IoEyeOff />
                </p>
              </div>
            </div>
          </div>
          {renderProducts()}
        </div>
      </header>
      <main className="flex-1 mt-2 no-scrollbar overflow-x-scroll h-[48%]">
        <section className="h-full">
          <div className="h-[91%] flex flex-col gap-y-1">
            <div className="grid grid-cols-5 grid-rows-3 gap-1 h-1/2">
              <div className="bg-slate-500 col-span-4 row-span-3 relative">
                <h2 className="text-xs font-bold text-center uppercase bg-[#F15B26] pl-3 text-white py-1.5 absolute w-full left-0 top-0">
                  Reference Photo
                </h2>
                <img
                  className="w-full h-full object-cover"
                  src="/assets/recent/r1.png"
                  alt=""
                />
              </div>
              <div className="bg-slate-400">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/recent/r2.png"
                  alt=""
                />
              </div>
              <div className="bg-slate-400">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/recent/r3.png"
                  alt=""
                />
              </div>
              <div className="bg-slate-400">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/recent/r4.png"
                  alt=""
                />
              </div>
            </div>
            <div className="grid grid-cols-5 grid-rows-3 gap-1 h-1/2">
              <div className="bg-slate-400">
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  src="/recentVideo/4.mp4"
                />
              </div>
              <div className="bg-slate-500 col-span-4 row-span-3 relative">
                <h2 className="text-xs font-bold text-center uppercase bg-[#F15B26] pl-3 text-white py-1.5 absolute w-full left-0 top-0">
                  Reference Video
                </h2>
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  src="/recentVideo/1.mp4"
                />
              </div>
              <div className="bg-slate-400">
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  src="/recentVideo/3.mp4"
                />
              </div>
              <div className="bg-slate-400">
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  src="/recentVideo/2.mp4"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ProductDetailOne;
