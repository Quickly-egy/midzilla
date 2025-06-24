import React, { useState } from "react";
import { useLanguage } from "../../../../context/LanguageContext";
import styles from "./ResponsiveNav.module.css";
import Logo from "../logo/Logo";
import NavLinks from "../navLinks/NavLinks";
import SearchInput from "../searchInput/SearchInput";
import LangToggle from "../toggle/LangToggle";
import ThemeToggle from "../toggle/ThemeToggle";
import AuthButtons from "../auth/AuthButtons";

const ResponsiveNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isRTL } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isRTL ? styles.rtl : ""}`}>
      {/* Desktop Navigation */}
      <div className={styles.desktopNav}>
        <div className={`${styles.left} row`}>
          <Logo />
        </div>
        <div className={`${styles.center} center`}>
          <NavLinks />
        </div>
        <div className={`${styles.right} row`}>
          <SearchInput />
          <LangToggle />
          <ThemeToggle />
          <AuthButtons />
        </div>
      </div>

      {/* Mobile/Tablet Navigation */}
      <div className={styles.mobileNav}>
        <div className={styles.mobileHeader}>
          {/* Menu Icon - Left */}
          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`${styles.hamburger} ${
                isMenuOpen ? styles.active : ""
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* Search Input - Center (hidden on small screens) */}
          <div className={styles.mobileSearch}>
            <SearchInput />
          </div>

          {/* Logo - Right */}
          <div className={styles.mobileLogo}>
            <Logo />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}
        >
          <div className={styles.mobileMenuContent}>
            {/* Search Input for small screens */}
            <div className={styles.menuSearch}>
              <SearchInput />
            </div>
            <NavLinks />
            <div className={styles.mobileActions}>
              <LangToggle />
              <ThemeToggle />
              <AuthButtons />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className={styles.overlay} onClick={toggleMenu} />}
    </header>
  );
};

export default ResponsiveNav;
