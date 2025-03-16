import React from 'react';
import FeaturedProducts from './FeaturedProducts';
import featuredProducts from '../data/featuredProducts.js';
import Footer from './Footer';
import Hero from './Hero';
import NavBar from './NavBar';
import RecommendedProducts from './RecommendedProducts';
import recommendedProducts from '../data/recommendedProducts.js';
// import "../css/products.css"
// import "../css/global.css"
// import "../css/responsive.css"


function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <section className="products-section">
        <h2>Featured Products</h2>
        <div className="products-container">
          {featuredProducts.map(featuredProduct => (
            <FeaturedProducts
              key={featuredProduct.id}
              {...featuredProduct}
            />
          ))}
        </div>
      </section>
      <section className="products-section">
        <h2>Recommended Products</h2>
        <div className="products-container">
          {recommendedProducts.map(recommendedProduct => (
            <RecommendedProducts
              key={recommendedProduct.id}
              {...recommendedProduct}
            />
          ))}
        </div>
      </section>
      
      <Footer />
    </>
  );
}

export default HomePage;