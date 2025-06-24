import React from 'react';
import { calculateItemPrice, formatPrice } from '../../../../utlis/cartUtils';
import styles from './CartItem.module.css';

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const price = calculateItemPrice(item);
  const itemTotal = price * item.quantity;

  const handleQuantityChange = (newQuantity) => {
    onQuantityChange(item.id, newQuantity);
  };

  const handleRemove = () => {
    onRemove(item.id);
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.itemImage}>
        <img src={item.image} alt={item.name} />
        {item.discount && (
          <span className={styles.discountBadge}>
            {item.discount}% OFF
          </span>
        )}
      </div>

      <div className={styles.itemDetails}>
        <div className={styles.itemInfo}>
          <h3>{item.name}</h3>
          <span className={styles.category}>{item.category}</span>
          <div className={styles.rating}>
            {[...Array(5)].map((_, index) => (
              <span key={index} className={index < item.rating ? styles.star : styles.starEmpty}>
                ★
              </span>
            ))}
            <span className={styles.ratingText}>({item.rating})</span>
          </div>
        </div>

        <div className={styles.itemPrice}>
          <span className={styles.currentPrice}>{formatPrice(price)}</span>
          {item.originalPrice && (
            <span className={styles.originalPrice}>{formatPrice(item.originalPrice)}</span>
          )}
        </div>

        <div className={styles.itemQuantity}>
          <button 
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className={styles.quantityBtn}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className={styles.quantity}>{item.quantity}</span>
          <button 
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className={styles.quantityBtn}
          >
            +
          </button>
        </div>

        <div className={styles.itemTotal}>
          <span>Total: {formatPrice(itemTotal)}</span>
        </div>

        <button 
          onClick={handleRemove}
          className={styles.removeBtn}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem; 