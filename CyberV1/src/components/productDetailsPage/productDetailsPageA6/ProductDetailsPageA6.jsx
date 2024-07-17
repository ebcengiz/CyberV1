/* eslint-disable no-unused-vars */
import "./productDetailsPageA6.css";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import HomeAv6R from "../../homeA/homeAv6/homeAv6R/HomeAv6R";
const ProductDetailsPageA6 = () => {
  const [productsDpE, setProductsDpE] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/productsDp")
      .then((response) => {
        setProductsDpE(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Container className="homeAv6-cntnr">
        <Row className="homeAv6-rw1">
          <Col>
            <span
              className="homeAv6-spn"
              style={{
                color: "black",
                fontFamily: "sans-serif",
                fontSize: "24px",
                fontWeight: "500",
                lineHeight: "32px",
                textAlign: "center",
              }}
            >
              Related Products
            </span>
          </Col>
        </Row>
        <Row className="homeAv6-rw2">
          {productsDpE.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={3} className="homeAv6-cl1">
              <HomeAv6R
                descDpE={product.descDp}
                imgDpE={product.imgDp}
                priceDpE={product.priceDp}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductDetailsPageA6;
