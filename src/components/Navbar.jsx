// import React, { useState } from "react";

// const Navbar = () => {
//   let [navShow, setNavShow] = useState(false);
//   return (
//     <div
//       className="navMain w-full h-full bg-black text-white relative z-30 text-center font-bold"
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


import React, { useState } from "react";
import "./Navbar.css"; 

const Navbar = () => {
  let [navShow, setNavShow] = useState(false);
  return (
    <div
      className={`navMain w-full h-full bg-black text-white relative z-30 text-center font-bold ${
        navShow ? "electric-fire-animation" : ""
      }`}
      onClick={() => setNavShow(!navShow)}
    >
      <div
        className={`w-full h-full bg-slate-700 absolute left-0 transition-all duration-500  ${
          navShow ? "top-full" : "top-0"
        }`}
      ></div>
      <div
        className={`w-full h-full bg-slate-200 absolute left-0 transition-all duration-500  ${
          navShow ? "top-[200%]" : "top-0"
        }`}
      ></div>
      <div
        className={`w-full h-full bg-slate-400 absolute left-0 transition-all duration-500  ${
          navShow ? "top-[300%]" : "top-0"
        }`}
      ></div>
      <div
        className={`w-full h-full bg-slate-900 absolute left-0 transition-all duration-500  ${
          navShow ? "top-[400%]" : "top-0"
        }`}
      ></div>
      <div
        className={`w-full h-full bg-slate-300 absolute left-0 transition-all duration-500  ${
          navShow ? "top-[500%]" : "top-0"
        }`}
      ></div>
    </div>
  );
};

export default Navbar;

