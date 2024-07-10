/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./homeAv6R.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import FavoriteIconP from "../../../../../public/FavoriteIconP.svg";
import Figure from "react-bootstrap/Figure";
import { Link } from "react-router-dom";
const StyledButtonDpE = styled.button`
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

const HomeAv6R = ({ descDpE, imgDpE, priceDpE }) => {
  return (
    <>
      <Card className={`homeAv6R-crdE`}>
        <Figure className="favorite-iconDpE">
          <Figure.Image
            width={32}
            height={32}
            alt="Favorite Icon"
            src={FavoriteIconP}
          />
        </Figure>
        <Card.Img variant="top" src={imgDpE} className={`homeAv6R-imgE`} />
        <Card.Body className="homeAv6R-bdyE">
          <Card.Text className="homeAv6R-dscE">{descDpE}</Card.Text>
          <Card.Text className="homeAv6R-prcE">{priceDpE}</Card.Text>
          <Link to="/productsPage">
            <StyledButtonDpE className="styled-button-DpE">
              Buy Now
            </StyledButtonDpE>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default HomeAv6R;
