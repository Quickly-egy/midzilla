import styles from "./RegisterModal.module.css";
import { useModal } from "@/context/ModalContext";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { AnimatePresence } from "framer-motion";

export default function RegisterModal() {
  const { modal, closeModal } = useModal();
  const { t } = useContext(LanguageContext);

  const isVisible = modal === "register";

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
            <h2>{t.nav.register}</h2>
            <form className={`${styles.form} column`}>
              <input type="text" placeholder={t.nav.name} />
              <input type="email" placeholder={t.nav.email} />
              <input type="password" placeholder={t.nav.password} />
              <input type="password" placeholder={t.nav.confirmPassword} />
              <button type="submit" className={styles.submitButton}>
                {t.nav.register}
              </button>
            </form>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
