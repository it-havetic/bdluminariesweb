import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "../axios";

const RecentWork = () => {
  const [shuffledContent, setShuffledContent] = useState([]);
  const [mockupImages, setMockupImages] = useState([]);
  const [recentWork, setRecentWork] = useState([]); // New state for recent works
  let navigate = useNavigate();
  const location = useLocation();

  // API to fetch recent works
  useEffect(() => {
    const fetchRecentWork = async () => {
      try {
        const response = await axios.get("https://code.bdluminaries.com/api/v1/recent-works");
        const data = await response.data;

        // Formatting recent works data
        const formattedContent = data.flatMap((work) => {
          const images = work.images.map((image) => ({
            id: work._id,
            image: `https://code.bdluminaries.com/${image}`, // Assuming a base URL for images
            type: "image",
          }));

          const videos = work.videos.map((video) => ({
            id: video._id,
            video: `https://code.bdluminaries.com/${video.video}`, // Assuming a base URL for videos
            thumbnail: `https://code.bdluminaries.com/${video.thumbnail}`,
            type: "video",
          }));

          return [...images, ...videos];
        });

        setRecentWork(formattedContent);
      } catch (error) {
        console.error("Error fetching recent works:", error);
      }
    };

    fetchRecentWork();
  }, []);

  // Mockup images fetching (unchanged)
  useEffect(() => {
    const fetchMockupData = async () => {
      try {
        const response = await axios.get("/mockup-zones");
        const data = await response.data;

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

  // Shuffle and combine recent work content
  useEffect(() => {
    if (recentWork.length > 0) {
      const shuffled = recentWork.sort(() => Math.random() - 0.5);
      setShuffledContent(shuffled);
    }

    if (location.state?.selectedImage) {
      setSelectedContent({
        type: "image",
        src: `https://code.bdluminaries.com/${location.state.selectedImage}`,
      });
    }
  }, [recentWork, location.state]);

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
    <div className="h-screen pb-9 bg-gray-100">
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
                onClick={() => displayContent(item.type, item.type === "video" ? item.video : item.image)}
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
