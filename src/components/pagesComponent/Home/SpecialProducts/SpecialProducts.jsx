import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { LanguageContext } from "../../../../context/LanguageContext";
import styles from "./SpecialProducts.module.css";

const SpecialProducts = () => {
  const { language } = useContext(LanguageContext);
  const isRTL = language === "ar";

  const products = [
    {
      id: 1,
      categoryEn: "Digital Cards",
      categoryAr: "بطاقات رقمية",
      titleEn: "Steam Wallet Card",
      titleAr: "بطاقة Steam Wallet",
      rating: 4.7,
      reviews: 567,
      price: 20,
      originalPrice: 25,
      discount: 20,
    },
    {
      id: 2,
      categoryEn: "Game Subscriptions",
      categoryAr: "اشتراكات الألعاب",
      titleEn: "Xbox Live Gold",
      titleAr: "كود Xbox Live Gold",
      rating: 4.9,
      reviews: 189,
      price: 60,
      originalPrice: null,
      discount: null,
    },
    {
      id: 3,
      categoryEn: "Game Cards",
      categoryAr: "بطاقات الألعاب",
      titleEn: "PlayStation Store Card",
      titleAr: "بطاقة PlayStation Store",
      rating: 4.8,
      reviews: 234,
      price: 45,
      originalPrice: 50,
      discount: 10,
    },
  ];

  const translations = {
    mainTitle: {
      en: "Featured Products",
      ar: "المنتجات المميزة",
    },
    subtitle: {
      en: "A selection of products we want to highlight, including current offers and highly requested items.",
      ar: "مجموعة من المنتجات التي نرغب في تسليط الضوء عليها، سواء لعروض حالية أو منتجات عليها طلب مرتفع.",
    },
    buyNow: {
      en: "Buy Now",
      ar: "اشتري الآن",
    },
    rating: {
      en: "Rating",
      ar: "تقييم",
    },
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          color={i <= Math.round(rating) ? "#ffc107" : "#e4e5e9"}
        />
      );
    }
    return stars;
  };

  return (
    <section className={`${styles.section} ${isRTL ? styles.rtl : ""}`}>
      <div className="container">
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>{translations.mainTitle[language]}</h2>
          <p className={styles.subtitle}>{translations.subtitle[language]}</p>
        </div>

        <div className={styles.productsGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              {product.discount && (
                <div className={styles.discountBadge}>{product.discount}%</div>
              )}

              <div className={styles.imagePlaceholder}>
                <div className={styles.imageIcon}>🖼️</div>
                <p>{isRTL ? "صورة المنتج" : "Product Image"}</p>
                <span>px 200 x 300</span>
              </div>

              <div className={styles.cardContent}>
                <p className={styles.productCategory}>
                  {isRTL ? product.categoryAr : product.categoryEn}
                </p>
                <h3 className={styles.productTitle}>
                  {isRTL ? product.titleAr : product.titleEn}
                </h3>

                <div className={styles.rating}>
                  {renderStars(product.rating)}
                  <span className={styles.ratingText}>
                    {product.rating.toFixed(1)} ({product.reviews}{" "}
                    {translations.rating[language]})
                  </span>
                </div>

                <div className={styles.priceContainer}>
                  <p className={styles.currentPrice}>${product.price}</p>
                  {product.originalPrice && (
                    <p className={styles.originalPrice}>
                      ${product.originalPrice}
                    </p>
                  )}
                </div>

                <button className={styles.buyButton}>
                  {translations.buyNow[language]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialProducts;
