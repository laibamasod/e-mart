import React from "react";
import "./style/footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGlobe } from 'react-icons/fa';

import payPic1 from "../images/payment1.jpg";
import payPic2 from "../images/payment2.jpg";
import payPic3 from "../images/payment3.jpg";
import payPic4 from "../images/payment4.jpg";

import offerPic1 from "../images/offerPic1.png";
import offerPic2 from "../images/offerPic2.png";
import offerPic3 from "../images/offerPic3.png";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h4>Customer Care</h4>
          <div className="footer-links">
            <a href="#" className="footer-link">
              Help Center
            </a>
            <a href="#" className="footer-link">
              How to Buy
            </a>
            <a href="#" className="footer-link">
              Corporate & Bulk Purchasing
            </a>
            <a href="#" className="footer-link">
              Returns & Refunds
            </a>
            <a href="#" className="footer-link">
              Daraz Shop
            </a>
            <a href="#" className="footer-link">
              Contact Us
            </a>
            <a href="#" className="footer-link">
              Purchase Protection
            </a>
            <a href="#" className="footer-link">
              Daraz Pick up Points
            </a>
          </div>
          <h4>Make Money With Us</h4>
          <div className="footer-links">
            <a href="#" className="footer-link">
              Daraz University
            </a>
            <a href="#" className="footer-link">
              Sell on Daraz
            </a>
            <a href="#" className="footer-link">
              Join Daraz Affiliate Program
            </a>
          </div>
        </div>
        <div className="col-md-3">
          <h4>Daraz</h4>
          <div className="footer-links">
            <a href="#" className="footer-link">
              Digital Payments
            </a>
            <a href="#" className="footer-link">
              Daraz Donates
            </a>
            <a href="#" className="footer-link">
              Daraz Blog
            </a>
            <a href="#" className="footer-link">
              Terms & Conditions
            </a>
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
            <a href="#" className="footer-link">
              NTN Number : 4012118-6
            </a>
            <a href="#" className="footer-link">
              STRN Number : 1700401211818
            </a>
            <a href="#" className="footer-link">
              Online Shopping App
            </a>
            <a href="#" className="footer-link">
              Online Grocery Shopping
            </a>
          </div>
        </div>

        <div className="col-md-3">
          <h4>International Sites</h4>
          <div className="footer-links">
            <a href="#" className="footer-link">
              <i className="bi bi-flag flag-icon"></i>
              Pakistan
            </a>
            <a href="#" className="footer-link">
              <i className="bi bi-flag flag-icon"></i>
              Bangladesh
            </a>
            <a href="#" className="footer-link">
              <i className="bi bi-flag flag-icon"></i>
              Sri Lanka
            </a>
            <a href="#" className="footer-link">
              <i className="bi bi-flag flag-icon"></i>
              Myanmar
            </a>
            <a href="#" className="footer-link">
              <i className="bi bi-flag flag-icon"></i>
              Nepal
            </a>
          </div>
          <div className="payment-methods">
            <h4>Payment Methods</h4>
            <div className="payment-images">
              <img src={payPic1} alt="Payment logos" />
              <img src={payPic2} alt="Payment logos" />
              <img src={payPic3} alt="Payment logos" />
              <img src={payPic4} alt="Payment logos" />
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <h4>Exclusive Deal and Offers!</h4>
          <div className="payment-images">
            <img src={offerPic1} alt="Offer logos" />
            <img src={offerPic2} alt="Offer logos" />
            <img src={offerPic3} alt="Offer logos" />
          </div>
          <br />
          <h4>Follow US</h4>
          <div className="social-icons">
          <a href="url_to_facebook" className="social-icon">
            <FaFacebook />
          </a>
          <a href="url_to_twitter" className="social-icon">
            <FaTwitter />
          </a>
          <a href="url_to_instagram" className="social-icon">
            <FaInstagram />
          </a>
          <a href="url_to_youtube" className="social-icon">
            <FaYoutube />
          </a>
          <a href="url_to_web" className="social-icon">
            <FaGlobe />
          </a>
        </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
