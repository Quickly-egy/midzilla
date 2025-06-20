import React from 'react';
import useFavoritesStore from '../../stores/favoritesStore';
import { useLanguage } from '../../contexts/LanguageContext';
import './FavoritesButton.css';

const FavoritesButton = () => {
  const { toggleFavorites, getTotalItems } = useFavoritesStore();
  const { isRTL } = useLanguage();
  const totalItems = getTotalItems();

  return (
    <button 
      className={`favorites-button ${isRTL ? 'rtl' : 'ltr'}`}
      onClick={toggleFavorites}
      title={isRTL ? 'المفضلة' : 'Favorites'}
    >
      <span className="favorites-icon">⭐</span>
      {totalItems > 0 && (
        <span className={`favorites-count ${isRTL ? 'rtl' : 'ltr'}`}>
          {totalItems}
        </span>
      )}
    </button>
  );
};

export default FavoritesButton; 