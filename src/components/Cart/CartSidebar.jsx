import { useLanguage } from '../../contexts/LanguageContext'
import { useCurrency } from '../../contexts/CurrencyContext'
import useCartStore from '../../stores/cartStore'
import './CartSidebar.css'

const CartSidebar = () => {
  const { t, isRTL } = useLanguage()
  const { formatPrice } = useCurrency()
  const { 
    items, 
    isOpen, 
    closeCart, 
    removeItem, 
    updateQuantity, 
    clearCart,
    getTotalPrice 
  } = useCartStore()

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(itemId)
    } else {
      updateQuantity(itemId, newQuantity)
    }
  }



  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="cart-overlay" onClick={closeCart}></div>
      
      {/* Sidebar */}
      <div className={`cart-sidebar ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Header */}
        <div className="cart-header">
          <h2 className="cart-title">
            {isRTL ? 'سلة التسوق' : 'Shopping Cart'}
          </h2>
          <button className="cart-close-btn" onClick={closeCart}>
            ×
          </button>
        </div>

        {/* Content */}
        <div className="cart-content">
          {items.length === 0 ? (
            <div className="cart-empty">
              <div className="empty-cart-icon">🛒</div>
              <p className="empty-cart-text">
                {isRTL ? 'سلة التسوق فارغة' : 'Your cart is empty'}
              </p>
              <p className="empty-cart-subtext">
                {isRTL ? 'ابدأ التسوق لإضافة منتجات' : 'Start shopping to add items'}
              </p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="cart-items">
                {items.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.image || '/placeholder-game.jpg'} alt={typeof item.name === 'object' ? item.name[isRTL ? 'ar' : 'en'] : item.name} />
                    </div>
                    
                    <div className="item-details">
                      <h4 className="item-name">
                        {typeof item.name === 'object' ? item.name[isRTL ? 'ar' : 'en'] : item.name}
                      </h4>
                      <p className="item-price">{formatPrice(item.price)}</p>
                      
                      <div className="item-quantity">
                        <button 
                          className="quantity-btn"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          className="quantity-btn"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <div className="item-actions">
                      <p className="item-total">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                      <button 
                        className="remove-btn"
                        onClick={() => removeItem(item.id)}
                        title={isRTL ? 'حذف' : 'Remove'}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="cart-summary">
                <div className="summary-row">
                  <span className="summary-label">
                    {isRTL ? 'المجموع' : 'Total'}
                  </span>
                  <span className="summary-value">
                    {formatPrice(getTotalPrice())}
                  </span>
                </div>
                
                <div className="cart-actions">
                  <button className="checkout-btn">
                    {isRTL ? 'إتمام الشراء' : 'Checkout'}
                  </button>
                  
                  <button 
                    className="clear-cart-btn"
                    onClick={clearCart}
                  >
                    {isRTL ? 'إفراغ السلة' : 'Clear Cart'}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default CartSidebar 