import React from "react";
import logo from "../../images/logo.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div class="footer text-center">
      <div class="container">
        {/* <div className="logo">
          <img src={logo} alt="Logo" />
        </div> */}
        <p>our SOCIAL media</p>
        <div class="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
        <p class="copyright">
          &copy; 2021 <span>kasper</span> all right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
