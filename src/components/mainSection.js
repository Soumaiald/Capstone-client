import React, { useState } from 'react';
import ProductCard from './productCard';

const MainSection = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = Array.from(new Set(products.map(product => product.category)));

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <main>
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default MainSection;
