import styles from "./SearchModal.module.css";
import { useSearch } from "@/context/SearchContext";
import { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";

const SearchResultItem = ({ item }) => (
  <div className={`${styles.item} row`}>
    <img src={item.image} alt={item.title} className={styles.itemImage} />
    <div className={`${styles.itemDetails} column`}>
      <h3 className={styles.itemTitle}>{item.title}</h3>
      <p className={styles.itemAuthor}>{item.author}</p>
      <p className={styles.itemDesc}>{item.description}</p>
    </div>
  </div>
);

export default function SearchModal() {
  const { isSearchOpen, closeSearch, results, query, position } = useSearch();
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // A bit of a hack to not close when clicking the input itself
        if (!event.target.closest(`.${styles.searchInput}`)) {
          closeSearch();
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSearch]);

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <div
          ref={modalRef}
          className={styles.modal}
          style={{
            top: position?.top,
            left: position?.left,
            width: position?.width,
          }}
        >
          {results.length > 0 ? (
            <div className={styles.resultsList}>
              {results.map((item) => (
                <SearchResultItem key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className={`${styles.noResults} column center`}>
              <h4>No results for "{query}"</h4>
              <p>Try searching for something else.</p>
            </div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}
