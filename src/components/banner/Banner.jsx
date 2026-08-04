import React from 'react';
import './Banner.css';
import bkImage from '../../assets/bk.jpg';

const Banner = ({ onSeeAllProducts }) => {
  const scrollToProducts = () => {
    // We can still keep the old scroll logic as fallback or just use the prop
    if (onSeeAllProducts) {
      onSeeAllProducts();
    } else {
      const productsSection = document.getElementById('collections');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToExplore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="banner" style={{ backgroundImage: `url(${bkImage})` }}>
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1 className="banner-title">
          Elevate Your Space<br />
          With Fine Artistry<br />
          Underfoot
        </h1>
        <p className="banner-subtitle">
          Handcrafted rugs and premium carpets designed for timeless elegance and lasting comfort.
        </p>
        <div className="banner-actions">
          <button className="btn-banner btn-orange" onClick={scrollToProducts}>SEE ALL PRODUCTS</button>
          <button className="btn-banner btn-transparent" onClick={scrollToExplore}>EXPLORE MORE</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
