/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./homeAv4.css";
import HomeAv4R1 from "./homeAv4R1/HomeAv4R1";
import HomeAv4R2 from "./homeAv4R2/HomeAv4R2";
import axios from "axios";

const HomeAv4 = () => {
  const [productsE, setProductsE] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProductsE(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container className="homeAv4">
      <Row className="homeAv4-tags">
        <HomeAv4R1 />
      </Row>
      <Row className="homeAv4-products-grid">
        {productsE.map((product) => (
          <Col
            key={product.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="homeAv4-products-grid-col"
          >
            <HomeAv4R2
              descP={product.descP}
              imgP={product.imgPe}
              price={product.priceP}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeAv4;
