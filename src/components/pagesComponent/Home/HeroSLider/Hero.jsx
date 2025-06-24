import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import { LanguageContext } from "@/context/LanguageContext";
import { FaShoppingCart, FaCompass, FaRocket, FaSearch } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Hero.module.css";

import wutheringWaves from "@/assets/hero/Wuthering_waves_new_banner_green.jpg";
import wildRift from "@/assets/hero/Wild_Rift_green_banner.jpg";
import genshinImpact from "@/assets/hero/genshin_impact_banner.jpg";

export default function Hero() {
  const { language } = useContext(LanguageContext);
  const isRTL = language === "ar";

  const slides = [
    {
      id: 1,
      image: wutheringWaves,
      ctaText: isRTL ? "اشتري الآن" : "Shop Now",
      ctaLink: "/products",
      alt: "Wuthering Waves banner",
      icon: <FaShoppingCart />,
    },
    {
      id: 2,
      image: wildRift,
      ctaText: isRTL ? "اكتشف المزيد" : "Discover More",
      ctaLink: "/categories",
      alt: "Wild Rift banner",
      icon: <FaCompass />,
    },
    {
      id: 3,
      image: genshinImpact, // Using Genshin as a placeholder for BANNER_TEST2.jpg
      ctaText: isRTL ? "ابدأ الآن" : "Get Started",
      ctaLink: "/register",
      alt: "Gaming Banner",
      icon: <FaRocket />,
    },
    {
      id: 4,
      image: genshinImpact,
      ctaText: isRTL ? "اكتشف المزيد" : "Discover More",
      ctaLink: "/genshin",
      alt: "Genshin Impact banner",
      icon: <FaSearch />,
    },
  ];

  return (
    <div className={styles.heroContainer}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className={styles.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.slide}>
            <div
              className={styles.slideImage}
              style={{ backgroundImage: `url(${slide.image})` }}
              role="img"
              aria-label={slide.alt}
            ></div>
            <div className={styles.overlay}></div>
            <div className={`${styles.slideContent} column center`}>
              <Link to={slide.ctaLink} className={`${styles.ctaButton} center`}>
                {slide.icon}
                <span>{slide.ctaText}</span>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
