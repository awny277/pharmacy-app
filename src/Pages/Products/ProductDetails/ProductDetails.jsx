import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { IoAlertCircleOutline } from "react-icons/io5";
import "./ProductDetails.css";

import Card from "../../../Layout/Card/Card";
const ProductDetails = ({ setdataCompare }) => {
  const [product, setproduct] = useState([]);
  const [SimilarProducts, setSimilarProducts] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    axios
      .get(`https://61a758d0387ab200171d2c12.mockapi.io/products/${params.id}`)
      .then((res) => {
        setproduct(res.data);
      });
  }, [params.id]);

  useEffect(() => {
    axios
      .get("https://61a758d0387ab200171d2c12.mockapi.io/products")
      .then((res) => {
        setSimilarProducts(res.data);
      });
  }, []);
  return (
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
              {window.localStorage.getItem("userID").length > 0 ? (
                <div className="price">
                  <h3>السعر : {product.discount} ر.س</h3>
                  <del> (ر.س {product.price})</del>
                </div>
              ) : (
                <div className="price">
                  {/* <h3> price: {product.price}</h3> */}
                  <h3>السعر : {product.price} ر.س</h3>
                </div>
              )}
              <p> {product.description}</p>
            </div>
          </Col>
        </Row>
        {product.alertDoc === true && (
          <div className="text-center alertDoc">
            <p>هذا المنتج يحتاج الي وصفة من الطبيب</p>
            <IoAlertCircleOutline className="alertIcon" />
          </div>
        )}
      </div>
      <div className="SimilarProducts">
        <h2 className="text-center">Similar Products</h2>
        <Row>
          {SimilarProducts.filter(
            (ele) => ele.pharmacyName === product.pharmacyName
          ).map((ele, idx) => {
            return (
              <Col sm={5} md={4} key={idx}>
                <Card
                  imgUrl={ele.imgUrl}
                  name={ele.name}
                  price={ele.price}
                  pharmacyName={ele.pharmacyName}
                  discount={ele.discount}
                  ClickHandel={() => navigate(`/Product/${ele.id}`)}
                  result={SimilarProducts}
                  setdataCompare={setdataCompare}
                  compare={ele.compare}
                  ElementId={ele.id}
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
