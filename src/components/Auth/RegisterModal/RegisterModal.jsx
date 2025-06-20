import { useState } from 'react'
import { useLanguage } from '../../../contexts/LanguageContext'
import './RegisterModal.css'
import '../shared-modal.css'

const RegisterModal = ({ isOpen, onClose, onLogin }) => {
  const { t, isRTL } = useLanguage()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    country: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  // قائمة الدول
  const countries = [
    { value: 'eg', label: isRTL ? 'مصر' : 'Egypt' },
    { value: 'sa', label: isRTL ? 'السعودية' : 'Saudi Arabia' },
    { value: 'ae', label: isRTL ? 'الإمارات' : 'UAE' },
    { value: 'kw', label: isRTL ? 'الكويت' : 'Kuwait' },
    { value: 'qa', label: isRTL ? 'قطر' : 'Qatar' },
    { value: 'bh', label: isRTL ? 'البحرين' : 'Bahrain' },
    { value: 'om', label: isRTL ? 'عمان' : 'Oman' },
    { value: 'jo', label: isRTL ? 'الأردن' : 'Jordan' },
    { value: 'lb', label: isRTL ? 'لبنان' : 'Lebanon' },
    { value: 'sy', label: isRTL ? 'سوريا' : 'Syria' },
    { value: 'iq', label: isRTL ? 'العراق' : 'Iraq' },
    { value: 'ma', label: isRTL ? 'المغرب' : 'Morocco' },
    { value: 'dz', label: isRTL ? 'الجزائر' : 'Algeria' },
    { value: 'tn', label: isRTL ? 'تونس' : 'Tunisia' }
  ]

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
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = isRTL ? 'الاسم الأول مطلوب' : 'First name is required'
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = isRTL ? 'الاسم الثاني مطلوب' : 'Last name is required'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = isRTL ? 'رقم الهاتف مطلوب' : 'Phone number is required'
    } else if (!/^\+?[\d\s-()]{8,}$/.test(formData.phone)) {
      newErrors.phone = isRTL ? 'رقم الهاتف غير صحيح' : 'Invalid phone number'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = isRTL ? 'البريد الإلكتروني مطلوب' : 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = isRTL ? 'البريد الإلكتروني غير صحيح' : 'Invalid email format'
    }
    
    if (!formData.country) {
      newErrors.country = isRTL ? 'الدولة مطلوبة' : 'Country is required'
    }
    
    if (!formData.password) {
      newErrors.password = isRTL ? 'كلمة المرور مطلوبة' : 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = isRTL ? 'كلمة المرور يجب أن تكون 6 أحرف على الأقل' : 'Password must be at least 6 characters'
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = isRTL ? 'تأكيد كلمة المرور مطلوب' : 'Confirm password is required'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = isRTL ? 'كلمات المرور غير متطابقة' : 'Passwords do not match'
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
    
    // محاكاة عملية التسجيل
    setTimeout(() => {
      alert(isRTL ? 'تم إنشاء الحساب بنجاح!' : 'Account created successfully!')
      onClose()
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        country: '',
        password: '',
        confirmPassword: ''
      })
      setIsLoading(false)
    }, 1500)
  }

  const handleClose = () => {
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      country: '',
      password: '',
      confirmPassword: ''
    })
    setErrors({})
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content register-modal" dir={isRTL ? 'rtl' : 'ltr'} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            {isRTL ? 'إنشاء حساب جديد' : 'Create New Account'}
          </h2>
          <button className="close-button" onClick={handleClose}>
            ×
          </button>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                {isRTL ? 'الاسم الأول' : 'First Name'}
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`form-input ${errors.firstName ? 'error' : ''}`}
                placeholder={isRTL ? 'أدخل اسمك الأول' : 'Enter your first name'}
                disabled={isLoading}
              />
              {errors.firstName && (
                <span className="error-message">{errors.firstName}</span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                {isRTL ? 'الاسم الثاني' : 'Last Name'}
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`form-input ${errors.lastName ? 'error' : ''}`}
                placeholder={isRTL ? 'أدخل اسم العائلة' : 'Enter your last name'}
                disabled={isLoading}
              />
              {errors.lastName && (
                <span className="error-message">{errors.lastName}</span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              {isRTL ? 'رقم الهاتف' : 'Phone Number'}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`form-input ${errors.phone ? 'error' : ''}`}
              placeholder={isRTL ? 'أدخل رقم هاتفك' : 'Enter your phone number'}
              disabled={isLoading}
            />
            {errors.phone && (
              <span className="error-message">{errors.phone}</span>
            )}
          </div>

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
              {isRTL ? 'الدولة' : 'Country'}
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className={`form-input ${errors.country ? 'error' : ''}`}
              disabled={isLoading}
            >
              <option value="">
                {isRTL ? 'اختر دولتك' : 'Select your country'}
              </option>
              {countries.map(country => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
            {errors.country && (
              <span className="error-message">{errors.country}</span>
            )}
          </div>

          <div className="form-row">
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
                placeholder={isRTL ? 'أدخل كلمة المرور' : 'Enter password'}
                disabled={isLoading}
              />
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                {isRTL ? 'تأكيد كلمة المرور' : 'Confirm Password'}
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                placeholder={isRTL ? 'أعد كتابة كلمة المرور' : 'Confirm password'}
                disabled={isLoading}
              />
              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword}</span>
              )}
            </div>
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={isLoading}
          >
            {isLoading ? (
              isRTL ? 'جاري إنشاء الحساب...' : 'Creating Account...'
            ) : (
              isRTL ? 'إنشاء الحساب' : 'Create Account'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegisterModal 