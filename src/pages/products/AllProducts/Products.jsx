import React, { useState, useEffect } from 'react';
import CategorySidebar from '../../../components/pagesComponent/products/CategorySidebar/CategorySidebar';
import ProductsGrid from '../../../components/pagesComponent/products/ProductsGrid/ProductsGrid';
import { products, categories } from '../../../data/products';
import styles from './Products.module.css';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    // Simulate loading delay
    const timer = setTimeout(() => {
      if (selectedCategory) {
        setFilteredProducts(products.filter(product => product.category === selectedCategory));
      } else {
        setFilteredProducts(products);
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className={styles.productsPage}>
      <div className={styles.header}>
        <h1 className={styles.title}>Gaming Products</h1>
        <p className={styles.subtitle}>
          Discover the latest gaming gear and accessories
        </p>
      </div>
      
      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <CategorySidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
          />
        </aside>
        
        <main className={styles.main}>
          <div className={styles.toolbar}>
            <div className={styles.results}>
              Showing {filteredProducts.length} of {products.length} products
            </div>
            <div className={styles.sort}>
              <select className={styles.sortSelect}>
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
          
          <ProductsGrid products={filteredProducts} loading={loading} />
        </main>
      </div>
    </div>
  );
}
