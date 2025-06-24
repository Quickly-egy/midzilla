import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useLanguage } from "../../../../context/LanguageContext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styles from "./CustomersReview.module.css";

const StarRating = ({ rating }) => (
  <div className={styles.stars}>
    {[...Array(5)].map((_, i) => (
      <span
        key={i}
        className={i < rating ? styles.starFilled : styles.starEmpty}
      >
        ★
      </span>
    ))}
  </div>
);

const ReviewCard = ({ review }) => (
  <div className={styles.card}>
    <div className={styles.cardTop}>
      <div className={styles.user}>
        <div className={styles.avatar}>
          {review.avatar}
          {review.verified && <span className={styles.verified}>✓</span>}
        </div>
        <div>
          <h4 className={styles.name}>{review.name}</h4>
          <div className={styles.meta}>
            <span className={styles.game}>{review.game}</span>
            <span className={styles.date}>{review.date}</span>
          </div>
        </div>
      </div>
      <div className={styles.rating}>
        <StarRating rating={review.rating} />
        <span className={styles.score}>({review.rating}/5)</span>
      </div>
    </div>
    <p className={styles.text}>{review.review}</p>
  </div>
);

const CustomersReview = () => {
  const { language, isRTL } = useLanguage();

  const t = useMemo(
    () =>
      ({
        en: {
          title: "Customer Reviews",
          subtitle: "Real experiences from our gaming community",
          stats: {
            customers: "Happy Customers",
            rating: "Average Rating",
            satisfaction: "Satisfaction Rate",
          },
        },
        ar: {
          title: "آراء العملاء",
          subtitle: "تجارب حقيقية من مجتمع الألعاب لدينا",
          stats: {
            customers: "عميل راضٍ",
            rating: "تقييم متوسط",
            satisfaction: "معدل الرضا",
          },
        },
      }[language] || {
        title: "Customer Reviews",
        subtitle: "Real experiences from our gaming community",
        stats: {
          customers: "Happy Customers",
          rating: "Average Rating",
          satisfaction: "Satisfaction Rate",
        },
      }),
    [language]
  );

  const reviews = useMemo(
    () => [
      {
        id: 1,
        name: isRTL ? "أحمد محمد" : "Ahmed Mohamed",
        avatar: "👨‍💻",
        rating: 5,
        review: isRTL
          ? "تجربة رائعة! حصلت على الكود فوراً بعد الدفع. خدمة العملاء ممتازة والأسعار معقولة جداً."
          : "Amazing experience! Got the code instantly after payment. Excellent customer service and very reasonable prices.",
        game: isRTL ? "جينشين إمباكت" : "Genshin Impact",
        date: isRTL ? "منذ أسبوع" : "1 week ago",
        verified: true,
      },
      {
        id: 2,
        name: isRTL ? "سارة أحمد" : "Sara Ahmed",
        avatar: "👩‍🎓",
        rating: 5,
        review: isRTL
          ? "أفضل موقع لشراء الألعاب الرقمية! الدفع آمن والتسليم فوري. جربت مواقع كثيرة لكن هذا الأفضل."
          : "Best site for buying digital games! Secure payment and instant delivery. Tried many sites but this is the best.",
        game: isRTL ? "وايلد ريفت" : "Wild Rift",
        date: isRTL ? "منذ 3 أيام" : "3 days ago",
        verified: true,
      },
      {
        id: 3,
        name: isRTL ? "محمد علي" : "Mohamed Ali",
        avatar: "🎮",
        rating: 4,
        review: isRTL
          ? "خدمة ممتازة وسريعة. الموقع سهل الاستخدام والأسعار تنافسية. سأتعامل معهم مرة أخرى."
          : "Excellent and fast service. Easy to use website and competitive prices. Will definitely deal with them again.",
        game: isRTL ? "فالورانت" : "Valorant",
        date: isRTL ? "منذ 5 أيام" : "5 days ago",
        verified: true,
      },
      {
        id: 4,
        name: isRTL ? "فاطمة حسن" : "Fatima Hassan",
        avatar: "👩‍💼",
        rating: 5,
        review: isRTL
          ? "موقع موثوق 100%! اشتريت عدة ألعاب ولم أواجه أي مشاكل. الدعم الفني متاح دائماً."
          : "100% trustworthy site! Bought several games and never faced any problems. Technical support always available.",
        game: isRTL ? "ببجي موبايل" : "PUBG Mobile",
        date: isRTL ? "منذ يومين" : "2 days ago",
        verified: true,
      },
    ],
    [isRTL]
  );

  return (
    <section className={`${styles.section} ${isRTL ? styles.rtl : ""}`}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.badge}>
            <span>⭐</span>
            <span>{t.title}</span>
          </div>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          speed={800}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop={true}
          grabCursor={true}
          className={styles.slider}
          breakpoints={{
            640: { slidesPerView: 1.2, centeredSlides: true },
            768: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 2.5 },
            1300: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.number}>5000+</div>
            <div className={styles.label}>{t.stats.customers}</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.number}>4.9</div>
            <div className={styles.label}>{t.stats.rating}</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.number}>99%</div>
            <div className={styles.label}>{t.stats.satisfaction}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersReview;
