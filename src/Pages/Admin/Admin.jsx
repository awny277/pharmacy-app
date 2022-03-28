import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import "./Admin.css";

const Admin = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [pharmacyName, setPharmacyName] = useState("النهدي");
  const [description, setDescription] = useState("");
  const [discount, setDiscount] = useState("");
  const [imgUrl, setImageUrl] = useState(
    "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_eg/Products/CF%20455%20Eng%20eg_new.png?auto=format"
  );

  const submitHandel = () => {
    const result = parseInt(price) - (parseInt(price) * 10) / 100;
    setDiscount(result);
    console.log(result);
    console.log(discount);
    const obj = {
      name,
      price,
      pharmacyName,
      description,
      discount: result,
      imgUrl,
    };
    axios
      .post("https://61a758d0387ab200171d2c12.mockapi.io/products", {
        ...obj,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setName("");
    setPrice("");
    setPharmacyName("");
    setDescription("");
    setDiscount("");
  };
  return (
    <Container>
      <div className="add-project">
        <h1 className="text-center">Add New Cure</h1>
        <div className="add-project-content">
          <Form className="text-center">
            <Row>
              <Col xs={12} className="cloumn" md={5}>
                <FloatingLabel controlId="floatingInput" label="Cure Title ">
                  <Form.Control
                    type="text"
                    placeholder="Enter Cure Title"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Form.Text id="passwordHelpBlock" muted>
                    Include a short title that accurately describes your Cure.
                  </Form.Text>
                </FloatingLabel>
              </Col>
              <Col className="cloumn" xs={12} md={6}>
                <FloatingLabel controlId="floatingInput" label="Cure price">
                  <Form.Control
                    type="number"
                    placeholder="Enter Cure price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <Form.Text id="passwordHelpBlock" muted>
                    Please enter the appropriate price for the cure
                  </Form.Text>
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col className="cloumn" xs={12} md={6}>
                <FloatingLabel
                  controlId="floatingSelect"
                  label="Select pharmacy Name "
                >
                  <Form.Select
                    aria-label="Select pharmacy Name"
                    onChange={(event) => setPharmacyName(event.target.value)}
                    value={pharmacyName}
                  >
                    <option value="النهدي"> النهدي </option>
                    <option value="المجتمع">المجتمع</option>
                    <option value="المتحدة">المتحدة</option>
                    {/* Carpets and kilims */}
                  </Form.Select>
                  <Form.Text id="passwordHelpBlock" muted>
                    Please enter the name of the pharmacy that offers this
                    medicine
                  </Form.Text>
                </FloatingLabel>
              </Col>
              <Col className="cloumn" xs={12} md={5}>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Cure Details"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave Cure Details here"
                    style={{ height: "80px" }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="cloumn" md={8}>
                <FloatingLabel controlId="floatingInput" label="Cure Title ">
                  <Form.Control
                    type="text"
                    placeholder="Enter Image Url"
                    value={imgUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                  <Form.Text id="passwordHelpBlock" muted>
                    Enter Image Url.
                  </Form.Text>
                </FloatingLabel>
              </Col>
            </Row>
          </Form>
          <Row className="text-center m-3">
            <Col>
              <button className="btn btn-primary" onClick={submitHandel}>
                {" "}
                save
              </button>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Admin;
