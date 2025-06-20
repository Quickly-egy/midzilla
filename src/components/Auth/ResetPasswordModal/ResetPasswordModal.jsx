import { useState } from 'react'
import { useLanguage } from '../../../contexts/LanguageContext'
import './ResetPasswordModal.css'
import '../shared-modal.css'

const ResetPasswordModal = ({ isOpen, onClose, onLogin, email }) => {
  const { t, isRTL } = useLanguage()
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

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
    
    // محاكاة تحديث كلمة المرور
    setTimeout(() => {
      alert(isRTL ? 'تم تحديث كلمة المرور بنجاح!' : 'Password updated successfully!')
      onLogin()
      setFormData({ password: '', confirmPassword: '' })
      setErrors({})
      setIsLoading(false)
    }, 1500)
  }

  const handleClose = () => {
    setFormData({ password: '', confirmPassword: '' })
    setErrors({})
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content reset-password-modal" dir={isRTL ? 'rtl' : 'ltr'} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            {isRTL ? 'إعادة تعيين كلمة المرور' : 'Reset Password'}
          </h2>
          <button className="close-button" onClick={handleClose}>
            ×
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-description">
            {isRTL 
              ? `أدخل كلمة المرور الجديدة لحساب ${email}`
              : `Enter new password for ${email}`
            }
          </p>

          <form className="reset-password-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">
                {isRTL ? 'كلمة المرور الجديدة' : 'New Password'}
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`form-input ${errors.password ? 'error' : ''}`}
                placeholder={isRTL ? 'أدخل كلمة المرور الجديدة' : 'Enter new password'}
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
                placeholder={isRTL ? 'أعد كتابة كلمة المرور' : 'Confirm new password'}
                disabled={isLoading}
              />
              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword}</span>
              )}
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isLoading}
            >
              {isLoading ? (
                isRTL ? 'جاري التحديث...' : 'Updating...'
              ) : (
                isRTL ? 'تحديث كلمة المرور' : 'Update Password'
              )}
            </button>
          </form>

          {/* معايير كلمة المرور */}
          <div className="password-requirements">
            <h4 className="requirements-title">
              {isRTL ? 'متطلبات كلمة المرور:' : 'Password Requirements:'}
            </h4>
            <ul className="requirements-list">
              <li className={formData.password.length >= 6 ? 'valid' : ''}>
                {isRTL ? '6 أحرف على الأقل' : 'At least 6 characters'}
              </li>
              <li className={/[A-Z]/.test(formData.password) ? 'valid' : ''}>
                {isRTL ? 'حرف كبير واحد على الأقل' : 'At least one uppercase letter'}
              </li>
              <li className={/[0-9]/.test(formData.password) ? 'valid' : ''}>
                {isRTL ? 'رقم واحد على الأقل' : 'At least one number'}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPasswordModal 