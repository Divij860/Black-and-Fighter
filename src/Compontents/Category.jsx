import React from 'react';
import "../Compontents/Category.css"
import { cat1, cat2, cat3, cat4, Thunder } from '../assets';


const Category = () => {
  const categories = [
    { name: "Home Appliances", image: cat1 },
    { name: "Lighting", image: cat2 },
    { name: "Personal Care", image: cat3 },
    { name: "Kitchen Essentials", image: cat4 }
  ];

  return (
    <div className="category-section">
        <div className="heading">CATEGORY</div>
        <hr />
      <div className="category-grid">
        {categories.map((category, index) => (
          <div className="category-item" key={index}>
            <div className="category-image">
              <img src={category.image} alt={category.name} />
            </div>
            <p className="category-name">{category.name}</p>
            <a href="#" className="view-link">View</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
