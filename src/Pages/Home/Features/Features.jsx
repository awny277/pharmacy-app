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
        <h2 className="text-center">
          Why is the clinic the best choice for you?
        </h2>
        <Container fluid>
          <Row className=" justify-content-around text-center">
            <Col sm={5} md={4}>
              <div className="featureCont">
                <img src={feature1} alt="test" />
                <h4>ابحث بالتخصص والمنطقة</h4>
                <p>
                  {" "}
                  اختار التخصص اللي بتدور عليه و المنطقة الأقرب ليك و دوس بحث
                  هتلاقي مجموعة من أشطر الدكاترة تقدر تختار اقرب واحسن دكتور.
                </p>
              </div>
            </Col>
            <Col sm={5} md={4}>
              <div className="featureCont">
                <img src={feature2} alt="test" />
                <h4>احجز عند اشطر دكتور وادفع فى العيادة</h4>
                <p>
                  {" "}
                  قارن بين تقييمات الدكاترة و سعر الكشف المناسب ليك و احجز معادك
                  اونلاين ببلاش وادفع تمن الكشف في العيادة من غير زيادة .
                </p>
              </div>
            </Col>
            <Col sm={5} md={4}>
              <div className="featureCont">
                <img src={feature3} alt="test" />
                <h4>استلم روشتتك و إحفظها على حسابك</h4>
                <p>
                  الروشتة والعلاج مش هيضيع بعد كدة لأن حسابك على كلينيدو بيخليك
                  تقدر تحفظ كل روشتاتك و فحوصاتك و تشاركها مع دكتورك لضمان افضل
                  تشخيص.
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
