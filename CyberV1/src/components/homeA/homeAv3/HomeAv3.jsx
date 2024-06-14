/* eslint-disable no-unused-vars */
import React from "react";
import "./homeAv3.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeAv3TopText from "./homeAv3TopText/HomeAv3TopText";
const HomeAv3 = () => {
  return (
    <>
      <Container
        fluid
        className="main-category d-flex flex-column align-items-center justify-content-center"
      >
        <Row className="top-category">
          <HomeAv3TopText />
        </Row>
        <Row>2.row</Row>
      </Container>
    </>
  );
};

export default HomeAv3;
