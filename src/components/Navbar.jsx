// import React, { useState } from "react";
// import "./Navbar.css"; 

// const Navbar = () => {
//   let [navShow, setNavShow] = useState(false);
//   return (
//     <div
//       className={`navMain w-full h-full bg-black text-white relative z-30 text-center font-bold ${
//         navShow ? "electric-fire-animation" : ""
//       }`}
//       onClick={() => setNavShow(!navShow)}
//     >
//       <div
//         className={`w-full h-full bg-slate-700 absolute left-0 transition-all duration-500  ${
//           navShow ? "top-full" : "top-0"
//         }`}
//       ></div>
//       <div
//         className={`w-full h-full bg-slate-200 absolute left-0 transition-all duration-500  ${
//           navShow ? "top-[200%]" : "top-0"
//         }`}
//       ></div>
//       <div
//         className={`w-full h-full bg-slate-400 absolute left-0 transition-all duration-500  ${
//           navShow ? "top-[300%]" : "top-0"
//         }`}
//       ></div>
//       <div
//         className={`w-full h-full bg-slate-900 absolute left-0 transition-all duration-500  ${
//           navShow ? "top-[400%]" : "top-0"
//         }`}
//       ></div>
//       <div
//         className={`w-full h-full bg-slate-300 absolute left-0 transition-all duration-500  ${
//           navShow ? "top-[500%]" : "top-0"
//         }`}
//       ></div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [navShow, setNavShow] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNavShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  return (
    <div
      ref={navRef}
      className={`navMain w-full h-full bg-black text-white relative z-30 text-center font-bold ${
        navShow ? "show-nav" : ""
      }`}
      onClick={() => setNavShow(!navShow)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full h-1/2  bg-slate-700 absolute  left-0 transition-all duration-500 ${
          navShow ? "top-full" : "top-full"
        }`}
      >
      </div>
    </div>
  );
};

export default Navbar;


