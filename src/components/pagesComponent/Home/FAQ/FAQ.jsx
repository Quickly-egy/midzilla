import React, { useState, useMemo } from "react";
import { useLanguage } from "../../../../context/LanguageContext";
import { translations } from "../../../../translations";
import styles from "./FAQ.module.css";

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}>
      <div className={styles.faqQuestion} onClick={onClick}>
        <div className={styles.qContent}>
          <span className={styles.qIcon}>{faq.icon}</span>
          <h3 className={styles.qTitle}>{faq.question}</h3>
        </div>
        <span className={styles.qToggle}></span>
      </div>
      <div className={styles.faqAnswer}>
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const { language, isRTL } = useLanguage();
  const [openId, setOpenId] = useState(null);

  const t = useMemo(() => translations[language].faq, [language]);

  const faqs = useMemo(
    () => [
      { id: 1, question: t.faq1Q, answer: t.faq1A, icon: "🛒" },
      { id: 2, question: t.faq2Q, answer: t.faq2A, icon: "💳" },
      { id: 3, question: t.faq3Q, answer: t.faq3A, icon: "🚚" },
      { id: 4, question: t.faq4Q, answer: t.faq4A, icon: "✏️" },
    ],
    [t]
  );

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={`${styles.section} ${isRTL ? styles.rtl : ""}`}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.badge}>
            <span>❓</span>
            <span>{t.title}</span>
          </div>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        <div className={styles.faqContainer}>
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onClick={() => handleToggle(faq.id)}
            />
          ))}
        </div>

        <div className={styles.viewAllWrapper}>
          <button className={styles.viewAllBtn}>
            <span>{t.viewAll}</span>
            <span>{isRTL ? "←" : "→"}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
