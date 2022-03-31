import React from "react";
import { GoLocation } from "react-icons/go";
import { BsTelephoneInbound } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import "./Contact.css";
import emailjs from "@emailjs/browser";
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
      <div className="container">
        <div className="Team-Header text-center">
          <span>Get In Touch</span>
          <h1>Get In Touch For Any Query</h1>
        </div>
        <div className="Touch-contant">
          <div className="touch-information">
            <div className="touch-left">
              <div className="touch-icon">
                <GoLocation />
              </div>
              <div className="touch-info">
                <h3>Our Head Office</h3>
                <span>123 Street, New York, USA</span>
              </div>
            </div>
            <div className="touch-left">
              <div className="touch-icon">
                <BsTelephoneInbound />
              </div>
              <div className="touch-info">
                <h3>Call for Help</h3>
                <span>+012 345 6789</span>
              </div>
            </div>
            <div className="touch-left">
              <div className="touch-icon">
                <HiOutlineMail />
              </div>
              <div className="touch-info">
                <h3>Email for Information</h3>
                <span>info@example.com</span>
              </div>
            </div>
          </div>
          <form className="touch-form " onSubmit={sendEmail}>
            <input type="text" placeholder="Your Name" name="name" />
            <input type="text" placeholder="Your Email" name="email" />
            <input type="text" placeholder="Subject" name="subject" />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="4"
              placeholder="Message"
            ></textarea>
            <input type="submit" className="btnMail" value={"send massage"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
