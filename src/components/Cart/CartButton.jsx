import { useLanguage } from '../../contexts/LanguageContext'
import useCartStore from '../../stores/cartStore'
import './CartButton.css'

const CartButton = () => {
  const { isRTL } = useLanguage()
  const { getTotalItems, toggleCart } = useCartStore()
  
  const itemCount = getTotalItems()

  return (
    <button 
      className={`cart-button ${isRTL ? 'rtl' : 'ltr'}`} 
      onClick={toggleCart}
      title={isRTL ? 'سلة التسوق' : 'Shopping Cart'}
    >
      <div className="cart-icon">
        🛒
        {itemCount > 0 && (
          <span className="cart-badge">
            {itemCount > 99 ? '99+' : itemCount}
          </span>
        )}
      </div>
    </button>
  )
}

export default CartButton 