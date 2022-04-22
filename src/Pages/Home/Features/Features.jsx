import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import feature1 from "../../../images/img-features-01.svg";
import feature2 from "../../../images/img-features-02.svg";
import feature3 from "../../../images/img-features-03.svg";
import { GoLocation } from "react-icons/go";
import "./features.css";
const Feature = ({
  ShowMotahedaInMapClick,
  ShowMogtam3InMapClick,
  ShowNahdiInMapClick,
}) => {
  return (
    <React.Fragment>
      <div className="Feature">
        <span className="text-center">الأختيار الأفضل</span>
        <h2 className="text-center">أفضل الصيدليات</h2>
        <Container fluid>
          <Row className=" justify-content-around text-center">
            <Col sm={5} md={4}>
              <div className="featureCont">
                <img src={feature1} alt="test" />
                <h4>المتحدة</h4>
                <div className="touch-icon" onClick={ShowMotahedaInMapClick}>
                  <button className="btn MapButton">اعثر علينا</button>
                  <GoLocation />
                </div>
              </div>
            </Col>
            <Col sm={5} md={4}>
              <div className="featureCont">
                <img src={feature2} alt="test" />
                <h4>المجتمع</h4>
                <div className="touch-icon" onClick={ShowMogtam3InMapClick}>
                  <button className="btn MapButton">اعثر علينا</button>
                  <GoLocation />
                </div>
              </div>
            </Col>
            <Col sm={5} md={4}>
              <div className="featureCont">
                <img src={feature3} alt="test" />
                <h4>النهدي</h4>
                <div className="touch-icon" onClick={ShowNahdiInMapClick}>
                  <button className="btn MapButton">اعثر علينا</button>
                  <GoLocation />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* 31.117144847592204, 30.942763867400885 */}
    </React.Fragment>
  );
};

export default Feature;
