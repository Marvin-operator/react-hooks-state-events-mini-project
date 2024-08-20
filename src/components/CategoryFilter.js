import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onCategoryClick }) => {
  return (
    <div>
      {categories.map(category => (
        <button
          key={category}
          className={selectedCategory === category ? 'selected' : ''}
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

