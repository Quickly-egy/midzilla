import React from 'react';
import styles from './AboutHeader.module.css';

const AboutHeader = () => {
  return (
    <div className={styles.aboutHeader}>
      <div className="container">
        <h1 className={styles.title}>About Modzilla</h1>
        <p className={styles.subtitle}>
          Your ultimate destination for premium gaming gear and accessories.
        </p>
      </div>
    </div>
  );
};

export default AboutHeader; 