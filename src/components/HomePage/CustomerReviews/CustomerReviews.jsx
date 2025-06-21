import { useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import { useLanguage } from '../../../contexts/LanguageContext'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import './CustomerReviews.css'

const CustomerReviews = () => {
  const { t, isRTL } = useLanguage()
  const swiperRef = useRef(null)

  // بيانات آراء العملاء
  const reviews = [
    {
      id: 1,
      name: isRTL ? 'أحمد محمد' : 'Ahmed Mohamed',
      avatar: '👨‍💻',
      rating: 5,
      review: isRTL 
        ? 'تجربة رائعة! حصلت على الكود فوراً بعد الدفع. خدمة العملاء ممتازة والأسعار معقولة جداً. أنصح بشدة!'
        : 'Amazing experience! Got the code instantly after payment. Excellent customer service and very reasonable prices. Highly recommend!',
      game: isRTL ? 'جينشين إمباكت' : 'Genshin Impact',
      date: isRTL ? 'منذ أسبوع' : '1 week ago',
      verified: true
    },
    {
      id: 2,
      name: isRTL ? 'سارة أحمد' : 'Sara Ahmed',
      avatar: '👩‍🎓',
      rating: 5,
      review: isRTL 
        ? 'أفضل موقع لشراء الألعاب الرقمية! الدفع آمن والتسليم فوري. جربت مواقع كثيرة لكن هذا الأفضل على الإطلاق.'
        : 'Best site for buying digital games! Secure payment and instant delivery. Tried many sites but this is absolutely the best.',
      game: isRTL ? 'وايلد ريفت' : 'Wild Rift',
      date: isRTL ? 'منذ 3 أيام' : '3 days ago',
      verified: true
    },
    {
      id: 3,
      name: isRTL ? 'محمد علي' : 'Mohamed Ali',
      avatar: '🎮',
      rating: 4,
      review: isRTL 
        ? 'خدمة ممتازة وسريعة. الموقع سهل الاستخدام والأسعار تنافسية. سأتعامل معهم مرة أخرى بالتأكيد.'
        : 'Excellent and fast service. Easy to use website and competitive prices. Will definitely deal with them again.',
      game: isRTL ? 'فالورانت' : 'Valorant',
      date: isRTL ? 'منذ 5 أيام' : '5 days ago',
      verified: true
    },
    {
      id: 4,
      name: isRTL ? 'فاطمة حسن' : 'Fatima Hassan',
      avatar: '👩‍💼',
      rating: 5,
      review: isRTL 
        ? 'موقع موثوق 100%! اشتريت عدة ألعاب ولم أواجه أي مشاكل. الدعم الفني متاح دائماً ويساعد بسرعة.'
        : '100% trustworthy site! Bought several games and never faced any problems. Technical support is always available and helps quickly.',
      game: isRTL ? 'ببجي موبايل' : 'PUBG Mobile',
      date: isRTL ? 'منذ يومين' : '2 days ago',
      verified: true
    },
    {
      id: 5,
      name: isRTL ? 'عبدالله خالد' : 'Abdullah Khaled',
      avatar: '🕹️',
      rating: 5,
      review: isRTL 
        ? 'تجربة شراء سلسة جداً! الواجهة جميلة والتنقل سهل. الأهم من ذلك، الأكواد تعمل 100% بدون مشاكل.'
        : 'Very smooth shopping experience! Beautiful interface and easy navigation. Most importantly, codes work 100% without problems.',
      game: isRTL ? 'كول أوف ديوتي' : 'Call of Duty',
      date: isRTL ? 'منذ 4 أيام' : '4 days ago',
      verified: true
    },
    {
      id: 6,
      name: isRTL ? 'مريم سالم' : 'Mariam Salem',
      avatar: '🎯',
      rating: 4,
      review: isRTL 
        ? 'سعيدة جداً بالخدمة! الأسعار أرخص من المتاجر الأخرى والجودة عالية. أنصح كل محبي الألعاب بالتجربة.'
        : 'Very happy with the service! Prices are cheaper than other stores and quality is high. I recommend all game lovers to try it.',
      game: isRTL ? 'فري فاير' : 'Free Fire',
      date: isRTL ? 'منذ أسبوع' : '1 week ago',
      verified: true
    }
  ]

  // دالة لعرض النجوم
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`star ${index < rating ? 'filled' : 'empty'}`}
      >
        ⭐
      </span>
    ))
  }

  return (
    <section className={`customer-reviews ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container">
        {/* عنوان القسم */}
        <div className="section-header">
          <h2 className="section-title">
            {isRTL ? 'آراء عملائنا' : 'Customer Reviews'}
          </h2>
          <p className="section-subtitle">
            {isRTL 
              ? 'اكتشف تجارب العملاء الحقيقية مع منصة ميدزيلا'
              : 'Discover real customer experiences with Midzilla platform'
            }
          </p>
          <div className="title-decoration"></div>
        </div>

        {/* Swiper للآراء */}
        <div className="reviews-slider">
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            effect="coverflow"
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              el: '.swiper-pagination-custom',
              clickable: true,
              dynamicBullets: true,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="reviews-swiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="review-card">
                  {/* رأس البطاقة */}
                  <div className="review-header">
                    <div className="customer-info">
                      <div className="customer-avatar">
                        <span className="avatar-emoji">{review.avatar}</span>
                        {review.verified && (
                          <div className="verified-badge">
                            <span className="verified-icon">✓</span>
                          </div>
                        )}
                      </div>
                      <div className="customer-details">
                        <h3 className="customer-name">{review.name}</h3>
                        <p className="purchase-info">
                          <span className="game-name">{review.game}</span>
                          <span className="purchase-date">{review.date}</span>
                        </p>
                      </div>
                    </div>
                    <div className="rating">
                      {renderStars(review.rating)}
                      <span className="rating-number">({review.rating}/5)</span>
                    </div>
                  </div>

                  {/* محتوى الرأي */}
                  <div className="review-content">
                    <div className="quote-icon">"</div>
                    <p className="review-text">{review.review}</p>
                  </div>

                  {/* تأثيرات البطاقة */}
                  <div className="card-glow"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* مؤشر الصفحات المخصص */}
          <div className="swiper-pagination-custom"></div>

          {/* إحصائيات سريعة */}
          <div className="reviews-stats">
            <div className="stat-item">
              <div className="stat-number">5000+</div>
              <div className="stat-label">
                {isRTL ? 'عميل راضٍ' : 'Happy Customers'}
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9</div>
              <div className="stat-label">
                {isRTL ? 'تقييم متوسط' : 'Average Rating'}
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99%</div>
              <div className="stat-label">
                {isRTL ? 'رضا العملاء' : 'Customer Satisfaction'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews 