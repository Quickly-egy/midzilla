import React, { useState, useContext, useMemo, useCallback } from "react";
import { LanguageContext } from "../../../../context/LanguageContext";
import styles from "./MobileAppViewer.module.css";

// Memoized Modal Component
const NotificationModal = React.memo(({ isOpen, onClose, isRTL }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const translations = useMemo(
    () => ({
      title: isRTL ? "اشترك للحصول على إشعار" : "Subscribe for Notifications",
      emailLabel: isRTL ? "البريد الإلكتروني" : "Email Address",
      emailPlaceholder: isRTL
        ? "أدخل بريدك الإلكتروني"
        : "Enter your email address",
      registerBtn: isRTL ? "سجل الآن" : "Register Now",
      submitting: isRTL ? "جاري التسجيل..." : "Registering...",
      success: isRTL
        ? "تم التسجيل بنجاح! سنرسل لك إشعار عند توفر التطبيق."
        : "Registration successful! We will notify you when the app is available.",
    }),
    [isRTL]
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!email) return;

      setIsSubmitting(true);

      setTimeout(() => {
        setSubmitMessage(translations.success);
        setIsSubmitting(false);
        setEmail("");

        setTimeout(() => {
          onClose();
          setSubmitMessage("");
        }, 3000);
      }, 1500);
    },
    [email, translations.success, onClose]
  );

  const handleClose = useCallback(() => {
    onClose();
    setEmail("");
    setSubmitMessage("");
    setIsSubmitting(false);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>{translations.title}</h3>
          <button className={styles.modalClose} onClick={handleClose}>
            ✕
          </button>
        </div>

        <div className={styles.modalBody}>
          {submitMessage ? (
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>✅</div>
              <p>{submitMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  {translations.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={translations.emailPlaceholder}
                  className={styles.formInput}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting || !email}
              >
                {isSubmitting ? (
                  <>
                    <div className={styles.spinner}></div>
                    {translations.submitting}
                  </>
                ) : (
                  <>
                    📧
                    {translations.registerBtn}
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
});

NotificationModal.displayName = "NotificationModal";

const MobileAppViewer = () => {
  const { language } = useContext(LanguageContext);
  const [showModal, setShowModal] = useState(false);
  const isRTL = language === "ar";

  const translations = useMemo(
    () => ({
      title: isRTL
        ? "تجربتك أسهل وأسرع على تطبيقنا!"
        : "Your Experience is Easier and Faster on Our App!",
      description: isRTL
        ? "وصف مختصر يشرح فوائد استخدام التطبيق"
        : "Brief description explaining the benefits of using the app",
      benefits: [
        {
          icon: "⚡",
          text: isRTL ? "سرعة في تنفيذ الطلبات" : "Fast Order Processing",
        },
        {
          icon: "🔧",
          text: isRTL ? "سهولة التصفح" : "Easy Navigation",
        },
        {
          icon: "🔔",
          text: isRTL
            ? "إشعارات فورية بالعروض والخصومات"
            : "Instant Notifications for Offers & Discounts",
        },
        {
          icon: "📱",
          text: isRTL ? "تتبع الطلبات" : "Order Tracking",
        },
      ],
      stores: [
        {
          icon: "🍎",
          subtitle: isRTL ? "متوفر على" : "Available on",
          title: "App Store",
        },
        {
          icon: "🤖",
          subtitle: isRTL ? "احصل عليه من" : "Get it on",
          title: "Google Play",
        },
      ],
      ctaText: isRTL
        ? "سجل ليصلك إشعار عند توفر التطبيق"
        : "Register to Get Notified When App is Available",
      appFeatures: [
        {
          icon: "🎯",
          title: isRTL ? "ألعاب متنوعة" : "Various Games",
          desc: isRTL ? "مجموعة كبيرة من الألعاب" : "Large collection of games",
        },
        {
          icon: "💳",
          title: isRTL ? "دفع آمن" : "Secure Payment",
          desc: isRTL
            ? "معاملات آمنة ومضمونة"
            : "Safe and guaranteed transactions",
        },
        {
          icon: "⚡",
          title: isRTL ? "تسليم فوري" : "Instant Delivery",
          desc: isRTL ? "احصل على الكود فوراً" : "Get your code instantly",
        },
      ],
    }),
    [isRTL]
  );

  const openModal = useCallback(() => setShowModal(true), []);
  const closeModal = useCallback(() => setShowModal(false), []);

  return (
    <section className={`${styles.section} ${isRTL ? styles.rtl : ""}`}>
      <div className="container">
        <div className={styles.content}>
          {/* Text Content */}
          <div className={styles.textContent}>
            <h2 className={styles.title}>{translations.title}</h2>
            <p className={styles.description}>{translations.description}</p>

            {/* Benefits */}
            <div className={styles.benefits}>
              {translations.benefits.map((benefit, index) => (
                <div key={index} className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>{benefit.icon}</div>
                  <span className={styles.benefitText}>{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Store Badges */}
            <div className={styles.storeBadges}>
              {translations.stores.map((store, index) => (
                <div key={index} className={styles.storeBadge}>
                  <div className={styles.storeIcon}>{store.icon}</div>
                  <div className={styles.storeText}>
                    <span className={styles.storeSubtitle}>
                      {store.subtitle}
                    </span>
                    <span className={styles.storeTitle}>{store.title}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className={styles.ctaButton} onClick={openModal}>
              <span className={styles.ctaText}>{translations.ctaText}</span>
              <div className={styles.ctaIcon}>📧</div>
            </button>
          </div>

          {/* Phone Mockup */}
          <div className={styles.phoneMockup}>
            <div className={styles.phoneFrame}>
              <div className={styles.phoneScreen}>
                <div className={styles.appInterface}>
                  <div className={styles.appHeader}>
                    <div className={styles.appLogo}>🎮</div>
                    <span className={styles.appName}>Midzilla</span>
                  </div>

                  <div className={styles.appContent}>
                    {translations.appFeatures.map((feature, index) => (
                      <div key={index} className={styles.featureCard}>
                        <div className={styles.featureIcon}>{feature.icon}</div>
                        <div className={styles.featureText}>
                          <h4>{feature.title}</h4>
                          <p>{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.homeButton}></div>
            </div>
          </div>
        </div>
      </div>

      <NotificationModal
        isOpen={showModal}
        onClose={closeModal}
        isRTL={isRTL}
      />
    </section>
  );
};

export default React.memo(MobileAppViewer);
