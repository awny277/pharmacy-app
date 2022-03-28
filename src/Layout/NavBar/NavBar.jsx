import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import Register from "../../Pages/LoginForm/Register";

import "./Navbar.css";
const NavBar = () => {
  const [ID, setId] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    if (window.localStorage.getItem("userID").length > 0) {
      setId(window.localStorage.getItem("userID"));
    }
    axios
      .get("https://61a758d0387ab200171d2c12.mockapi.io/login/" + ID)
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((err) => console.log(err));
  }, [ID]);
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
            <NavLink to={"/Product"} className="nav-link">
              Product
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav nav-order3">
          <Nav className="me-auto">
            <NavLink to={"/admin"} className="nav-link">
              DashBoard
            </NavLink>
            {/* <NavLink to={"/register"} className="nav-link">
              Login
            </NavLink> */}
            <Register />
          </Nav>
        </Navbar.Collapse>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <h2>{userInfo.userName}</h2>
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
              <Register />
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
