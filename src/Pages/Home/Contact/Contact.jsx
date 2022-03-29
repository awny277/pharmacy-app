import React from "react";
import "./Contact.css";
import { GoLocation } from "react-icons/go";
import { BsTelephoneInbound } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
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
          <div className="touch-form ">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="4"
              placeholder="Message"
            ></textarea>
            <a href="#">send message</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
