/* eslint-disable no-unused-vars */
import React from "react";
import "./productDetailsPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductDetailsPageA1 from "../../components/productDetailsPage/productDetailsPageA1/ProductDetailsPageA1";
import ProductDetailsPageA2 from "../../components/productDetailsPage/productDetailsPageA2/ProductDetailsPageA2";
import ProductDetailsPageA3 from "../../components/productDetailsPage/productDetailsPageA3/ProductDetailsPageA3";

const ProductDetailsPage = () => {
  return (
    <>
      <Container fluid>
        <Row className="productDetailsPage-row1">
          <Col>
            <ProductDetailsPageA1 />
          </Col>
        </Row>
        <Row className="productDetailsPage-row2">
          <Col className="productDetailsPage-col">
            <div className="productDetailsPage-row2-dv1">
              <ProductDetailsPageA2 />
            </div>
          </Col>
          <Col className="productDetailsPage-col">
            <div className="productDetailsPage-row2-dv2">
              <ProductDetailsPageA3 />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetailsPage;
