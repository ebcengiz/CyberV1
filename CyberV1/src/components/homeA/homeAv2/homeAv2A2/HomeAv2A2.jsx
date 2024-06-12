/* eslint-disable no-unused-vars */
import React from "react";
import "./homeAv2A2.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeAv2A2Image from "./homeAv2A2Image/HomeAv2A2Image";
import HomeAv2A2Text from "./homeAv2A2Text/HomeAv2A2Text";

const HomeAv2A2 = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="p-0 m-0">
            <HomeAv2A2Image />
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center m-5">
            <HomeAv2A2Text />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeAv2A2;
