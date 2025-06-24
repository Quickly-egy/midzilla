import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { validateCoupon, formatPrice } from '../../../../utlis/cartUtils';
import styles from './CartSummary.module.css';

const CartSummary = ({ totals, onCouponApply, onCouponClear, couponApplied }) => {
  const [couponCode, setCouponCode] = useState('');

  const handleApplyCoupon = () => {
    const coupon = validateCoupon(couponCode);
    if (coupon) {
      onCouponApply(couponCode, coupon);
      alert(coupon.message);
    } else {
      alert('Invalid coupon code. Try "GAMING10", "WELCOME20", or "FREESHIP"');
    }
  };

  const handleClearCoupon = () => {
    onCouponClear();
    setCouponCode('');
  };

  return (
    <div className={styles.cartSummary}>
      <h2>Order Summary</h2>
      
      <div className={styles.summaryItems}>
        <div className={styles.summaryRow}>
          <span>Subtotal</span>
          <span>{formatPrice(totals.subtotal)}</span>
        </div>
        
        {totals.discount > 0 && (
          <div className={styles.summaryRow}>
            <span>Discount</span>
            <span className={styles.discountText}>-{formatPrice(totals.discount)}</span>
          </div>
        )}
        
        <div className={styles.summaryRow}>
          <span>Shipping</span>
          <span>{totals.shipping === 0 ? 'Free' : formatPrice(totals.shipping)}</span>
        </div>
        
        <div className={styles.summaryDivider}></div>
        
        <div className={styles.summaryRow}>
          <span className={styles.totalLabel}>Total</span>
          <span className={styles.totalAmount}>{formatPrice(totals.total)}</span>
        </div>
      </div>

      {/* Coupon Section */}
      <div className={styles.couponSection}>
        <h3>Have a coupon?</h3>
        <div className={styles.couponInput}>
          <input
            type="text"
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            disabled={couponApplied}
          />
          {!couponApplied ? (
            <button onClick={handleApplyCoupon} className={styles.applyCoupon}>
              Apply
            </button>
          ) : (
            <button onClick={handleClearCoupon} className={styles.clearCoupon}>
              Clear
            </button>
          )}
        </div>
        {couponApplied && (
          <p className={styles.couponApplied}>Coupon applied successfully!</p>
        )}
      </div>

      {/* Checkout Buttons */}
      <div className={styles.checkoutActions}>
        <button className={styles.checkoutBtn}>
          Proceed to Checkout
        </button>
        <Link to="/products" className={styles.continueShopping}>
          Continue Shopping
        </Link>
      </div>

      {/* Additional Info */}
      <div className={styles.additionalInfo}>
        <div className={styles.infoItem}>
          <span className={styles.infoIcon}>🛡️</span>
          <span>Secure Checkout</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoIcon}>🔄</span>
          <span>30 Day Returns</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoIcon}>🚚</span>
          <span>Free Shipping over $100</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary; 