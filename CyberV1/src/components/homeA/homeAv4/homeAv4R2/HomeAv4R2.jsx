/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./homeAv4R2.css";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import styled from "styled-components";
import FavoriteIconP from "../../../../../public/FavoriteIconP.svg";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
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

const HomeAv4R2 = ({ descP, imgP, price }) => {
  return (
    <Card className="homeav4r2pc">
      <Figure className="favorite-icon">
        <Figure.Image
          width={32}
          height={32}
          alt="Favorite Icon"
          src={FavoriteIconP}
        />
      </Figure>
      <Card.Img variant="top" src={imgP} className="homeav4r2pc-img" />
      <Card.Body className="homeav4r2pc-body">
        <Card.Text className="homeav4r2pc-desc">{descP}</Card.Text>
        <Card.Text className="homeav4r2pc-price">{price}</Card.Text>
        <Link to="/productsPage">
          <StyledButton className="styled-button">Buy Now</StyledButton>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default HomeAv4R2;
