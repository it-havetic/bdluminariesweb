import { Button } from "antd";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useParams } from "react-router-dom";
import axios from "../axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";

const SpecificationItem = ({ title, items, data, sItemClass }) => {
  /**
   * @MirFaisal
   * এইখানে আমি, আগে চেক করছি যে ডাটা Array কি না। যদি Array হয় তাহলে
   * কোন কাজ করতে হবে না। আর যদি ডাঁটা স্ট্রিং হই তাহলে আমি এইখানে অই ডাঁটা কে কমা সেপারেত করছি। স্লপিট মেথড Array return করে।
   *
   */
  const procesedData = Array.isArray(data) ? "" : data?.split(",");
  return (
    <div className={` ${sItemClass} bg-[#d6cbb4] border  `}>
      <h2 className="px-1 text-[9px] bg-[#282828] mb-0.5 text-center uppercase font-bold text-[#e3e3e3] py-0.5 ">
        {title}
      </h2>
      <ul className="pl-1 text-black ">
        {Array.isArray(data)
          ? items.map((item, index) => (
              <p key={index} className="flex items-center gap-1">
                <input
                  type="radio"
                  checked={data.includes(item)}
                  className="h-2 w-2 border bg-transparent appearance-none checked:bg-[#F15B26] rounded-full border-[#000000] checked:border-[#F15B26]"
                />
                <li className="text-[10px] leading-3" key={index}>
                  {item}
                </li>
              </p>
            ))
          : procesedData?.length > 0 &&
            procesedData[0] &&
            procesedData?.map((item, index) => (
              <p key={index} className="flex items-center gap-1">
                <input
                  type="radio"
                  checked={item}
                  className="h-2 w-2 border bg-transparent appearance-none checked:bg-[#F15B26] rounded-full border-[#000000] checked:border-[#F15B26]"
                />
                <li className="text-[9px] leading-3" key={index}>
                  {item}
                </li>
              </p>
            ))}
      </ul>
    </div>
  );
};

const Test = () => {
  const [seletedproduct, setSeletedproduct] = useState([]);
  const [specification, setSpecification] = useState();
  const [productsToShow, setProductsToShow] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetchProduct();
  }, [id]);

  useEffect(() => {
    fetchSpecification();
  }, [seletedproduct]);

  useEffect(() => {
    fetchProductsToShow();
  }, [seletedproduct]);

  /**
   * @MirFaisal
   *
   * Fetches the product data from the backend and updates the state with the result.
   * If the request is successful, it sets the loading state to false.
   * If there is an error, it logs the error to the console.
   */
  const fetchProduct = async () => {
    try {
      const res = await axios.get("/products/" + id);
      // if (res.status === 200) setLoading(false);
      setSeletedproduct(res.data);
    } catch (error) {
      console.error("Error fetching the group data:", error);
    }
  };

  /**
   * @MirFaisal
   *
   * Fetches the products that should be shown on the page based on the sub-series or series of the currently selected product.
   * If the request is successful, it sets the productsToShow state with the result.
   * If there is an error, it logs the error to the console.
   */
  const fetchProductsToShow = async () => {
    try {
      const res = await axios.get(
        `/products/${seletedproduct?.subSeries ? "sub-series" : "series"}/${
          seletedproduct?.subSeries
            ? seletedproduct?.subSeries._id
            : seletedproduct?.series._id
        }`
      );
      if (res.status === 200) {
        setProductsToShow(res.data);
      }
    } catch (error) {
      console.error("Error fetching the group data:", error);
    }
  };

  /**
   * @MirFaisal
   *
   * Fetches the specifications of the currently selected product's series or sub-series.
   * If the request is successful, it sets the loading state to false and updates the specification state with the result.
   * If there is an error, it logs the error to the console.
   */
  const fetchSpecification = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `/specifications/${
          seletedproduct.subSeries ? "sub-series" : "series"
        }/${
          seletedproduct.subSeries
            ? seletedproduct.subSeries._id
            : seletedproduct.series._id
        }`
      );
      if (res.status === 200) {
        setLoading(false);
        console.log(res.data[0]);
        setSpecification(res.data[0]);
      }
    } catch (error) {
      console.error("Error fetching the group data:", error);
    }
  };
  if (loading) {
    return <Preloader />;
  }
  return (
    <div className="h-screen pb-9 pt-0 bg-gray-100">
      <Navbar />
      {specification ? (
        <div className=" h-[97%]">
          <div className="h-[73%] ">
            <div className="h-[82%]  flex">
              <div className="w-4/5 h-full   ">
                <h2 className="bg-orange-600 p-1 border-l border-t uppercase text-gray-200 mr-2 rounded-r text-center text-sm font-bold">
                  Technical Perameter
                </h2>
                <div className="h-[93%] grid grid-cols-3 gap-2  overflow-y-scroll no-scrollbar p-2">
                  {productsToShow?.map((product) => (
                    <div
                      key={product.id}
                      className="bg-[#8ac249] p-1 shadow-md rounded"
                    >
                      <img
                        src={`https://code.bdluminaries.com/${product.image}`}
                        className="w-full h-14 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {specification && (
                <div className="w-1/5 h-full bg-pink-500">
                  <SpecificationItem
                    sItemClass="h-[20%]"
                    title={
                      specification?.watts.length > 0 ? "Watts" : "Dimension"
                    }
                    data={
                      specification?.watts.length > 0
                        ? specification?.watts
                        : specification?.dimention
                    }
                    items={["1-10W", "11-20W", "21-30W"]}
                  />
                  <SpecificationItem
                    sItemClass="h-[20%]"
                    title={
                      specification?.lumens.length > 0 ? "Lumens" : "Shape"
                    }
                    data={
                      specification?.lumens.length > 0
                        ? specification?.lumens
                        : specification?.shape
                    }
                    items={["110lm/W", "120lm/W", "130lm/W"]}
                  />
                  <SpecificationItem
                    sItemClass="h-[20%]"
                    title={
                      specification?.beamAngle.length > 0
                        ? "Beam Angle"
                        : "Thickness"
                    }
                    data={
                      specification?.beamAngle.length > 0
                        ? specification?.beamAngle
                        : specification?.thickness
                    }
                    items={["8D", "12D", "24D", "36D", "45D", "+"]}
                  />
                  <SpecificationItem
                    sItemClass="h-[20%]"
                    title={
                      specification?.rimColor.length > 0
                        ? "Rim Color"
                        : "Mounting"
                    }
                    data={
                      specification?.rimColor.length > 0
                        ? specification?.rimColor
                        : specification?.mounting
                    }
                    items={["White", "Black", "Chrome", "Rose Gold", "+"]}
                  />
                  <SpecificationItem
                    sItemClass="h-[20%]"
                    title={
                      specification?.mounting_array.length > 0
                        ? "Mounting"
                        : "Finish"
                    }
                    data={
                      specification?.mounting_array.length > 0
                        ? specification?.mounting_array
                        : specification?.finish
                    }
                    items={[
                      "Surface",
                      "Recessed",
                      "Base Plait",
                      "Pendant",
                      "F-Standing",
                      "+",
                    ]}
                  />
                </div>
              )}
            </div>
            {specification && (
              <div className="h-[18%] bg-gray-100 grid grid-cols-5">
                <SpecificationItem
                  title={specification?.ip.length > 0 ? "ip" : "Customization"}
                  data={
                    specification?.ip.length > 0
                      ? specification?.ip
                      : specification?.customization
                  }
                  items={["20", "40", "65", "66", "67", "68", "+"]}
                />
                <SpecificationItem
                  title={specification?.glare.length > 0 ? "Glare" : "Capacity"}
                  data={
                    specification?.glare.length > 0
                      ? specification?.glare
                      : specification?.capacity
                  }
                  items={["LMS", "Parabolic", "Honeycomb", "+"]}
                />
                {specification?.bodyColor.length > 0 && (
                  <SpecificationItem
                    title="Body Color"
                    data={specification.bodyColor}
                    items={[
                      "White",
                      "Black",
                      "Gold",
                      "Chrome",
                      "Rose Gold",
                      "+",
                    ]}
                  />
                )}
                {specification?.dimming.length > 0 && (
                  <SpecificationItem
                    title="Dimming"
                    data={specification.dimming}
                    items={["0/1-10W", "DALI", "Phase", "PWM", "24VDC"]}
                  />
                )}
                {specification?.cct.length > 0 && (
                  <SpecificationItem
                    title="CCT"
                    data={specification.cct}
                    items={[
                      "3000K",
                      "2700K",
                      "6400K",
                      "5000K",
                      "4000K",
                      "3500K",
                      "2000K",
                    ]}
                  />
                )}
              </div>
            )}
          </div>
          {specification && (
            <div className="h-[27%] bg-slate-200 p-3">
              <div className="w-full h-[30%] ">
                <h2 className="bg-orange-600 p-1 border-l border-t uppercase text-gray-200 rounded text-center text-sm font-bold">
                  Installation Guideline
                </h2>
                <h2 className="flex justify-around items-center p-1 border-l border-t uppercase text-black rounded text-center text-sm font-bold">
                  <span>Image</span>
                  <span>Vedio</span>
                </h2>
              </div>
              <div className="w-full h-[70%] flex gap-2">
                <img
                  className="w-full h-full object-cover rounded"
                  src={`https://code.bdluminaries.com/${specification?.image}`}
                  alt=""
                />
                <video
                  className="w-full h-full object-cover rounded"
                  controls
                  autoPlay
                  loop
                  muted
                  src={`https://code.bdluminaries.com/${specification?.video}`}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="h-screen w-full flex-col flex justify-center items-center bg-gray-800 ">
          <p className="text-center px-3 text-yellow-300">
            No specification to show. Please contact with product manager to
            know information
          </p>
          <Button
            icon={<IoIosArrowBack />}
            onClick={() => history.back()}
            className="mt-3"
          >
            Back
          </Button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Test;
