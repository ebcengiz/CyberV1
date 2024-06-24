/* eslint-disable no-unused-vars */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./homeAv4.css";
import HomeAv4R1 from "./homeAv4R1/HomeAv4R1";
const HomeAv4 = () => {
  return (
    <>
      <Container className="homeAv4">
        <Col>
          <Row className="homeAv4-tags">
            <HomeAv4R1 />
          </Row>
          <Row className="homeAv4-products-grid"></Row>
        </Col>
      </Container>
    </>
  );
};

export default HomeAv4;
