import React from "react";
import "./Footer.css";
import assets from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            {" "}
            At Tomato, we’re not just another food delivery app—we're your go-to
            food companion, built to satisfy your cravings with a tap. Whether
            you're chillin’ at home, grinding through work, or binge-watching
            your favorite shows, we make sure your next meal is just minutes
            away.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <a href="https://linkedin.com/in/hariharan-venkatesan-2650a5254">
              <img src={assets.linkedin_icon} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-944-230-2465</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 © Hariharan | Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
