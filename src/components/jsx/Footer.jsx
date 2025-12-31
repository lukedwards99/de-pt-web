import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">D&E P.T.</h3>
          <p className="footer-description">
            Douglas & Edwards Personal Training - Transforming lives through 
            personalized fitness coaching and expert guidance.
          </p>
          <div className="social-links">
            {/* PLACEHOLDER LINKS - Replace with actual social media URLs */}
            <a href="#instagram" className="social-link" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#facebook" className="social-link" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#youtube" className="social-link" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#twitter" className="social-link" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact for Coaching</Link></li>
            <li><Link to="/resources">Free Resources</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Contact Info</h4>
          <ul className="footer-contact">
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:info@dept.com">info@dept.com</a>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <a href="tel:+15551234567">(555) 123-4567</a>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Your City, State</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} D&E P.T. All rights reserved.</p>
        <p className="footer-credit">Built by Luke Edwards & Kyle Douglas</p>
      </div>
    </footer>
  );
}

export default Footer;
