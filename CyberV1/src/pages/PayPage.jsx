/* eslint-disable no-unused-vars */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

const PayPage = () => {
  return (
    <>
      <Container style={{ width: "100%" }}>
        <Row>
          <Col
            className="d-flex flex-column align-items-center justify-content-center p-3 m-3"
            style={{ width: "100%" }}
          >
            <h1
              className="d-flex flex-column align-items-center justify-content-center p-3 m-3"
              style={{ width: "100%" }}
            >
              Your payment process has been completed successfully
            </h1>

            <span
              className="d-flex flex-column align-items-center justify-content-center p-3 m-3"
              style={{ width: "100%" }}
            >
              <strong>Your order number:</strong>{" "}
              1234567890123456789012345678901234567890
            </span>

            {["dark"].map((variant) => (
              <Alert key={variant} variant={variant}>
                Click here to return to the{" "}
                <Alert.Link href="/">homepage</Alert.Link>. We wish you a
                pleasant shopping experience.
              </Alert>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PayPage;
