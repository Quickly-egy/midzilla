import React, { memo, useState, useMemo } from 'react';
import styles from './OrderSummary.module.css';

const OrderSummary = memo(({ cartItems = [], shipping = 0, taxRate = 0.08, promoCode = '', promoDiscount = 0 }) => {
  const [appliedPromo, setAppliedPromo] = useState('');
  const [promoInput, setPromoInput] = useState('');
  const [imageErrors, setImageErrors] = useState({});

  const calculations = useMemo(() => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discount = appliedPromo === promoCode ? subtotal * promoDiscount : 0;
    const discountedSubtotal = subtotal - discount;
    const tax = discountedSubtotal * taxRate;
    const total = discountedSubtotal + shipping + tax;

    return { subtotal, discount, tax, total, discountedSubtotal };
  }, [cartItems, shipping, taxRate, appliedPromo, promoCode, promoDiscount]);

  const handleApplyPromo = () => {
    if (promoInput.toUpperCase() === promoCode) {
      setAppliedPromo(promoInput.toUpperCase());
    } else {
      setAppliedPromo('');
      alert('Invalid promo code');
    }
  };

  const handleImageError = (itemId) => {
    setImageErrors(prev => ({ ...prev, [itemId]: true }));
  };

  return (
    <div className={styles.order_summary}>
      <h2 className={styles.title}>Order Summary</h2>
      
      <div className={styles.items}>
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <div key={item.id} className={styles.item}>
              <div className={styles.item_image_container}>
                {!imageErrors[item.id] ? (
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className={styles.item_image}
                    onError={() => handleImageError(item.id)}
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.image_placeholder}>
                    <span>📦</span>
                  </div>
                )}
              </div>
              <div className={styles.item_details}>
                <span className={styles.item_name}>{item.name}</span>
                <span className={styles.item_quantity}>Qty: {item.quantity}</span>
                {item.category && <span className={styles.item_category}>{item.category}</span>}
              </div>
              <span className={styles.item_price}>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))
        ) : (
          <div className={styles.empty_cart}>
            <span className={styles.empty_icon}>🛒</span>
            <p>Your cart is empty.</p>
          </div>
        )}
      </div>

      {cartItems.length > 0 && (
        <>
          <div className={styles.promo_section}>
            <div className={styles.promo_input_group}>
              <input
                type="text"
                placeholder="Enter promo code"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                className={styles.promo_input}
              />
              <button onClick={handleApplyPromo} className={styles.promo_btn}>
                Apply
              </button>
            </div>
            {appliedPromo && (
              <div className={styles.promo_applied}>
                ✅ Promo code "{appliedPromo}" applied!
              </div>
            )}
          </div>

          <div className={styles.totals}>
            <div className={styles.total_row}>
              <span>Subtotal</span>
              <span>${calculations.subtotal.toFixed(2)}</span>
            </div>
            
            {calculations.discount > 0 && (
              <div className={`${styles.total_row} ${styles.discount_row}`}>
                <span>Discount ({appliedPromo})</span>
                <span>-${calculations.discount.toFixed(2)}</span>
              </div>
            )}
            
            <div className={styles.total_row}>
              <span>Shipping</span>
              <span>{shipping > 0 ? `$${shipping.toFixed(2)}` : 'Free'}</span>
            </div>
            
            <div className={styles.total_row}>
              <span>Tax ({(taxRate * 100).toFixed(0)}%)</span>
              <span>${calculations.tax.toFixed(2)}</span>
            </div>
            
            <div className={`${styles.total_row} ${styles.grand_total}`}>
              <span>Total</span>
              <span>${calculations.total.toFixed(2)}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
});

OrderSummary.displayName = 'OrderSummary';

export default OrderSummary; 