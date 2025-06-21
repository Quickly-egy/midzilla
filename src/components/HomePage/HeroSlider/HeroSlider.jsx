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

  // بيانات الـ slides - صور حقيقية مع أزرار
  const slides = [
    {
      id: 1,
      image: '/assets/slider/Wuthering_waves_new_banner_green.jpg',
      ctaText: isRTL ? 'اشتري الآن' : 'Shop Now',
      ctaLink: '/products',
      alt: isRTL ? 'Wuthering Waves' : 'Wuthering Waves'
    },
    {
      id: 2,
      image: '/assets/slider/Wild_Rift_green_banner.jpg',
      ctaText: isRTL ? 'اكتشف المزيد' : 'Discover More',
      ctaLink: '/categories',
      alt: isRTL ? 'Wild Rift' : 'Wild Rift'
    },
    {
      id: 3,
      image: '/assets/slider/BANNER_TEST2.jpg',
      ctaText: isRTL ? 'ابدأ الآن' : 'Get Started',
      ctaLink: '/register',
      alt: isRTL ? 'Gaming Banner' : 'Gaming Banner'
    },
    {
      id: 4,
      image: '/assets/slider/genshin_impact_banner.jpg',
      ctaText: isRTL ? 'اكتشف المزيد' : 'Discover More',
      ctaLink: '/genshin',
      alt: isRTL ? 'Genshin Impact' : 'Genshin Impact'
    }
  ]



  // تأثيرات الانتقال المُحسّنة والمبسطة للديسكتوب
  const animateSlideTransition = () => {
    if (!ctaRef.current || !sliderRef.current) return
    
    const tl = gsap.timeline()
    
    // انتقال بسيط وناعم للشريحة
    tl.to(sliderRef.current, {
      duration: 0.3,
      scale: 0.98,
      ease: "power2.out"
    })
    
    // إخفاء الزر بحركة ناعمة
    .to(ctaRef.current, {
      duration: 0.25,
      opacity: 0,
      y: 20,
      ease: "power2.in"
    }, "-=0.1")
    
    // إعادة الشريحة لوضعها الطبيعي
    .to(sliderRef.current, {
      duration: 0.4,
      scale: 1,
      ease: "power2.out"
    })
    
    // إظهار الزر الجديد بحركة ناعمة
    .to(ctaRef.current, {
      duration: 0.4,
      opacity: 1,
      y: 0,
      ease: "power2.out",
      delay: 0.1
    }, "-=0.2")
  }

  // التنقل التلقائي المُحسّن للـ slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // تغيير كل 5 ثوان

    return () => clearInterval(interval)
  }, [slides.length])

  // تأثيرات البداية المبسطة
  useEffect(() => {
    if (!ctaRef.current) return
    
    const tl = gsap.timeline({ delay: 0.5 })
    
    // تأثير دخول بسيط وناعم للزر
    tl.from(ctaRef.current, {
      duration: 0.8,
      opacity: 0,
      y: 30,
      ease: "power2.out"
    })
    
    // نبضة ترحيبية خفيفة
    .to(ctaRef.current, {
      duration: 0.3,
      scale: 1.05,
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
              {/* صورة الـ slide */}
              <div className="slide-image">
                <img 
                  src={slide.image} 
                  alt={slide.alt}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    console.warn(`Failed to load image: ${slide.image}`);
                  }}
                />
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