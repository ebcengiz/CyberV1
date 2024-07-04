/* eslint-disable no-unused-vars */
import React from "react";
import "./homeAv6.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomeAv6 = () => {
  return (
    <>
      <Container fluid className="homeAv6-cntnr">
        <Row className="homeAv6-rw1">
          <Col>
            <span className="homeAv6-spn">Discounts up to -50%</span>
          </Col>
        </Row>
        <Row>
          <Col>1 of 2</Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeAv6;
