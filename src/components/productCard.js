import React from 'react';

const ProductCard = ({ product }) => {
  const { image, title } = product;

  const addToFavorites = () => {
    // Add logic to add product to favorites
    console.log('Added to favorites:', title);
  };

  const addToCart = () => {
    // Add logic to add product to cart
    console.log('Added to cart:', title);
  };

  return (
    <div className="product-card">
      {image && (
        <img
          src={image}
          alt={title}
          className="product-image"
          onError={(e) => {
            e.target.style.display = 'none'; // Hide the image if it fails to load
          }}
        />
      )}
      <h3 className="product-title">{title}</h3>
      <div className="product-actions">
        <button onClick={addToFavorites} className="action-button">
          <i className="fas fa-heart"></i> Add to Favorites
        </button>
        <button onClick={addToCart} className="action-button">
          <i className="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
