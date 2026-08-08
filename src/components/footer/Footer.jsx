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
                <a
                  href="https://www.instagram.com/aureliacarpets?utm_source=qr"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Follow us on Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/share/1DAuo9FR3E/?mibextid=wwXIfr"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Follow us on Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
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
