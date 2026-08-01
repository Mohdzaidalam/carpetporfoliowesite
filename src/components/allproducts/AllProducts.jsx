import React, { useState } from 'react';
import './AllProducts.css';

// Importing a subset of beautiful carpets for the gallery
import img1 from '../../assets/carpet-1.jpeg';
import img2 from '../../assets/carpet-2.jpeg';
import img3 from '../../assets/carpet-3.jpeg';
import img4 from '../../assets/carpet-4.jpeg';
import img5 from '../../assets/carpet-5.jpeg';
import img6 from '../../assets/carpet-6.jpeg';
import img7 from '../../assets/carpet-7.jpeg';
import img8 from '../../assets/carpet-8.jpeg';
import img9 from '../../assets/carpet-9.jpeg';
import img10 from '../../assets/carpet-10.jpeg';
import img11 from '../../assets/carpet-11.jpeg';
import img12 from '../../assets/carpet-12.jpeg';
import img13 from '../../assets/carpet-13.jpeg';
import img14 from '../../assets/carpet-14.jpeg';
import img15 from '../../assets/carpet-15.jpeg';
import img16 from '../../assets/carpet-16.jpeg';

const allProducts = [
  { id: 1, name: 'Persian Heritage', image: img1 },
  { id: 2, name: 'Modern Minimalist', image: img2 },
  { id: 3, name: 'Vintage Overdyed', image: img3 },
  { id: 4, name: 'Royal Shiraz', image: img4 },
  { id: 5, name: 'Azure Tabriz', image: img5 },
  { id: 6, name: 'Crimson Kashan', image: img6 },
  { id: 7, name: 'Ivory Isfahan', image: img7 },
  { id: 8, name: 'Tribal Geometric', image: img8 },
  { id: 9, name: 'Contemporary Abstract', image: img9 },
  { id: 10, name: 'Classic Elegance', image: img10 },
  { id: 11, name: 'Emerald Nain', image: img11 },
  { id: 12, name: 'Golden Qum', image: img12 },
  { id: 13, name: 'Sapphire Heriz', image: img13 },
  { id: 14, name: 'Ruby Mashhad', image: img14 },
  { id: 15, name: 'Silver Tabriz', image: img15 },
  { id: 16, name: 'Onyx Bakhtiari', image: img16 },
];

const AllProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="all-products-page">
      <div className="all-products-header">
        <h1>All Collections</h1>
        <p>Explore our complete catalog of masterpieces</p>
      </div>
      
      <div className="all-products-grid">
        {allProducts.map((product) => (
          <div key={product.id} className="gallery-card" onClick={() => setSelectedProduct(product)} style={{cursor: 'pointer'}}>
            <div className="gallery-image">
              <img src={product.image} alt={product.name} />
              <div className="gallery-overlay">
                <button className="btn-view">View Details</button>
              </div>
            </div>
            <div className="gallery-info">
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
    </div>
  );
};

export default AllProducts;
