import React, { useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import './Newsletter.css';

const Newsletter = () => {
  const { language, translations } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // Here you would typically send the email to your backend
      console.log('Subscribing email:', email);
      setIsSubscribed(true);
      setEmail('');
      
      // Reset the success message after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className={`newsletter ${language === 'ar' ? 'rtl' : ''}`}>
      <div className="newsletter-container">
        {/* Section Header */}
        <div className="newsletter-header">
          <div className="header-badge">
            <span className="badge-icon">📧</span>
            <span>{translations.newsletter.badge}</span>
          </div>
          <h2 className="newsletter-title">{translations.newsletter.title}</h2>
          <p className="newsletter-subtitle">{translations.newsletter.subtitle}</p>
        </div>

        {/* Newsletter Content */}
        <div className="newsletter-content">
          {/* Subscription Form */}
          <div className="newsletter-section">
            <div className="subscription-form">
              <form onSubmit={handleSubmit} className="email-form">
                <div className="input-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={translations.newsletter.form.placeholder}
                    className="email-input"
                    required
                  />
                  <button type="submit" className="subscribe-btn">
                    {translations.newsletter.form.button}
                  </button>
                </div>
              </form>

              {isSubscribed && (
                <div className="success-message">
                  <span className="success-icon">✅</span>
                  <span>{translations.newsletter.form.success}</span>
                </div>
              )}

                              <div className="visitor-assurance">
                  <div className="assurance-icon">🔒</div>
                  <div className="assurance-content">
                    <p className="assurance-text">{translations.newsletter.assurance.description}</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 