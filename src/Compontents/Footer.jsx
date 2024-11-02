import React from 'react';
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';
import './Footer.css';
import { Logo } from '../assets';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section footer-logo">
        <img src={Logo} alt="Black & Fighter Logo" />
      </div>
      
      <div className="footer-section footer-nav">
        <div className="navigation">
             <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#store">Store</a>
        <a href="#support">Support</a>
        </div>
        <p>© 2024 Black & Fighter. All rights reserved.</p>
      </div>
      
      <div className="footer-section footer-social-icons">
        <a href="https://www.instagram.com" aria-label="Instagram">
          <FiInstagram />
        </a>
        <a href="https://www.facebook.com" aria-label="Facebook">
          <FiFacebook />
        </a>
        <a href="https://www.twitter.com" aria-label="Twitter">
          <FiTwitter />
        </a>
        <a href="https://www.youtube.com" aria-label="YouTube">
          <FiYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
