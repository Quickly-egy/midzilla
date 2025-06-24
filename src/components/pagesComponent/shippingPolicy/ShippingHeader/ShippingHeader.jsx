import React from 'react';
import styles from './ShippingHeader.module.css';

const ShippingHeader = () => {
  return (
    <div className={styles.shippingHeader}>
      <div className="container">
        <h1 className={styles.title}>Shipping Policy</h1>
        <p className={styles.subtitle}>
          Everything you need to know about how we get your gear to you.
        </p>
      </div>
    </div>
  );
};

export default ShippingHeader; 