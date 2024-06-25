/* eslint-disable no-unused-vars */
import React from "react";
import "./homeAv5.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeAv5R1 from "./homeAv5R1/HomeAv5R1";

const HomeAv5 = () => {
  return (
    <>
      <Container className="homeAv5Banners">
        <Row>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <HomeAv5R1 />
          </Col>
          <Col>1 of 1</Col>
          <Col>1 of 1</Col>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeAv5;
