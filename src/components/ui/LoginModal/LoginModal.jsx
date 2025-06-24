import styles from "./LoginModal.module.css";
import { useModal } from "@/context/ModalContext";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { AnimatePresence } from "framer-motion";

export default function LoginModal() {
  const { modal, closeModal } = useModal();
  const { t } = useContext(LanguageContext);

  const isVisible = modal === "login";

  return (
    <AnimatePresence>
      {isVisible && (
        <div className={`${styles.overlay} center`} onClick={closeModal}>
          <div
            className={`${styles.modal} column`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
            <h2>{t.nav.login}</h2>
            <form className={`${styles.form} column`}>
              <input type="email" placeholder={t.nav.email} />
              <input type="password" placeholder={t.nav.password} />
              <button type="submit" className={styles.submitButton}>
                {t.nav.login}
              </button>
            </form>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
