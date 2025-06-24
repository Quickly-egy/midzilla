import styles from "./Nav.module.css";
import Logo from "./logo/Logo";
import NavLinks from "./navLinks/NavLinks";
import SearchInput from "./searchInput/SearchInput";
import LangToggle from "./toggle/LangToggle";
import ThemeToggle from "./toggle/ThemeToggle";
import AuthButtons from "./auth/AuthButtons";

export default function Nav() {
  return (
    <header className={`${styles.header} between`}>
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
    </header>
  );
}
