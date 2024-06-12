/* eslint-disable no-unused-vars */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./homeAv2A1.css";
import HomeAv2A1Img from "./homeAv2A1Img/HomeAv2A1Img";
import HomeAv2A1Text from "./homeAv2A1Text/HomeAv2A1Text";

const HomeAv2A1 = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="p-0 m-0">
            <HomeAv2A1Img />
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center m-auto">
            <HomeAv2A1Text />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeAv2A1;
