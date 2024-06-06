/* eslint-disable no-unused-vars */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./homeAv1.css";
import HomeAvT1 from "./homeAvT1/HomeAvT1";

const HomeAv1 = () => {
  return (
    <>
      <Container fluid className="p-0">
        <Row className="home-av1 m-0">
          <Col lg={6}>
            <HomeAvT1 />
          </Col>
          <Col lg={6}>2 of 2</Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeAv1;
