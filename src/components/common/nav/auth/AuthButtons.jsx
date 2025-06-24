import styles from "./AuthButtons.module.css";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";

export default function AuthButtons() {
  const { t } = useContext(LanguageContext);
  const { openModal } = useModal();

  return (
    <div className={`${styles.authButtons} row`}>
      <button className={styles.login} onClick={() => openModal("login")}>
        {t.nav.login}
      </button>
      <button className={styles.signup} onClick={() => openModal("register")}>
        {t.nav.signup}
      </button>
    </div>
  );
}
