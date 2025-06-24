import React from 'react';
import styles from './CategorySidebar.module.css';

const CategorySidebar = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <div className={styles.sidebar}>
      <h3 className={styles.title}>Categories</h3>
      <div className={styles.categoryList}>
        <button
          className={`${`${styles.categoryItem} between`} ${!selectedCategory ? styles.active : ''}`}
          onClick={() => onCategorySelect(null)}
        >
          All Products
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`${`${styles.categoryItem} between`} ${selectedCategory === category.id ? styles.active : ''}`}
            onClick={() => onCategorySelect(category.id)}
          >
            {category.name}
            <span className={styles.count}>({category.count})</span>
          </button>
        ))}
      </div>
      
      <div className={styles.filters}>
        <h4 className={styles.filterTitle}>Price Range</h4>
        <div className={styles.priceRange}>
          <input type="range" min="0" max="1000" className={styles.range} />
          <div className={styles.priceInputs}>
            <input type="number" placeholder="Min" className={styles.priceInput} />
           
            <input type="number" placeholder="Max" className={styles.priceInput} />
          </div>
        </div>
        
        <h4 className={styles.filterTitle}>Rating</h4>
        <div className={styles.ratingFilters}>
          {[4, 3, 2, 1].map((rating) => (
            <label key={rating} className={styles.ratingFilter}>
              <input type="checkbox" />
              <span className={styles.stars}>
                {[...Array(5)].map((_, index) => (
                  <span key={index} className={index < rating ? styles.star : styles.starEmpty}>
                    ★
                  </span>
                ))}
              </span>
              <span className={styles.ratingText}>& Up</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar; 