import React from 'react';
import "../Compontents/ContactSection.css"
import { BsArrowRightCircleFill } from 'react-icons/bs';


const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="subscribe">
        <h3>Subscribe</h3>
        <p>Stay updated with Black and Fighter</p>
        <div className="subscribe-input">
          <input type="email" placeholder="Your email address" />
          <button>
            <BsArrowRightCircleFill/>
          </button>
        </div>
      </div>
      <div className="help">
        <h3>Need help?</h3>
        <p>Discounts and news about products</p>
        <button className="contact-btn">Contact Us</button>
      </div>
    </div>
  );
};

export default ContactSection;
