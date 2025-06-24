import React from 'react';
import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, name, price, image, category, rating } = product;

  return (
    <div className={styles.card}>
     <Link to={`/product/${id}`}>
     <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
        <div className={styles.overlay}>
          <button className={styles.quickView}>Quick View</button>
        </div>
      </div>
     </Link>
      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.rating}>
          {[...Array(5)].map((_, index) => (
            <span key={index} className={index < rating ? styles.star : styles.starEmpty}>
              ★
            </span>
          ))}
          <span className={styles.ratingText}>({rating})</span>
        </div>
        <div className={styles.priceContainer}>
          <span className={styles.price}>${price}</span>
          <button className={styles.addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 