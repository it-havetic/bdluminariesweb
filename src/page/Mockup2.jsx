import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { AiOutlineProduct } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import slogan from "/assets/slogan.png";

const Mockup2 = () => {
  const [shuffledContent, setShuffledContent] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  let navigate = useNavigate();

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

  const mockupVideo = [
    { id: 1, video: "videos/01.mp4", thumbnail: "/videos/thumnail/vt1.jpg" },
    { id: 2, video: "videos/02.mp4", thumbnail: "/videos/thumnail/vt2.jpg" },
    { id: 3, video: "videos/03.mp4", thumbnail: "/videos/thumnail/vt3.jpg" },
    { id: 4, video: "videos/04.mp4", thumbnail: "/videos/thumnail/vt4.jpg" },
    { id: 5, video: "videos/05.mp4", thumbnail: "/videos/thumnail/vt5.jpg" },
    { id: 6, video: "videos/06.mp4", thumbnail: "/videos/thumnail/vt6.jpg" },
    { id: 7, video: "videos/07.mp4", thumbnail: "/videos/thumnail/vt7.jpg" },
    { id: 8, video: "videos/08.mp4", thumbnail: "/videos/thumnail/vt8.jpg" },
  ];

  const mockup = [
    { id: 1, image: "/assets/mockup/m11.jpg" },
    { id: 2, image: "/assets/mockup/m1.png" },
    { id: 3, image: "/assets/mockup/m7.jpg" },
    { id: 4, image: "/assets/mockup/m2.jpg" },
    { id: 5, image: "/assets/mockup/m5.png" },
    { id: 6, image: "/assets/mockup/m3.jpg" },
  ];

    let banner = [
      {
        id: 1,
        image: "/assets/mockup/m1.jpg",
      },
      {
        id: 2,
        image: "/assets/mockup/m1.png",
      },
      {
        id: 3,
        image: "/assets/mockup/m2.jpg",
      },
      {
        id: 3,
        image: "/assets/mockup/m2.png",
      },
      {
        id: 4,
        image: "/assets/mockup/m3.png",
      },
      {
        id: 4,
        image: "/assets/mockup/m3.jpg",
      },
      {
        id: 5,
        image: "/assets/mockup/m4.jpg",
      },
      {
        id: 6,
        image: "/assets/mockup/m4.png",
      },
      {
        id: 4,
        image: "/assets/mockup/m5.png",
      },
      {
        id: 4,
        image: "/assets/mockup/m5.jpg",
      },
      {
        id: 4,
        image: "/assets/mockup/m6.png",
      },
      {
        id: 4,
        image: "/assets/mockup/m6.jpg",
      },
      {
        id: 4,
        image: "/assets/mockup/m7.jpg",
      },
      {
        id: 4,
        image: "/assets/mockup/m11.jpg",
      },
    ];

  useEffect(() => {
    // Combine videos and images into one array
    const combinedContent = [
      ...mockupVideo.map((item) => ({ ...item, type: "video" })),
      ...banner.map((item) => ({ ...item, type: "image" })),
    ];

    // Shuffle the combined array
    const shuffled = combinedContent.sort(() => Math.random() - 0.5);
    setShuffledContent(shuffled);
  }, []);

  // Display content in popup
  const displayContent = (index) => {
    setCurrentIndex(index);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledContent.length);
    }
  };

  const handlePrev = () => {
    if (currentIndex !== null) {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + shuffledContent.length) % shuffledContent.length
      );
    }
  };

  const handleSwipe = (direction) => {
    if (direction === "left") handleNext();
    if (direction === "right") handlePrev();
  };

  const renderPopupContent = () => {
    if (currentIndex === null) return null;

    const currentItem = shuffledContent[currentIndex];

    return currentItem.type === "video" ? (
      <video
        className="w-full h-full object-cover"
        controls
        autoPlay
        src={currentItem.video}
      />
    ) : (
      <img
        className="w-full h-full object-contain"
        src={currentItem.image}
        alt="Selected"
      />
    );
  };

  return (
    <div className="h-screen pb-9 pt-8 bg-gray-100 relative">
      <div className="flex items-center justify-between absolute top-0 left-0 h-8 bg-[#000000]">
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
        <Marquee
          speed={20}
          direction="left"
          pauseOnHover={true}
          gradient={false}
          className="h-8"
        >
          <div className="flex h-full">
            <img className="h-8" src={slogan} alt="Slogan" />
            <img className="h-8" src={slogan} alt="Slogan" />
            <img className="h-8" src={slogan} alt="Slogan" />
          </div>
        </Marquee>
        <Link
          className="w-[20%] flex justify-center items-center text-[#F15B26]"
          to="/menu"
        >
          <AiOutlineProduct />
        </Link>
      </div>

      <div className="h-full grid grid-rows-1 grid-cols-1">
        <div className="grid grid-cols-4 gap-4 p-2">
          <div className="col-span-4 grid grid-cols-3 gap-2 h-full overflow-y-scroll no-scrollbar relative">
            <h3 className="text-xs col-span-4 bg-[#F15B26] sticky top-0 left-0 py-1.5 text-center text-white font-bold w-full shadow-md rounded">
              Mockup zone
            </h3>
            {shuffledContent.map((item, index) => (
              <div
                key={item.id}
                className="shadow-md rounded h-14"
                onClick={() => displayContent(index)}
              >
                <img
                  src={item.type === "video" ? item.thumbnail : item.image}
                  className="w-full h-14 object-cover rounded"
                  alt={item.type}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Lightbox */}
      {popupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closePopup}
          >
            &times;
          </button>
          <button
            className="absolute left-4 text-white text-3xl"
            onClick={handlePrev}
          >
            &#10094;
          </button>
          <button
            className="absolute right-4 text-white text-3xl"
            onClick={handleNext}
          >
            &#10095;
          </button>

          <div
            className="w-full h-full max-w-4xl p-4"
            onTouchStart={(e) =>
              (this.touchStartX = e.changedTouches[0].screenX)
            }
            onTouchEnd={(e) => {
              const deltaX = e.changedTouches[0].screenX - this.touchStartX;
              if (deltaX > 50) handleSwipe("right");
              else if (deltaX < -50) handleSwipe("left");
            }}
          >
            {renderPopupContent()}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Mockup2;
