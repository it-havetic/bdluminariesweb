import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "../axios";

const RecentWork = () => {
  const [shuffledContent, setShuffledContent] = useState([]);
  const [mockupImages, setMockupImages] = useState([]);
  const [recentWork, setRecentWork] = useState([]);
  const [selectedContent, setSelectedContent] = useState({
    type: "",
    src: "",
  });

  const location = useLocation();
  const navigate = useNavigate();

  // Fetch recent works from API
  useEffect(() => {
    const fetchRecentWork = async () => {
      try {
        const response = await axios.get("https://code.bdluminaries.com/api/v1/recent-works");
        const data = response.data;

        const formattedContent = data.flatMap((work) => {
          const images = work.images.map((image) => ({
            id: work._id,
            image: `https://code.bdluminaries.com/${image}`,
            type: "image",
          }));

          const videos = work.videos.map((video) => ({
            id: video._id,
            video: `https://code.bdluminaries.com/${video.video}`,
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

  // Fetch mockup images
  useEffect(() => {
    const fetchMockupData = async () => {
      try {
        const response = await axios.get("/mockup-zones");
        const data = response.data;

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

  // Set the content to display based on clicked image or video
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

  const handleImageClick = (mockupItem) => {
    navigate("/mockup", { state: { selectedImage: mockupItem.image } });
  };

  const displayContent = (type, source) => {
    setSelectedContent({ type, src: source });
  };

  return (
    <div className="h-screen pb-9 bg-gray-100">
      <Navbar />
      <div className="h-[97%] grid grid-rows-2 grid-cols-1">
        {/* Main display section */}
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

        {/* Recent works and mockup sections */}
        <div className="grid grid-cols-4 gap-4 p-2">
          {/* Recent Work section */}
          <div className="col-span-3 grid grid-cols-3 gap-2 h-full overflow-y-scroll no-scrollbar relative rounded-b">
            <h3 className="text-xs col-span-3 bg-[#F15B26] sticky top-0 left-0 h-7 flex items-center justify-center text-center text-white font-bold w-full shadow-md rounded-b">
              Recent Work
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
                key={mockupItem.id}
                onClick={() => handleImageClick(mockupItem)}
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
