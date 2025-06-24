import React from 'react';
import styles from './FaqSidebar.module.css';

const FaqSidebar = ({ categories, activeCategory, onCategoryClick }) => {
  return (
    <div className={styles.sidebar}>
      <h3 className={styles.title}>Categories</h3>
      <ul className={styles.categoryList}>
        <li
          className={`${styles.categoryItem} ${activeCategory === 'All' ? styles.active : ''}`}
          onClick={() => onCategoryClick('All')}
        >
          All Questions
        </li>
        {categories.map((category) => (
          <li
            key={category.id}
            className={`${styles.categoryItem} ${activeCategory === category.id ? styles.active : ''}`}
            onClick={() => onCategoryClick(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaqSidebar; 