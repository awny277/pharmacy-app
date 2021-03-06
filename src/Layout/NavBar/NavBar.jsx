import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import Register from "../../Pages/LoginForm/Register";
import { BsFillPersonLinesFill } from "react-icons/bs";
import "./Navbar.css";
const NavBar = () => {
  // جلب بيانات المستخدم لعرض اسمه
  const [ID, setId] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    if (window.localStorage.getItem("userID")) {
      setId(window.localStorage.getItem("userID"));
      axios
        .get("https://6276e9ed2f94a1d706082b7e.mockapi.io/login/" + ID)
        .then((res) => {
          setUserInfo(res.data);
        })
        .catch(() => {
          window.localStorage.setItem("userName", "");
          window.localStorage.setItem("password", "");
          window.localStorage.setItem("email", "");
          window.localStorage.setItem("userID", "");
          window.localStorage.setItem("isOline", "false");
          window.location.reload(false);
        });
    } else {
      return null;
    }
  }, [ID]);
  return (
    // عرض حميع الروابط
    <Navbar bg="light" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand>
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Collapse id="basic-navbar-nav nav-order3">
          <Nav className="me-auto">
            {window.localStorage.getItem("isOline") === "true" && (
              <DropdownButton
                id="dropdown-basic-button"
                title={<BsFillPersonLinesFill className="UserIcon" />}
              >
                <Dropdown.Item>{userInfo.userName}</Dropdown.Item>
                <Dropdown.Divider />
                <Register />
              </DropdownButton>
            )}
            <NavLink to={"/Product"} className="nav-link">
              المنتجات{" "}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {userInfo.admin === true && (
              <NavLink to={"/admin"} className="nav-link">
                لوحة التحكم
              </NavLink>
            )}

            <NavLink to={"/"} data-rr-ui-event-key="#home" className="nav-link">
              الرئيسية
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
                الرئيسية
              </NavLink>
              <NavLink to={"/Product"} className="nav-link">
                المنتجات
              </NavLink>
              {userInfo.admin === true && (
                <NavLink to={"/admin"} className="nav-link">
                  لوحة التحكم
                </NavLink>
              )}
            </Nav>
            {userInfo.userName && <Register />}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
