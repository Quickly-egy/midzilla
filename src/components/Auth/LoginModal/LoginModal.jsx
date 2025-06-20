import { useState } from 'react'
import { useLanguage } from '../../../contexts/LanguageContext'
import './LoginModal.css'
import '../shared-modal.css'

const LoginModal = ({ isOpen, onClose, onForgotPassword, onRegister, onLoginSuccess }) => {
  const { t, isRTL } = useLanguage()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  // بيانات تسجيل الدخول الثابتة المؤقتة
  const TEMP_LOGIN_DATA = {
    email: 'admin@midzilla.com',
    password: '123456'
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // إزالة الخطأ عند الكتابة
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.email) {
      newErrors.email = isRTL ? 'البريد الإلكتروني مطلوب' : 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = isRTL ? 'البريد الإلكتروني غير صحيح' : 'Invalid email format'
    }
    
    if (!formData.password) {
      newErrors.password = isRTL ? 'كلمة المرور مطلوبة' : 'Password is required'
    }
    
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsLoading(true)
    
    // محاكاة عملية تسجيل الدخول
    setTimeout(() => {
      if (formData.email === TEMP_LOGIN_DATA.email && formData.password === TEMP_LOGIN_DATA.password) {
        // استدعاء callback عند نجاح تسجيل الدخول
        onLoginSuccess(formData.email)
        setFormData({ email: '', password: '' })
        setErrors({})
      } else {
        setErrors({
          general: isRTL ? 'البريد الإلكتروني أو كلمة المرور غير صحيحة' : 'Invalid email or password'
        })
      }
      setIsLoading(false)
    }, 1000)
  }

  const handleClose = () => {
    setFormData({ email: '', password: '' })
    setErrors({})
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" dir={isRTL ? 'rtl' : 'ltr'} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            {isRTL ? 'تسجيل الدخول' : 'Login'}
          </h2>
          <button className="close-button" onClick={handleClose}>
            ×
          </button>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          {errors.general && (
            <div className="error-message general-error">
              {errors.general}
            </div>
          )}

          <div className="form-group">
            <label className="form-label">
              {isRTL ? 'البريد الإلكتروني' : 'Email'}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder={isRTL ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
              disabled={isLoading}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">
              {isRTL ? 'كلمة المرور' : 'Password'}
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`form-input ${errors.password ? 'error' : ''}`}
              placeholder={isRTL ? 'أدخل كلمة المرور' : 'Enter your password'}
              disabled={isLoading}
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={isLoading}
          >
            {isLoading ? (
              isRTL ? 'جاري تسجيل الدخول...' : 'Logging in...'
            ) : (
              isRTL ? 'تسجيل الدخول' : 'Login'
            )}
          </button>

          <div className="form-links">
            <button 
              type="button" 
              className="link-button"
              onClick={onForgotPassword}
              disabled={isLoading}
            >
              {isRTL ? 'نسيت كلمة المرور؟' : 'Forgot Password?'}
            </button>
          </div>

          <div className="form-divider">
            <span>{isRTL ? 'أو' : 'OR'}</span>
          </div>

          <button 
            type="button" 
            className="register-button"
            onClick={onRegister}
            disabled={isLoading}
          >
            {isRTL ? 'إنشاء حساب جديد' : 'Create New Account'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginModal 