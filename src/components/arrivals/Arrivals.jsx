import React, { useState } from 'react';
import './Arrivals.css';
import img1 from '../../assets/carpet-4.jpeg';
import img2 from '../../assets/carpet-5.jpeg';
import img3 from '../../assets/carpet-6.jpeg';
import img4 from '../../assets/carpet-7.jpeg';
import img5 from '../../assets/carpet-11.jpeg';
import img6 from '../../assets/carpet-12.jpeg';
import img7 from '../../assets/carpet-13.jpeg';
import img8 from '../../assets/carpet-14.jpeg';
import img9 from '../../assets/carpet-17.jpeg';
import img10 from '../../assets/carpet-18.jpeg';

const Arrivals = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: 'Royal Shiraz', price: '$1,299', image: img1 },
    { id: 2, name: 'Azure Tabriz', price: '$949', image: img2 },
    { id: 3, name: 'Crimson Kashan', price: '$1,599', image: img3 },
    { id: 4, name: 'Ivory Isfahan', price: '$2,100', image: img4 },
    { id: 5, name: 'Emerald Nain', price: '$1,850', image: img5 },
    { id: 6, name: 'Golden Qum', price: '$3,200', image: img6 },
    { id: 7, name: 'Sapphire Heriz', price: '$1,150', image: img7 },
    { id: 8, name: 'Ruby Mashhad', price: '$1,420', image: img8 },
    { id: 9, name: 'Amber Yazd', price: '$1,780', image: img9 },
    { id: 10, name: 'Pearl Ardabil', price: '$2,350', image: img10 },
  ];

  return (
    <section className="arrivals-section">
      <div className="section-header">
        <h2>New Arrivals</h2>
        <p>Discover our latest handwoven treasures</p>
      </div>
      <div className="arrivals-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card" onClick={() => setSelectedProduct(product)} style={{cursor: 'pointer'}}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="product-action">
                <button className="btn-quick-view">Quick View</button>
              </div>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="product-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>&times;</button>
            <div className="modal-content">
              <div className="modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="modal-details">
                <h2>{selectedProduct.name}</h2>
                <p className="modal-description">
                  Experience the pinnacle of craftsmanship with this exquisite hand-knotted masterpiece. 
                  Made from the finest materials, it features intricate patterns that bring timeless elegance to any room.
                </p>
                <ul className="modal-specs">
                  <li><strong>Material:</strong> 100% Premium Wool</li>
                  <li><strong>Origin:</strong> Handcrafted</li>
                  <li><strong>Care:</strong> Professional cleaning only</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Arrivals;
