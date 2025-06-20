import React, { createContext, useContext, useState, useEffect } from 'react';

const CurrencyContext = createContext();

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};

export const CurrencyProvider = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  // أسعار التحويل مقابل الدولار الأمريكي (كمثال)
  const exchangeRates = {
    EGP: 49.5,    // جنيه مصري
    USD: 1,       // دولار أمريكي (العملة الأساسية)
    SAR: 3.75,    // ريال سعودي
    LYD: 4.85,    // دينار ليبي
    AED: 3.67,    // درهم إماراتي
    MAD: 10.2,    // درهم مغربي
    DZD: 135,     // دينار جزائري
    IQD: 1320,    // دينار عراقي
    OMR: 0.385,   // ريال عماني
    KWD: 0.31,    // دينار كويتي
    LBP: 15000    // ليرة لبنانية
  };

  // تحديد العملة المختارة من localStorage عند تحميل الصفحة
  useEffect(() => {
    const savedCurrency = localStorage.getItem('selectedCurrency');
    if (savedCurrency && exchangeRates[savedCurrency]) {
      setSelectedCurrency(savedCurrency);
    }
  }, []);

  // حفظ العملة المختارة في localStorage
  const changeCurrency = (currencyCode) => {
    setSelectedCurrency(currencyCode);
    localStorage.setItem('selectedCurrency', currencyCode);
  };

  // تحويل السعر من الدولار إلى العملة المختارة
  const convertPrice = (priceInUSD) => {
    const rate = exchangeRates[selectedCurrency] || 1;
    return (priceInUSD * rate).toFixed(2);
  };

  // الحصول على رمز العملة
  const getCurrencySymbol = () => {
    const symbols = {
      EGP: 'ج.م',
      USD: '$',
      SAR: 'ر.س',
      LYD: 'د.ل',
      AED: 'د.إ',
      MAD: 'د.م',
      DZD: 'د.ج',
      IQD: 'ع.د',
      OMR: 'ر.ع',
      KWD: 'د.ك',
      LBP: 'ل.ل'
    };
    return symbols[selectedCurrency] || '$';
  };

  // تنسيق السعر مع العملة
  const formatPrice = (priceInUSD) => {
    const convertedPrice = convertPrice(priceInUSD);
    const symbol = getCurrencySymbol();
    return `${convertedPrice} ${symbol}`;
  };

  const value = {
    selectedCurrency,
    changeCurrency,
    convertPrice,
    getCurrencySymbol,
    formatPrice,
    exchangeRates
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContext; 