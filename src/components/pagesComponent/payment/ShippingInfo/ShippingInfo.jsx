import React, { memo, useState } from 'react';
import styles from './ShippingInfo.module.css';

const ShippingInfo = memo(() => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States'
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleInputBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    validateField(name, formData[name]);
  };

  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'fullName':
        if (!value.trim()) error = 'Full name is required';
        else if (value.trim().length < 2) error = 'Name must be at least 2 characters';
        break;
      case 'address':
        if (!value.trim()) error = 'Address is required';
        break;
      case 'city':
        if (!value.trim()) error = 'City is required';
        break;
      case 'state':
        if (!value.trim()) error = 'State is required';
        break;
      case 'zip':
        if (!value.trim()) error = 'ZIP code is required';
        else if (!/^\d{5}(-\d{4})?$/.test(value)) error = 'Invalid ZIP code format';
        break;
      case 'country':
        if (!value.trim()) error = 'Country is required';
        break;
      default:
        break;
    }

    if (error) {
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
    
    return !error;
  };

  const getInputClassName = (fieldName) => {
    let className = styles.input;
    if (touched[fieldName] && errors[fieldName]) {
      className += ` ${styles.input_error}`;
    } else if (touched[fieldName] && formData[fieldName] && !errors[fieldName]) {
      className += ` ${styles.input_success}`;
    }
    return className;
  };

  return (
    <div className={styles.shipping_info}>
      <h2 className={styles.title}>
        <span className={styles.title_icon}>🚚</span>
        Shipping Information
      </h2>
      
      <form className={styles.form}>
        <div className={styles.form_group}>
          <label htmlFor="fullName" className={styles.label}>
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className={getInputClassName('fullName')}
            placeholder="Enter your full name"
            required
          />
          {touched.fullName && errors.fullName && (
            <span className={styles.error_message}>{errors.fullName}</span>
          )}
        </div>

        <div className={styles.form_group}>
          <label htmlFor="address" className={styles.label}>
            Street Address *
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className={getInputClassName('address')}
            placeholder="123 Main Street"
            required
          />
          {touched.address && errors.address && (
            <span className={styles.error_message}>{errors.address}</span>
          )}
        </div>

        <div className={styles.form_row}>
          <div className={styles.form_group}>
            <label htmlFor="city" className={styles.label}>
              City *
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              className={getInputClassName('city')}
              placeholder="New York"
              required
            />
            {touched.city && errors.city && (
              <span className={styles.error_message}>{errors.city}</span>
            )}
          </div>

          <div className={styles.form_group}>
            <label htmlFor="state" className={styles.label}>
              State *
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              className={getInputClassName('state')}
              placeholder="NY"
              required
            />
            {touched.state && errors.state && (
              <span className={styles.error_message}>{errors.state}</span>
            )}
          </div>

          <div className={styles.form_group}>
            <label htmlFor="zip" className={styles.label}>
              ZIP Code *
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              className={getInputClassName('zip')}
              placeholder="10001"
              required
            />
            {touched.zip && errors.zip && (
              <span className={styles.error_message}>{errors.zip}</span>
            )}
          </div>
        </div>

        <div className={styles.form_group}>
          <label htmlFor="country" className={styles.label}>
            Country *
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className={getInputClassName('country')}
            required
          >
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="Japan">Japan</option>
          </select>
          {touched.country && errors.country && (
            <span className={styles.error_message}>{errors.country}</span>
          )}
        </div>
      </form>
    </div>
  );
});

ShippingInfo.displayName = 'ShippingInfo';

export default ShippingInfo; 