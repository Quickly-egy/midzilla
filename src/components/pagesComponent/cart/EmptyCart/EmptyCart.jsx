import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EmptyCart.module.css';

const EmptyCart = () => {
  return (
    <div className={styles.emptyCart}>
      <div className={styles.emptyIcon}>🛒</div>
      <h2>Your cart is empty</h2>
      <p>Looks like you haven't added any items to your cart yet.</p>
      <Link to="/products" className={styles.continueShopping}>
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyCart; 