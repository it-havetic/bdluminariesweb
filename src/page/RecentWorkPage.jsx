import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { AiOutlineProduct } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import slogan from "/assets/slogan.png";
import axios from "../axios";
import Navbar from "../components/Navbar";
const RecentWork = () => {
  const [shuffledContent, setShuffledContent] = useState([]);

  const [mockupImages, setMockupImages] = useState([]);
  let navigate = useNavigate();

  // API থেকে ডাটা ফেচ করা
  useEffect(() => {
    const fetchMockupData = async () => {
      try {
        const response = await axios.get("/mockup-zones");
        const data = await response.data;

        // সব mockup zone এর ইমেজগুলোকে একসাথে মেপ করা 
        const images = data.flatMap((zone) =>
          zone.images.map((image) => ({
            id: zone._id,
            image: image,
          }))
        );

        setMockupImages(images);
      } catch (error) {
        console.error("Error fetching mockup data:", error);
      }
    };

    fetchMockupData();
  }, []);

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

  const recentVideo = [
    {
      id: 1,
      video: "/recentVideo/1.mp4",
      thumbnail: "/recentVideo/thumnail/1.jpg",
    },
    {
      id: 2,
      video: "/recentVideo/2.mp4",
      thumbnail: "/recentVideo/thumnail/2.jpg",
    },
    {
      id: 3,
      video: "/recentVideo/3.mp4",
      thumbnail: "/recentVideo/thumnail/3.jpg",
    },
    {
      id: 4,
      video: "/recentVideo/4.mp4",
      thumbnail: "/recentVideo/thumnail/4.jpg",
    },
    {
      id: 5,
      video: "/recentVideo/5.mp4",
      thumbnail: "/recentVideo/thumnail/5.jpg",
    },
    {
      id: 6,
      video: "/recentVideo/6.mp4",
      thumbnail: "/recentVideo/thumnail/6.jpg",
    },
    {
      id: 7,
      video: "/recentVideo/7.mp4",
      thumbnail: "/recentVideo/thumnail/7.jpg",
    },
    {
      id: 8,
      video: "/recentVideo/8.mp4",
      thumbnail: "/recentVideo/thumnail/8.jpg",
    },
  ];

  useEffect(() => {
    // Combine videos and images into one array
    const combinedContent = [
      ...recentVideo.map((item) => ({ ...item, type: "video" })),
      ...recent.map((item) => ({ ...item, type: "image" })),
    ];

    // Shuffle the combined array
    const shuffled = combinedContent.sort(() => Math.random() - 0.5);
    setShuffledContent(shuffled);
  }, []);

  // For display
  const [selectedContent, setSelectedContent] = useState({
    type: "",
    src: "",
  });

  const displayContent = (type, source) => {
    setSelectedContent({ type, src: source });
  };

   const handleImageClick = (mockupItem) => {
     navigate("/mockup", { state: { selectedImage: mockupItem.image } });
   };

  return (
    <div className="h-screen pb-9  bg-gray-100">
      
      <Navbar />

      <div className="h-[97%] grid grid-rows-2 grid-cols-1">
        <div>
          {selectedContent.type === "video" && (
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              src={selectedContent.src}
            />
          )}
          {selectedContent.type === "image" && (
            <img
              className="w-full h-full object-cover"
              src={selectedContent.src}
              alt="Selected"
            />
          )}
          {!selectedContent.src && (
            <img
              className="w-full h-full object-cover"
              src="/assets/recent/r1.png"
              alt="Default"
            />
          )}
        </div>

        <div className="grid grid-cols-4 gap-4 p-2">
          {/* Recent work section */}
          <div className="col-span-3 grid grid-cols-3 gap-2 h-full overflow-y-scroll no-scrollbar relative rounded-b">
            <h3 className="text-xs col-span-3 bg-[#F15B26] sticky top-0 left-0 h-7 flex items-center justify-center text-center text-white font-bold w-full shadow-md rounded-b">
              Recent work
            </h3>
            {shuffledContent.map((item) => (
              <div
                key={item.id}
                className="shadow-md rounded"
                onClick={() =>
                  displayContent(
                    item.type,
                    item.type === "video" ? item.video : item.image
                  )
                }
              >
                <img
                  src={item.type === "video" ? item.thumbnail : item.image}
                  className="w-full h-14 object-cover rounded"
                  alt={item.type}
                />
              </div>
            ))}
          </div>

          {/* Mockup section */}
          <div className="col-span-1 grid grid-cols-1 gap-2 h-full overflow-y-scroll no-scrollbar relative rounded-b">
            <h3 className="text-xs bg-[#F15B26] sticky top-0 left-0 h-7 flex items-center justify-center text-center text-white font-bold w-full shadow-md rounded-b">
              Mockup
            </h3>
            {mockupImages.map((mockupItem) => (
              <div
                onClick={() => handleImageClick(mockupItem)}
                key={mockupItem.id}
                className="shadow-md rounded cursor-pointer"
              >
                <img
                  src={`https://code.bdluminaries.com/${mockupItem.image}`}
                  className="w-full h-14 object-cover rounded"
                  alt="Mockup"
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

export default RecentWork;
