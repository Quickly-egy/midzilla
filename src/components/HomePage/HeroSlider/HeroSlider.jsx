import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../../../contexts/LanguageContext'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import './HeroSlider.css'

// تسجيل الـ plugins
gsap.registerPlugin(TextPlugin)

const HeroSlider = () => {
  const { t, isRTL } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)
  const titleRef = useRef(null)
  const ctaRef = useRef(null)
  const particlesRef = useRef(null)

  // بيانات الـ slides - صور فقط مع أزرار
  const slides = [
    {
      id: 1,
      image: null, // سيتم وضع الصورة هنا
      ctaText: isRTL ? 'اشتري الآن' : 'Shop Now',
      ctaLink: '/products',
      alt: isRTL ? 'عرض خاص' : 'Special Offer',
      dimensions: '1920x1080' // أبعاد الصورة المقترحة
    },
    {
      id: 2,
      image: null,
      ctaText: isRTL ? 'اكتشف المزيد' : 'Discover More',
      ctaLink: '/categories',
      alt: isRTL ? 'أحدث المنتجات' : 'Latest Products',
      dimensions: '1920x1080'
    },
    {
      id: 3,
      image: null,
      ctaText: isRTL ? 'ابدأ الآن' : 'Get Started',
      ctaLink: '/register',
      alt: isRTL ? 'انضم إلينا' : 'Join Us',
      dimensions: '1920x1080'
    }
  ]



  // تأثيرات الانتقال المُحسّنة بين الشرائح
  const animateSlideTransition = () => {
    if (!ctaRef.current || !sliderRef.current) return
    
    const tl = gsap.timeline()
    
    // تأثير انزلاق الشريحة مع تدوير
    tl.to(sliderRef.current, {
      duration: 0.4,
      rotationY: 10,
      scale: 0.95,
      ease: "power2.in"
    })
    
    // إخفاء الزر مع دوران
    .to(ctaRef.current, {
      duration: 0.3,
      opacity: 0,
      scale: 0.5,
      rotation: 180,
      ease: "power2.in"
    }, "-=0.2")
    
    // إعادة الشريحة لوضعها الطبيعي
    .to(sliderRef.current, {
      duration: 0.5,
      rotationY: 0,
      scale: 1,
      ease: "back.out(1.4)"
    })
    
    // إظهار الزر الجديد مع تأثير انفجار
    .to(ctaRef.current, {
      duration: 0.6,
      opacity: 1,
      scale: 1,
      rotation: 0,
      ease: "back.out(2.5)",
      delay: 0.1
    }, "-=0.3")
    
    // تأثير نبضة متقدم
    .to(ctaRef.current, {
      duration: 0.4,
      scale: 1.15,
      ease: "power2.out"
    })
    .to(ctaRef.current, {
      duration: 0.4,
      scale: 1,
      ease: "elastic.out(1, 0.5)"
    })
  }

  // التنقل التلقائي المُحسّن للـ slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // تغيير كل 5 ثوان

    return () => clearInterval(interval)
  }, [slides.length])

  // تأثيرات البداية
  useEffect(() => {
    if (!ctaRef.current) return
    
    const tl = gsap.timeline({ delay: 0.8 })
    
    // تأثير دخول الزر
    tl.from(ctaRef.current, {
      duration: 1,
      opacity: 0,
      scale: 0.5,
      y: 50,
      ease: "back.out(1.7)"
    })
    
    // تأثير نبضة ترحيبية
    .to(ctaRef.current, {
      duration: 0.3,
      scale: 1.1,
      ease: "power2.out"
    })
    .to(ctaRef.current, {
      duration: 0.3,
      scale: 1,
      ease: "power2.out"
    })
  }, [])

  // الانتقال للشريحة التالية (للاستخدام الداخلي فقط)
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    animateSlideTransition()
  }

  return (
    <section className={`hero-slider ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="slider-container" ref={sliderRef}>
        {/* الصور */}
        <div className="slides-wrapper">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{
                transform: `translateX(${(index - currentSlide) * 100}%)`
              }}
            >
              {/* منطقة الصورة العشوائية */}
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <div className="placeholder-icon">🖼️</div>
                  <div className="placeholder-text">
                    <span className="placeholder-title">
                      {isRTL ? 'ضع صورتك هنا' : 'Place Your Image Here'}
                    </span>
                    <span className="placeholder-dimensions">
                      {slide.dimensions}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* زر CTA فقط */}
              <div className="slide-content">
                <a 
                  href={slide.ctaLink} 
                  className="cta-button green-cta"
                  aria-label={slide.ctaText}
                  ref={index === currentSlide ? ctaRef : null}
                >
                  <span className="cta-text">{slide.ctaText}</span>
                  <span className="cta-arrow">
                    {isRTL ? '←' : '→'}
                  </span>
                  <div className="cta-glow"></div>
                </a>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}

export default HeroSlider 