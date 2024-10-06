import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "../axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader.jsx";

function ProductDetailOne() {
  const [isItemVisible, setIsItemVisible] = useState(false);
  const handleToggle = () => {
    setIsItemVisible(!isItemVisible);
  };

  let navigate = useNavigate();
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedSeries, setSelectedSeries] = useState([]);
  const [productsToShow, setProductsToShow] = useState([]);
  const [seriseID, setSeriseID] = useState();

  const [displayedProduct, setDisplayedProduct] = useState({});

  // Fetch series based on group ID and set the first series's products to productsToShow
  const bdlSeries = async () => {
    try {
      let res = await axios.get(`/series/group/${id}`);
      const seriesByGroupId = res.data;
      setSelectedSeries(seriesByGroupId);

      if (seriesByGroupId.length > 0) {
        // Automatically select the first series and fetch its products
        const firstSeriesId = seriesByGroupId[0]._id;
        setSearchParams({ series: firstSeriesId });

        getProductsBySeries(searchParams.get("series") || firstSeriesId);
        setSeriseID(searchParams.get("series") || firstSeriesId);
      }
    } catch (error) {
      console.error("Error fetching the series data:", error);
    }
  };

  // Fetch products based on series ID
  const getProductsBySeries = async (seriesId) => {
    try {
      let res = await axios.get(
        `/products/series/${searchParams.get("series") || seriesId}`
      );
      const products = res.data;
      setProductsToShow(products);

      // Automatically set the first product as the displayed product if available
      if (products.length > 0) {
        setDisplayedProduct({
          id: products[0]._id,
          series: products[0].series.name,
          itemCode: products[0].itemCode,
          image: `https://code.bdluminaries.com/${products[0].image}`,
          price: products[0].price,
          description: products[0].description || "No description available.",
        });
        console.log(displayedProduct, "displayedProduct");
      } else {
        setDisplayedProduct(null);
      }
    } catch (error) {
      console.error("Error fetching the products:", error);
    }
  };

  useEffect(() => {
    bdlSeries();
  }, []);

  // When seriseID changes, update the products to show
  useEffect(() => {
    if (seriseID) {
      getProductsBySeries(seriseID);
    }
  }, [searchParams]);

  /**
   * Handles product click event by updating the displayed product state with the clicked product's data
   * @param {Object} product The product object containing the series name, item code, image, price, and description
   */
  const handleProductClick = (product) => {
    setDisplayedProduct({
      series: product.series.name,
      itemCode: product.itemCode,
      image: `https://code.bdluminaries.com/${product.image}`,
      price: product.price,
      description: product.description || "No description available.",
    });
  };

  const renderProducts = () => {
    return (
      <section className="h-[40%]">
        <div className="grid grid-cols-5 items-start w-full gap-1 pr-1 no-scrollbar overflow-y-scroll h-full">
          {productsToShow.length > 0 ? (
            productsToShow.map((product, i) => (
              <div
                key={i}
                className="bg-[#8ac249] p-1 shadow-md rounded"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={`https://code.bdluminaries.com/${product.image}`}
                  className="w-full h-11 object-contain"
                  alt={product?.itemCode || "Product image missing"}
                />
              </div>
            ))
          ) : (
            <p className="text-[#777777] text-sm font-semibold col-span-5 h-full flex items-center justify-center">
              This series product is not available
            </p>
          )}
        </div>
      </section>
    );
  };

  if (!selectedSeries || selectedSeries.length === 0) {
    return <Preloader />;
  }

  return (
    <div className="bg-green-100 h-screen flex flex-col">
      <Navbar />
      <header className="flex gap-1 h-[48%] mt-1">
        <div className="w-[20%] flex flex-col gap-y-1">
          <h2 className="text-xs font-bold text-center uppercase bg-[#f15b26] text-white py-0.5 rounded-r">
            {selectedSeries[0]?.group?.name}
          </h2>
          <div className="flex flex-col gap-1 pl-1 no-scrollbar overflow-y-scroll h-[100%]">
            {selectedSeries.map((item) => (
              <div
                key={item._id}
                className="shadow-md rounded bg-[#8ac249] cursor-pointer"
                onClick={() => {
                  console.log(item);
                  setSeriseID(item._id);
                  setSearchParams({ series: item._id });
                }} // Update products when clicked
              >
                <img
                  src={`https://code.bdluminaries.com/${item.image}`}
                  className="w-full h-11 object-contain"
                  alt={item.Title}
                />
                <div className="text-[8px] tracking-widest font-semibold text-center bg-[#1d1d1d] text-white uppercase py-1">
                  <h3 className="-mt-0.5">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[80%] flex flex-col gap-1">
          <div
            onClick={() => navigate(`/test/${displayedProduct?.id}`)}
            className="h-[60%] bg-[#8bc24a] relative grid grid-rows-6 grid-cols-8"
          >
            <div className="col-span-7 row-span-5 flex justify-center items-center">
              {displayedProduct ? (
                <img
                  className="h-full w-full object-contain"
                  src={displayedProduct.image}
                  alt={displayedProduct.itemCode}
                />
              ) : (
                <p className="text-[yellow] text-sm font-semibold">
                  This series product is not available
                </p>
              )}
            </div>
            <div
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              className="border col-span-1 row-span-5 m-0.5 flex flex-col items-center justify-center"
            >
              <h2 className="text-white font-semibold text-sm">
                {displayedProduct?.series}
              </h2>
              <p className="text-white font-normal text-sm">*************</p>
            </div>
            <div className="p-0.5 shadow-lg backdrop-filter border border-black/10 border-r-0 border-opacity-30 col-span-8 grid grid-cols-4 gap-0.5 text-[10px]">
              <div>
                <p className="bg-black h-1/2 text-[#cc3903] font-bold flex justify-center items-center">
                  ART#
                </p>
                <p className="bg-white h-1/2 text-[#cc3903] text-[8px] font-bold flex justify-center items-center">
                  {displayedProduct?.itemCode}
                </p>
              </div>
              <div className="bg-white col-span-2 overflow-y-scroll no-scrollbar">
                <p className="text-gray-800 font-bold text-left px-0.5 leading-3 text-[8px]">
                  {displayedProduct?.description}
                </p>
              </div>
              <div>
                <p className="bg-black h-1/2 text-[#cc3903] font-bold flex justify-center items-center">
                  MRP
                </p>
                <p className="bg-white h-1/2 text-[#cc3903] font-bold flex gap-1 justify-center items-center">
                  {/* <IoEyeOff /> */}
                  <span className="text-sm -mt-0.5">৳</span>{" "}
                  {displayedProduct?.price}
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
              <div className="bg-slate-500 col-span-4 row-span-3 relative rounded-r-lg overflow-hidden">
                <h2 className="text-xs font-bold text-center uppercase bg-[#F15B26] pl-3 text-white py-0.5 absolute w-full left-0 top-0">
                  Reference Photo
                </h2>
                <img
                  className="w-full h-full object-cover"
                  src="/assets/recent/r1.png"
                  alt=""
                />
              </div>
              <div className="bg-slate-400 rounded-l-md overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/recent/r2.png"
                  alt=""
                />
              </div>
              <div className="bg-slate-400 rounded-l-md overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/recent/r3.png"
                  alt=""
                />
              </div>
              <div className="bg-slate-400 rounded-l-md overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/recent/r4.png"
                  alt=""
                />
              </div>
            </div>
            <div className="grid grid-cols-5 grid-rows-3 gap-1 h-1/2">
              <div className="bg-slate-400 rounded-r-md overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/recentVideo/thumnail/3.jpg"
                  alt=""
                />
              </div>
              <div className="bg-slate-500 col-span-4 row-span-3 relative rounded-l-lg overflow-hidden">
                <h2 className="text-xs font-bold text-center uppercase bg-[#F15B26] pl-3 text-white py-0.5 absolute w-full left-0 top-0">
                  Reference Video
                </h2>
                <video
                  className="w-full h-full object-cover"
                  controls
                  muted
                  src="/recentVideo/1.mp4"
                />
              </div>
              <div className="bg-slate-400 rounded-r-md overflow-hidden">
                {/* <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  src="/recentVideo/3.mp4"
                /> */}
                <img
                  className="w-full h-full object-cover"
                  src="/recentVideo/thumnail/2.jpg"
                  alt=""
                />
              </div>
              <div className="bg-slate-400 rounded-r-md overflow-hidden">
                {/* <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  src="/recentVideo/2.mp4"
                /> */}
                <img
                  className="w-full h-full object-cover"
                  src="/recentVideo/thumnail/1.jpg"
                  alt=""
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
