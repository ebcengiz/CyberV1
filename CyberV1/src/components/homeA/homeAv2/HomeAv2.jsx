/* eslint-disable no-unused-vars */
import React from "react";
import "./homeAv2.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeAv2A1 from "./homeAv2A1/HomeAv2A1";

const HomeAv2 = () => {
  return (
    <>
      <Container fluid className="main-home-av2">
        <Row>
          <Col>
            <Row className="d-flex flex-column align-items-center justify-content-center p-0">
              <HomeAv2A1 />
            </Row>
            <Row>
              <Col>1 of 2</Col>
              <Col>2 of 2</Col>
            </Row>
          </Col>
          <Col>2.Row</Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeAv2;
