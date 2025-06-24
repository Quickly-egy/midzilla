import styles from "./SearchInput.module.css";
import { useContext, useRef } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { useSearch } from "@/context/SearchContext";

export default function SearchInput() {
  const { t } = useContext(LanguageContext);
  const { query, setQuery, openSearch } = useSearch();
  const searchContainerRef = useRef(null);

  return (
    <div className={`${styles.searchContainer} row`} ref={searchContainerRef}>
      <input
        type="text"
        placeholder={t.nav.searchPlaceholder}
        className={styles.searchInput}
        value={query}
        onFocus={() => openSearch(searchContainerRef)}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className={`${styles.searchButton} center`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    </div>
  );
}
