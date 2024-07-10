/* eslint-disable no-unused-vars */
import React from "react";
import "./homeAv7.css";
import Banner2L from "../../../../public/Banner2L.svg";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
const HomeAv7 = () => {
  return (
    <>
      <Link to="/productsPage">
        <Container fluid className="homeAv7E">
          <img src={Banner2L} alt="Banner2L" />
        </Container>
      </Link>
    </>
  );
};

export default HomeAv7;
