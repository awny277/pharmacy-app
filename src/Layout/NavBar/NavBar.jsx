import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Navbar.css";
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand>
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={"/"} data-rr-ui-event-key="#home" className="nav-link">
              Home
            </NavLink>
            <NavLink to={"/search"} className="nav-link">
              search
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav nav-order3">
          <Nav className="me-auto">
            <NavLink to={"/admin"} className="nav-link">
              Admin
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <img src={logo} alt="logo" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink
                to={"/"}
                data-rr-ui-event-key="#home"
                className="nav-link"
              >
                Home
              </NavLink>
              <NavLink to={"/search"} className="nav-link">
                search
              </NavLink>
              <NavLink to={"/admin"} className="nav-link">
                Admin
              </NavLink>
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link1">Admin</Nav.Link>
              <Nav.Link href="#link2">Search</Nav.Link> */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
