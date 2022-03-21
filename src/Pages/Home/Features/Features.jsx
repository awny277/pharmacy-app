import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import feature1 from "../../../images/img-features-01.svg";
import feature2 from "../../../images/img-features-02.svg";
import feature3 from "../../../images/img-features-03.svg";
import "./features.css";
const Feature = () => {
  return (
    <React.Fragment>
      <div className="Feature">
        <span className="text-center">the best choice</span>
        <h2 className="text-center">The most famous clinics</h2>
        <Container fluid>
          <Row className=" justify-content-around text-center">
            <Col sm={5} md={4}>
              <div className="featureCont">
                <img src={feature1} alt="test" />
                <h4>المتحدة</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
              </div>
            </Col>
            <Col sm={5} md={4}>
              <div className="featureCont">
                <img src={feature2} alt="test" />
                <h4>المجتمع</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
              </div>
            </Col>
            <Col sm={5} md={4}>
              <div className="featureCont">
                <img src={feature3} alt="test" />
                <h4>النهدي</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Feature;
