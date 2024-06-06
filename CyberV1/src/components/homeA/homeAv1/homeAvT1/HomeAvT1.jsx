/* eslint-disable no-unused-vars */
import React from "react";
import "./homeAvT1.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeAvB1 from "../homeAvB1/HomeAvB1";

const HomeAvT1 = () => {
  return (
    <>
      <Container fluid>
        <Row className="text-center d-flex flex-column justify-content-center align-items-center content-box">
          <Col className="text-center d-flex flex-column justify-content-center align-items-start context-box-col">
            <Row className="d-flex justify-content-center align-items-center title-one">
              <span>Pro.Beyond.</span>
            </Row>
            <Row className="d-flex justify-content-center align-items-center title-two">
              <span className="text-one">
                IPhone 14 <span className="text-two">Pro</span>
              </span>
            </Row>
            <Row className="d-flex justify-content-center align-items-center title-three">
              <span>
                Created to change everything for the better. For everyone
              </span>
            </Row>
            <Row className="d-flex justify-content-center align-items-center title-button">
              <HomeAvB1 />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeAvT1;
