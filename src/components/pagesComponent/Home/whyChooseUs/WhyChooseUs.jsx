import React, { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import styles from "./WhyChooseUs.module.css";

export default function WhyChooseUs() {
  const { language } = useContext(LanguageContext);
  const isRTL = language === "ar";

  const trustItems = [
    {
      icon: "🛡️",
      title: "دفع آمن 100%",
      description: "جميع عمليات الدفع محمية بتقنيات تشفير متقدمة.",
      titleEn: "100% Secure Payment",
      descriptionEn:
        "All payments are protected with advanced encryption technologies.",
    },
    {
      icon: "📦",
      title: "توصيل فوري للمنتجات الرقمية",
      description: "استلام الكود مباشرة بعد الدفع.",
      titleEn: "Instant Digital Delivery",
      descriptionEn: "Receive your code immediately after payment.",
    },
    {
      icon: "📞",
      title: "دعم فني متواصل",
      description: "فريق الدعم متواجد للرد على استفساراتك على مدار الساعة.",
      titleEn: "24/7 Technical Support",
      descriptionEn:
        "Support team available to answer your questions around the clock.",
    },
    {
      icon: "⭐",
      title: "تقييمات حقيقية من العملاء",
      description: "أكثر من 5000 عميل موثوق.",
      titleEn: "Real Customer Reviews",
      descriptionEn: "More than 5000 trusted customers.",
    },
    {
      icon: "🔄",
      title: "سياسة استرجاع مرنة",
      description: "إمكانية الاستبدال أو التعويض في حال وجود مشكلة بالكود.",
      titleEn: "Flexible Return Policy",
      descriptionEn:
        "Possibility of exchange or compensation in case of code issues.",
    },
  ];

  return (
    <section className={`${styles.section} ${isRTL ? styles.rtl : ""}`}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.titleGroup} column center`}>
          <h2 className={styles.title}>
            {isRTL ? "لماذا تختار ميدزيلا؟" : "Why Choose Midzilla?"}
          </h2>
          <p className={styles.subtitle}>
            {isRTL
              ? "نحن نقدم لك تجربة آمنة وموثوقة في عالم الألعاب."
              : "We offer you a safe and trusted experience in the world of gaming."}
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {trustItems.map((feature, index) => (
            <div key={index} className={`${styles.featureCard} between`}>
              <div className={`${styles.cardIconWrapper} center`}>
                {feature.icon}
              </div>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>
                  {isRTL ? feature.title : feature.titleEn}
                </h3>
                <p className={styles.cardDescription}>
                  {isRTL ? feature.description : feature.descriptionEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
