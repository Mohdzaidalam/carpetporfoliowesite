import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-grid">
            
            <div className="footer-col brand-col">
              <div className="footer-logo">
                <span className="logo-text">Aurelia</span>
                <span className="logo-subtext">Carpets</span>
              </div>
              <p className="footer-desc">
                Weaving stories into every thread. Masterpieces crafted by artisans with generations of heritage, bringing timeless elegance to your modern living spaces.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">Ig</a>
                <a href="#" className="social-link">Fb</a>
                <a href="#" className="social-link">Pt</a>
                <a href="#" className="social-link">Tw</a>
              </div>
            </div>

            <div className="footer-col">
              <h3>Collections</h3>
              <ul>
                <li><a href="#">Persian Heritage</a></li>
                <li><a href="#">Modern Minimalist</a></li>
                <li><a href="#">Vintage Overdyed</a></li>
                <li><a href="#">Tribal & Geometric</a></li>
                <li><a href="#">Silk Masterpieces</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Bespoke Design</a></li>
                <li><a href="#">Carpet Restoration</a></li>
                <li><a href="#">Professional Cleaning</a></li>
                <li><a href="#">Home Trial</a></li>
                <li><a href="#">Interior Consultation</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Contact Us</h3>
              <address>
                <p>Irshad Ali</p>
                <p>+91 7505046678</p>
                <p><a href="mailto:info@aureliacarpets.com">info@aureliacarpets.com</a></p>
                <p><a href="mailto:contact@aureliacarpets.com">contact@aureliacarpets.com</a></p>
                <p><strong>Address:</strong> Imambada, Mirzapur 231001</p>
              </address>
            </div>

          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container flex-between">
          <p>&copy; {new Date().getFullYear()} Aurelia Carpets. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Shipping & Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
