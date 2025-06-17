
// components/CarCategories.jsx
import React from 'react';
import '../App.css';

const categories = ["Electric", "SUV", "Luxury", "Used", "Leasing"];

const CarCategories = () => (
  <div className="categories-section">
    {categories.map((category, index) => (
      <div key={index} className="category-card">
        {category}
      </div>
    ))}
  </div>
);

export default CarCategories;
