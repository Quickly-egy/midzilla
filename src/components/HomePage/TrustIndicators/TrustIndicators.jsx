import React from 'react'
import { useLanguage } from '../../../contexts/LanguageContext'
import './TrustIndicators.css'

const TrustIndicators = () => {
  const { isRTL } = useLanguage()

  const trustItems = [
    {
      icon: '🛡️',
      title: 'دفع آمن 100%',
      description: 'جميع عمليات الدفع محمية بتقنيات تشفير متقدمة.',
      titleEn: '100% Secure Payment',
      descriptionEn: 'All payments are protected with advanced encryption technologies.'
    },
    {
      icon: '📦',
      title: 'توصيل فوري للمنتجات الرقمية',
      description: 'استلام الكود مباشرة بعد الدفع.',
      titleEn: 'Instant Digital Delivery',
      descriptionEn: 'Receive your code immediately after payment.'
    },
    {
      icon: '📞',
      title: 'دعم فني متواصل',
      description: 'فريق الدعم متواجد للرد على استفساراتك على مدار الساعة.',
      titleEn: '24/7 Technical Support',
      descriptionEn: 'Support team available to answer your questions around the clock.'
    },
    {
      icon: '⭐',
      title: 'تقييمات حقيقية من العملاء',
      description: 'أكثر من 5000 عميل موثوق.',
      titleEn: 'Real Customer Reviews',
      descriptionEn: 'More than 5000 trusted customers.'
    },
    {
      icon: '🔄',
      title: 'سياسة استرجاع مرنة',
      description: 'إمكانية الاستبدال أو التعويض في حال وجود مشكلة بالكود.',
      titleEn: 'Flexible Return Policy',
      descriptionEn: 'Possibility of exchange or compensation in case of code issues.'
    }
  ]

  return (
    <section className={`trust-indicators ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="trust-container">
        <div className="trust-header">
          <h2 className="trust-main-title">
            {isRTL ? 'لماذا تختار ميدزيلا؟' : 'Why Choose Midzilla?'}
          </h2>
          <p className="trust-subtitle">
            {isRTL ? 'نحن نقدم لك تجربة آمنة وموثوقة في عالم الألعاب' : 'We provide you with a safe and reliable experience in the gaming world'}
          </p>
        </div>
        <div className="trust-grid">
          {trustItems.map((item, index) => (
            <div key={index} className="trust-item">
              <div className="trust-icon">
                {item.icon}
              </div>
              <div className="trust-content">
                <h3 className="trust-title">
                  {isRTL ? item.title : item.titleEn}
                </h3>
                <p className="trust-description">
                  {isRTL ? item.description : item.descriptionEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustIndicators 