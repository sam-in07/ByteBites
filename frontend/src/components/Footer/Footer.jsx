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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            corporis quia quam laborum fuga error ipsa eveniet ipsum dolore
            ratione hic accusantium obcaecati quaerat culpa totam quibusdam,
            aliquid voluptatem cupiditate.
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
