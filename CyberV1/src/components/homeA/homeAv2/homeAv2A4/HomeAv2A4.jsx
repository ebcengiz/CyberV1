/* eslint-disable no-unused-vars */
import React from "react";
import "./homeAv2A4.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeAv2A4Text from "./homeAv2A4Text/HomeAv2A4Text";
import HomeAv2A4Image from "./homeAv2A4Image/HomeAv2A4Image";

const HomeAv2A4 = () => {
  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        {/* Sol sütun */}
        <Col xs={6} className="p-4">
          <Row className="h-100 align-items-center p-5 m-5">
            <Col className="text-center">
              <HomeAv2A4Text />
            </Col>
          </Row>
        </Col>
        {/* Sağ sütun */}
        <Col
          xs={6}
          className="p-0 mt-5 d-flex justify-content-end align-items-end"
        >
          <HomeAv2A4Image />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeAv2A4;
