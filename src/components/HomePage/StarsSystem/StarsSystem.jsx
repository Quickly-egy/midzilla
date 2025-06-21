import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useTheme } from '../../../contexts/ThemeContext';
import './StarsSystem.css';

const StarsSystem = () => {
  const { t, isRTL } = useLanguage();
  const { isDarkMode } = useTheme();

  const starLevels = [
    {
      id: 1,
      stars: 1,
      title: t('starLevel1'),
      description: t('starLevel1Desc'),
      benefit: t('starLevel1Benefit'),
      color: '#64748b'
    },
    {
      id: 2,
      stars: 2,
      title: t('starLevel2'),
      description: t('starLevel2Desc'),
      benefit: t('starLevel2Benefit'),
      color: '#059669'
    },
    {
      id: 3,
      stars: 3,
      title: t('starLevel3'),
      description: t('starLevel3Desc'),
      benefit: t('starLevel3Benefit'),
      color: '#0284c7'
    },
    {
      id: 4,
      stars: 4,
      title: t('starLevel4'),
      description: t('starLevel4Desc'),
      benefit: t('starLevel4Benefit'),
      color: '#7c3aed'
    },
    {
      id: 5,
      stars: 5,
      title: t('starLevel5'),
      description: t('starLevel5Desc'),
      benefit: t('starLevel5Benefit'),
      color: '#dc2626'
    }
  ];

  const renderStars = (count, color) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <span key={i} className="star-icon filled" style={{ color }}>
          ★
        </span>
      );
    }
    for (let i = count; i < 5; i++) {
      stars.push(
        <span key={i} className="star-icon empty">
          ☆
        </span>
      );
    }
    return stars;
  };

  return (
    <section className={`stars-system ${isRTL ? 'rtl' : 'ltr'} ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="stars-container">
        {/* Header */}
        <div className="stars-header">
          <div className="header-badge">
            <span className="badge-icon">⭐</span>
            <span className="badge-text">{t('starsSystemTitle')}</span>
          </div>
          <h2 className="stars-main-title">{t('starsSystemTitle')}</h2>
        </div>

        {/* Introduction */}
        <div className="stars-introduction">
          <h3 className="section-title">{t('starsAndAdvantages')}</h3>
        </div>

        {/* Stars Table */}
        <div className="stars-table-container">
          <div className="table-header">
            <div className="header-cell stars-col">{t('levelBadge')}</div>
            <div className="header-cell title-col">{t('titleBadge')}</div>
            <div className="header-cell operations-col">{t('operationsBadge')}</div>
            <div className="header-cell benefits-col">{t('benefitsBadge')}</div>
          </div>
          
          <div className="table-body">
            {starLevels.map((level) => (
              <div key={level.id} className="table-row" data-level={level.stars}>
                <div className="table-cell stars-col">
                  <div className="stars-display">
                    {renderStars(level.stars, level.color)}
                  </div>
                </div>
                <div className="table-cell title-col">
                  <span className="level-title" style={{ color: level.color }}>
                    {level.title}
                  </span>
                </div>
                <div className="table-cell operations-col">
                  <span className="level-description">{level.description}</span>
                </div>
                <div className="table-cell benefits-col">
                  <span className="level-benefit">{level.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Level Details Cards */}
        <div className="level-cards">
          {starLevels.map((level) => (
            <div key={level.id} className="level-card" data-level={level.stars}>
              <div className="card-header" style={{ borderTopColor: level.color }}>
                <div className="card-stars">
                  {renderStars(level.stars, level.color)}
                </div>
                <h4 className="card-title" style={{ color: level.color }}>
                  {level.title}
                </h4>
              </div>
              <div className="card-content">
                <div className="card-info">
                  <div className="info-item">
                    <span className="info-label">{t('operationsBadge')}:</span>
                    <span className="info-value">{level.description}</span>
                  </div>
                  <div className="info-item benefit">
                    <span className="info-label">{t('benefitsBadge')}:</span>
                    <span className="info-value benefit-text">{level.benefit}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
};

export default StarsSystem; 