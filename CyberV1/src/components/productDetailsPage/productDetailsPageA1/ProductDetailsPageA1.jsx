/* eslint-disable no-unused-vars */
import React from "react";
import "./productDetailsPageA1.css";
import Arrow from "../../../../public/Arrow.svg";
import { useNavigate } from "react-router-dom";
const ProductDetailsPageA1 = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleCatalogCliclk = () => {
    navigate("/productsPage");
  };

  const handleSmartphonesClick = () => {
    navigate("/productsPage");
  };

  const handleSpaceClick = () => {
    navigate("/productDetailsPage");
  };

  return (
    <>
      <div className="breadcrumb">
        <span className="breadcrumb-item" onClick={handleHomeClick}>
          Home
        </span>
        <img
          src={Arrow}
          alt="Arrow"
          className="breadcrumb-arrow"
          onClick={handleCatalogCliclk}
        />
        <span className="breadcrumb-item" onClick={handleCatalogCliclk}>
          Catalog
        </span>
        <img src={Arrow} alt="Arrow" className="breadcrumb-arrow" />
        <span className="breadcrumb-item" onClick={handleSmartphonesClick}>
          Smartphones
        </span>
        <img src={Arrow} alt="Arrow" className="breadcrumb-arrow" />
        <span className="breadcrumb-item">Apple</span>
        <img src={Arrow} alt="Arrow" className="breadcrumb-arrow" />
        <span className="breadcrumb-current" onClick={handleSpaceClick}>
          iPhone 14 Pro Max
        </span>
      </div>
    </>
  );
};

export default ProductDetailsPageA1;
