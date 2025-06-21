import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import './PaymentMethods.css';

const PaymentMethods = () => {
  const { language, translations } = useLanguage();

  return (
    <section className={`payment-methods ${language === 'ar' ? 'rtl' : ''}`}>
      <div className="payment-container">
        {/* Section Header */}
        <div className="payment-header">
          <div className="header-badge">
            <span className="badge-icon">💳</span>
            <span>{translations.paymentMethods.badge}</span>
          </div>
          <h2 className="payment-title">{translations.paymentMethods.title}</h2>
          <p className="payment-subtitle">{translations.paymentMethods.subtitle}</p>
        </div>

        {/* Payment Content */}
        <div className="payment-content">
          {/* Payment Methods Section */}
          <div className="payment-section">
            <div className="section-header">
              <span className="section-icon">🏦</span>
              <h3 className="section-title">{translations.paymentMethods.methods.title}</h3>
            </div>
            <div className="section-content">
              <div className="methods-grid">
                {translations.paymentMethods.methods.list.map((method, index) => (
                  <div key={index} className="method-item">
                    <div className="method-icon">
                      {method.icon}
                    </div>
                    <div className="method-content">
                      <h4 className="method-name">{method.name}</h4>
                      <p className="method-description">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Alert */}
          <div className="contact-alert">
            <div className="alert-icon">💬</div>
            <div className="alert-content">
              <p className="alert-text">
                {translations.paymentMethods.contactAlert}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods; 