import React from "react";
// import { Carousel } from "react-bootstrap";
import slide1 from "../../../images/pharmacy-with-pharmacist-in-counter-and-people-buying-medicine-vector.jpg";
import slide2 from "../../../images/study-pharmacy.jpg";
import slide3 from "../../../images/search-bg.png";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <React.Fragment>
      <Container fluid className="HomeLanding text-center">
        <div className="HomeLandingcont">
          <Row>
            <Col md={6}>
              <div className="SearchCont">
                <h2>ابحث عن طبيب ، حدد موعد</h2>
                <p>
                  اكتشف أفضل الأطباء والعيادة والمستشفى في المدينة الأقرب إليك
                </p>
                <div className=" SearchContInput">
                  <div className="SearchInput">
                    <i className="fas fa-search"></i>
                    <input
                      type="search"
                      name=""
                      id=""
                      placeholder="Search For a Doctor"
                    />
                  </div>
                  <NavLink to="/" className="btn SearchButton">
                    <i className="fas fa-search "></i>
                    بحث
                  </NavLink>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="LandingBooking">
                <h1>محتاج دكتور شاطر؟</h1>
                <div className="LandingCall">
                  <NavLink to="/" className="btn">
                    <i className="fas fa-phone"></i> اتصل بينا{" "}
                  </NavLink>
                  <h2>احجز أونلاين أو احنا نحجزلك</h2>
                </div>
                <p>ادفع فى العيادة من غير زيادة</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Landing;
