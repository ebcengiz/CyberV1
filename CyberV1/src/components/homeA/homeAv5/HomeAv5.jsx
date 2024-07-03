/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./homeAv5.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeAv5R1 from "./homeAv5R1/HomeAv5R1";
import axios from "axios";

const HomeAv5 = () => {
  const [productsB, setProductsB] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/productsB")
      .then((response) => {
        setProductsB(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container fluid className="homeAv5Banners">
      <Row className="justify-content-start align-items-center homeAv5Banners-row">
        {productsB.map((product) => (
          <Col
            key={product.id}
            xs={12}
            sm={6}
            md={3}
            className="homeAv5BannerCol"
          >
            <HomeAv5R1
              titleBe={product.titlePb}
              descPbE={product.descPb}
              imgBe={product.imgB}
              keyId={product.keyId}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeAv5;
