/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./homeAv5R1.css"; // Stil dosyası
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const HomeAv5R1 = ({ titleBe, descPbE, imgBe, keyId }) => {
  return (
    <Card className={`homeAv5R1Card homeAv5R1Card-${keyId}`}>
      <Card.Img
        variant="top"
        src={imgBe}
        className={`homeAv5R1Card-img homeAv5R1Card-img-${keyId}`}
      />
      <Card.Body className="homeAv5R1Card-bdy">
        <Card.Title
          className={`homeAv5R1Card-title homeAv5R1Card-title-${keyId}`}
        >
          {titleBe}
        </Card.Title>
        <Card.Text className="homeAv5R1Card-desc">{descPbE}</Card.Text>
        <Button className={`homeAv5R1Card-btn homeAv5R1Card-btn-${keyId}`}>
          Shop Now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default HomeAv5R1;
