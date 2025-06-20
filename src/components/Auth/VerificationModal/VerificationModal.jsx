import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../../../contexts/LanguageContext'
import './VerificationModal.css'
import '../shared-modal.css'

const VerificationModal = ({ isOpen, onClose, onResetPassword, email }) => {
  const { t, isRTL } = useLanguage()
  const [codes, setCodes] = useState(['', '', '', '', '', ''])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const inputRefs = useRef([])

  // رمز التحقق الثابت للاختبار
  const TEMP_VERIFICATION_CODE = '123456'

  useEffect(() => {
    if (isOpen && inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [isOpen])

  const handleInputChange = (index, value) => {
    // قبول الأرقام فقط
    if (!/^\d*$/.test(value)) return

    const newCodes = [...codes]
    newCodes[index] = value.slice(-1) // أخذ آخر رقم فقط
    setCodes(newCodes)

    if (error) {
      setError('')
    }

    // الانتقال للحقل التالي
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    // العودة للحقل السابق عند الضغط على Backspace
    if (e.key === 'Backspace' && !codes[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedText = e.clipboardData.getData('text')
    const digits = pastedText.replace(/\D/g, '').slice(0, 6)
    
    if (digits.length === 6) {
      setCodes(digits.split(''))
      inputRefs.current[5]?.focus()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const code = codes.join('')
    
    if (code.length !== 6) {
      setError(isRTL ? 'يرجى إدخال رمز التحقق كاملاً' : 'Please enter the complete verification code')
      return
    }

    setIsLoading(true)
    
    // محاكاة التحقق من الرمز
    setTimeout(() => {
      if (code === TEMP_VERIFICATION_CODE) {
        alert(isRTL ? 'تم التحقق بنجاح!' : 'Verification successful!')
        onResetPassword(email)
        setCodes(['', '', '', '', '', ''])
        setError('')
      } else {
        setError(isRTL ? 'رمز التحقق غير صحيح' : 'Invalid verification code')
      }
      setIsLoading(false)
    }, 1000)
  }

  const handleResendCode = () => {
    alert(isRTL ? 'تم إرسال رمز جديد' : 'New code sent')
  }

  const handleClose = () => {
    setCodes(['', '', '', '', '', ''])
    setError('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content verification-modal" dir={isRTL ? 'rtl' : 'ltr'} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            {isRTL ? 'رمز التحقق' : 'Verification Code'}
          </h2>
          <button className="close-button" onClick={handleClose}>
            ×
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-description">
            {isRTL 
              ? `تم إرسال رمز التحقق إلى ${email}`
              : `Verification code sent to ${email}`
            }
          </p>

          <form className="verification-form" onSubmit={handleSubmit}>
            {error && (
              <div className="error-message general-error">
                {error}
              </div>
            )}

            <div className="verification-inputs">
              {codes.map((code, index) => (
                <input
                  key={index}
                  ref={el => inputRefs.current[index] = el}
                  type="text"
                  inputMode="numeric"
                  maxLength="1"
                  value={code}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  className={`verification-input ${error ? 'error' : ''}`}
                  disabled={isLoading}
                />
              ))}
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isLoading}
            >
              {isLoading ? (
                isRTL ? 'جاري التحقق...' : 'Verifying...'
              ) : (
                isRTL ? 'تحقق' : 'Verify'
              )}
            </button>

            <div className="resend-section">
              <p className="resend-text">
                {isRTL ? 'لم تستلم الرمز؟' : 'Didn\'t receive the code?'}
              </p>
              <button 
                type="button" 
                className="resend-button"
                onClick={handleResendCode}
                disabled={isLoading}
              >
                {isRTL ? 'إعادة الإرسال' : 'Resend Code'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default VerificationModal 