/* eslint-disable no-unused-vars */
import React from "react";
import "./footerV1.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LogoF from "../../../public/LogoF.svg";
import Figure from "react-bootstrap/Figure";
import Facebook from "../../../public/Facebook.svg";
import Instagram from "../../../public/Instagram.svg";
import Twitter from "../../../public/Twitter.svg";
import Tiktok from "../../../public/Tiktok.svg";
import { Link, NavLink } from "react-router-dom";

const FooterV1 = () => {
  const handleGithub = () => {
    window.location.href = "https://github.com/ebcengiz";
  };

  const handleLinkedin = () => {
    window.location.href = "https://www.linkedin.com/in/enesbugracengiz/";
  };

  const handleCliclkSpace = () => {
    window.location.href = "http://localhost:5173/a";
  };

  return (
    <footer className="footerV1-cnt">
      <Container fluid>
        <Row className="footer-top-row">
          <Col md={3} className="footer-col" onClick={handleCliclkSpace}>
            <NavLink to="/" className="nav-link-ftr">
              <img src={LogoF} alt="Logo" className="footer-logo" />
              <p className="footer-description">
                We are a residential interior design firm located in Portland.
                Our boutique-studio offers more than
              </p>
            </NavLink>
          </Col>
          <Col md={2} className="footer-col" onClick={handleCliclkSpace}>
            <NavLink to="/" className="nav-link-ftr">
              <h5 className="footer-title">Services</h5>
              <ul className="footer-list">
                <li>Bonus program</li>
                <li>Gift cards</li>
                <li>Credit and payment</li>
                <li>Service contracts</li>
                <li>Non-cash account</li>
                <li>Payment</li>
              </ul>
            </NavLink>
          </Col>
          <Col md={2} className="footer-col" onClick={handleCliclkSpace}>
            <NavLink to="/" className="nav-link-ftr">
              <h5 className="footer-title">Assistance</h5>
              <ul className="footer-list">
                <li>Find an order</li>
                <li>Terms of delivery</li>
                <li>Exchange and return of goods</li>
                <li>Guarantee</li>
                <li>Frequently asked questions</li>
                <li>Terms of use of the site</li>
              </ul>
            </NavLink>
          </Col>
        </Row>
        <Row className="footer-bottom-row">
          <Col className="footer-bottom-col">
            <Figure className="ftr-fgr" onClick={handleGithub}>
              <Link to="#">
                <Figure.Image
                  width={16}
                  height={16}
                  alt="16x16"
                  src={Twitter}
                />
              </Link>
            </Figure>
            <Figure className="ftr-fgr" onClick={handleLinkedin}>
              <Link to="#">
                <Figure.Image
                  width={16}
                  height={16}
                  alt="16x16"
                  src={Facebook}
                />
              </Link>
            </Figure>
            <Figure className="ftr-fgr" onClick={handleGithub}>
              <Link to="#">
                <Figure.Image width={16} height={16} alt="16x16" src={Tiktok} />
              </Link>
            </Figure>
            <Figure onClick={handleLinkedin}>
              <Link to="#">
                <Figure.Image
                  width={16}
                  height={16}
                  alt="16x16"
                  src={Instagram}
                />
              </Link>
            </Figure>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterV1;
