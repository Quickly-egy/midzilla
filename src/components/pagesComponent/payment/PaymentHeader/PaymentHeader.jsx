import React from 'react';
import styles from './PaymentHeader.module.css';

const PaymentHeader = () => {
  return (
    <div className={`${styles.header} section_style`}>
      <div className="container">
        <h1 className='section_title'>Checkout</h1>
        <p>Complete your purchase by providing the following information.</p>
      </div>
    </div>
  );
};

export default PaymentHeader; 