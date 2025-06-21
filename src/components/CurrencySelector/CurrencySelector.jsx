import React, { useState } from 'react';
import Lottie from 'lottie-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useCurrency } from '../../contexts/CurrencyContext';
import currencyAnimation from '../../assets/Animation - 1750444903621.json';
import './CurrencySelector.css';

const CurrencySelector = () => {
  const { language } = useLanguage();
  const { selectedCurrency, changeCurrency, getCurrencySymbol } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const { isRTL, t } = useLanguage();

  const currencies = [
    { code: 'EGP', name: { ar: 'جنيه مصري', en: 'Egyptian Pound' } },
    { code: 'USD', name: { ar: 'دولار أمريكي', en: 'US Dollar' } },
    { code: 'SAR', name: { ar: 'ريال سعودي', en: 'Saudi Riyal' } },
    { code: 'LYD', name: { ar: 'دينار ليبي', en: 'Libyan Dinar' } },
    { code: 'AED', name: { ar: 'درهم إماراتي', en: 'UAE Dirham' } },
    { code: 'MAD', name: { ar: 'درهم مغربي', en: 'Moroccan Dirham' } },
    { code: 'DZD', name: { ar: 'دينار جزائري', en: 'Algerian Dinar' } },
    { code: 'IQD', name: { ar: 'دينار عراقي', en: 'Iraqi Dinar' } },
    { code: 'OMR', name: { ar: 'ريال عماني', en: 'Omani Rial' } },
    { code: 'KWD', name: { ar: 'دينار كويتي', en: 'Kuwaiti Dinar' } },
    { code: 'LBP', name: { ar: 'ليرة لبنانية', en: 'Lebanese Pound' } }
  ];

  const handleCurrencyChange = (currencyCode) => {
    changeCurrency(currencyCode);
    setIsOpen(false);
  };

  return (
    <>
      {/* Currency Float Icon */}
      <div 
        className={`currency-float-icon ${isRTL ? 'rtl' : 'ltr'}`}
        onClick={() => setIsOpen(true)}
      >
        <Lottie 
          animationData={currencyAnimation} 
          loop={true}
          autoplay={true}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Currency Modal */}
      {isOpen && (
        <div className="currency-modal-overlay" onClick={() => setIsOpen(false)}>
          <div 
            className={`currency-modal ${isRTL ? 'rtl' : 'ltr'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="currency-modal-header">
                             <h3>{t('selectCurrency')}</h3>
              <button 
                className="currency-close-btn"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </div>
            
            <div className="currency-list">
              {currencies.map(currency => (
                <div
                  key={currency.code}
                  className={`currency-item ${selectedCurrency === currency.code ? 'selected' : ''}`}
                  onClick={() => handleCurrencyChange(currency.code)}
                >
                  <span className="currency-symbol">{getCurrencySymbol(currency.code)}</span>
                  <div className="currency-info">
                    <span className="currency-code">{currency.code}</span>
                    <span className="currency-name">
                      {currency.name[isRTL ? 'ar' : 'en']}
                    </span>
                  </div>
                  {selectedCurrency === currency.code && (
                    <span className="currency-check">✓</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CurrencySelector; 