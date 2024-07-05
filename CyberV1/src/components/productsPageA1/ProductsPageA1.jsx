/* eslint-disable no-unused-vars */
import React from "react";
import "./productsPageA1.css";
import Arrow from "../../../public/Arrow.svg";
import { useNavigate } from "react-router-dom";

const ProductsPageA1 = () => {
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
  return (
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
      <span className="breadcrumb-item">Catalog</span>
      <img src={Arrow} alt="Arrow" className="breadcrumb-arrow" />
      <span className="breadcrumb-current" onClick={handleSmartphonesClick}>
        Smartphones
      </span>
    </div>
  );
};

export default ProductsPageA1;
