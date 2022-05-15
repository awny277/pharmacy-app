import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import "./Admin.css";

const Admin = () => {
  const [name, setName] = useState("");
  const [enName, setEnName] = useState("");
  const [price, setPrice] = useState("");
  const [pharmacyName, setPharmacyName] = useState("النهدي");
  const [description, setDescription] = useState("");
  const [discount, setDiscount] = useState("");
  const [alertDoc, setAlertDoc] = useState(false);
  const [imgUrl, setImageUrl] = useState(
    "https://i.pinimg.com/564x/ab/5d/a8/ab5da80fd13df4048ceb235bc9723720.jpg"
  );
  const [data, setData] = useState([]);
  const [resultValidation, setResult] = useState([]);

  // حدف جميع الحقول عند اضافة المنتج
  const HandelReselt = () => {
    setName("");
    setPrice("");
    setPharmacyName("");
    setDescription("");
    setDiscount("");
    setEnName("");
    setAlertDoc(false);
    window.location.reload(false);
  };

  // دالة التأكد من ان المنتج يحتاج الي وصة طبيب
  const HandelCheck = () => {
    const alertMessage = !alertDoc;
    setAlertDoc(alertMessage);
  };

  // جلب جميع البيانات من الداتا بيز للمقارنة بين المنتج الجديد المنتجات السابقة للتأكد من ان المنتج لا يتكرر مرتين
  useEffect(() => {
    axios
      .get("https://6276e9ed2f94a1d706082b7e.mockapi.io/products")
      .then((res) => setData(res.data));
  }, [resultValidation]);

  const submitHandel = (e) => {
    // يتاأكد ان المنتج غير موجود سابفا
    const product = data.find((ele) => {
      return (
        ele.name.toLowerCase().includes(name.toLowerCase()) &&
        ele.pharmacyName === pharmacyName
      );
    });
    setResult(product);
    // لا يسمح بوجود حقل فارغ
    if (
      name.length === 0 ||
      enName.length === 0 ||
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
        title: "يجب ملئ جيمع الحقول",
      });
    } else if (product) {
      //  لو المنتج موجود سابقالا تقم بأضافته
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
        title: "هذا المنتج موجود بالفعل",
      });
    } else {
      //  لو المنتج غير موجود سابقا تقوم بأضافته
      const result = parseInt(price) - (parseInt(price) * 10) / 100;
      setDiscount(result);
      const obj = {
        name,
        enName,
        price,
        pharmacyName,
        description,
        discount: result,
        imgUrl,
        alertDoc,
      };
      axios
        .post("https://6276e9ed2f94a1d706082b7e.mockapi.io/products", {
          ...obj,
        })
        .then(HandelReselt)
        .catch((err) => console.log(err));
    }
  };
  return (
    <Container>
      <div className="add-project">
        <h1 className="text-center">أضف منتج جديد</h1>
        <div className="add-project-content">
          <Form className="text-center">
            <Row>
              <Col xs={12} md={5} className="cloumn">
                <FloatingLabel
                  controlId="floatingInput"
                  label="أدخل أسم المنتج باللغة العربية "
                >
                  <Form.Control
                    type="text"
                    placeholder="أدخل أسم المنتج"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Form.Text id="passwordHelpBlock" muted>
                    قم بتضمين عنوان قصير باللغة العربية يصف منتجك بدقة
                  </Form.Text>
                </FloatingLabel>
              </Col>
              <Col xs={12} md={5} className="cloumn">
                <FloatingLabel
                  controlId="floatingInput"
                  label=" أدخل أسم المنتج باللغة الأنجليزية"
                >
                  <Form.Control
                    type="text"
                    placeholder="أدخل أسم المنتج باللغة الأنجليزية"
                    value={enName}
                    onChange={(e) => setEnName(e.target.value)}
                  />
                  <Form.Text id="passwordHelpBlock" muted>
                    قم بتضمين عنوان قصير باللغة الأنجليزية يصف منتجك بدقة
                  </Form.Text>
                </FloatingLabel>
              </Col>
              <Col className="cloumn" xs={12} md={5}>
                <FloatingLabel controlId="floatingInput" label="سعر المنتج">
                  <Form.Control
                    type="number"
                    placeholder="أدخل سعر المنتج"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <Form.Text id="passwordHelpBlock" muted>
                    الرجاء إدخال السعر المناسب للمنتج
                  </Form.Text>
                </FloatingLabel>
              </Col>
              <Col className="cloumn" xs={12} md={5}>
                <FloatingLabel
                  controlId="floatingSelect"
                  label="قم بأختيار الصيدلية "
                >
                  <Form.Select
                    aria-label="قم بأختيار الصيدلية"
                    onChange={(event) => setPharmacyName(event.target.value)}
                    value={pharmacyName}
                  >
                    <option value="النهدي"> النهدي </option>
                    <option value="المجتمع">المجتمع</option>
                    <option value="المتحدة">المتحدة</option>
                  </Form.Select>
                  <Form.Text id="passwordHelpBlock" muted>
                    الرجاء إدخال اسم الصيدلية التي تقدم هذا المنتج
                  </Form.Text>
                </FloatingLabel>
              </Col>
              <Col className="cloumn" xs={12} md={5}>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="تفاصيل المنتج"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="اترك تفاصيل المنتج هنا"
                    style={{ height: "80px" }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
              <Col xs={12} md={5} className="cloumn">
                <FloatingLabel
                  controlId="floatingInput"
                  label=" رابط صورة المنتج"
                >
                  <Form.Control
                    type="text"
                    placeholder="برجاء ادخال رابط صورة المنتج"
                    value={imgUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                  <Form.Text id="passwordHelpBlock" muted>
                    قم بأدخال رابط صورة المنتج
                  </Form.Text>
                </FloatingLabel>
              </Col>
              <Col xs={12} md={4}>
                <div className="Prescription">
                  <Form.Check
                    type={"checkbox"}
                    id={`default-checkbox`}
                    label={`هذا المنتج يحتاج الي وصفة من الطبيب`}
                    onClick={HandelCheck}
                  />
                </div>
              </Col>
            </Row>
          </Form>
          <Row className="text-center m-3">
            <Col>
              <button className="btn btn-saveDate" onClick={submitHandel}>
                {" "}
                حفظ
              </button>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Admin;
