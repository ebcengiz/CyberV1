/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import About from "../../pages/About";
import ContactUs from "../../pages/ContactUs";
import Blog from "../../pages/Blog";
import PageNotFound from "../../pages/PageNotFound";
import ProductsPage from "../../pages/productsPage/ProductsPage";

const SiteRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productsPage" element={<ProductsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default SiteRouter;
