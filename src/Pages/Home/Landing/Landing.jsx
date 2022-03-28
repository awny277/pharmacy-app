import React, { useState } from "react";
// import { Carousel } from "react-bootstrap";
import slide1 from "../../../images/pharmacy-with-pharmacist-in-counter-and-people-buying-medicine-vector.jpg";
import slide2 from "../../../images/study-pharmacy.jpg";
import slide3 from "../../../images/search-bg.png";
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
                <h2>looking for a cure ?</h2>
                <p>
                  Discover the best affordable price compared to the most famous
                  pharmacies in the city
                </p>
                <div className=" SearchContInput">
                  <div className="SearchInput">
                    <i className="fas fa-search"></i>
                    <input
                      type="search"
                      name=""
                      id=""
                      placeholder="Search For a cure"
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
                <h1>Need the best treatment?</h1>
                <div className="LandingCall">
                  <h2 style={{ margin: "0 10px" }}>
                    Pay at the clinic with no extra
                  </h2>
                  <Register />
                </div>
                {/* <p>ادفع فى العيادة من غير زيادة</p> */}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Landing;
