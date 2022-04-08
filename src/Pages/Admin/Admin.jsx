import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import "./Admin.css";

const Admin = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [pharmacyName, setPharmacyName] = useState("النهدي");
  const [description, setDescription] = useState("");
  const [discount, setDiscount] = useState("");
  const [alertDoc, setAlertDoc] = useState(false);
  const [imgUrl, setImageUrl] = useState(
    "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_eg/Products/CF%20455%20Eng%20eg_new.png?auto=format"
  );

  const [data, setData] = useState([]);
  const [resultValidation, setResult] = useState([]);

  const HandelReselt = () => {
    setName("");
    setPrice("");
    setPharmacyName("");
    setDescription("");
    setDiscount("");
    setAlertDoc(false);
    window.location.reload(false);
  };
  const HandelCheck = () => {
    const alertMessage = !alertDoc;
    setAlertDoc(alertMessage);
  };

  useEffect(() => {
    axios
      .get("https://61a758d0387ab200171d2c12.mockapi.io/products")
      .then((res) => setData(res.data));
  }, [resultValidation]);

  // console.log(resultValidation);

  const submitHandel = (e) => {
    const product = data.find((ele) => {
      return (
        ele.name.toLowerCase().includes(name.toLowerCase()) &&
        ele.pharmacyName === pharmacyName
      );
    });
    setResult(product);

    // console.log(resultValidation);
    if (
      name.length === 0 ||
      price.length === 0 ||
      pharmacyName.length === 0 ||
      description.length === 0 ||
      imgUrl.length === 0
    ) {
      e.preventDefault();
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "error",
        title: "All data must be entered",
      });
    } else if (product) {
      e.preventDefault();
      const ErrorTest = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      ErrorTest.fire({
        icon: "error",
        title: "This product already exists",
      });
    } else {
      const result = parseInt(price) - (parseInt(price) * 10) / 100;
      setDiscount(result);
      const obj = {
        name,
        price,
        pharmacyName,
        description,
        discount: result,
        imgUrl,
        alertDoc,
      };
      axios
        .post("https://61a758d0387ab200171d2c12.mockapi.io/products", {
          ...obj,
        })
        .then(HandelReselt)
        .catch((err) => console.log(err));
    }
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
            <Row>
              <div className="Prescription">
                <Form.Check
                  type={"checkbox"}
                  id={`default-checkbox`}
                  label={`Doctor's Prescription`}
                  onClick={HandelCheck}
                />
              </div>
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
