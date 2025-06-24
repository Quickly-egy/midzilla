import React from 'react';
import styles from './ContactHeader.module.css';

const ContactHeader = () => {
  return (
    <div className={styles.contactHeader}>
      <div className="container">
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>
          We'd love to hear from you! Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
        </p>
      </div>
    </div>
  );
};

export default ContactHeader; 