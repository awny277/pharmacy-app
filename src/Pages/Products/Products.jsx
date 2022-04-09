import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./../../Layout/Card/Card";
import { Col, Container, Row, FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import imgNotfound from "../../images/notfound2.svg";
import "./Products.css";

const Product = ({ searchName, OfferHandler, setdataCompare }) => {
  const [search, setSearch] = useState(searchName);
  const [products, setProducts] = useState([]);
  const [result, setResult] = useState([]);
  const [compare, setCompare] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://61a758d0387ab200171d2c12.mockapi.io/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  useEffect(() => {
    const data = products
      .filter((ele) => ele.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    setResult(data);
  }, [products, search, OfferHandler]);

  return (
    <Container>
      <div className="products-search-page">
        <h1 className="text-center">أبحث عن المنتجات</h1>
        <Row className="searchInput">
          <Col xs={12} md={7}>
            <FloatingLabel
              controlId="floatingInput"
              label="أبحث عن المنتجات "
              className="text-center"
            >
              <Form.Control
                type="search"
                placeholder="أدخل اسم المنتج"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Form.Text id="passwordHelpBlock" muted>
                ابحث عن المنتجات بسعر مثالي
              </Form.Text>
            </FloatingLabel>
          </Col>
        </Row>
        {result.length > 0 ? (
          <div className="product-search-container">
            <Row>
              {result.map((ele, idx) => {
                return (
                  <Col sm={6} md={4} key={idx}>
                    <Card
                      OfferHandler={OfferHandler}
                      imgUrl={ele.imgUrl}
                      name={ele.name}
                      price={ele.price}
                      pharmacyName={ele.pharmacyName}
                      discount={ele.discount}
                      ClickHandel={() => navigate(`/Product/${ele.id}`)}
                      result={result}
                      setdataCompare={setdataCompare}
                      compare={ele.compare}
                      ElementId={ele.id}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        ) : (
          <div className="text-center notFound">
            <h2 className="notfoundText ">هذا المنتج غير موجود</h2>
            <img
              className="imgNotfound"
              src={imgNotfound}
              alt="there is no data to compare"
            />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Product;
