import { useTheme } from '../../contexts/ThemeContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SearchBar from '../SearchBar'
import Navigation from './Navigation'
import LoginModal from '../Auth/LoginModal'
import RegisterModal from '../Auth/RegisterModal'
import ForgotPasswordModal from '../Auth/ForgotPasswordModal'
import VerificationModal from '../Auth/VerificationModal'
import ResetPasswordModal from '../Auth/ResetPasswordModal'
import { CartButton } from '../Cart'
import FavoritesButton from '../Favorites/FavoritesButton'
import './Header.css'

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme()
  const { t, language, toggleLanguage, isRTL } = useLanguage()
  const location = useLocation()

  // Authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [showUserDropdown, setShowUserDropdown] = useState(false)

  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Ref for user menu and mobile menu
  const userMenuRef = useRef(null)
  const mobileMenuRef = useRef(null)

  // Modal states
  const [modals, setModals] = useState({
    login: false,
    register: false,
    forgotPassword: false,
    verification: false,
    resetPassword: false
  })
  const [resetEmail, setResetEmail] = useState('')

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserDropdown(false)
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
        if (!mobileMenuBtn?.contains(event.target)) {
          setIsMobileMenuOpen(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Modal handlers
  const openModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: true }))
    setIsMobileMenuOpen(false) // Close mobile menu when opening modal
  }

  const closeAllModals = () => {
    setModals({
      login: false,
      register: false,
      forgotPassword: false,
      verification: false,
      resetPassword: false
    })
  }

  const handleForgotPassword = () => {
    closeAllModals()
    openModal('forgotPassword')
  }

  const handleVerification = (email) => {
    setResetEmail(email)
    closeAllModals()
    openModal('verification')
  }

  const handleResetPassword = (email) => {
    setResetEmail(email)
    closeAllModals()
    openModal('resetPassword')
  }

  const handleBackToLogin = () => {
    closeAllModals()
    openModal('login')
  }

  const handleShowRegister = () => {
    closeAllModals()
    openModal('register')
  }

  // Handle successful login
  const handleLoginSuccess = (email) => {
    setIsLoggedIn(true)
    setUserEmail(email)
    closeAllModals()
  }

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserEmail('')
    setShowUserDropdown(false)
    setIsMobileMenuOpen(false)
  }

  // Handle dropdown toggle
  const toggleUserDropdown = () => {
    setShowUserDropdown(prev => !prev)
  }

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev)
  }

  // Handle navigation link click in mobile menu
  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  // Helper function to check if a link is active
  const isActiveLink = (path) => {
    return location.pathname === path
  }

  return (
    <>
      <header className="header" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="header-container">
          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label={language === 'ar' ? 'فتح القائمة' : 'Open Menu'}
          >
            <span className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* Quick Actions - Left side (North) - Only show when logged in */}
          {isLoggedIn && (
            <div className="left-quick-actions">
              <div className="quick-favorites">
                <FavoritesButton />
              </div>
              <div className="quick-cart">
                <CartButton />
              </div>
            </div>
          )}

          {/* Logo Section - Positioned based on language direction */}
          <div className="logo-section">
            <Link to="/" className="logo">
              <img
                src="/assets/images/midzilla-logo.png"
                alt="Midzilla Logo"
                className="logo-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'inline';
                }}
              />
              <span className="logo-icon-fallback" style={{ display: 'none' }}>🎮</span>
              <div className="logo-text">
                <h1 className="site-name">Midzilla</h1>
                <p className="tagline">{t('tagline')}</p>
              </div>
            </Link>
          </div>

          {/* Center Section - Navigation + Search */}
          <div className="center-section">
            {/* Navigation */}
            <nav className="nav">
              <ul className="nav-list">
                <li className="nav-item">
                  <Link to="/" className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}>{t('home')}</Link>
                </li>

                {/* Games Dropdown */}
                <li className="nav-item dropdown">
                  <a href="#games" className="nav-link dropdown-toggle">
                    {t('games')}
                    <span className="dropdown-arrow">▼</span>
                  </a>
                  <div className="dropdown-menu">
                    <Link to="/mobile-games" className="dropdown-item">{t('mobileGames')}</Link>
                    <Link to="/pc-games" className="dropdown-item">{t('pcGames')}</Link>
                  </div>
                </li>

                <li className="nav-item">
                  <Link to="/gift-cards" className={`nav-link ${isActiveLink('/gift-cards') ? 'active' : ''}`}>{t('giftCards')}</Link>
                </li>

                <li className="nav-item">
                  <Link to="/software" className={`nav-link ${isActiveLink('/software') ? 'active' : ''}`}>{t('software')}</Link>
                </li>

                <li className="nav-item">
                  <Link to="/offers" className={`nav-link ${isActiveLink('/offers') ? 'active' : ''}`}>{t('offers')}</Link>
                </li>

                {/* More Pages Dropdown */}
                <li className="nav-item dropdown">
                  <a href="#more" className="nav-link dropdown-toggle">
                    {t('more')}
                    <span className="dropdown-arrow">▼</span>
                  </a>
                  <div className="dropdown-menu">
                    <Link to="/faq" className="dropdown-item">{t('faq')}</Link>
                    <Link to="/star-system" className="dropdown-item">{t('starSystem')}</Link>
                  </div>
                </li>
              </ul>
            </nav>

            {/* Search Bar */}
            <div className="search-section">
              <SearchBar />
            </div>
          </div>

          {/* Actions - Positioned based on language direction */}
          <div className="header-actions">
            {/* Language Toggle */}
            <div className="language-toggle-wrapper">
              <button
                className={`language-toggle ${language}`}
                onClick={toggleLanguage}
                aria-label={language === 'ar' ? 'تبديل إلى الإنجليزية' : 'Switch to Arabic'}
              >
                <div className="language-options">
                  <span className={`lang-option ${language === 'ar' ? 'active' : ''}`}>ع</span>
                  <span className={`lang-option ${language === 'en' ? 'active' : ''}`}>EN</span>
                </div>
              </button>
            </div>

            {/* Theme Toggle */}
            <div className="theme-toggle-wrapper">
              <button
                className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
                onClick={toggleTheme}
                aria-label={isDarkMode ? t('lightMode') || 'تبديل إلى الوضع المضيء' : t('darkMode') || 'تبديل إلى الوضع المظلم'}
              >
                <div className="toggle-track">
                  <div className="toggle-thumb">
                    <span className="theme-icon">
                      {isDarkMode ? '🌙' : '☀️'}
                    </span>
                  </div>
                </div>
              </button>
            </div>



            {/* Auth Section */}
            {isLoggedIn ? (
              /* User Dropdown Menu */
              <div className="user-menu-wrapper" ref={userMenuRef}>
                <button
                  className="user-menu-button"
                  onClick={toggleUserDropdown}
                  aria-label={isRTL ? 'حسابي' : 'My Account'}
                >
                  <span className="user-icon">👤</span>
                  <span className="user-text">
                    {isRTL ? 'حسابي' : 'My Account'}
                  </span>
                  <span className={`dropdown-arrow ${showUserDropdown ? 'open' : ''}`}>▼</span>
                </button>

                {showUserDropdown && (
                  <div className="user-dropdown-menu">
                    <div className="user-info">
                      <span className="user-email">{userEmail}</span>
                    </div>
                    <div className="dropdown-divider"></div>
                    <Link to="/orders" className="dropdown-item">
                      <span className="item-icon">📦</span>
                      {isRTL ? 'طلباتي' : 'My Orders'}
                    </Link>
                    <Link to="/points" className="dropdown-item">
                      <span className="item-icon">⭐</span>
                      {isRTL ? 'النقاط' : 'Points'}
                    </Link>
                    <div className="dropdown-divider"></div>
                    <button
                      className="dropdown-item logout-item"
                      onClick={handleLogout}
                    >
                      <span className="item-icon">🚪</span>
                      {isRTL ? 'تسجيل الخروج' : 'Logout'}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Auth Buttons */
              <div className="auth-buttons">
                <button
                  className="btn btn-outline"
                  onClick={() => openModal('login')}
                >
                  {t('login')}
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => openModal('register')}
                >
                  {t('signup')}
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <div
        className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}
        ref={mobileMenuRef}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="mobile-sidebar-content">
          {/* Mobile Menu Header */}
          <div className="mobile-menu-header">
            <Link to="/" className="mobile-logo">
              <img
                src="/assets/images/midzilla-logo.png"
                alt="Midzilla Logo"
                className="mobile-logo-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'inline';
                }}
              />
              <span className="mobile-logo-fallback" style={{ display: 'none' }}>🎮</span>
              <span className="mobile-logo-text">Midzilla</span>
            </Link>
            <button
              className="mobile-menu-close"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label={language === 'ar' ? 'إغلاق القائمة' : 'Close Menu'}
            >
              ×
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="mobile-nav">
            {/* Mobile Search Bar */}
            <div className="mobile-search-section">
              <SearchBar />
            </div>

            <div className="mobile-nav-section">
              <h3 className="mobile-nav-title">{isRTL ? 'الصفحات' : 'Pages'}</h3>
              <ul className="mobile-nav-list">
                <li className="mobile-nav-item">
                  <Link to="/" className={`mobile-nav-link ${isActiveLink('/') ? 'active' : ''}`} onClick={handleMobileNavClick}>
                    <span className="nav-icon">🏠</span>
                    {t('home')}
                  </Link>
                </li>

                <li className="mobile-nav-item">
                  <span className="mobile-nav-category">{t('games')}</span>
                  <ul className="mobile-nav-submenu">
                    <li>
                      <Link to="/mobile-games" className="mobile-nav-link" onClick={handleMobileNavClick}>
                        <span className="nav-icon">📱</span>
                        {t('mobileGames')}
                      </Link>
                    </li>
                    <li>
                      <Link to="/pc-games" className="mobile-nav-link" onClick={handleMobileNavClick}>
                        <span className="nav-icon">💻</span>
                        {t('pcGames')}
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="mobile-nav-item">
                  <Link to="/gift-cards" className={`mobile-nav-link ${isActiveLink('/gift-cards') ? 'active' : ''}`} onClick={handleMobileNavClick}>
                    <span className="nav-icon">🎁</span>
                    {t('giftCards')}
                  </Link>
                </li>

                <li className="mobile-nav-item">
                  <Link to="/software" className={`mobile-nav-link ${isActiveLink('/software') ? 'active' : ''}`} onClick={handleMobileNavClick}>
                    <span className="nav-icon">💿</span>
                    {t('software')}
                  </Link>
                </li>

                <li className="mobile-nav-item">
                  <Link to="/offers" className={`mobile-nav-link ${isActiveLink('/offers') ? 'active' : ''}`} onClick={handleMobileNavClick}>
                    <span className="nav-icon">🔥</span>
                    {t('offers')}
                  </Link>
                </li>

                <li className="mobile-nav-item">
                  <span className="mobile-nav-category">{t('more')}</span>
                  <ul className="mobile-nav-submenu">
                    <li>
                      <Link to="/faq" className={`mobile-nav-link ${isActiveLink('/faq') ? 'active' : ''}`} onClick={handleMobileNavClick}>
                        <span className="nav-icon">❓</span>
                        {t('faq')}
                      </Link>
                    </li>
                    <li>
                      <Link to="/star-system" className={`mobile-nav-link ${isActiveLink('/star-system') ? 'active' : ''}`} onClick={handleMobileNavClick}>
                        <span className="nav-icon">⭐</span>
                        {t('starSystem')}
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* User Menu in Mobile Sidebar */}
            {isLoggedIn && (
              <div className="mobile-nav-section">
                <h3 className="mobile-nav-title">{isRTL ? 'حسابي' : 'My Account'}</h3>
                <ul className="mobile-nav-list">
                  <li className="mobile-nav-item">
                    <Link to="/orders" className="mobile-nav-link" onClick={handleMobileNavClick}>
                      <span className="nav-icon">📦</span>
                      {isRTL ? 'طلباتي' : 'My Orders'}
                    </Link>
                  </li>
                  <li className="mobile-nav-item">
                    <Link to="/points" className="mobile-nav-link" onClick={handleMobileNavClick}>
                      <span className="nav-icon">⭐</span>
                      {isRTL ? 'النقاط' : 'Points'}
                    </Link>
                  </li>
                  <li className="mobile-nav-item">
                    <button className="mobile-nav-link logout-btn" onClick={handleLogout}>
                      <span className="nav-icon">🚪</span>
                      {isRTL ? 'تسجيل الخروج' : 'Logout'}
                    </button>
                  </li>
                </ul>
              </div>
            )}

            {/* Auth Buttons in Mobile Sidebar */}
            {!isLoggedIn && (
              <div className="mobile-nav-section">
                <div className="mobile-auth-buttons">
                  <button
                    className="btn btn-outline mobile-auth-btn"
                    onClick={() => openModal('login')}
                  >
                    {t('login')}
                  </button>
                  <button
                    className="btn btn-primary mobile-auth-btn"
                    onClick={() => openModal('register')}
                  >
                    {t('signup')}
                  </button>
                </div>
              </div>
            )}

            {/* Mobile Settings */}
            <div className="mobile-nav-section">
              <h3 className="mobile-nav-title">{isRTL ? 'الإعدادات' : 'Settings'}</h3>
              <div className="mobile-settings">
                <div className="mobile-setting-item">
                  <label className="mobile-setting-label">
                    <span className="setting-icon">🌍</span>
                    {isRTL ? 'اللغة' : 'Language'}
                  </label>
                  <button
                    className={`mobile-language-toggle ${language}`}
                    onClick={toggleLanguage}
                  >
                    <span className={`lang-option ${language === 'ar' ? 'active' : ''}`}>ع</span>
                    <span className={`lang-option ${language === 'en' ? 'active' : ''}`}>EN</span>
                  </button>
                </div>

                <div className="mobile-setting-item">
                  <label className="mobile-setting-label">
                    <span className="setting-icon">{isDarkMode ? '🌙' : '☀️'}</span>
                    {isDarkMode ? (t('lightMode') || 'الوضع المضيء') : (t('darkMode') || 'الوضع المظلم')}
                  </label>
                  <button
                    className={`mobile-theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
                    onClick={toggleTheme}
                  >
                    <div className="mobile-toggle-track">
                      <div className="mobile-toggle-thumb"></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-sidebar-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Authentication Modals */}
      <LoginModal
        isOpen={modals.login}
        onClose={closeAllModals}
        onForgotPassword={handleForgotPassword}
        onRegister={handleShowRegister}
        onLoginSuccess={handleLoginSuccess}
      />

      <RegisterModal
        isOpen={modals.register}
        onClose={closeAllModals}
        onLogin={handleBackToLogin}
      />

      <ForgotPasswordModal
        isOpen={modals.forgotPassword}
        onClose={closeAllModals}
        onVerification={handleVerification}
        onLogin={handleBackToLogin}
      />

      <VerificationModal
        isOpen={modals.verification}
        onClose={closeAllModals}
        onResetPassword={handleResetPassword}
        email={resetEmail}
      />

      <ResetPasswordModal
        isOpen={modals.resetPassword}
        onClose={closeAllModals}
        onLogin={handleBackToLogin}
        email={resetEmail}
      />
    </>
  )
}

export default Header 