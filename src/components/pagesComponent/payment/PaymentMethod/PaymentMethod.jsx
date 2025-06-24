import React, { useState } from 'react';
import styles from './PaymentMethod.module.css';

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState('creditCard');

  return (
    <div className={styles.payment_method}>
      <h2 className={styles.title}>Payment Method</h2>
      <div className={styles.options}>
        <label className={styles.option}>
          <input 
            type="radio" 
            name="paymentMethod" 
            value="creditCard" 
            checked={selectedMethod === 'creditCard'} 
            onChange={() => setSelectedMethod('creditCard')} 
          />
          <span>Credit Card</span>
        </label>
        <label className={styles.option}>
          <input 
            type="radio" 
            name="paymentMethod" 
            value="paypal"
            checked={selectedMethod === 'paypal'}
            onChange={() => setSelectedMethod('paypal')}
          />
          <span>PayPal</span>
        </label>
      </div>

      {selectedMethod === 'creditCard' && (
        <form className={styles.form}>
            <div className={styles.form_group}>
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" id="cardNumber" placeholder="xxxx xxxx xxxx xxxx" required />
            </div>
            <div className={styles.form_row}>
                <div className={styles.form_group}>
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input type="text" id="expiryDate" placeholder="MM/YY" required />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" placeholder="123" required />
                </div>
            </div>
             <div className={styles.form_group}>
                <label htmlFor="cardName">Name on Card</label>
                <input type="text" id="cardName" required />
            </div>
        </form>
      )}
       {selectedMethod === 'paypal' && (
        <div className={styles.paypal_info}>
          <p>You will be redirected to PayPal to complete your purchase.</p>
          <button className={styles.paypal_btn}>Continue with PayPal</button>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod; 