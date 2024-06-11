/* eslint-disable no-unused-vars */
import React from "react";
import "./homeAv2.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomeAv2 = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Row>1.row</Row>
            <Row>
              <Col>1 of 2</Col>
              <Col>2 of 2</Col>
            </Row>
          </Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeAv2;
