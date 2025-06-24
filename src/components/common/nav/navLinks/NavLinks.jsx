import styles from "./NavLinks.module.css";
import { NavLink } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import {
  FaChevronDown,
  FaGamepad,
  FaDesktop,
  FaMobile,
  FaQuestionCircle,
  FaStar,
} from "react-icons/fa";

export default function NavLinks() {
  const { t, language } = useContext(LanguageContext);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef({});
  const isRTL = language === "ar";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeDropdown &&
        !dropdownRefs.current[activeDropdown]?.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
  };

  const dropdownItems = {
    games: [
      {
        title: isRTL ? "ألعاب الموبايل" : "Mobile Games",
        path: "/games/mobile",
        icon: <FaMobile />,
      },
      {
        title: isRTL ? "ألعاب الكمبيوتر" : "PC Games",
        path: "/games/pc",
        icon: <FaDesktop />,
      },
    ],
    more: [
      {
        title: isRTL ? "صفحة الأسئلة الشائعة" : "FAQ Page",
        path: "/faq",
        icon: <FaQuestionCircle />,
      },
      {
        title: isRTL ? "صفحة نظام النجوم" : "Stars System Page",
        path: "/stars-system",
        icon: <FaStar />,
      },
    ],
  };

  return (
    <nav className={`${styles.nav} ${isRTL ? styles.rtl : ""} row`}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ""}`
        }
      >
        {t.nav.home}
      </NavLink>

      {/* Games Dropdown */}
      <div
        className={styles.dropdown}
        ref={(el) => (dropdownRefs.current.games = el)}
        onMouseEnter={() => setActiveDropdown("games")}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <button
          className={`${styles.dropdownToggle} ${styles.link}`}
          onClick={() => handleDropdownToggle("games")}
          aria-expanded={activeDropdown === "games"}
        >
          <FaGamepad className={styles.linkIcon} />
          {t.nav.games}
          <FaChevronDown
            className={`${styles.chevron} ${
              activeDropdown === "games" ? styles.chevronUp : ""
            }`}
          />
        </button>

        <div
          className={`${styles.dropdownMenu} ${
            activeDropdown === "games" ? styles.dropdownOpen : ""
          }`}
        >
          {dropdownItems.games.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `${styles.dropdownItem} ${
                  isActive ? styles.dropdownItemActive : ""
                }`
              }
              onClick={handleDropdownClose}
            >
              <span className={styles.dropdownIcon}>{item.icon}</span>
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>

      <NavLink
        to="/cards"
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ""}`
        }
      >
        {t.nav.cards}
      </NavLink>

      <NavLink
        to="/software"
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ""}`
        }
      >
        {t.nav.software}
      </NavLink>

      <NavLink
        to="/offers"
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ""}`
        }
      >
        {t.nav.offers}
      </NavLink>

      {/* More Dropdown */}
      <div
        className={styles.dropdown}
        ref={(el) => (dropdownRefs.current.more = el)}
        onMouseEnter={() => setActiveDropdown("more")}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <button
          className={`${styles.dropdownToggle} ${styles.link}`}
          onClick={() => handleDropdownToggle("more")}
          aria-expanded={activeDropdown === "more"}
        >
          {t.nav.more}
          <FaChevronDown
            className={`${styles.chevron} ${
              activeDropdown === "more" ? styles.chevronUp : ""
            }`}
          />
        </button>

        <div
          className={`${styles.dropdownMenu} ${
            activeDropdown === "more" ? styles.dropdownOpen : ""
          }`}
        >
          {dropdownItems.more.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `${styles.dropdownItem} ${
                  isActive ? styles.dropdownItemActive : ""
                }`
              }
              onClick={handleDropdownClose}
            >
              <span className={styles.dropdownIcon}>{item.icon}</span>
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
