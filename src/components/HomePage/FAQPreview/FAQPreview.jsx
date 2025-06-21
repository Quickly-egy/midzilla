import React, { useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useTheme } from '../../../contexts/ThemeContext';
import './FAQPreview.css';

const FAQPreview = () => {
  const { t, isRTL } = useLanguage();
  const { isDarkMode } = useTheme();
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: t('faq1Q'),
      answer: t('faq1A'),
      icon: '🛒'
    },
    {
      id: 2,
      question: t('faq2Q'),
      answer: t('faq2A'),
      icon: '💳'
    },
    {
      id: 3,
      question: t('faq3Q'),
      answer: t('faq3A'),
      icon: '🚚'
    },
    {
      id: 4,
      question: t('faq4Q'),
      answer: t('faq4A'),
      icon: '✏️'
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className={`faq-preview ${isRTL ? 'rtl' : 'ltr'} ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <div className="header-badge">
            <span className="badge-icon">❓</span>
            <span className="badge-text">{t('faqTitle')}</span>
          </div>
          <h2 className="faq-main-title">{t('faqTitle')}</h2>
          <p className="faq-subtitle">{t('faqSubtitle')}</p>
        </div>

        {/* FAQ Items */}
        <div className="faq-list">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className={`faq-item ${openFAQ === faq.id ? 'active' : ''}`}
            >
              <div 
                className="faq-question" 
                onClick={() => toggleFAQ(faq.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleFAQ(faq.id);
                  }
                }}
              >
                <div className="question-content">
                  <span className="question-icon">{faq.icon}</span>
                  <span className="question-text">{faq.question}</span>
                </div>
                <div className="toggle-icon">
                  <span className={`arrow ${openFAQ === faq.id ? 'rotated' : ''}`}>
                    {isRTL ? '◀' : '▶'}
                  </span>
                </div>
              </div>
              
              <div className={`faq-answer ${openFAQ === faq.id ? 'expanded' : ''}`}>
                <div className="answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="faq-footer">
          <button className="faq-cta-button">
            <span className="cta-text">{t('faqViewAll')}</span>
            <span className="cta-icon">{isRTL ? '←' : '→'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview; 