import React, { memo, useMemo, useState, useCallback } from "react";
import styles from "./Offers.module.css";

const Offers = memo(() => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("discount");

  // Mock offers data - replace with real data from API
  const offers = useMemo(
    () => [
      {
        id: 1,
        title: "Genshin Impact Primogems",
        originalPrice: 299,
        discountPrice: 199,
        discount: 33,
        category: "mobile",
        image: "/src/assets/hero/genshin_impact_banner.jpg",
        badge: "Hot Deal",
        timeLeft: "2 days",
        description: "Get premium Primogems with exclusive bonus!",
      },
      {
        id: 2,
        title: "Wild Rift RP Bundle",
        originalPrice: 150,
        discountPrice: 99,
        discount: 34,
        category: "mobile",
        image: "/src/assets/hero/Wild_Rift_green_banner.jpg",
        badge: "Limited",
        timeLeft: "5 hours",
        description: "Riot Points bundle with exclusive skin",
      },
      {
        id: 3,
        title: "Wuthering Waves Pack",
        originalPrice: 199,
        discountPrice: 149,
        discount: 25,
        category: "mobile",
        image: "/src/assets/hero/Wuthering_waves_new_banner_green.jpg",
        badge: "New",
        timeLeft: "1 day",
        description: "Complete starter pack for new players",
      },
      {
        id: 4,
        title: "PC Gaming Bundle",
        originalPrice: 499,
        discountPrice: 299,
        discount: 40,
        category: "pc",
        badge: "Best Seller",
        timeLeft: "3 days",
        description: "Ultimate PC gaming package",
      },
      {
        id: 5,
        title: "Mobile Games Starter",
        originalPrice: 99,
        discountPrice: 59,
        discount: 40,
        category: "mobile",
        badge: "Flash Sale",
        timeLeft: "12 hours",
        description: "Perfect for mobile gaming beginners",
      },
      {
        id: 6,
        title: "Premium Account Pack",
        originalPrice: 399,
        discountPrice: 249,
        discount: 38,
        category: "subscription",
        badge: "Premium",
        timeLeft: "1 week",
        description: "VIP access to all premium features",
      },
    ],
    []
  );

  const categories = useMemo(
    () => [
      { id: "all", name: "جميع العروض", icon: "🎮" },
      { id: "mobile", name: "ألعاب الموبايل", icon: "📱" },
      { id: "pc", name: "ألعاب الكمبيوتر", icon: "💻" },
      { id: "subscription", name: "الاشتراكات", icon: "⭐" },
    ],
    []
  );

  const filteredOffers = useMemo(() => {
    let filtered =
      selectedCategory === "all"
        ? offers
        : offers.filter((offer) => offer.category === selectedCategory);

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "discount":
          return b.discount - a.discount;
        case "price":
          return a.discountPrice - b.discountPrice;
        case "name":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });
  }, [offers, selectedCategory, sortBy]);

  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const handleSortChange = useCallback((sort) => {
    setSortBy(sort);
  }, []);

  const formatTimeLeft = useCallback((timeLeft) => {
    return `متبقي ${timeLeft}`;
  }, []);

  return (
    <div className={`${styles.offersPage} main-container`}>
      {/* Hero Section */}
      <section className={`${styles.heroSection} section-padding`}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={`${styles.heroTitle} gradient-text`}>
                🔥 عروض حصرية للألعاب
              </h1>
              <p className={styles.heroSubtitle}>
                اكتشف أفضل العروض والخصومات على ألعابك المفضلة
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>50+</span>
                  <span className={styles.statLabel}>عرض نشط</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>70%</span>
                  <span className={styles.statLabel}>خصم يصل إلى</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>عروض متجددة</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.floatingCard}>
                <div className={styles.cardGlow}></div>
                <span className={styles.discountBadge}>خصم 50%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className={`${styles.filtersSection} section-padding`}>
        <div className="container">
          <div className={styles.filtersContainer}>
            {/* Categories */}
            <div className={styles.categoriesFilter}>
              <h3 className={styles.filterTitle}>التصنيفات</h3>
              <div className={styles.categoryButtons}>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`${styles.categoryButton} ${
                      selectedCategory === category.id ? styles.active : ""
                    } glass-effect`}
                    onClick={() => handleCategoryChange(category.id)}
                  >
                    <span className={styles.categoryIcon}>{category.icon}</span>
                    <span className={styles.categoryName}>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div className={styles.sortFilter}>
              <h3 className={styles.filterTitle}>ترتيب حسب</h3>
              <select
                className={`${styles.sortSelect} glass-effect`}
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
              >
                <option value="discount">أعلى خصم</option>
                <option value="price">السعر</option>
                <option value="name">الاسم</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className={`${styles.offersSection} section-padding`}>
        <div className="container">
          <div className={styles.offersGrid}>
            {filteredOffers.map((offer) => (
              <div
                key={offer.id}
                className={`${styles.offerCard} glass-effect`}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.badgeContainer}>
                    <span
                      className={`${styles.offerBadge} ${
                        styles[offer.badge?.toLowerCase().replace(" ", "")]
                      }`}
                    >
                      {offer.badge}
                    </span>
                    <span className={styles.discountPercentage}>
                      -{offer.discount}%
                    </span>
                  </div>
                  <div className={styles.timeLeft}>
                    ⏰ {formatTimeLeft(offer.timeLeft)}
                  </div>
                </div>

                {offer.image && (
                  <div className={styles.cardImage}>
                    <img src={offer.image} alt={offer.title} />
                    <div className={styles.imageOverlay}></div>
                  </div>
                )}

                <div className={styles.cardContent}>
                  <h3 className={styles.offerTitle}>{offer.title}</h3>
                  <p className={styles.offerDescription}>{offer.description}</p>

                  <div className={styles.priceContainer}>
                    <div className={styles.prices}>
                      <span className={styles.originalPrice}>
                        {offer.originalPrice} ر.س
                      </span>
                      <span className={styles.discountPrice}>
                        {offer.discountPrice} ر.س
                      </span>
                    </div>
                    <div className={styles.savings}>
                      وفر {offer.originalPrice - offer.discountPrice} ر.س
                    </div>
                  </div>

                  <button className={`${styles.claimButton} btn-primary`}>
                    <span>احصل على العرض</span>
                    <span className={styles.buttonIcon}>🎯</span>
                  </button>
                </div>

                <div className={styles.cardGlow}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.ctaSection} section-padding`}>
        <div className="container">
          <div className={`${styles.ctaCard} glass-effect`}>
            <div className={styles.ctaContent}>
              <h2 className={`${styles.ctaTitle} gradient-text`}>
                لا تفوت العروض الحصرية!
              </h2>
              <p className={styles.ctaDescription}>
                اشترك في النشرة الإخبارية للحصول على إشعارات فورية بأحدث العروض
                والخصومات
              </p>
              <div className={styles.ctaActions}>
                <button className={`${styles.subscribeButton} btn-primary`}>
                  اشترك الآن
                </button>
                <button className={`${styles.browseButton} btn-secondary`}>
                  تصفح المزيد
                </button>
              </div>
            </div>
            <div className={styles.ctaVisual}>
              <div className={styles.floatingElements}>
                <div className={styles.floatingElement}>💎</div>
                <div className={styles.floatingElement}>🎮</div>
                <div className={styles.floatingElement}>⚡</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

Offers.displayName = "Offers";

export default Offers;
