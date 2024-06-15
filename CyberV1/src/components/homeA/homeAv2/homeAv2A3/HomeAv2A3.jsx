/* eslint-disable no-unused-vars */
import React from "react";
import "./homeAv2A3.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeAv2A3Image from "./homeAv2A3Image/HomeAv2A3Image";
import HomeAv2A3Text from "./homeAv2A3Text/HomeAv2A3Text";
const HomeAv2A3 = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="p-0 m-0 pt-2">
            <HomeAv2A3Image />
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center m-5 mt-2">
            <HomeAv2A3Text />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeAv2A3;
