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
    if (window.localStorage.getItem("userID")) {
      setId(window.localStorage.getItem("userID"));
    } else {
      return null;
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
              <NavLink to={"/Product"} className="nav-link">
                Product
              </NavLink>
              <NavLink to={"/admin"} className="nav-link">
                Admin
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
