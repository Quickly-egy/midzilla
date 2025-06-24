import React, { memo, useState } from 'react';
import styles from './ShippingOptions.module.css';
import { shippingOptions } from '../../../../data/paymentData';

const ShippingOptions = memo(({ onShippingChange }) => {
  const [selectedOption, setSelectedOption] = useState(
    shippingOptions.find(option => option.selected)?.id || 'standard'
  );

  const handleOptionChange = (optionId) => {
    setSelectedOption(optionId);
    const selectedShipping = shippingOptions.find(option => option.id === optionId);
    if (onShippingChange) {
      onShippingChange(selectedShipping.price);
    }
  };

  return (
    <div className={styles.shipping_options}>
      <h2 className={styles.title}>
        <span className={styles.title_icon}>📦</span>
        Shipping Options
      </h2>
      
      <div className={styles.options}>
        {shippingOptions.map((option) => (
          <label key={option.id} className={styles.option}>
            <input
              type="radio"
              name="shippingOption"
              value={option.id}
              checked={selectedOption === option.id}
              onChange={() => handleOptionChange(option.id)}
              className={styles.radio}
            />
            <div className={styles.option_content}>
              <div className={styles.option_details}>
                <span className={styles.option_name}>{option.name}</span>
                <span className={styles.option_price}>
                  {option.price === 0 ? 'Free' : `$${option.price.toFixed(2)}`}
                </span>
              </div>
              <div className={styles.option_indicator}>
                {selectedOption === option.id && (
                  <span className={styles.checkmark}>✓</span>
                )}
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
});

ShippingOptions.displayName = 'ShippingOptions';

export default ShippingOptions; 