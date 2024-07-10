/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./productsPageA2.css";
import Accordion from "react-bootstrap/Accordion";
import styled from "styled-components";
import logoSearchP from "../../assets/searchI.svg";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useProductContext } from "../productContext/ProductContext";

const SearchFormEP = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  padding: 8px 16px;
  gap: 8px;
  background-color: #f5f5f5;
  box-sizing: border-box;
`;

const LogoImgP = styled.img`
  width: 24px;
  height: 24px;
`;

const SearchInputP = styled.input`
  flex: 1;
  border: none;
  padding: 8px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-sizing: border-box;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

const ProductsPageA2 = () => {
  const { setSelectedBrands } = useProductContext();
  const [productsBrandDE, setProductsBrandDE] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/productsBrandD")
      .then((response) => {
        setProductsBrandDE(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCheckboxChange = (brand) => {
    setSelectedBrands((prevSelectedBrands) => {
      if (prevSelectedBrands.includes(brand)) {
        return prevSelectedBrands.filter((b) => b !== brand);
      } else {
        return [...prevSelectedBrands, brand];
      }
    });
  };
  return (
    <div className="productsPageA2-acr">
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="accordion-header-nm">
            Brand
          </Accordion.Header>
          <Accordion.Body>
            <hr />
            <SearchFormEP className="mt-3">
              <LogoImgP src={logoSearchP} alt="Search Icon" />
              <SearchInputP
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchFormEP>
            <div className="brand-options">
              {productsBrandDE
                .filter((brand) =>
                  brand.titleBrandDp
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                )
                .map((brand) => (
                  <div key={brand.id} className="brand-option">
                    <Form.Check
                      type="checkbox"
                      id={`brand-${brand.id}`}
                      label={
                        <>
                          <span className="brand-stockDp-spn1">
                            {brand.titleBrandDp}
                          </span>{" "}
                          <span className="brand-stockDp-spn2">
                            {brand.stockDp}
                          </span>
                        </>
                      }
                      className="custom-checkbox"
                      onChange={() => handleCheckboxChange(brand.titleBrandDp)}
                    />
                  </div>
                ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="accordion-header-nm">
            Battery capacity
          </Accordion.Header>
          <Accordion.Body className="mt-3 mb-3">Coming soon...</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="accordion-header-nm">
            Screen type
          </Accordion.Header>
          <Accordion.Body className="mt-3 mb-3">Coming soon...</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header className="accordion-header-nm">
            Screen diagonal
          </Accordion.Header>
          <Accordion.Body className="mt-3 mb-3">Coming soon...</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header className="accordion-header-nm">
            Protection class
          </Accordion.Header>
          <Accordion.Body className="mt-3 mb-3">Coming soon...</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header className="accordion-header-nm">
            Built-in memory
          </Accordion.Header>
          <Accordion.Body className="mt-3 mb-3">Coming soon...</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ProductsPageA2;
