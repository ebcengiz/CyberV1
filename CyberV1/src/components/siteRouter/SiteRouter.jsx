/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import About from "../../pages/About";
import ContactUs from "../../pages/ContactUs";
import Blog from "../../pages/Blog";
import PageNotFound from "../../pages/PageNotFound";
import ProductsPage from "../../pages/productsPage/ProductsPage";
import ProductDetailsPage from "../../pages/productDetailsPage/ProductDetailsPage";
import ShoppingCart from "../../pages/shoppingCart/ShoppingCart";
import Step1 from "../../pages/step1/Step1";
import Step2 from "../../pages/step2/Step2";
import Step3 from "../../pages/step3/Step3";

const SiteRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productsPage" element={<ProductsPage />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/productDetailsPage" element={<ProductDetailsPage />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default SiteRouter;
