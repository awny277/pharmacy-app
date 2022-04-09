import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Register from "../../LoginForm/Register";
import "./Landing.css";

const Landing = ({ searchName }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const searchHandlerBtn = () => {
    searchName(search);
    navigate("/Product");
  };
  return (
    <React.Fragment>
      <Container fluid className="HomeLanding text-center">
        <div className="HomeLandingcont">
          <Row>
            <Col md={6}>
              <div className="SearchCont">
                <h2>هل تبحث عن علاج؟</h2>
                <p>
                  اكتشف أفضل الأسعار المعقولة مقارنة بأكثر الصيدليات شهرة في
                  المدينة
                </p>
                <div className=" SearchContInput">
                  <div className="SearchInput">
                    <i className="fas fa-search"></i>
                    <input
                      type="search"
                      name=""
                      id=""
                      placeholder="أبحث عن المنتجات"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  <button
                    onClick={() => searchHandlerBtn()}
                    to="/"
                    className="btn SearchButton"
                  >
                    <i className="fas fa-search "></i>
                    بحث
                  </button>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="LandingBooking">
                <h1>هل تحتاج إلى أفضل منتج؟</h1>
                <div className="LandingCall">
                  <h2 style={{ margin: "0 10px" }}>
                    ادفع في الصيدلية بدون اضافات
                  </h2>
                  {window.localStorage.getItem("isOline") === "false" && (
                    <div>
                      احصل علي خصم 10% عند تسجيل الدخول علي جميع المنتجات
                    </div>
                  )}
                  <div className="landingLogin">
                    {window.localStorage.getItem("isOline") === "true" ? (
                      <div></div>
                    ) : (
                      <Register />
                    )}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Landing;
