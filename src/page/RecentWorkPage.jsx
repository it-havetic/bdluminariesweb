import { Image } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "../axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";

const RecentWork = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  const [shuffledContent, setShuffledContent] = useState([]);
  const [mockupImages, setMockupImages] = useState([]);
  const [recentWork, setRecentWork] = useState([]);
  const [singelRecentWork, setSingelRecentWork] = useState();
  const [selectedContent, setSelectedContent] = useState({
    type: "",
    src: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMockupData = async () => {
      try {
        const response = await axios.get("/mockup-zones");
        const data = response.data.sort((a, b) => a.prioroty - b.prioroty);
        console.log(data);
        setMockupImages(data);
      } catch (error) {
        console.error("Error fetching mockup data:", error);
      }
    };
    fetchMockupData();
  }, []);

  // Fetch recent works from API
  useEffect(() => {
    const fetchRecentWork = async () => {
      try {
        const response = await axios.get(
          "https://code.bdluminaries.com/api/v1/recent-works"
        );
        const data = response.data;

        const formattedContent = data.flatMap((work) => {
          const images = work.images.map((image) => ({
            id: work._id,
            image: `${image}`,
            type: "image",
          }));

          const videos = work.videos.map((video) => ({
            id: video._id,
            video: `${video.video}`,
            thumbnail: `${video.thumbnail}`,
            type: "video",
          }));

          return [...images, ...videos];
        });

        setRecentWork(formattedContent);
      } catch (error) {
        console.error("Error fetching recent works:", error);
      }
    };

    const seletedRecentWork = async () => {
      try {
        const res = await axios.get(`recent-works/${id}`);
        if (res.status === 200) {
          console.log("single", res.data);
          setSingelRecentWork(res.data);
          const formattedSingleContent = [res.data].flatMap((work) => {
            const images = work.images.map((image) => ({
              id: work._id,
              image: `${image}`,
              type: "image",
            }));

            const videos = work.videos.map((video) => ({
              id: video._id,
              video: `${video.video}`,
              thumbnail: `${video.thumbnail}`,
              type: "video",
            }));

            return [...images, ...videos];
          });
          setSelectedContent(formattedSingleContent);
        }
      } catch (error) {
        console.error("Error fetching recent works:", error);
      }
    };

    fetchRecentWork();
    seletedRecentWork();
  }, []);

  // Fetch mockup images

  // Set the content to display based on clicked image or video
  useEffect(() => {
    if (recentWork.length > 0) {
      // Ensure that selectedContent is properly initialized and merged with recentWork
      const selectedArray = Array.isArray(selectedContent)
        ? selectedContent
        : [selectedContent];

      // Ensure the src and type in selectedContent are valid before setting shuffledContent
      const filteredContent = selectedArray.filter(
        (item) => item.src && item.type
      );

      const shuffled = [
        ...filteredContent,
        ...recentWork.sort(() => Math.random() - 0.5),
      ];

      setShuffledContent(shuffled);
    }

    // Safely set selectedContent using searchParams
    const type = searchParams.get("type") || "image";
    const src = searchParams.get("src");

    if (src) {
      setSelectedContent({
        type,
        src,
      });
    }
  }, [recentWork, searchParams]);

  const handleImageClick = (mockupItem) => {
    navigate(`/mockup/${mockupItem.name}`);
  };

  const displayContent = (type, source) => {
    setSelectedContent({ type, src: source });
  };

  if (!singelRecentWork) {
    return <Preloader />;
  }

  return (
    <div className="h-screen pb-9 bg-gray-100">
      <Navbar />
      <div className="h-[97%] grid grid-rows-2 grid-cols-1">
        {/* Main display section */}
        <div>
          {searchParams.get("type") === "video" && (
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              src={`https://code.bdluminaries.com/${
                searchParams.get("src") || selectedContent.src
              }`}
            />
          )}
          {searchParams.get("type") === "image" && (
            <Image
              height="100%"
              className="w-full h-full object-cover"
              src={`https://code.bdluminaries.com/${
                searchParams.get("src") || selectedContent.src
              }`}
              alt="Selected"
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
            {shuffledContent.map((item, index) => (
              <div
                key={index}
                className="shadow-md rounded"
                onClick={() => {
                  if (item.type && (item.image || item.video)) {
                    setSearchParams({
                      src: item.type === "video" ? item.video : item.image,
                      type: item.type,
                    });
                    displayContent(
                      item.type,
                      item.type === "video" ? item.video : item.image
                    );
                  }
                }}
              >
                {item.type === "image" && item.image && (
                  <img
                    src={`https://code.bdluminaries.com/${item.image}`}
                    className="w-full h-14 object-cover rounded"
                    alt="Image"
                  />
                )}
                {item.type === "video" && item.thumbnail && (
                  <img
                    src={`https://code.bdluminaries.com/${item.thumbnail}`}
                    className="w-full h-14 object-cover rounded"
                    alt="Video"
                  />
                )}
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
                  src={`https://code.bdluminaries.com/${mockupItem.images[0]}`}
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
