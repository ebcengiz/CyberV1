/* eslint-disable no-unused-vars */
import React from "react";
import "./productsPageA2.css";
import Accordion from "react-bootstrap/Accordion";
import styled from "styled-components";
import logoSearchP from "../../assets/searchI.svg";

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
  return (
    <div className="productsPageA2-acr">
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="accordion-header-nm">
            Brand
          </Accordion.Header>
          <hr />
          <Accordion.Body>
            <SearchFormEP className="searchFormEP-b">
              <LogoImgP src={logoSearchP} alt="Search Icon" />
              <SearchInputP type="text" placeholder="Search..." />
            </SearchFormEP>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="accordion-header-nm">
            Battery capacity
          </Accordion.Header>
          <hr />
          <Accordion.Body>Çok yakında...</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="accordion-header-nm">
            Screen type
          </Accordion.Header>
          <hr />
          <Accordion.Body>Çok yakında...</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header className="accordion-header-nm">
            Screen diagonal
          </Accordion.Header>
          <hr />
          <Accordion.Body>Çok yakında...</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header className="accordion-header-nm">
            Protection class
          </Accordion.Header>
          <hr />
          <Accordion.Body>Çok yakında...</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header className="accordion-header-nm">
            Protection class
          </Accordion.Header>
          <hr />
          <Accordion.Body>Built-in memory</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ProductsPageA2;
