
import React from 'react';
import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Follow Us</h4>
          <a href="https://www.facebook.com/profile.php?id=100008370372830&mibextid=2JQ9oc" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaFacebook />
          </a>
          <a href="https://x.com/aryan52649?t=P5j8TmgL340EYL-nCXcKPg&s=08" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FaTwitter/>
          </a>
          <a href="https://www.instagram.com/_aryan_official_27?igsh=MXhoMjZvY3l2ZjJxbQ==" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaInstagram />
          </a>
        </div>
        <div className="footer-section">
          <h4>About Us</h4>
          <p> Our team consists of passionate quiz enthusiasts who are committed to crafting engaging and educational quizzes for a wide audience.</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: aryankumarsingh2703@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
