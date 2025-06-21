import { useState } from 'react'
import { useLanguage } from '../../../contexts/LanguageContext'
import './MobileAppPromo.css'

const MobileAppPromo = () => {
  const { t, isRTL } = useLanguage()
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    
    // محاكاة إرسال البيانات
    setTimeout(() => {
      setSubmitMessage(isRTL ? 'تم التسجيل بنجاح! سنرسل لك إشعار عند توفر التطبيق.' : 'Registration successful! We will notify you when the app is available.')
      setIsSubmitting(false)
      setEmail('')
      
      // إغلاق الـ modal بعد 3 ثوان
      setTimeout(() => {
        setShowModal(false)
        setSubmitMessage('')
      }, 3000)
    }, 1500)
  }

  const closeModal = () => {
    setShowModal(false)
    setEmail('')
    setSubmitMessage('')
    setIsSubmitting(false)
  }

  return (
    <section className={`mobile-app-promo ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container">
        <div className="app-promo-content">
          {/* النص والمحتوى */}
          <div className="promo-text">
            <h2 className="promo-title">
              {isRTL ? 'جربتك أسهل وأسرع على تطبيقنا!' : 'Your Experience is Easier and Faster on Our App!'}
            </h2>
            
            <p className="promo-description">
              {isRTL 
                ? 'وصف مختصر يشرح فوائد استخدام التطبيق'
                : 'Brief description explaining the benefits of using the app'
              }
            </p>

            {/* فوائد التطبيق */}
            <div className="app-benefits">
              <div className="benefit-item">
                <div className="benefit-icon">⚡</div>
                <span className="benefit-text">
                  {isRTL ? 'سرعة في تنفيذ الطلبات' : 'Fast Order Processing'}
                </span>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">🔧</div>
                <span className="benefit-text">
                  {isRTL ? 'سهولة التصفح' : 'Easy Navigation'}
                </span>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">🔔</div>
                <span className="benefit-text">
                  {isRTL ? 'إشعارات فورية بالعروض والخصومات' : 'Instant Notifications for Offers & Discounts'}
                </span>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">📱</div>
                <span className="benefit-text">
                  {isRTL ? 'تتبع الطلبات' : 'Order Tracking'}
                </span>
              </div>
            </div>

            {/* أيقونات المتاجر */}
            <div className="store-badges">
              <div className="store-badge">
                <div className="store-icon">🍎</div>
                <div className="store-text">
                  <span className="store-subtitle">
                    {isRTL ? 'متوفر على' : 'Available on'}
                  </span>
                  <span className="store-title">App Store</span>
                </div>
              </div>

              <div className="store-badge">
                <div className="store-icon">🤖</div>
                <div className="store-text">
                  <span className="store-subtitle">
                    {isRTL ? 'احصل عليه من' : 'Get it on'}
                  </span>
                  <span className="store-title">Google Play</span>
                </div>
              </div>
            </div>

            {/* زر الحث على الإجراء */}
            <div className="cta-section">
              <button className="app-cta-button" onClick={() => setShowModal(true)}>
                <span className="cta-text">
                  {isRTL ? 'سجل ليصلك إشعار عند توفر التطبيق' : 'Register to Get Notified When App is Available'}
                </span>
                <div className="cta-icon">📧</div>
              </button>
            </div>
          </div>

          {/* صورة الهاتف */}
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-screen">
                <div className="app-interface">
                  <div className="app-header">
                    <div className="app-logo">🎮</div>
                    <span className="app-name">Midzilla</span>
                  </div>
                  
                  <div className="app-content">
                    <div className="feature-card">
                      <div className="feature-icon">🎯</div>
                      <div className="feature-text">
                        <h4>{isRTL ? 'ألعاب متنوعة' : 'Various Games'}</h4>
                        <p>{isRTL ? 'مجموعة كبيرة من الألعاب' : 'Large collection of games'}</p>
                      </div>
                    </div>
                    
                    <div className="feature-card">
                      <div className="feature-icon">💳</div>
                      <div className="feature-text">
                        <h4>{isRTL ? 'دفع آمن' : 'Secure Payment'}</h4>
                        <p>{isRTL ? 'معاملات آمنة ومضمونة' : 'Safe and guaranteed transactions'}</p>
                      </div>
                    </div>
                    
                    <div className="feature-card">
                      <div className="feature-icon">⚡</div>
                      <div className="feature-text">
                        <h4>{isRTL ? 'تسليم فوري' : 'Instant Delivery'}</h4>
                        <p>{isRTL ? 'احصل على الكود فوراً' : 'Get your code instantly'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* زر الهوم */}
              <div className="home-button"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal تسجيل البريد الإلكتروني */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                {isRTL ? 'اشترك للحصول على إشعار' : 'Subscribe for Notifications'}
              </h3>
              <button className="modal-close" onClick={closeModal}>
                ✕
              </button>
            </div>
            
            <div className="modal-body">
              {submitMessage ? (
                <div className="success-message">
                  <div className="success-icon">✅</div>
                  <p>{submitMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      {isRTL ? 'البريد الإلكتروني' : 'Email Address'}
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={isRTL ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'}
                      className="form-input"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="form-actions">
                    <button 
                      type="submit" 
                      className="submit-button"
                      disabled={isSubmitting || !email}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="spinner"></div>
                          {isRTL ? 'جاري التسجيل...' : 'Registering...'}
                        </>
                      ) : (
                        <>
                          📧
                          {isRTL ? 'سجل الآن' : 'Register Now'}
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default MobileAppPromo 