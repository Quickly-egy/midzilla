import { createContext, useContext, useState } from "react";
import { dummyGames } from "@/dummyData";

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [position, setPosition] = useState(null);

  const results = query
    ? dummyGames.filter(
        (game) =>
          game.title.toLowerCase().includes(query.toLowerCase()) ||
          game.author.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const openSearch = (ref) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 10,
        left: rect.left,
        width: rect.width,
      });
    }
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setQuery("");
  };

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        isSearchOpen,
        openSearch,
        closeSearch,
        results,
        position,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
