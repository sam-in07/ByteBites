import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
           Tomato is a food delivery service that connects customers with local restaurants. We offer a wide variety of cuisines and dishes, and our easy-to-use platform makes it simple to order food online. Whether you're craving pizza, sushi, or something else, Tomato has you covered. Our mission is to provide delicious food and excellent service to our customers, while also supporting local businesses.
          </p>
          <div className="footer-social-icons">
            {/* div.x  & img*n   */}

            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivary</li>
            <li>Privacy Ploicy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+01858756867</li>
            <li>chainsamin@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        &copy; 2026 All rights reserved | @Chainsamin;
      </p>
    </div>
  );
};

export default Footer;
