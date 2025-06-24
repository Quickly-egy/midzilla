import React, { useContext } from "react";
import { LanguageContext } from "../../../../context/LanguageContext";
import styles from "./ProductsCategory.module.css";

const ProductsCategory = () => {
  const { language } = useContext(LanguageContext);
  const isRTL = language === "ar";

  const categories = [
    {
      id: 1,
      titleEn: "PC Games",
      titleAr: "ألعاب كمبيوتر",
      count: 36,
      // You can replace this with actual image paths
      imagePlaceholder:
        "https://via.placeholder.com/200x320/1d293b/8093b5.png?text=Image+200x320",
    },
    {
      id: 2,
      titleEn: "Top-up Cards",
      titleAr: "بطاقات شحن",
      count: 28,
      imagePlaceholder:
        "https://via.placeholder.com/200x320/1d293b/8093b5.png?text=Image+200x320",
    },
    {
      id: 3,
      titleEn: "Mobile Games",
      titleAr: "ألعاب موبايل",
      count: 45,
      imagePlaceholder:
        "https://via.placeholder.com/200x320/1d293b/8093b5.png?text=Image+200x320",
    },
  ];

  const translations = {
    mainTitle: {
      en: "Main Product Categories",
      ar: "أقسام المنتجات الرئيسية",
    },
    subtitle: {
      en: "Discover a wide range of premium digital products and services",
      ar: "اكتشف مجموعة واسعة من المنتجات والخدمات الرقمية المتميزة",
    },
    products: {
      en: "Products",
      ar: "منتج",
    },
    putImage: {
      en: "Put your image here",
      ar: "ضع صورتك هنا",
    },
  };

  return (
    <section className={`${styles.section} ${isRTL ? styles.rtl : ""}`}>
      <div className={`container`}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>{translations.mainTitle[language]}</h2>
          <p className={styles.subtitle}>{translations.subtitle[language]}</p>
        </div>

        <div className={styles.categoriesGrid}>
          {categories.map((category) => (
            <div key={category.id} className={styles.categoryCard}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.imageIcon}>🖼️</div>
                <p>{translations.putImage[language]}</p>
                <span>px 200 x 320</span>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.categoryTitle}>
                  {isRTL ? category.titleAr : category.titleEn}
                </h3>
                <p className={styles.productCount}>
                  {category.count} {translations.products[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsCategory;
