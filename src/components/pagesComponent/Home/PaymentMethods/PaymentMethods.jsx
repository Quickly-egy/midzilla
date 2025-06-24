import { useContext, useMemo } from "react";
import React from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { translations } from "@/translations";
import styles from "./PaymentMethods.module.css";
import {
  FaUniversity,
  FaStore,
  FaCreditCard,
  FaMobileAlt,
  FaMoneyCheckAlt,
} from "react-icons/fa";

const PaymentMethods = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language].paymentWays;
  const isRTL = language === "ar";

  const paymentMethods = useMemo(
    () => [
      {
        id: 1,
        icon: <FaUniversity />,
        title: t.bankTransfer,
        description: t.bankTransferDescription,
        color: "#3b82f6",
      },
      {
        id: 2,
        icon: <FaStore />,
        title: t.localPayment,
        description: t.localPaymentDescription,
        color: "#10b981",
      },
      {
        id: 3,
        icon: <FaCreditCard />,
        title: t.visaMastercard,
        description: t.visaMastercardDescription,
        color: "#f59e0b",
      },
      {
        id: 4,
        icon: <FaMobileAlt />,
        title: t.onContact,
        description: t.onContactDescription,
        color: "#8b5cf6",
      },
    ],
    [t]
  );

  return (
    <section className={`${styles.paymentSection} ${isRTL ? styles.rtl : ""}`}>
      <div className="container">
        <header className={`${styles.sectionHeader} center column`}>
          <h2 className={styles.sectionTitle}>{t.sectionTitle}</h2>
          <p className={styles.sectionDescription}>{t.sectionDescription}</p>
        </header>

        <div className={styles.paymentContainer}>
          <div className={`${styles.containerHeader} center`}>
            <h3 className={styles.containerTitle}>{t.supportedMethodsTitle}</h3>
            <FaMoneyCheckAlt className={styles.headerIcon} />
          </div>

          <div className={styles.methodsGrid}>
            {paymentMethods.map((method) => (
              <article
                key={method.id}
                className={styles.methodCard}
                style={{ "--method-color": method.color }}
              >
                <div className={styles.cardIconWrapper}>
                  <span className={styles.cardIcon}>{method.icon}</span>
                </div>
                <div className={styles.cardContent}>
                  <h4 className={styles.cardTitle}>{method.title}</h4>
                  <p className={styles.cardDescription}>{method.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(PaymentMethods);
