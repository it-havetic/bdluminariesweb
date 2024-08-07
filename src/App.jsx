
// import React, { useState } from 'react'
// import {
//   createRoutesFromElements,
//   createBrowserRouter,
//   Route,
//   RouterProvider
// } from "react-router-dom";
// import RootLayOut from './RootLayOut';
// import Home from './page/Home';
// import AllProduct from './page/AllProduct';
// import ContactForm from './components/Contact';
// import ProductDetails from './components/ProductDetails';
// import ProductDetailOne from './page/ProductDetailOne';
// import Blog from './page/Blog';
// import ProductDetailNext from './page/ProductDetailNext';
// import Mockup from './page/Mockup';
// import Test from './page/Test';
// import RecentWork from './page/RecentWork';
// import UserReviewForm from './components/UserReviewForm';
// import ReviewDisplay from './components/ReviewDisplay';





// const App = () => {
//   const [review, setReview] = useState(null);
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route
//         path="/"
//         element={<RootLayOut />}
//         // errorElement={<ErrorPage />}
//       >
//         <Route index element={<Home />} />
//         <Route path="/product" element={<AllProduct />} />
//         <Route path="/contact" element={<ContactForm />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/product/detail/one" element={<ProductDetailOne />} />
//         <Route path="/product/detail" element={<ProductDetails />} />
//         <Route path="/product/detail/next" element={<ProductDetailNext />} />
//         <Route path="/mockup" element={<Mockup />} />
//         <Route path="/work" element={<RecentWork />} />
//         <Route path="/test" element={<Test />} />
//         <Route
//           path="/review/:mockID"
//           element={<UserReviewForm setReview={setReview} />}
//         />
//         ,
//         <Route
//           path="/review-display"
//           element={<ReviewDisplay review={review} />}
//         />
//       </Route>
//     )
//   );
//   return (
//     <RouterProvider router={router} />
//   )
// }

// export default App


import React, { useState, useEffect } from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayOut from "./RootLayOut";
import Home from "./page/Home";
import AllProduct from "./page/AllProduct";
import ContactForm from "./components/Contact";
import ProductDetails from "./components/ProductDetails";
import ProductDetailOne from "./page/ProductDetailOne";
import Blog from "./page/Blog";
import ProductDetailNext from "./page/ProductDetailNext";
import Mockup from "./page/Mockup";
import Test from "./page/Test";
import RecentWork from "./page/RecentWork";
import UserReviewForm from "./components/UserReviewForm";
import ReviewDisplay from "./components/ReviewDisplay";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [review, setReview] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<AllProduct />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/product/detail/one" element={<ProductDetailOne />} />
        <Route path="/product/detail" element={<ProductDetails />} />
        <Route path="/product/detail/next" element={<ProductDetailNext />} />
        <Route path="/mockup" element={<Mockup />} />
        <Route path="/work" element={<RecentWork />} />
        <Route path="/test" element={<Test />} />
        <Route
          path="/review/:mockID"
          element={<UserReviewForm setReview={setReview} />}
        />
        <Route
          path="/review-display"
          element={<ReviewDisplay review={review} />}
        />
      </Route>
    )
  );

  return isMobile ? (
    <RouterProvider router={router} />
  ) : (
    <div className=" py-7 px-6 bg-slate-200 rounded-xl m-4">
      <h1 className="text-xl font-bold text-green-800 mb-2">
        Thank you for visiting our website!
      </h1>
      <p className="text-gray-700">
        We appreciate your interest in our site. However, at this time, our
        website is optimized for <b>mobile devices only</b>. Please try
        accessing our site on a mobile device for the best experience. We
        apologize for any inconvenience this may cause.
        <br />
        <br />
        If you have any questions or need assistance, feel free to{" "}
        <a className="text-blue-800 font-bold" href="/contact">
          contact us
        </a>
        .
      </p>
    </div>
  );
};

export default App;
