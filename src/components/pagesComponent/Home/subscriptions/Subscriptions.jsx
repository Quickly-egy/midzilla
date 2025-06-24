import { useContext, useState, useCallback, useMemo } from "react";
import React from "react";
import { LanguageContext } from "@/context/LanguageContext";
import styles from "./Subscriptions.module.css";
import { FaEnvelope, FaLock, FaCheckCircle } from "react-icons/fa";

const Subscriptions = () => {
  const { language } = useContext(LanguageContext);
  const isRTL = language === "ar";

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const translations = useMemo(
    () => ({
      ar: {
        badge: "اشتراك في النشرة البريدية",
        title: "متوسع العروض الحصرية",
        description: "سجل إيميلك وخليك أول واحد يعرف كل جديد",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        subscribeButton: "اشترك",
        submittingText: "جاري الإرسال...",
        successMessage: "تم الاشتراك بنجاح! شكراً لك",
        errorMessage: "حدث خطأ، يرجى المحاولة مرة أخرى",
        invalidEmail: "يرجى إدخال بريد إلكتروني صحيح",
        securityNote: "خصوصيتك نوماً — منش هنشارك بياناتك مع أي طرف تالت",
      },
      en: {
        badge: "Newsletter Subscription",
        title: "Exclusive Offers Store",
        description:
          "Register your email and be the first to know everything new",
        emailPlaceholder: "Enter your email address",
        subscribeButton: "Subscribe",
        submittingText: "Submitting...",
        successMessage: "Successfully subscribed! Thank you",
        errorMessage: "An error occurred, please try again",
        invalidEmail: "Please enter a valid email address",
        securityNote:
          "Your privacy is secure — we won't share your data with any third party",
      },
    }),
    []
  );

  const t = translations[language];

  const validateEmail = useCallback((email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!email.trim()) {
        setError(t.invalidEmail);
        return;
      }

      if (!validateEmail(email)) {
        setError(t.invalidEmail);
        return;
      }

      setError("");
      setIsSubmitting(true);

      // Simulate API call
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSuccess(true);
        setEmail("");

        // Reset success state after 3 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      } catch {
        setError(t.errorMessage);
      } finally {
        setIsSubmitting(false);
      }
    },
    [email, t, validateEmail]
  );

  const handleEmailChange = useCallback(
    (e) => {
      setEmail(e.target.value);
      if (error) setError("");
    },
    [error]
  );

  return (
    <section
      className={`${styles.subscriptionSection} ${isRTL ? styles.rtl : ""}`}
    >
      <div className="container">
        <div className={styles.subscriptionCard}>
          <div className={`${styles.badge} center`}>
            <span>{t.badge}</span>
            <FaEnvelope className={styles.badgeIcon} />
          </div>

          <div className={`${styles.content} center column`}>
            <h2 className={styles.title}>{t.title}</h2>
            <p className={styles.description}>{t.description}</p>

            {isSuccess ? (
              <div className={`${styles.successContainer} center column`}>
                <FaCheckCircle className={styles.successIcon} />
                <p className={styles.successMessage}>{t.successMessage}</p>
              </div>
            ) : (
              <form className={styles.subscriptionForm} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder={t.emailPlaceholder}
                    className={`${styles.emailInput} ${
                      error ? styles.inputError : ""
                    }`}
                    disabled={isSubmitting}
                    required
                  />
                  <button
                    type="submit"
                    className={styles.subscribeButton}
                    disabled={isSubmitting || !email.trim()}
                  >
                    {isSubmitting ? (
                      <>
                        <div className={styles.spinner}></div>
                        {t.submittingText}
                      </>
                    ) : (
                      t.subscribeButton
                    )}
                  </button>
                </div>

                {error && <p className={styles.errorMessage}>{error}</p>}
              </form>
            )}

            <div className={`${styles.securityNote} center`}>
              <FaLock className={styles.lockIcon} />
              <span>{t.securityNote}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Subscriptions);
