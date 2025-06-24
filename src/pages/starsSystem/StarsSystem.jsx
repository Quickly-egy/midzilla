import React, { useMemo, useState, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./StarsSystem.module.css";
import {
  FaStar,
  FaGift,
  FaTrophy,
  FaCrown,
  FaShieldAlt,
  FaRocket,
  FaFire,
  FaGem,
  FaChartLine,
  FaUsers,
  FaClock,
  FaHeadset,
  FaTruck,
  FaPercent,
  FaLock,
  FaUnlock,
} from "react-icons/fa";

const StarsSystemPage = () => {
  const { language } = useContext(LanguageContext);
  const isRTL = language === "ar";
  const [selectedLevel, setSelectedLevel] = useState(null);

  const translations = useMemo(
    () => ({
      ar: {
        pageTitle: "نظام النجوم والمكافآت",
        pageSubtitle: "اكسب النجوم واحصل على مكافآت حصرية مع كل عملية شراء",
        howItWorks: "كيف يعمل النظام",
        yourProgress: "تقدمك الحالي",
        currentLevel: "المستوى الحالي",
        nextLevel: "المستوى التالي",
        starsEarned: "النجوم المكتسبة",
        starsNeeded: "النجوم المطلوبة",
        levels: {
          bronze: {
            name: "عضو برونزي",
            description: "مستوى البداية للأعضاء الجدد",
            requirements: "0-10 نجوم",
            benefits: [
              "دعم عملاء عادي",
              "أوقات توصيل عادية",
              "إمكانية الوصول للعروض العامة",
            ],
          },
          silver: {
            name: "عضو فضي",
            description: "مستوى محسن مع مزايا إضافية",
            requirements: "11-25 نجمة",
            benefits: [
              "خصم 5% على جميع المشتريات",
              "دعم ذو أولوية",
              "إشعارات مبكرة للعروض",
              "نقاط مكافآت إضافية",
            ],
          },
          gold: {
            name: "عضو ذهبي",
            description: "مستوى متقدم مع امتيازات VIP",
            requirements: "26-50 نجمة",
            benefits: [
              "خصم 10% على جميع المشتريات",
              "توصيل مجاني سريع",
              "دعم VIP مخصص",
              "وصول مبكر للمنتجات الجديدة",
              "هدايا شهرية مجانية",
            ],
          },
          platinum: {
            name: "عضو بلاتيني",
            description: "مستوى مميز للعملاء الأوفياء",
            requirements: "51-100 نجمة",
            benefits: [
              "خصم 15% على جميع المشتريات",
              "عروض حصرية فقط لأعضاء البلاتين",
              "دعم مخصص 24/7",
              "إرجاع مجاني لمدة 30 يوم",
              "دعوات لأحداث خاصة",
              "مدير حساب شخصي",
            ],
          },
          diamond: {
            name: "عضو ماسي",
            description: "أعلى مستوى في النظام",
            requirements: "100+ نجمة",
            benefits: [
              "خصم 20% على جميع المشتريات",
              "وصول أولوية لجميع المنتجات",
              "دعم شخصي مخصص",
              "منتجات حصرية فقط للماس",
              "استشارات مجانية",
              "برنامج إحالة مميز",
              "هدايا سنوية فاخرة",
            ],
          },
        },
        howToEarn: "كيفية كسب النجوم",
        earnMethods: [
          {
            title: "الشراء",
            description: "احصل على نجمة واحدة مقابل كل 10 دولار",
            icon: <FaGift />,
          },
          {
            title: "المراجعات",
            description: "اكسب 2 نجمة مقابل كل مراجعة صادقة",
            icon: <FaStar />,
          },
          {
            title: "الإحالة",
            description: "احصل على 5 نجوم مقابل كل صديق تدعوه",
            icon: <FaUsers />,
          },
          {
            title: "التفاعل",
            description: "نجمة مقابل المشاركة في وسائل التواصل",
            icon: <FaChartLine />,
          },
        ],
        achievements: "الإنجازات الخاصة",
        specialOffers: "العروض الحصرية",
        joinNow: "انضم الآن",
        learnMore: "اعرف المزيد",
        benefitsTitle: "المزايا:",
      },
      en: {
        pageTitle: "Stars & Rewards System",
        pageSubtitle:
          "Earn stars and get exclusive rewards with every purchase",
        howItWorks: "How It Works",
        yourProgress: "Your Current Progress",
        currentLevel: "Current Level",
        nextLevel: "Next Level",
        starsEarned: "Stars Earned",
        starsNeeded: "Stars Needed",
        levels: {
          bronze: {
            name: "Bronze Member",
            description: "Starting level for new members",
            requirements: "0-10 stars",
            benefits: [
              "Standard customer support",
              "Regular delivery times",
              "Access to public offers",
            ],
          },
          silver: {
            name: "Silver Member",
            description: "Enhanced level with additional benefits",
            requirements: "11-25 stars",
            benefits: [
              "5% discount on all purchases",
              "Priority support",
              "Early offer notifications",
              "Bonus reward points",
            ],
          },
          gold: {
            name: "Gold Member",
            description: "Advanced level with VIP privileges",
            requirements: "26-50 stars",
            benefits: [
              "10% discount on all purchases",
              "Free express delivery",
              "Dedicated VIP support",
              "Early access to new products",
              "Monthly free gifts",
            ],
          },
          platinum: {
            name: "Platinum Member",
            description: "Premium level for loyal customers",
            requirements: "51-100 stars",
            benefits: [
              "15% discount on all purchases",
              "Exclusive platinum-only offers",
              "24/7 dedicated support",
              "30-day free returns",
              "Special event invitations",
              "Personal account manager",
            ],
          },
          diamond: {
            name: "Diamond Member",
            description: "Highest level in the system",
            requirements: "100+ stars",
            benefits: [
              "20% discount on all purchases",
              "Priority access to all products",
              "Personal dedicated support",
              "Diamond-exclusive products",
              "Free consultations",
              "Premium referral program",
              "Annual luxury gifts",
            ],
          },
        },
        howToEarn: "How to Earn Stars",
        earnMethods: [
          {
            title: "Purchases",
            description: "Get 1 star for every $10 spent",
            icon: <FaGift />,
          },
          {
            title: "Reviews",
            description: "Earn 2 stars for each honest review",
            icon: <FaStar />,
          },
          {
            title: "Referrals",
            description: "Get 5 stars for each friend you invite",
            icon: <FaUsers />,
          },
          {
            title: "Engagement",
            description: "1 star for social media interactions",
            icon: <FaChartLine />,
          },
        ],
        achievements: "Special Achievements",
        specialOffers: "Exclusive Offers",
        joinNow: "Join Now",
        learnMore: "Learn More",
        benefitsTitle: "Benefits:",
      },
    }),
    []
  );

  const t = translations[language];

  const starLevels = useMemo(
    () => [
      {
        id: 1,
        name: "bronze",
        stars: 1,
        maxStars: 10,
        color: "#cd7f32",
        icon: <FaShieldAlt />,
        gradient: "linear-gradient(135deg, #cd7f32 0%, #b8860b 100%)",
      },
      {
        id: 2,
        name: "silver",
        stars: 2,
        maxStars: 25,
        color: "#c0c0c0",
        icon: <FaRocket />,
        gradient: "linear-gradient(135deg, #c0c0c0 0%, #a8a8a8 100%)",
      },
      {
        id: 3,
        name: "gold",
        stars: 3,
        maxStars: 50,
        color: "#ffd700",
        icon: <FaTrophy />,
        gradient: "linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)",
      },
      {
        id: 4,
        name: "platinum",
        stars: 4,
        maxStars: 100,
        color: "#e5e4e2",
        icon: <FaCrown />,
        gradient: "linear-gradient(135deg, #e5e4e2 0%, #d3d3d3 100%)",
      },
      {
        id: 5,
        name: "diamond",
        stars: 5,
        maxStars: 100,
        color: "#b9f2ff",
        icon: <FaGem />,
        gradient: "linear-gradient(135deg, #b9f2ff 0%, #00bfff 100%)",
      },
    ],
    []
  );

  // Mock user data
  const userProgress = {
    currentStars: 23,
    currentLevel: "silver",
    nextLevel: "gold",
    starsToNext: 3,
  };

  const StarIcon = React.memo(({ filled, color }) => (
    <span
      className={`${styles.starIcon} ${filled ? styles.filled : styles.empty}`}
      style={filled ? { color } : {}}
    >
      {filled ? "★" : "☆"}
    </span>
  ));

  const StarsDisplay = React.memo(({ count, color, maxCount = 5 }) => {
    const stars = useMemo(() => {
      const starArray = [];
      for (let i = 0; i < maxCount; i++) {
        starArray.push(<StarIcon key={i} filled={i < count} color={color} />);
      }
      return starArray;
    }, [count, color, maxCount]);

    return <div className={styles.starsDisplay}>{stars}</div>;
  });

  return (
    <div className={`${styles.starsSystemPage} ${isRTL ? styles.rtl : ""}`}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={`${styles.heroContent} center column`}>
            <div className={styles.heroIcon}>
              <FaStar />
            </div>
            <h1 className={styles.pageTitle}>{t.pageTitle}</h1>
            <p className={styles.pageSubtitle}>{t.pageSubtitle}</p>
          </div>
        </div>
      </section>

      {/* User Progress Section */}
      <section className={styles.progressSection}>
        <div className="container">
          <div className={styles.progressCard}>
            <h2 className={styles.sectionTitle}>{t.yourProgress}</h2>
            <div className={styles.progressGrid}>
              <div className={styles.progressItem}>
                <div className={styles.progressIcon}>
                  <FaTrophy />
                </div>
                <div className={styles.progressInfo}>
                  <span className={styles.progressLabel}>{t.currentLevel}</span>
                  <span className={styles.progressValue}>
                    {t.levels[userProgress.currentLevel].name}
                  </span>
                </div>
              </div>
              <div className={styles.progressItem}>
                <div className={styles.progressIcon}>
                  <FaStar />
                </div>
                <div className={styles.progressInfo}>
                  <span className={styles.progressLabel}>{t.starsEarned}</span>
                  <span className={styles.progressValue}>
                    {userProgress.currentStars}
                  </span>
                </div>
              </div>
              <div className={styles.progressItem}>
                <div className={styles.progressIcon}>
                  <FaRocket />
                </div>
                <div className={styles.progressInfo}>
                  <span className={styles.progressLabel}>{t.nextLevel}</span>
                  <span className={styles.progressValue}>
                    {t.levels[userProgress.nextLevel].name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section className={styles.levelsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>{t.howItWorks}</h2>
          <div className={styles.levelsGrid}>
            {starLevels.map((level) => {
              const levelData = t.levels[level.name];
              const isSelected = selectedLevel === level.id;
              const isUnlocked = userProgress.currentStars >= level.maxStars;

              return (
                <div
                  key={level.id}
                  className={`${styles.levelCard} ${
                    isSelected ? styles.selectedCard : ""
                  } ${isUnlocked ? styles.unlockedCard : styles.lockedCard}`}
                  onClick={() => setSelectedLevel(isSelected ? null : level.id)}
                  style={{ "--level-color": level.color }}
                >
                  <div className={styles.levelHeader}>
                    <div className={styles.levelIconContainer}>
                      {isUnlocked ? <FaUnlock /> : <FaLock />}
                      <span className={styles.levelIcon}>{level.icon}</span>
                    </div>
                    <StarsDisplay
                      count={level.stars}
                      color={level.color}
                      maxCount={5}
                    />
                  </div>
                  <div className={styles.levelContent}>
                    <h3 className={styles.levelName}>{levelData.name}</h3>
                    <p className={styles.levelDescription}>
                      {levelData.description}
                    </p>
                    <p className={styles.levelRequirements}>
                      {levelData.requirements}
                    </p>
                  </div>
                  {isSelected && (
                    <div className={styles.levelBenefits}>
                      <h4 className={styles.benefitsTitle}>
                        {t.benefitsTitle}
                      </h4>
                      <ul className={styles.benefitsList}>
                        {levelData.benefits.map((benefit, index) => (
                          <li key={index} className={styles.benefitItem}>
                            <FaStar className={styles.benefitIcon} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Earn Section */}
      <section className={styles.earnSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>{t.howToEarn}</h2>
          <div className={styles.earnGrid}>
            {t.earnMethods.map((method, index) => (
              <div key={index} className={styles.earnCard}>
                <div className={styles.earnIcon}>{method.icon}</div>
                <h3 className={styles.earnTitle}>{method.title}</h3>
                <p className={styles.earnDescription}>{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={`${styles.ctaContent} center column`}>
            <FaFire className={styles.ctaIcon} />
            <h2 className={styles.ctaTitle}>
              {language === "ar"
                ? "ابدأ رحلتك الآن!"
                : "Start Your Journey Now!"}
            </h2>
            <p className={styles.ctaDescription}>
              {language === "ar"
                ? "انضم إلى نظام النجوم واحصل على مكافآت حصرية"
                : "Join the stars system and get exclusive rewards"}
            </p>
            <button className={styles.ctaButton}>{t.joinNow}</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(StarsSystemPage);
