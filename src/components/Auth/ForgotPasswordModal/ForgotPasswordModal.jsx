import { useState } from 'react'
import { useLanguage } from '../../../contexts/LanguageContext'
import './ForgotPasswordModal.css'
import '../shared-modal.css'

const ForgotPasswordModal = ({ isOpen, onClose, onVerification, onLogin }) => {
  const { t, isRTL } = useLanguage()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    setEmail(e.target.value)
    if (error) {
      setError('')
    }
  }

  const validateEmail = () => {
    if (!email.trim()) {
      return isRTL ? 'البريد الإلكتروني مطلوب' : 'Email is required'
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return isRTL ? 'البريد الإلكتروني غير صحيح' : 'Invalid email format'
    }
    return ''
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const emailError = validateEmail()
    
    if (emailError) {
      setError(emailError)
      return
    }

    setIsLoading(true)
    
    // محاكاة إرسال البريد الإلكتروني
    setTimeout(() => {
      alert(isRTL ? 'تم إرسال رمز التحقق إلى بريدك الإلكتروني' : 'Verification code sent to your email')
      onVerification(email)
      setEmail('')
      setError('')
      setIsLoading(false)
    }, 1500)
  }

  const handleClose = () => {
    setEmail('')
    setError('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content forgot-password-modal" dir={isRTL ? 'rtl' : 'ltr'} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            {isRTL ? 'نسيت كلمة المرور' : 'Forgot Password'}
          </h2>
          <button className="close-button" onClick={handleClose}>
            ×
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-description">
            {isRTL 
              ? 'أدخل بريدك الإلكتروني وسنرسل لك رمز التحقق لإعادة تعيين كلمة المرور'
              : 'Enter your email address and we\'ll send you a verification code to reset your password'
            }
          </p>

          <form className="forgot-password-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">
                {isRTL ? 'البريد الإلكتروني' : 'Email Address'}
              </label>
              <input
                type="email"
                value={email}
                onChange={handleInputChange}
                className={`form-input ${error ? 'error' : ''}`}
                placeholder={isRTL ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'}
                disabled={isLoading}
              />
              {error && (
                <span className="error-message">{error}</span>
              )}
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isLoading}
            >
              {isLoading ? (
                isRTL ? 'جاري الإرسال...' : 'Sending...'
              ) : (
                isRTL ? 'إرسال رمز التحقق' : 'Send Verification Code'
              )}
            </button>

            <div className="form-divider">
              <span>{isRTL ? 'أو' : 'OR'}</span>
            </div>

            <button 
              type="button" 
              className="back-to-login-button"
              onClick={onLogin}
              disabled={isLoading}
            >
              {isRTL ? 'العودة إلى تسجيل الدخول' : 'Back to Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordModal 