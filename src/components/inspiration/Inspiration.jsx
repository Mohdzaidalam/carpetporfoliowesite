import React from 'react';
import './Inspiration.css';
import inspirationImg1 from '../../assets/carpet-8.jpeg';
import inspirationImg2 from '../../assets/carpet-9.jpeg';

const Inspiration = () => {
  return (
    <section className="inspiration-section">
      <div className="inspiration-container">
        <div className="inspiration-images">
          <img src={inspirationImg1} alt="Carpet in living room" className="img-main" />
          <img src={inspirationImg2} alt="Carpet detail" className="img-overlay" />
        </div>
        <div className="inspiration-content">
          <h2>Transform Your Space</h2>
          <p className="subtitle">Design Inspiration</p>
          <p className="description">
            A beautiful carpet is more than just a floor covering; it's the foundation of your room's character. 
            Whether you are looking to ground a large open-concept living area or add a touch of warmth to a cozy bedroom, 
            our exquisite collections provide the perfect starting point for your interior design journey.
          </p>
          <ul className="benefits-list">
            <li>Hand-knotted with premium materials</li>
            <li>Timeless designs that never go out of style</li>
            <li>Durable construction for high-traffic areas</li>
          </ul>
          <button className="btn-shop-now">Shop The Look</button>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
