import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Arrivals from './components/arrivals/Arrivals';
import Inspiration from './components/inspiration/Inspiration';
import AllProducts from './components/allproducts/AllProducts';
import './App.css';

// Import images for collections
import carpet1 from './assets/green.jpeg';
import carpet2 from './assets/carpet-2.jpeg';
import carpet3 from './assets/carpet-3.jpeg';
import carpet8 from './assets/carpet-8.jpeg';
import carpet9 from './assets/carpet-9.jpeg';
import carpet10 from './assets/carpet-10.jpeg';
import carpet15 from './assets/carpet-15.jpeg';
import carpet16 from './assets/carpet-16.jpeg';

const collections = [
  { id: 1, name: 'Persian Heritage', image: carpet1, desc: 'Inspired by centuries of Persian weaving traditions, featuring intricate floral medallions and rich, natural dye palettes.', material: '100% Hand-spun Silk', origin: 'Iran (Persia)', care: 'Professional wash only' },
  { id: 2, name: 'Modern Minimalist', image: carpet2, desc: 'Clean lines, neutral tones, and abstract geometric patterns designed to complement contemporary interior designs.', material: 'Premium Tibetan Wool', origin: 'Nepal', care: 'Vacuum regularly, professional clean' },
  { id: 3, name: 'Vintage Overdyed', image: carpet3, desc: 'Antique rugs revitalized with a modern over-dyeing technique, blending historical textures with vibrant color expressions.', material: 'Upcycled Antique Wool', origin: 'Turkey', care: 'Avoid direct sunlight, professional wash' },
  { id: 4, name: 'Tribal Geometric', image: carpet8, desc: 'Bold, rustic patterns handmade by nomadic artisans. Each piece tells a unique ancestral story through geometric shapes.', material: 'Organic Sheep Wool', origin: 'Morocco (Atlas Mts)', care: 'Shake out regularly, spot clean' },
  { id: 5, name: 'Contemporary Abstract', image: carpet9, desc: 'A fusion of artistic expression and textiles. Dynamic brush-stroke patterns that serve as modern floor art.', material: 'Bamboo Silk & Wool Blend', origin: 'India', care: 'Professional clean only' },
  { id: 6, name: 'Classic Elegance', image: carpet10, desc: 'Timeless floral patterns and borders that bring sophisticated elegance to dining rooms and formal spaces.', material: 'New Zealand Wool', origin: 'Pakistan', care: 'Professional clean only' },
  { id: 7, name: 'Silk Masterpieces', image: carpet15, desc: 'Extraordinarily fine silk carpets hand-knotted with thousands of knots per square inch, capturing light with a lustrous sheen.', material: '100% Pure Silk', origin: 'Qum, Iran', care: 'Handle with care, specialist clean only' },
  { id: 8, name: 'Royal Bokhara', image: carpet16, desc: 'Iconic octagonal gul motifs arranged in symmetrical rows on a rich crimson ground — a timeless Central Asian classic.', material: 'Hand-spun Afghan Wool', origin: 'Turkmenistan', care: 'Vacuum gently, professional wash' }
];

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCollection, setSelectedCollection] = useState(null);

  const handleHomeClick = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Navbar onHomeClick={handleHomeClick} onProductsClick={() => setCurrentView('products')} />
      
      {currentView === 'home' ? (
        <main>
          <Banner onSeeAllProducts={() => setCurrentView('products')} />


        {/* Featured Collections Section */}
        <section id="collections" className="collections-section">
          <div className="section-header">
            <h2>Featured Collections</h2>
            <p>Masterpieces curated for discerning tastes</p>
          </div>
          
          <div className="collections-grid">
            {collections.map((col) => (
              <div key={col.id} className="collection-card" onClick={() => setSelectedCollection(col)}>
                <div className="card-image">
                  <img src={col.image} alt={col.name} />
                </div>
                <div className="card-content">
                  <h3>{col.name}</h3>
                  <span className="card-link" style={{cursor: 'pointer'}}>View Collection &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Collection Detail Modal */}
        {selectedCollection && (
          <div className="product-modal-overlay" onClick={() => setSelectedCollection(null)}>
            <div className="product-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedCollection(null)}>&times;</button>
              <div className="modal-content">
                <div className="modal-image">
                  <img src={selectedCollection.image} alt={selectedCollection.name} />
                </div>
                <div className="modal-details">
                  <h2>{selectedCollection.name}</h2>
                  <p className="modal-description">
                    {selectedCollection.desc}
                  </p>
                  <ul className="modal-specs">
                    <li><strong>Material:</strong> {selectedCollection.material}</li>
                    <li><strong>Origin:</strong> {selectedCollection.origin}</li>
                    <li><strong>Care:</strong> {selectedCollection.care}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* New Arrivals Section */}
        <Arrivals />

        {/* Design Inspiration Section */}
        <Inspiration />

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="about-container">
            <div className="about-content">
              <h2>A Legacy of Craftsmanship</h2>
              <p>
                For over a century, Aura Carpets has been dedicated to the art of carpet weaving. 
                Every piece in our collection is a testament to the skill of our master artisans, 
                who use traditional techniques passed down through generations.
              </p>
              <p>
                We source only the finest wool and silk, utilizing natural dyes to create colors 
                that are as enduring as they are beautiful. When you choose an Aura carpet, 
                you're not just buying a floor covering—you're acquiring a piece of history.
              </p>
              <button className="btn btn-primary" style={{ marginTop: '20px' }}>Read Our Story</button>
            </div>
            <div className="about-image">
              <div className="img-frame"></div>
            </div>
          </div>
        </section>
      </main>
      ) : (
        <main>
          <AllProducts />
        </main>
      )}

      <Footer />
    </div>
  );
}

export default App;
