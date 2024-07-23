/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
const PageNotFound = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Container style={{ width: "100%" }}>
        <Row>
          <Col className="d-flex flex-column align-items-center justify-content-center p-3 m-3">
            <h1 className="d-flex flex-column align-items-center justify-content-center p-3 m-3">
              404 - Sayfa Bulunmadı
            </h1>
            <Link to="/" className="btn btn-danger">
              Homepage
            </Link>
            <Alert show={show} variant="danger" className="p-3 m-3">
              <Alert.Heading>404</Alert.Heading>
              <p>The page does not exist or is under maintenance.</p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button onClick={() => setShow(false)} variant="danger">
                  Close me
                </Button>
              </div>
            </Alert>

            {!show && (
              <Button
                className="m-5"
                variant="danger"
                onClick={() => setShow(true)}
              >
                Show Alert
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PageNotFound;
