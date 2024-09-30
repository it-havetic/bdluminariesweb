import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Footer from "../components/Footer";
import slogan from "/assets/slogan.png";
import { AiOutlineProduct } from "react-icons/ai";

const Mockup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedContent, setSelectedContent] = useState({
    type: "",
    src: "",
  });
  const [shuffledContent, setShuffledContent] = useState([]);

  const recent = [
    { id: 1, image: "/assets/recent/r1.png" },
    { id: 2, image: "/assets/recent/r2.png" },
    { id: 3, image: "/assets/recent/r3.png" },
    { id: 4, image: "/assets/recent/r4.png" },
    { id: 5, image: "/assets/recent/r5.png" },
    { id: 6, image: "/assets/recent/r6.png" },
    { id: 7, image: "/assets/recent/r7.png" },
    { id: 8, image: "/assets/recent/r8.png" },
    { id: 9, image: "/assets/recent/r9.png" },
    { id: 10, image: "/assets/recent/r10.png" },
    { id: 11, image: "/assets/recent/r11.png" },
    { id: 12, image: "/assets/recent/r12.png" },
    { id: 13, image: "/assets/recent/r13.png" },
    { id: 14, image: "/assets/recent/r14.png" },
    { id: 15, image: "/assets/recent/r15.png" },
    { id: 16, image: "/assets/recent/r16.png" },
  ];

  useEffect(() => {
    // Function to fetch mockup data from the API
    const fetchMockupData = async () => {
      try {
        const response = await fetch(
          "https://code.bdluminaries.com/api/v1/mockup-zones"
        );
        const data = await response.json();

        // Process the data to extract images and videos
        const combinedContent = data.flatMap((zone) => {
          const imagesWithType = zone.images.map((img) => ({
            type: "image",
            src: `https://code.bdluminaries.com/${img}`,
          }));
          const videosWithType = zone.videos.map((vid) => ({
            type: "video",
            video: `https://code.bdluminaries.com/${vid.video}`,
            thumbnail: `https://code.bdluminaries.com/${vid.thumbnail}`,
          }));
          return [...imagesWithType, ...videosWithType];
        });

        // Shuffle the combined array
        const shuffled = combinedContent.sort(() => Math.random() - 0.5);
        setShuffledContent(shuffled);

        // If the user clicked an image, show it
        if (location.state?.selectedImage) {
          setSelectedContent({
            type: "image",
            src: `https://code.bdluminaries.com/${location.state.selectedImage}`,
          });
        }
      } catch (error) {
        console.error("Error fetching mockup data:", error);
      }
    };

    fetchMockupData();
  }, [location.state]);

  const displayContent = (type, source) => {
    setSelectedContent({ type, src: source });
  };

  return (
    <div className="h-screen pb-9 pt-8 bg-gray-100">
      <div className="flex items-center justify-between absolute top-0 left-0 h-8 bg-black">
        <Link
          className="flex items-center justify-center w-[20%] text-xs"
          to="/"
        >
          <img
            className="w-4/5 drop-shadow-custom"
            src="/assets/bdl.png"
            alt="BDL Logo"
          />
        </Link>
        <Marquee speed={20} pauseOnHover gradient={false} className="h-8">
          <img className="h-8" src={slogan} alt="Slogan" />
        </Marquee>
        <Link
          className="w-[20%] flex justify-center items-center text-[#F15B26]"
          to="/menu"
        >
          <AiOutlineProduct />
        </Link>
      </div>

      <div className="h-full grid grid-rows-2 grid-cols-1">
        {/* Main Display Section */}
        <div className="">
          {selectedContent.type === "video" && (
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              src={selectedContent.src}
            />
          )}
          {selectedContent.type === "image" && (
            <img
              className="w-full h-full object-cover"
              src={selectedContent.src}
              alt="Image missing"
            />
          )}
        </div>

        {/* Thumbnail Section */}
        <div className="grid grid-cols-4 gap-4 p-2">
          {/* Recent work section */}
          <div className="col-span-1 grid grid-cols-1 gap-2 h-full overflow-y-scroll no-scrollbar relative rounded-b">
            <h3 className="text-xs bg-[#F15B26] sticky top-0 left-0 py-1.5 text-center text-white font-bold w-full shadow-md rounded-b">
              Recent work
            </h3>
            {recent.map((mockupItem) => (
              <div
                key={mockupItem.id}
                onClick={() => navigate("/work")}
                className="shadow-md rounded"
              >
                <img
                  src={mockupItem.image}
                  className="w-full h-14 object-cover rounded"
                  alt="Recent work"
                />
              </div>
            ))}
          </div>

          {/* Mockup zone section */}
          <div className="col-span-3 grid grid-cols-3 gap-2 h-full overflow-y-scroll no-scrollbar relative rounded-b">
            <h3 className="text-xs col-span-3 bg-[#F15B26] sticky top-0 left-0 py-1.5 text-center text-white font-bold w-full shadow-md rounded-b">
              Mockup zone
            </h3>
            {shuffledContent.map((item) => (
              <div
                key={item.id}
                className="shadow-md rounded h-14"
                onClick={() =>
                  displayContent(
                    item.type,
                    item.type === "video" ? item.video : item.src // Updated to use src for images
                  )
                }
              >
                <img
                  src={item.type === "video" ? item.thumbnail : item.src} // Updated to use src for images
                  className="w-full h-14 object-cover rounded"
                  alt={item.type}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mockup;
