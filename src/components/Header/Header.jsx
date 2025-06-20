import { useTheme } from '../../contexts/ThemeContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { useState, useEffect, useRef } from 'react'
import SearchBar from '../SearchBar'
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

  // Authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [showUserDropdown, setShowUserDropdown] = useState(false)
  
  // Ref for user menu
  const userMenuRef = useRef(null)

  // Modal states
  const [modals, setModals] = useState({
    login: false,
    register: false,
    forgotPassword: false,
    verification: false,
    resetPassword: false
  })
  const [resetEmail, setResetEmail] = useState('')

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Modal handlers
  const openModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: true }))
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
  }

  // Handle dropdown toggle
  const toggleUserDropdown = () => {
    setShowUserDropdown(prev => !prev)
  }

  return (
    <>
      <header className="header" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="header-container">
          {/* Logo Section - Positioned based on language direction */}
          <div className="logo-section">
            <div className="logo">
              <img 
                src="/assets/images/midzilla-logo.png" 
                alt="Midzilla Logo" 
                className="logo-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'inline';
                }}
              />
              <span className="logo-icon-fallback" style={{display: 'none'}}>🎮</span>
              <div className="logo-text">
                <h1 className="site-name">Midzilla</h1>
                <p className="tagline">{t('tagline')}</p>
              </div>
            </div>
          </div>

          {/* Center Section - Navigation + Search */}
          <div className="center-section">
            {/* Navigation */}
            <nav className="nav">
              <ul className="nav-list">
                <li className="nav-item">
                  <a href="#home" className="nav-link active">{t('home')}</a>
                </li>
                
                {/* Games Dropdown */}
                <li className="nav-item dropdown">
                  <a href="#games" className="nav-link dropdown-toggle">
                    {t('games')}
                    <span className="dropdown-arrow">▼</span>
                  </a>
                  <div className="dropdown-menu">
                    <a href="#mobile-games" className="dropdown-item">{t('mobileGames')}</a>
                    <a href="#pc-games" className="dropdown-item">{t('pcGames')}</a>
                  </div>
                </li>
                
                <li className="nav-item">
                  <a href="#gift-cards" className="nav-link">{t('giftCards')}</a>
                </li>
                
                <li className="nav-item">
                  <a href="#software" className="nav-link">{t('software')}</a>
                </li>
                
                <li className="nav-item">
                  <a href="#offers" className="nav-link">{t('offers')}</a>
                </li>
                
                {/* More Pages Dropdown */}
                <li className="nav-item dropdown">
                  <a href="#more" className="nav-link dropdown-toggle">
                    {t('more')}
                    <span className="dropdown-arrow">▼</span>
                  </a>
                  <div className="dropdown-menu">
                    <a href="#faq" className="dropdown-item">{t('faq')}</a>
                    <a href="#star-system" className="dropdown-item">{t('starSystem')}</a>
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

            {/* Cart and Favorites Buttons - Only show when logged in */}
            {isLoggedIn && (
              <>
                <div className="favorites-button-wrapper">
                  <FavoritesButton />
                </div>
                <div className="cart-button-wrapper">
                  <CartButton />
                </div>
              </>
            )}

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
                    <a href="#orders" className="dropdown-item">
                      <span className="item-icon">📦</span>
                      {isRTL ? 'طلباتي' : 'My Orders'}
                    </a>
                    <a href="#points" className="dropdown-item">
                      <span className="item-icon">⭐</span>
                      {isRTL ? 'النقاط' : 'Points'}
                    </a>
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

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" aria-label={language === 'ar' ? 'فتح القائمة' : 'Open Menu'}>
            <span className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </header>

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