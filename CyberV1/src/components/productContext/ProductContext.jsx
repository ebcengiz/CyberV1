/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useContext } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [productsPA, setProductsPA] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductDp, setSelectedProductDp] = useState(null);

  const selectProductDp = (productDp) => {
    setSelectedProductDp(productDp);
  };

  const selectProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <ProductContext.Provider
      value={{
        selectedBrands,
        setSelectedBrands,
        productsPA,
        setProductsPA,
        selectProduct,
        setSelectedProduct,
        setSelectedProductDp,
        selectProductDp,
        selectedProductDp,
        selectedProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProductContext = () => useContext(ProductContext);
