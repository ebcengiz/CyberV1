/* eslint-disable no-unused-vars */
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CyberLogo from "../../../public/cyberLogo.svg";
import SearchForm from "./SearchForm";
import "./navbarV1.css";
import FavoriteI from "../../assets/Favorites.svg";
import CartI from "../../assets/Cart.svg";
import UserI from "../../assets/User.svg";
import { Link } from "react-router-dom";

const NavbarV1 = () => {
  return (
    <>
      <Navbar
        expand="lg"
        style={{
          padding: "16px 160px 16px 160px",
          border: "1px solid #B5B5B5",
        }}
      >
        <Container fluid>
          <Navbar.Brand href="#" className="navbar-brand-mr">
            <img src={CyberLogo} alt="CyberLogo" />
          </Navbar.Brand>
          <SearchForm />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="navbar-brand-ml">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" className="nav-link-mr">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="nav-link-mr">
                About
              </Nav.Link>
              <Nav.Link
                href="/contactUs"
                className="nav-link-mr nav-link-contact"
              >
                Contact Us
              </Nav.Link>
              <Nav.Link href="/blog" className="navbar-brand-mr">
                Blog
              </Nav.Link>

              <>
                <div className="nav-link-container d-flex align-items-center justify-content-center">
                  <Link
                    className="d-flex align-items-center justify-content-center"
                    to="/"
                  >
                    <img src={FavoriteI} alt="Favorites" />
                  </Link>
                </div>
                <div className="nav-link-container d-flex align-items-center justify-content-center">
                  <Link
                    className="d-flex align-items-center justify-content-center"
                    to="/"
                  >
                    <img src={CartI} alt="Cart" />
                  </Link>
                </div>
                <div className="nav-link-container d-flex align-items-center justify-content-center">
                  <Link
                    className="d-flex align-items-center justify-content-center"
                    to="/"
                  >
                    <img src={UserI} alt="Cart" />
                  </Link>
                </div>
              </>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarV1;
