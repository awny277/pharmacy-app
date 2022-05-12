import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./../../Layout/Card/Card";
import { Col, Container, Row, FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import imgNotfound from "../../images/notfound2.svg";
import "./Products.css";

const Product = ({
  searchName,
  OfferHandler,
  setdataCompare,
  Loginn,
  userInfo,
}) => {
  const [search, setSearch] = useState(searchName);
  const [products, setProducts] = useState([]);
  const [result, setResult] = useState([]);
  const [cheap, setCheap] = useState(false);
  const [expensive, setExpensive] = useState(true);
  // const [compare, setCompare] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://6276e9ed2f94a1d706082b7e.mockapi.io/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  useEffect(() => {
    const data = products.filter(
      (ele) =>
        ele.name.toLowerCase().includes(search.toLowerCase()) ||
        ele.enName.toLowerCase().includes(search.toLowerCase())
    );
    if (expensive === true) {
      data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      setResult(data);
    } else if (cheap === true) {
      data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      setResult(data);
    }
  }, [products, search, OfferHandler, cheap, expensive]);

  return (
    <Container fluid>
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
                onChange={(e) => {
                  if (window.localStorage.getItem("isOline") === "false") {
                    e.preventDefault();
                    Loginn();
                  } else {
                    setSearch(e.target.value);
                  }
                }}
              />
              <Form.Text id="passwordHelpBlock" muted>
                ابحث عن المنتجات بسعر مثالي
              </Form.Text>
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col sm={3} className="Radio-button ">
            <div className="Radio-button-containet">
              <h4> : ترتيب السعر حسب </h4>
              <hr />
              <Form>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className=" ">
                    <Col>
                      <Form.Check
                        inline
                        label="أقل سعر"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                        onChange={() => {
                          setExpensive(true);
                          setCheap(false);
                        }}
                        value={true}
                        checked={expensive}
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        inline
                        label="أعلي سعر"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                        onChange={() => {
                          setCheap(true);
                          setExpensive(false);
                        }}
                        value={true}
                      />
                    </Col>
                  </div>
                ))}
              </Form>
            </div>
          </Col>
          {result.length > 0 ? (
            <Col sm={9}>
              <div className="product-search-container">
                <Row>
                  {result.map((ele, idx) => {
                    return (
                      <Col sm={6} md={4} key={idx}>
                        <Card
                          productId={ele.id}
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
                          userInfo={userInfo}
                          Loginn={Loginn}
                          // handelDelete ={handelDelete}
                        />
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </Col>
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
        </Row>
      </div>
    </Container>
  );
};

export default Product;
