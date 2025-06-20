import React from 'react';
import useFavoritesStore from '../../stores/favoritesStore';
import useCartStore from '../../stores/cartStore';
import { useLanguage } from '../../contexts/LanguageContext';
import { useCurrency } from '../../contexts/CurrencyContext';
import './FavoritesSidebar.css';

const FavoritesSidebar = () => {
  const { 
    items, 
    isOpen, 
    closeFavorites, 
    removeFromFavorites, 
    clearFavorites,
    getTotalItems 
  } = useFavoritesStore();

  const { addItem } = useCartStore();
  const { isRTL, t } = useLanguage();
  const { formatPrice } = useCurrency();

  if (!isOpen) return null;

  const handleAddToCart = (item) => {
    addItem(item);
    // يمكن إزالة المنتج من المفضلة عند إضافته للسلة (اختياري)
    // removeFromFavorites(item.id);
  };

  return (
    <div className="favorites-overlay" onClick={closeFavorites}>
      <div 
        className={`favorites-sidebar ${isRTL ? 'rtl' : 'ltr'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="favorites-header">
          <div className="header-content">
            <div className="header-icon">⭐</div>
            <h3>{isRTL ? 'المفضلة' : 'Favorites'}</h3>
            <span className="items-count">({getTotalItems()})</span>
          </div>
          <button 
            className="close-btn"
            onClick={closeFavorites}
          >
            ✕
          </button>
        </div>

        <div className="favorites-content">
          {items.length === 0 ? (
            <div className="empty-favorites">
              <div className="empty-icon">⭐</div>
              <h3>{isRTL ? 'لا توجد منتجات مفضلة' : 'No favorite items'}</h3>
              <p>{isRTL ? 'اضغط على نجمة في أي منتج لإضافته للمفضلة' : 'Click the star on any product to add it to favorites'}</p>
              <div className="empty-animation">
                <span className="star-1">⭐</span>
                <span className="star-2">⭐</span>
                <span className="star-3">⭐</span>
              </div>
            </div>
          ) : (
            <>
              <div className="favorites-items">
                {items.map((item) => (
                  <div key={item.id} className="favorites-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name[isRTL ? 'ar' : 'en']} />
                    </div>
                    <div className="item-details">
                      <h4>{item.name[isRTL ? 'ar' : 'en']}</h4>
                      <p className="item-price">{formatPrice(item.price)}</p>
                    </div>
                    <div className="item-actions">
                      <button 
                        className="add-to-cart-btn"
                        onClick={() => handleAddToCart(item)}
                        title={isRTL ? 'إضافة للسلة' : 'Add to Cart'}
                      >
                        🛒
                      </button>
                      <button 
                        className="remove-btn"
                        onClick={() => removeFromFavorites(item.id)}
                        title={isRTL ? 'حذف من المفضلة' : 'Remove from Favorites'}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="favorites-footer">
                <div className="favorites-summary">
                  <p>{isRTL ? `إجمالي المنتجات: ${getTotalItems()}` : `Total Items: ${getTotalItems()}`}</p>
                </div>
                <div className="favorites-actions">
                  <button 
                    className="clear-favorites-btn"
                    onClick={clearFavorites}
                  >
                    {isRTL ? 'مسح الكل' : 'Clear All'}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesSidebar; 