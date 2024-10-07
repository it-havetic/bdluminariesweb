import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Mockup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedContent, setSelectedContent] = useState({
    type: "",
    src: "",
  });
  const [shuffledContent, setShuffledContent] = useState([]);
  const [recentWorks, setRecentWorks] = useState([]); // State for recent works
  const [mockupImages, setMockupImages] = useState([]); // State for mockup images
  const [singleMockupZoneImages, setSingleMockupZoneImages] = useState([]);

  // Fetch data for recent works from the API
  useEffect(() => {
    const fetchRecentWorks = async () => {
      try {
        const response = await fetch(
          "https://code.bdluminaries.com/api/v1/recent-works"
        );
        const data = await response.json();

        // Process the data to extract only image data
        const imageWorks = data
          .sort((a, b) => a.prioroty - b.prioroty)
          .flatMap((item) =>
            item.images.map((image) => ({
              src: image,
              id: item._id,
            }))
          );
        setRecentWorks(imageWorks); // Set recent works with only images
      } catch (error) {
        console.error("Error fetching recent works:", error);
      }
    };

    fetchRecentWorks();
  }, []);

  useEffect(() => {
    // Function to fetch mockup data from the API
    const fetchMockupData = async () => {
      try {
        const response = await fetch(
          "https://code.bdluminaries.com/api/v1/mockup-zones"
        );
        const data = await response.json();

        // Process the data to extract images and videos
        const combinedContent = data
          .sort((a, b) => a.prioroty - b.prioroty)
          .flatMap((zone) => {
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

        setMockupImages(combinedContent);
      } catch (error) {
        console.error("Error fetching mockup data:", error);
      }
    };
    fetchMockupData();

    const fetchSingleMockupData = async () => {
      try {
        const response = await fetch(
          `https://code.bdluminaries.com/api/v1/mockup-zones/${location.state.selectedImage.name}`
        );
        const data = await response.json();
        console.log(data);

        // Process the data to extract images and videos
        const combinedSingleContent = [data].flatMap((zone) => {
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
        setSingleMockupZoneImages(combinedSingleContent);
      } catch (error) {
        console.error("Error fetching mockup data:", error);
      }
    };
    fetchSingleMockupData();
  }, []);

  useEffect(() => {
    const shuffled = [
      ...singleMockupZoneImages,
      ...mockupImages.sort(() => 0.5 - Math.random()),
    ];
    setShuffledContent(shuffled);

    if (location.state?.selectedImage) {
      setSelectedContent({
        type: "image",
        src: `https://code.bdluminaries.com/${location.state.selectedImage.images[0]}`,
      });
    }
  }, [location, mockupImages, singleMockupZoneImages]);

  const displayContent = (type, source) => {
    setSelectedContent({ type, src: source });
  };

  const handleImageClick = (image, id) => {
    console.log(image, id);
    // navigate("/work", { state: { selectedImage: image , } });
    navigate("/work", { state: { selectedImage: image, seletedId: id } });
  };

  return (
    <div className="h-screen pb-9  bg-gray-100">
      <Navbar />

      <div className="h-[97%] grid grid-rows-2 grid-cols-1">
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
            {recentWorks.map((image) => (
              <div
                key={image.id}
                onClick={() => handleImageClick(image.src, image.id)}
                className="shadow-md rounded"
              >
                <img
                  src={`https://code.bdluminaries.com/${image.src}`}
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
