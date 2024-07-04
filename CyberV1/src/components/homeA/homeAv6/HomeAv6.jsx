/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./homeAv6.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

const HomeAv6 = () => {
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
      <Container fluid className="homeAv6-cntnr">
        <Row className="homeAv6-rw1">
          <Col>
            <span className="homeAv6-spn">Discounts up to -50%</span>
          </Col>
        </Row>
        <Row>
          {productsDpE.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={3}></Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeAv6;
