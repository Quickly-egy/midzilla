import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductsGrid.module.css';

const ProductsGrid = ({ products, loading }) => {
  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <h3>No products found</h3>
        <p>Try adjusting your filters or search criteria.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid; 