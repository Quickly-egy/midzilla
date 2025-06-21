import React from 'react'
import { useLanguage } from '../../../contexts/LanguageContext'
import './FeaturedCategories.css'

const FeaturedCategories = () => {
  const { isRTL } = useLanguage()

  const categories = [
    {
      id: 1,
      nameAr: 'ألعاب موبايل',
      nameEn: 'Mobile Games',
      image: '/api/placeholder/300/200',
      productCount: 45,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <rect x="7" y="5" width="10" height="8" rx="1" fill="currentColor" opacity="0.3"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      techPattern: 'mobile'
    },
    {
      id: 2,
      nameAr: 'بطاقات شحن',
      nameEn: 'Gift Cards',
      image: '/api/placeholder/300/200',
      productCount: 28,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="2"/>
          <rect x="4" y="14" width="4" height="2" fill="currentColor"/>
          <rect x="10" y="14" width="8" height="1" fill="currentColor" opacity="0.5"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      techPattern: 'card'
    },
    {
      id: 3,
      nameAr: 'ألعاب كمبيوتر',
      nameEn: 'PC Games',
      image: '/api/placeholder/300/200',
      productCount: 36,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="4" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
          <rect x="4" y="6" width="16" height="8" rx="1" fill="currentColor" opacity="0.3"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      techPattern: 'desktop'
    },
    {
      id: 4,
      nameAr: 'برامج وتطبيقات',
      nameEn: 'Software & Apps',
      image: '/api/placeholder/300/200',
      productCount: 22,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline points="16,18 22,12 16,6" stroke="currentColor" strokeWidth="2" fill="none"/>
          <polyline points="8,6 2,12 8,18" stroke="currentColor" strokeWidth="2" fill="none"/>
          <line x1="14" y1="4" x2="10" y2="20" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      techPattern: 'code'
    },
    {
      id: 5,
      nameAr: 'عملات رقمية',
      nameEn: 'Digital Currency',
      image: '/api/placeholder/300/200',
      productCount: 15,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 12h8M12 8v8M10 8h4a2 2 0 0 1 0 4h-4M10 16h4a2 2 0 0 0 0-4h-4" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      techPattern: 'crypto'
    },
    {
      id: 6,
      nameAr: 'اشتراكات',
      nameEn: 'Subscriptions',
      image: '/api/placeholder/300/200',
      productCount: 31,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="m12 1 3 6 6-3-3 6 3 6-6-3-3 6-3-6-6 3 3-6-3-6 6 3z" fill="currentColor" opacity="0.3"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      techPattern: 'streaming'
    }
  ]

  return (
    <section className={`featured-categories ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="categories-container">
        <div className="categories-header">
          <h2 className="categories-main-title">
            {isRTL ? 'أقسام المنتجات الرئيسية' : 'Featured Categories'}
          </h2>
          <p className="categories-subtitle">
            {isRTL 
              ? 'اكتشف مجموعة واسعة من المنتجات والخدمات الرقمية المتميزة' 
              : 'Discover a wide range of premium digital products and services'
            }
          </p>
        </div>
        
        <div className="categories-grid">
                      {categories.map((category) => (
              <div key={category.id} className="category-card">
              <div className="category-image">
                <div className="category-placeholder">
                  <div className="image-placeholder-icon">🖼️</div>
                  <div className="image-placeholder-text">
                    <span className="placeholder-title">
                      {isRTL ? 'ضع صورتك هنا' : 'Place Your Image Here'}
                    </span>
                    <span className="placeholder-dimensions">
                      320 × 200 px
                    </span>
                  </div>
                </div>
                <div className="category-overlay">
                  <div className="category-hover-content">
                    <div className="pulse-circle"></div>
                    <span className="explore-text">
                      {isRTL ? 'استكشف الآن' : 'Explore Now'}
                    </span>
                    <div className="tech-lines"></div>
                  </div>
                </div>
              </div>
              
              <div className="category-content">
                <h3 className="category-name">
                  {isRTL ? category.nameAr : category.nameEn}
                </h3>
                <p className="category-count">
                  {category.productCount} {isRTL ? 'منتج' : 'Products'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCategories 