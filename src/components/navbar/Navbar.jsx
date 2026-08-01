import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ onHomeClick, onProductsClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    if (onHomeClick) {
      onHomeClick();
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        
        <div className="navbar-logo">
          <a href="/" onClick={(e) => { e.preventDefault(); if(onHomeClick) onHomeClick(); }}>
            <div className="logo-icon">
              <div className="inner-square"></div>
            </div>
            <div className="logo-text-group">
              <span className="logo-title">CARPET</span>
              <span className="logo-subtitle">Floor & Paving Service Inc.</span>
            </div>
          </a>
        </div>
        
        <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); if(onHomeClick) onHomeClick(); }}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About Us</a></li>
            <li><a href="#product" onClick={(e) => { e.preventDefault(); if(onProductsClick) onProductsClick(); }}>Product</a></li>
            <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'footer')}>Contact Us</a></li>
          </ul>
        </div>

        <div className="navbar-actions-mobile">
          <div 
            className={`hamburger ${mobileMenuOpen ? 'open' : ''}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
