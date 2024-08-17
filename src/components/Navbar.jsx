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
        className={`w-full h-1/2  bg-slate-700 opacity-100 invisible absolute  left-0 transition-all duration-500 ease-linear ${
          navShow ? "top-full opacity-100 !visible" : "top-full"
        }`}
      >
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full h-1/2  bg-slate-600 opacity-100 invisible absolute  left-0 transition-all duration-500 ease-linear group ${
          navShow ? "top-[150%] !opacity-100 !visible" : "top-full"
        }`}
      >
        <ul className="absolute bg-black transition-all duration-300 left-0 top-0 opacity-0 invisible group-hover:visible group-hover:left-full group-hover:opacity-100 ">
          <li>home</li>
          <li>home</li>
          <li>home</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;


