import { useContext, useMemo } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "@/context/LanguageContext";
import styles from "./Footer.module.css";
import {
  FaGamepad,
  FaHome,
  FaShoppingCart,
  FaGift,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaYoutube,
  FaTelegram,
  FaCreditCard,
  FaPaypal,
  FaUniversity,
  FaMobileAlt,
  FaHeart,
  FaShieldAlt,
  FaTruck,
  FaHeadset,
} from "react-icons/fa";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const isRTL = language === "ar";

  const footerData = useMemo(
    () => ({
      ar: {
        company: {
          name: "ميدزيلا",
          description:
            "مركزك الأول للألعاب والشحن الرقمي. نوفر أفضل الأسعار وأسرع خدمة توصيل للألعاب والبطاقات الرقمية.",
          tagline: "مركزك الأول للألعاب والشحن",
        },
        quickLinks: {
          title: "روابط سريعة",
          links: [
            { name: "الرئيسية", path: "/" },
            { name: "الألعاب", path: "/games" },
            { name: "البطاقات", path: "/cards" },
            { name: "العروض", path: "/offers" },
            { name: "من نحن", path: "/about" },
            { name: "اتصل بنا", path: "/contact" },
          ],
        },
        services: {
          title: "خدماتنا",
          items: [
            { name: "شحن الألعاب", icon: <FaGamepad /> },
            { name: "البطاقات الرقمية", icon: <FaCreditCard /> },
            { name: "التوصيل الفوري", icon: <FaTruck /> },
            { name: "الدعم الفني", icon: <FaHeadset /> },
          ],
        },
        contact: {
          title: "تواصل معنا",
          info: [
            { icon: <FaPhone />, text: "+20 123 456 7890", type: "phone" },
            { icon: <FaEnvelope />, text: "info@midzilla.com", type: "email" },
            { icon: <FaMapMarkerAlt />, text: "القاهرة، مصر", type: "address" },
            { icon: <FaClock />, text: "24/7 خدمة العملاء", type: "hours" },
          ],
        },
        social: {
          title: "تابعنا",
          links: [
            {
              name: "فيسبوك",
              icon: <FaFacebookF />,
              url: "#",
              color: "#1877f2",
            },
            { name: "تويتر", icon: <FaTwitter />, url: "#", color: "#1da1f2" },
            {
              name: "إنستغرام",
              icon: <FaInstagram />,
              url: "#",
              color: "#e4405f",
            },
            {
              name: "ديسكورد",
              icon: <FaDiscord />,
              url: "#",
              color: "#5865f2",
            },
            { name: "يوتيوب", icon: <FaYoutube />, url: "#", color: "#ff0000" },
            {
              name: "تيليجرام",
              icon: <FaTelegram />,
              url: "#",
              color: "#0088cc",
            },
          ],
        },
        newsletter: {
          title: "النشرة البريدية",
          description: "اشترك للحصول على أحدث العروض والألعاب الجديدة",
          placeholder: "أدخل بريدك الإلكتروني",
          button: "اشترك",
        },
        payments: {
          title: "طرق الدفع المقبولة",
          methods: [
            { name: "فيزا", icon: <FaCreditCard /> },
            { name: "باي بال", icon: <FaPaypal /> },
            { name: "تحويل بنكي", icon: <FaUniversity /> },
            { name: "دفع عند الاستلام", icon: <FaMobileAlt /> },
          ],
        },
        features: [
          { name: "دفع آمن 100%", icon: <FaShieldAlt /> },
          { name: "توصيل فوري", icon: <FaTruck /> },
          { name: "دعم فني 24/7", icon: <FaHeadset /> },
        ],
        copyright: "© 2024 ميدزيلا. جميع الحقوق محفوظة.",
        madeWith: "صنع بـ",
        in: "في مصر",
      },
      en: {
        company: {
          name: "Midzilla",
          description:
            "Your #1 hub for games and digital top-up. We provide the best prices and fastest delivery service for games and digital cards.",
          tagline: "Your #1 hub for games and shipping",
        },
        quickLinks: {
          title: "Quick Links",
          links: [
            { name: "Home", path: "/" },
            { name: "Games", path: "/games" },
            { name: "Cards", path: "/cards" },
            { name: "Offers", path: "/offers" },
            { name: "About Us", path: "/about" },
            { name: "Contact", path: "/contact" },
          ],
        },
        services: {
          title: "Our Services",
          items: [
            { name: "Game Top-up", icon: <FaGamepad /> },
            { name: "Digital Cards", icon: <FaCreditCard /> },
            { name: "Instant Delivery", icon: <FaTruck /> },
            { name: "Technical Support", icon: <FaHeadset /> },
          ],
        },
        contact: {
          title: "Contact Us",
          info: [
            { icon: <FaPhone />, text: "+20 123 456 7890", type: "phone" },
            { icon: <FaEnvelope />, text: "info@midzilla.com", type: "email" },
            { icon: <FaMapMarkerAlt />, text: "Cairo, Egypt", type: "address" },
            { icon: <FaClock />, text: "24/7 Customer Service", type: "hours" },
          ],
        },
        social: {
          title: "Follow Us",
          links: [
            {
              name: "Facebook",
              icon: <FaFacebookF />,
              url: "#",
              color: "#1877f2",
            },
            {
              name: "Twitter",
              icon: <FaTwitter />,
              url: "#",
              color: "#1da1f2",
            },
            {
              name: "Instagram",
              icon: <FaInstagram />,
              url: "#",
              color: "#e4405f",
            },
            {
              name: "Discord",
              icon: <FaDiscord />,
              url: "#",
              color: "#5865f2",
            },
            {
              name: "YouTube",
              icon: <FaYoutube />,
              url: "#",
              color: "#ff0000",
            },
            {
              name: "Telegram",
              icon: <FaTelegram />,
              url: "#",
              color: "#0088cc",
            },
          ],
        },
        newsletter: {
          title: "Newsletter",
          description: "Subscribe to get the latest offers and new games",
          placeholder: "Enter your email address",
          button: "Subscribe",
        },
        payments: {
          title: "Accepted Payment Methods",
          methods: [
            { name: "Visa", icon: <FaCreditCard /> },
            { name: "PayPal", icon: <FaPaypal /> },
            { name: "Bank Transfer", icon: <FaUniversity /> },
            { name: "Cash on Delivery", icon: <FaMobileAlt /> },
          ],
        },
        features: [
          { name: "100% Secure Payment", icon: <FaShieldAlt /> },
          { name: "Instant Delivery", icon: <FaTruck /> },
          { name: "24/7 Support", icon: <FaHeadset /> },
        ],
        copyright: "© 2024 Midzilla. All rights reserved.",
        madeWith: "Made with",
        in: "in Egypt",
      },
    }),
    []
  );

  const t = footerData[language];

  return (
    <footer className={`${styles.footer} ${isRTL ? styles.rtl : ""}`}>
      {/* Main Footer Content */}
      <div className={`${styles.footerMain} container`}>
        <div className={styles.footerGrid}>
          {/* Company Info */}
          <div className={styles.companySection}>
            <div className={styles.logo}>
              <FaGamepad className={styles.logoIcon} />
              <span className={styles.logoText}>{t.company.name}</span>
            </div>
            <p className={styles.companyDescription}>{t.company.description}</p>
            <div className={styles.features}>
              {t.features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <span className={styles.featureIcon}>{feature.icon}</span>
                  <span className={styles.featureText}>{feature.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>{t.quickLinks.title}</h3>
            <ul className={styles.linksList}>
              {t.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className={styles.footerLink}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>{t.services.title}</h3>
            <ul className={styles.servicesList}>
              {t.services.items.map((service, index) => (
                <li key={index} className={styles.serviceItem}>
                  <span className={styles.serviceIcon}>{service.icon}</span>
                  <span className={styles.serviceText}>{service.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>{t.contact.title}</h3>
            <div className={styles.contactList}>
              {t.contact.info.map((item, index) => (
                <div key={index} className={styles.contactItem}>
                  <span className={styles.contactIcon}>{item.icon}</span>
                  <span className={styles.contactText}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className={styles.footerBottom}>
          <div className={styles.socialSection}>
            <h3 className={styles.sectionTitle}>{t.social.title}</h3>
            <div className={styles.socialLinks}>
              {t.social.links.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={styles.socialLink}
                  style={{ "--social-color": social.color }}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.paymentSection}>
            <h3 className={styles.sectionTitle}>{t.payments.title}</h3>
            <div className={styles.paymentMethods}>
              {t.payments.methods.map((method, index) => (
                <div key={index} className={styles.paymentMethod}>
                  <span className={styles.paymentIcon}>{method.icon}</span>
                  <span className={styles.paymentText}>{method.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <div className={`${styles.copyrightContent} container between`}>
          <p className={styles.copyrightText}>{t.copyright}</p>
          <p className={`${styles.madeWith} center`}>
            {t.madeWith} <FaHeart className={styles.heartIcon} /> {t.in}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
