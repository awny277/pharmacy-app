import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { IoAlertCircleOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import "./ProductDetails.css";

import Card from "../../../Layout/Card/Card";
const ProductDetails = ({
  ShowMotahedaInMapClick,
  ShowMogtam3InMapClick,
  ShowNahdiInMapClick,
}) => {
  const [product, setproduct] = useState([]);
  const [SimilarProducts, setSimilarProducts] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  // جلب منتج معين لعرضه في صفحه خاصه به عن طريق ال
  // id
  // الخاص بالمنتج
  useEffect(() => {
    axios
      .get(`https://6276e9ed2f94a1d706082b7e.mockapi.io/products/${params.id}`)
      .then((res) => {
        setproduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [params.id]);

  // جلب باقي المنتجات اللتي تعرضها نفس الصيدلية
  useEffect(() => {
    axios
      .get("https://6276e9ed2f94a1d706082b7e.mockapi.io/products")
      .then((res) => {
        setSimilarProducts(res.data);
      });
  }, []);

  //الذهاب الي موقع كل صيدلية في الخريطة
  const MoveToLocation = () => {
    if (product.pharmacyName === "النهدي") {
      return ShowNahdiInMapClick();
    } else if (product.pharmacyName === "المجتمع") {
      return ShowMogtam3InMapClick();
    } else {
      return ShowMotahedaInMapClick();
    }
  };
  return (
    //  عرض المنتج
    <Container>
      <div className="product-details">
        <Row className="product-details-container">
          <Col md={5}>
            <div className="img-container">
              <img src={product.imgUrl} alt={product.name} />
            </div>
          </Col>
          <Col md={5}>
            <div className="product-details-content text-center">
              <h2> {product.name}</h2>
              <h3>الصيدلية : {product.pharmacyName}</h3>
              <div className="price">
                <h3>السعر : {product.price} ر.س</h3>
              </div>
              <p className="description-p"> {product.description}</p>
              <div className="touch-icon" onClick={MoveToLocation}>
                <button className="btn MapButton">اعثر علينا</button>
                <GoLocation />
              </div>
            </div>
          </Col>
        </Row>
        {/* تحذير للمنتجات اللتي تحتاج الي وصفة طبيب */}
        {product.alertDoc === true && (
          <div className="text-center alertDoc">
            <p>هذا المنتج يحتاج الي وصفة من الطبيب</p>
            <IoAlertCircleOutline className="alertIcon" />
          </div>
        )}
      </div>
      <div className="SimilarProducts">
        <h2 className="text-center">منتجات أخرى</h2>
        {/* كارد يحتوي علي المنتجات اللتي تقوم بعرضها نفس الصيديلة */}
        <Row>
          {SimilarProducts.filter(
            (ele) => ele.pharmacyName === product.pharmacyName
          ).map((ele, idx) => {
            return (
              <Col sm={5} md={3} key={idx}>
                <Card
                  imgUrl={ele.imgUrl}
                  ClickHandel={() => navigate(`/Product/${ele.id}`)}
                  productId={ele.id}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  );
};

export default ProductDetails;
