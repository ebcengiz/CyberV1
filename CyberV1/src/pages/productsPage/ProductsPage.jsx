/* eslint-disable no-unused-vars */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./productsPage.css";
import ProductsPageA1 from "../../components/productsPageA1/ProductsPageA1";
import ProductsPageA2 from "../../components/productsPageA2/ProductsPageA2";

const ProductsPage = () => {
  return (
    <>
      <Container fluid className="productsPage-ctr">
        <Row className="productsPage-breadcrumb-row">
          <Col>
            <ProductsPageA1 />
          </Col>
        </Row>
        <Row className="productsPage-content-row">
          <Col>
            <ProductsPageA2 />
          </Col>
          <Col>1 of 3</Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductsPage;
