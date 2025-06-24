import styles from "./LangToggle.module.css";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

export default function LangToggle() {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div className={`${styles.langToggle} row`}>
      <button
        onClick={() => changeLanguage("en")}
        className={language === "en" ? styles.active : ""}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("ar")}
        className={language === "ar" ? styles.active : ""}
      >
        ع
      </button>
    </div>
  );
}
