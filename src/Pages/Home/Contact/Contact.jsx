import React from "react";
import "./Contact.css";
import { GoLocation } from "react-icons/go";
import { BsTelephoneInbound } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div class="Touch" id="featuer">
      <div class="container">
        <div class="Team-Header text-center">
          <span>Get In Touch</span>
          <h1>Get In Touch For Any Query</h1>
        </div>
        <div class="Touch-contant">
          <div class="touch-information">
            <div class="touch-left">
              <div class="touch-icon">
                <GoLocation />
              </div>
              <div class="touch-info">
                <h3>Our Head Office</h3>
                <span>123 Street, New York, USA</span>
              </div>
            </div>
            <div class="touch-left">
              <div class="touch-icon">
                <BsTelephoneInbound />
              </div>
              <div class="touch-info">
                <h3>Call for Help</h3>
                <span>+012 345 6789</span>
              </div>
            </div>
            <div class="touch-left">
              <div class="touch-icon">
                <HiOutlineMail />
              </div>
              <div class="touch-info">
                <h3>Email for Information</h3>
                <span>info@example.com</span>
              </div>
            </div>
          </div>
          <div class="touch-form ">
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
