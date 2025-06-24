import styles from "./Logo.module.css";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

export default function Logo() {
  const { t } = useContext(LanguageContext);
  return (
    <Link to="/" className={`${styles.logoContainer} row`}>
      <img src={logo} alt="Midzilla Logo" className={styles.logo} />
      <div className={`${styles.logoTextContainer} column`}>
        <span className={styles.logoText}>Midzilla</span>
        <span className={styles.logoSubtitle}>{t.nav.logoSubtitle}</span>
      </div>
    </Link>
  );
}
