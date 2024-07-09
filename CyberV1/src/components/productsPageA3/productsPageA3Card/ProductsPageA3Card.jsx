/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./productsPageA3Card.css";
import Figure from "react-bootstrap/Figure";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import FavoriteIconP from "../../../../public/FavoriteIconP.svg";

const StyledButtonPv = styled.button`
  background-color: black;
  border: none;
  font-family: "SF Pro Display", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  transition: background-color 0.3s ease;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  margin-top: auto;

  &:hover {
    background-color: #575757;
  }
`;

const ProductsPageA3Card = ({ titlePageVe, imgPageVe, pricePageVe }) => {
  return (
    <>
      <Card className="productsPageA3Card-crd">
        <Figure className="favorite-icon">
          <Figure.Image
            width={32}
            height={32}
            alt="Favorite Icon"
            src={FavoriteIconP}
          />
        </Figure>
        <Card.Img
          variant="top"
          src={imgPageVe}
          className="productsPageA3Card-crd-img"
        />
        <Card.Body className="productsPageA3Card-body">
          <Card.Text className="productsPageA3Card-desc">
            {titlePageVe}
          </Card.Text>
          <Card.Text className="productsPageA3Card-price">
            {pricePageVe}
          </Card.Text>
          <StyledButtonPv className="styled-button">Buy Now</StyledButtonPv>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductsPageA3Card;
