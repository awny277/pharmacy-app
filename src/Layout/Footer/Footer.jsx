import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer text-center">
      <div className="container">
        <p>our SOCIAL media</p>
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
        <p className="copyright">
          &copy; 2022 <span>Pharmacy</span> all right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
