import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const Navigation = ({ onLinkClick }) => {
  const { t } = useLanguage();
  const location = useLocation();

  const handleLinkClick = () => {
    if (onLinkClick) onLinkClick();
  };

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            {t('home')}
          </Link>
        </li>
        
        <li className="nav-item">
          <Link 
            to="/products" 
            className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            {t('allProducts') || 'جميع المنتجات'}
          </Link>
        </li>
        
        {/* Games Dropdown */}
        <li className="nav-item dropdown">
          <Link 
            to="/category/mobile-games" 
            className={`nav-link dropdown-toggle ${location.pathname.includes('/games') || location.pathname.includes('/category') ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            {t('games')}
            <span className="dropdown-arrow">▼</span>
          </Link>
          <div className="dropdown-menu">
            <Link 
              to="/category/mobile-games" 
              className="dropdown-item"
              onClick={handleLinkClick}
            >
              {t('mobileGames')}
            </Link>
            <Link 
              to="/category/pc-games" 
              className="dropdown-item"
              onClick={handleLinkClick}
            >
              {t('pcGames')}
            </Link>
            <Link 
              to="/category/console-games" 
              className="dropdown-item"
              onClick={handleLinkClick}
            >
              {t('consoleGames')}
            </Link>
          </div>
        </li>
        
        <li className="nav-item">
          <Link 
            to="/category/gift-cards" 
            className={`nav-link ${location.pathname.includes('/gift-cards') ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            {t('giftCards')}
          </Link>
        </li>
        
        <li className="nav-item">
          <Link 
            to="/faq" 
            className={`nav-link ${location.pathname === '/faq' ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            {t('faq')}
          </Link>
        </li>
        
        <li className="nav-item">
          <Link 
            to="/offers" 
            className={`nav-link ${location.pathname === '/offers' ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            {t('offers')}
          </Link>
        </li>
        
        {/* More Pages Dropdown */}
        <li className="nav-item dropdown">
          <span className="nav-link dropdown-toggle">
            {t('more')}
            <span className="dropdown-arrow">▼</span>
          </span>
          <div className="dropdown-menu">
            <Link 
              to="/about" 
              className="dropdown-item"
              onClick={handleLinkClick}
            >
              {t('aboutUs')}
            </Link>
            <Link 
              to="/contact" 
              className="dropdown-item"
              onClick={handleLinkClick}
            >
              {t('contactUs')}
            </Link>
            <Link 
              to="/support" 
              className="dropdown-item"
              onClick={handleLinkClick}
            >
              {t('support')}
            </Link>
            <Link 
              to="/stars" 
              className="dropdown-item"
              onClick={handleLinkClick}
            >
              {t('starsSystem')}
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation; 