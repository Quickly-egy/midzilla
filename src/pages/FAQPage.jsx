import React, { useState, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
<<<<<<< HEAD
=======
import Header from '../components/Header';
import Footer from '../components/Footer';
>>>>>>> fb8ede5f9485c2aebf78bb4ae7461d761de9e870
import './FAQPage.css';

const FAQPage = () => {
  const { t, isRTL } = useLanguage();
  const { isDarkMode } = useTheme();
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allFAQs = [
    {
      id: 1,
      question: t('faq1Q'),
      answer: t('faq1A'),
      category: 'payment',
      icon: '🛒'
    },
    {
      id: 2,
      question: t('faq2Q'),
      answer: t('faq2A'),
      category: 'payment',
      icon: '💳'
    },
    {
      id: 3,
      question: t('faq3Q'),
      answer: t('faq3A'),
      category: 'delivery',
      icon: '🚚'
    },
    {
      id: 4,
      question: t('faq4Q'),
      answer: t('faq4A'),
      category: 'account',
      icon: '✏️'
    },
    {
      id: 5,
      question: t('faq5Q'),
      answer: t('faq5A'),
      category: 'support',
      icon: '💬'
    },
    {
      id: 6,
      question: t('faq6Q'),
      answer: t('faq6A'),
      category: 'security',
      icon: '🛡️'
    },
    {
      id: 7,
      question: t('faq7Q'),
      answer: t('faq7A'),
      category: 'security',
      icon: '🔒'
    },
    {
      id: 8,
      question: t('faq8Q'),
      answer: t('faq8A'),
      category: 'payment',
      icon: '📄'
    },
    {
      id: 9,
      question: t('faq9Q'),
      answer: t('faq9A'),
      category: 'payment',
      icon: '🎫'
    },
    {
      id: 10,
      question: t('faq10Q'),
      answer: t('faq10A'),
      category: 'delivery',
      icon: '❓'
    }
  ];

  const categories = [
    { id: 'all', name: t('faqCategoryAll'), icon: '📋' },
    { id: 'payment', name: t('faqCategoryPayment'), icon: '💳' },
    { id: 'delivery', name: t('faqCategoryDelivery'), icon: '🚚' },
    { id: 'support', name: t('faqCategorySupport'), icon: '💬' },
    { id: 'account', name: t('faqCategoryAccount'), icon: '⭐' },
    { id: 'security', name: t('faqCategorySecurity'), icon: '🛡️' }
  ];

  const filteredFAQs = useMemo(() => {
    let filtered = allFAQs;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [selectedCategory, searchTerm]);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setOpenFAQ(null); // Close any open FAQ when changing category
  };

  return (
    <div className={`faq-page ${isRTL ? 'rtl' : 'ltr'} ${isDarkMode ? 'dark' : 'light'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <main className="faq-main">
        <div className="faq-page-container">

          {/* Hero Section */}
          <section className="faq-hero">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="badge-icon">❓</span>
                <span className="badge-text">{t('faqPageTitle')}</span>
              </div>
              <h1 className="hero-title">{t('faqPageTitle')}</h1>
              <p className="hero-subtitle">{t('faqPageSubtitle')}</p>

              {/* Search Bar */}
              <div className="search-container">
                <div className="search-wrapper">
                  <span className="search-icon">🔍</span>
                  <input
                    type="text"
                    placeholder={t('faqSearchPlaceholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Categories */}
          <section className="faq-categories">
            <div className="categories-wrapper">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-name">{category.name}</span>
                </button>
              ))}
            </div>
          </section>

          {/* FAQ List */}
          <section className="faq-content">
            <div className="faq-results-info">
              <span className="results-count">
                {filteredFAQs.length} {isRTL ? 'سؤال' : 'questions'}
                {searchTerm && (
                  <span className="search-term">
                    {isRTL ? ' لـ "' : ' for "'}{searchTerm}"
                  </span>
                )}
              </span>
            </div>

            <div className="faq-list">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq) => (
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
                ))
              ) : (
                <div className="no-results">
                  <span className="no-results-icon">🔍</span>
                  <h3 className="no-results-title">
                    {isRTL ? 'لم نجد أي نتائج' : 'No results found'}
                  </h3>
                  <p className="no-results-text">
                    {isRTL
                      ? 'جرب تغيير كلمات البحث أو اختيار تصنيف مختلف'
                      : 'Try changing your search terms or selecting a different category'
                    }
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Contact Section */}
          <section className="faq-contact">
            <div className="contact-card">
              <div className="contact-icon">💬</div>
              <h3 className="contact-title">
                {isRTL ? 'لم تجد إجابة سؤالك؟' : 'Didn\'t find the answer to your question?'}
              </h3>
              <p className="contact-text">
                {isRTL
                  ? 'فريق خدمة العملاء جاهز لمساعدتك في أي وقت'
                  : 'Our customer service team is ready to help you anytime'
                }
              </p>
              <button className="contact-btn">
                <span className="btn-icon">📞</span>
                <span className="btn-text">
                  {isRTL ? 'تواصل معنا' : 'Contact Us'}
                </span>
              </button>
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQPage; 