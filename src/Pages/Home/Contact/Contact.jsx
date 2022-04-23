import React from "react";
import { GoLocation } from "react-icons/go";
import { BsTelephoneInbound } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { Col, Row } from "react-bootstrap";
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_98in86l",
        "template_g648vhb",
        e.target,
        "bMMnhGYnofDtJJqJI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="Touch" id="featuer">
      <div className="container-fluid">
        <div className="Team-Header text-center">
          <span>ابقى على تواصل</span>
          <h1>تواصل معنا لأي استفسار</h1>
        </div>
        <div className="Touch-contant">
          <Row className="touch-row">
            <Col md={5}>
              <div className="touch-information">
                <div className="touch-left">
                  <div className="touch-icon">
                    <GoLocation />
                  </div>
                  <div className="touch-info">
                    <h3>مكتبنا الرئيسي</h3>
                    <span>123 Street, MAkkAH, KSA</span>
                  </div>
                </div>
                <div className="touch-left">
                  <div className="touch-icon">
                    <BsTelephoneInbound />
                  </div>
                  <div className="touch-info">
                    <h3>أتصل بنا للمساعدة</h3>
                    <span>+012 345 6789</span>
                  </div>
                </div>
                <div className="touch-left">
                  <div className="touch-icon">
                    <HiOutlineMail />
                  </div>
                  <div className="touch-info">
                    <h3>البريد الإلكتروني الخاص بنا</h3>
                    <span>info@example.com</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <form className="touch-form " onSubmit={sendEmail}>
                <input type="text" placeholder="الأسم" name="name" />
                <input
                  type="text"
                  placeholder="البريد الألكتروني"
                  name="email"
                />
                <input type="text" placeholder="الموضوع" name="subject" />
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="4"
                  placeholder="محتوي الرسالة"
                ></textarea>
                <input
                  type="submit"
                  className="btnMail"
                  value={"أرسل الرسالة"}
                />
              </form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Contact;
