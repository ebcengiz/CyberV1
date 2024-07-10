/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./homeAv3.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeAv3TopText from "./homeAv3TopText/HomeAv3TopText";
import axios from "axios";
import HomeAv3CategoryCard from "./homeAv3CategoryCard/HomeAv3CategoryCard";
import { Link } from "react-router-dom";

const HomeAv3 = () => {
  const [categoryE, setCategoryE] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((response) => {
        setCategoryE(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container
      fluid
      className="main-category d-flex flex-column align-items-center justify-content-center"
    >
      <div className="category-container">
        <Row className="top-category">
          <HomeAv3TopText />
        </Row>
        <Link to="/productsPage" className="text-decoration-none">
          <div className="category-row">
            {categoryE.map((category) => (
              <HomeAv3CategoryCard
                key={category.id}
                title={category.title}
                imgE={category.imgE}
              />
            ))}
          </div>
        </Link>
      </div>
    </Container>
  );
};

export default HomeAv3;
