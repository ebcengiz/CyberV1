/* eslint-disable no-unused-vars */
import React from "react";
import "./homeAv2A4.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeAv2A4Text from "./homeAv2A4Text/HomeAv2A4Text";

const HomeAv2A4 = () => {
  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <Row>
          <Col className="d-flex flex-column justify-content-start align-items-start p-0 m-0">
            <HomeAv2A4Text />
          </Col>
          <Col>b</Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeAv2A4;
