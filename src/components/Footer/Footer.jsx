import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { translations, isRTL } = useLanguage();

  return (
    <footer className={`footer ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="footer-container">
        
        {/* Main Footer Content */}
        <div className="footer-main">
          
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Midzilla</h3>
              <span className="logo-tagline">متجر الألعاب الرقمية الأول</span>
            </div>
            <p className="company-description">
              منصة رائدة لبيع الألعاب الرقمية وبطاقات الشحن مع أفضل الأسعار وخدمة عملاء متميزة على مدار الساعة
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Discord">
                <i className="social-icon">🎮</i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="social-icon">📷</i>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="social-icon">🐦</i>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <i className="social-icon">📺</i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="section-title">روابط سريعة</h4>
            <ul className="footer-links">
              <li><a href="/games">جميع الألعاب</a></li>
              <li><a href="/cards">بطاقات الشحن</a></li>
              <li><a href="/offers">العروض الحصرية</a></li>
              <li><a href="/stars">نظام النجوم</a></li>
              <li><a href="/faq">الأسئلة الشائعة</a></li>
              <li><a href="/support">الدعم الفني</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h4 className="section-title">الفئات الشائعة</h4>
            <ul className="footer-links">
              <li><a href="/category/pc">ألعاب الكمبيوتر</a></li>
              <li><a href="/category/console">ألعاب الكونسول</a></li>
              <li><a href="/category/mobile">ألعاب الموبايل</a></li>
              <li><a href="/category/giftcards">بطاقات الهدايا</a></li>
              <li><a href="/category/subscriptions">الاشتراكات</a></li>
              <li><a href="/category/software">البرامج</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-section">
            <h4 className="section-title">خدمة العملاء</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>WhatsApp: +966 50 123 4567</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>support@midzilla.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <span>متاح 24/7</span>
              </div>
            </div>
            <div className="support-features">
              <div className="feature-badge">
                <span className="badge-icon">⚡</span>
                <span>تسليم فوري</span>
              </div>
              <div className="feature-badge">
                <span className="badge-icon">🔒</span>
                <span>دفع آمن</span>
              </div>
            </div>
          </div>

        </div>



        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <span>&copy; 2024 Midzilla. جميع الحقوق محفوظة</span>
            </div>
            <div className="legal-links">
              <a href="/privacy">سياسة الخصوصية</a>
              <a href="/terms">شروط الاستخدام</a>
              <a href="/refund">سياسة الاسترداد</a>
            </div>
            <div className="security-badge">
              <span className="security-icon">🛡️</span>
              <span>موقع آمن ومحمي</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer; 