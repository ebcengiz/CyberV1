/* eslint-disable no-unused-vars */
import React from "react";
import Nav from "react-bootstrap/Nav";
import "./homeAv4R1.css";

const HomeAv4R1 = () => {
  return (
    <>
      <Nav className="justify-content-start homeAv4R1Css" activeKey="/">
        <Nav.Item>
          <Nav.Link href="/">New Arrival</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Bestseller</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Featured Products</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default HomeAv4R1;
