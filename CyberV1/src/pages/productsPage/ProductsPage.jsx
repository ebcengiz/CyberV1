/* eslint-disable no-unused-vars */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./productsPage.css";

const ProductsPage = () => {
  return (
    <>
      <Container fluid className="productsPage-ctr">
        <Row>
          <Col>1 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>1 of 3</Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductsPage;
