import React from 'react';
import styles from './FaqHeader.module.css';

const FaqHeader = () => {
  return (
    <div className={styles.faqHeader}>
      <div className="container">
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        <p className={styles.subtitle}>
          Have a question? We're here to help. Find answers to common questions about our products, shipping, and more.
        </p>
      </div>
    </div>
  );
};

export default FaqHeader; 