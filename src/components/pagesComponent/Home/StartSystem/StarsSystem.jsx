import React, { useMemo } from "react";
import { useLanguage } from "../../../../context/LanguageContext";
import { useTheme } from "../../../../context/ThemeContext";
import styles from "./StarsSystem.module.css";

const translations = {
  en: {
    starsSystemTitle: "Stars & Rewards System",
    starsAndAdvantages: "Stars and Advantages",
    levelBadge: "Level",
    titleBadge: "Title",
    operationsBadge: "Operations",
    benefitsBadge: "Benefits",
    starLevel1: "Bronze Member",
    starLevel1Desc: "Basic operations and standard support",
    starLevel1Benefit: "Standard delivery times",
    starLevel2: "Silver Member",
    starLevel2Desc: "Enhanced operations and priority support",
    starLevel2Benefit: "5% discount on all purchases",
    starLevel3: "Gold Member",
    starLevel3Desc: "Advanced operations and VIP support",
    starLevel3Benefit: "10% discount + faster delivery",
    starLevel4: "Platinum Member",
    starLevel4Desc: "Premium operations and dedicated support",
    starLevel4Benefit: "15% discount + exclusive offers",
    starLevel5: "Diamond Member",
    starLevel5Desc: "Elite operations and 24/7 personal support",
    starLevel5Benefit: "20% discount + priority access",
  },
  ar: {
    starsSystemTitle: "نظام النجوم والمكافآت",
    starsAndAdvantages: "النجوم والمزايا",
    levelBadge: "المستوى",
    titleBadge: "اللقب",
    operationsBadge: "العمليات",
    benefitsBadge: "المزايا",
    starLevel1: "عضو برونزي",
    starLevel1Desc: "عمليات أساسية ودعم عادي",
    starLevel1Benefit: "أوقات توصيل عادية",
    starLevel2: "عضو فضي",
    starLevel2Desc: "عمليات محسنة ودعم ذو أولوية",
    starLevel2Benefit: "خصم 5% على جميع المشتريات",
    starLevel3: "عضو ذهبي",
    starLevel3Desc: "عمليات متقدمة ودعم VIP",
    starLevel3Benefit: "خصم 10% + توصيل أسرع",
    starLevel4: "عضو بلاتيني",
    starLevel4Desc: "عمليات مميزة ودعم مخصص",
    starLevel4Benefit: "خصم 15% + عروض حصرية",
    starLevel5: "عضو ماسي",
    starLevel5Desc: "عمليات نخبة ودعم شخصي 24/7",
    starLevel5Benefit: "خصم 20% + وصول أولوية",
  },
};

const StarIcon = React.memo(({ filled, color }) => (
  <span
    className={`${styles.starIcon} ${filled ? styles.filled : styles.empty}`}
    style={filled ? { color } : {}}
  >
    {filled ? "★" : "☆"}
  </span>
));

const StarsDisplay = React.memo(({ count, color }) => {
  const stars = useMemo(() => {
    const starArray = [];
    for (let i = 0; i < 5; i++) {
      starArray.push(<StarIcon key={i} filled={i < count} color={color} />);
    }
    return starArray;
  }, [count, color]);

  return <div className={styles.starsDisplay}>{stars}</div>;
});

const LevelCard = React.memo(({ level, t }) => (
  <div className={styles.levelCard} style={{ borderTopColor: level.color }}>
    <div className={styles.cardHeader}>
      <StarsDisplay count={level.stars} color={level.color} />
      <h4 className={styles.cardTitle} style={{ color: level.color }}>
        {t[level.titleKey]}
      </h4>
    </div>
    <div className={styles.cardContent}>
      <div className={styles.infoItem}>
        <span className={styles.infoLabel}>{t.operationsBadge}:</span>
        <span className={styles.infoValue}>{t[level.descKey]}</span>
      </div>
      <div className={styles.infoItem}>
        <span className={styles.infoLabel}>{t.benefitsBadge}:</span>
        <span className={`${styles.infoValue} ${styles.benefitText}`}>
          {t[level.benefitKey]}
        </span>
      </div>
    </div>
  </div>
));

const StarsSystem = React.memo(() => {
  const { language, isRTL } = useLanguage();
  const { isDarkMode } = useTheme();

  const t = translations[language] || translations.en;

  const starLevels = useMemo(
    () => [
      {
        id: 1,
        stars: 1,
        color: "#64748b",
        titleKey: "starLevel1",
        descKey: "starLevel1Desc",
        benefitKey: "starLevel1Benefit",
      },
      {
        id: 2,
        stars: 2,
        color: "#059669",
        titleKey: "starLevel2",
        descKey: "starLevel2Desc",
        benefitKey: "starLevel2Benefit",
      },
      {
        id: 3,
        stars: 3,
        color: "#0284c7",
        titleKey: "starLevel3",
        descKey: "starLevel3Desc",
        benefitKey: "starLevel3Benefit",
      },
      {
        id: 4,
        stars: 4,
        color: "#7c3aed",
        titleKey: "starLevel4",
        descKey: "starLevel4Desc",
        benefitKey: "starLevel4Benefit",
      },
      {
        id: 5,
        stars: 5,
        color: "#dc2626",
        titleKey: "starLevel5",
        descKey: "starLevel5Desc",
        benefitKey: "starLevel5Benefit",
      },
    ],
    []
  );

  const containerClasses = `${styles.starsSystem} ${
    isRTL ? styles.rtl : styles.ltr
  } ${isDarkMode ? styles.dark : styles.light}`;

  return (
    <section className={containerClasses}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span>⭐</span>
            <span>{t.starsSystemTitle}</span>
          </div>
          <h2 className={styles.title}>{t.starsSystemTitle}</h2>
        </div>

        <div className={styles.introduction}>
          <h3 className={styles.sectionTitle}>{t.starsAndAdvantages}</h3>
        </div>

        <div className={styles.tableContainer}>
          <div className={styles.tableHeader}>
            <div className={styles.headerCell}>{t.levelBadge}</div>
            <div className={styles.headerCell}>{t.titleBadge}</div>
            <div className={styles.headerCell}>{t.operationsBadge}</div>
            <div className={styles.headerCell}>{t.benefitsBadge}</div>
          </div>

          <div className={styles.tableBody}>
            {starLevels.map((level) => (
              <div key={level.id} className={styles.tableRow}>
                <div className={styles.tableCell}>
                  <StarsDisplay count={level.stars} color={level.color} />
                </div>
                <div className={styles.tableCell}>
                  <span
                    className={styles.levelTitle}
                    style={{ color: level.color }}
                  >
                    {t[level.titleKey]}
                  </span>
                </div>
                <div className={styles.tableCell}>
                  <span className={styles.levelDesc}>{t[level.descKey]}</span>
                </div>
                <div className={styles.tableCell}>
                  <span className={styles.levelBenefit}>
                    {t[level.benefitKey]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.levelCards}>
          {starLevels.map((level) => (
            <LevelCard key={level.id} level={level} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
});

StarsSystem.displayName = "StarsSystem";

export default StarsSystem;
