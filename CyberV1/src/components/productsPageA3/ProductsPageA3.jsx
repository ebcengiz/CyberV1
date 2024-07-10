/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./productsPageA3.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import axios from "axios";
import ProductsPageA3Card from "./productsPageA3Card/ProductsPageA3Card";
import Pagination from "react-bootstrap/Pagination";
import { useProductContext } from "../productContext/ProductContext";

const ProductsPageA3 = () => {
  // const [productsPA, setProductsPA] = useState([]);
  const { selectedBrands, productsPA, setProductsPA } = useProductContext();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/productsPageV")
      .then((response) => {
        setProductsPA(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setProductsPA]);

  useEffect(() => {
    setFilteredProducts(
      productsPA.filter(
        (product) =>
          selectedBrands.length === 0 || selectedBrands.includes(product.brand)
      )
    );
  }, [productsPA, selectedBrands]);

  return (
    <Container className="productsPageA3-cntr">
      <Row className="productsPageA3-row1">
        <Col
          md={6}
          className="d-flex align-items-center justify-content-start productsPageA3-row1-col1"
        >
          <span className="productsPageA3-row1-col1-v1">
            Selected Products:
          </span>
          <span className="productsPageA3-row1-col1-v2">
            {filteredProducts.length}
          </span>
        </Col>
        <Col md={6} className="d-flex justify-content-end align-items-start">
          <Form.Select
            aria-label="Default select example"
            className="frm-slct-by"
          >
            <option className="frm-slct-opt">By rating</option>
            <option className="frm-slct-opt" value="1">
              One
            </option>
            <option className="frm-slct-opt" value="2">
              Two
            </option>
            <option className="frm-slct-opt" value="3">
              Three
            </option>
            <option className="frm-slct-opt" value="4">
              Four
            </option>
            <option className="frm-slct-opt" value="5">
              Five
            </option>
          </Form.Select>
        </Col>
      </Row>
      <Row className="productsPageA3-row2">
        {filteredProducts.map((product) => (
          <Col
            key={product.id}
            xs={12}
            sm={6}
            md={4}
            lg={4}
            className="productsPageA3-row2-spc-col"
          >
            <ProductsPageA3Card
              titlePageVe={product.titlePageV}
              imgPageVe={product.imgPageV}
              pricePageVe={product.pricePageV}
            />
          </Col>
        ))}
      </Row>
      <Row className="productsPageA3-row3">
        <Pagination className="d-flex justify-content-center align-items-center">
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{12}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </Row>
    </Container>
  );
};

export default ProductsPageA3;
