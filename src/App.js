import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import styled from "styled-components";
import Header from './components/header'
import Footer from './components/footer';

import ProductCard from './components/productCard'; // Assuming the ProductCard component is in a separate file
//import NavSide from './components/sideNav';
import MainSection from './components/mainSection';
const products = []
const categoriesAll = ['All']


function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        setData(response.data);
        const prodTitle = []
        for(let i = 0; i<response.data.length; i++){
          
          if (!prodTitle.includes(response.data[i].title)){
            products.push({ id: i, title: response.data[i].title, image: response.data[i].poster, category: response.data[i].genres[0] })
          }
            if (!categoriesAll.includes(response.data[i].genres[0])){
            categoriesAll.push(response.data[i].genres[0])
          }
          prodTitle.push(response.data[i].title)
        }
        console.log(categoriesAll)
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  const [isOpen, setIsOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  const productsByCategory = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});
  const NavSide = ({ categories = categoriesAll, isOpen=isOpen, onClose, onCategorySelect }) => {
    return (
      <aside className={`nav-side ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={onClose}>Close</button>
        <h2>Categories</h2>
        <ul>
          {categories.length > 0 ? (
            categories.map(category => (
              <li key={category} onClick={() => onCategorySelect(category)}>
                {category}
              </li>
            ))
          ) : (
            <li>No categories found</li>
          )}
        </ul>
      </aside>
    );
  };
  // return (

    
  // );
  
  return (
    <>
    <main>
      <div className="app">
        <NavSide
          categories={categoriesAll}
          isOpen={isOpen}
          onClose={toggleNav}
          onCategorySelect={handleCategorySelect} // Pass handleCategorySelect to NavSide
        />
        <button className="open-button" onClick={toggleNav}>Open Nav</button>
        {/* <MainSection products={products.map((product, index) => (
      <ProductCard key={`${product.id}-${index}`} product={product} />
    ))} /> */}
      </div>
      {Object.entries(productsByCategory).map(([category, products]) => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="product-list">
            {products.map((product, index) => (
              <ProductCard key={`${product.id}-${index}`} product={product} />
            ))}
          </div>
        </div>
      ))}
    </main>
  </>

  );

}

export default function AppCall() {
  return (
    <>
      <Header />
      <App />
      <Footer />
    </>
  );
}
