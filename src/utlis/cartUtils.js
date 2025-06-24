import { products } from '@/data/products';

// Get product details for cart items
export const getCartProducts = (cartItems) => {
  return cartItems.map(item => {
    const product = products.find(p => p.id === item.id);
    return { ...product, quantity: item.quantity };
  }).filter(Boolean);
};

// Calculate item price with discount
export const calculateItemPrice = (item) => {
  if (item.originalPrice && item.discount) {
    return item.originalPrice * (1 - item.discount / 100);
  }
  return item.price;
};

// Calculate cart totals
export const calculateCartTotals = (cartProducts, couponApplied = false) => {
  const subtotal = cartProducts.reduce((sum, item) => {
    const price = calculateItemPrice(item);
    return sum + (price * item.quantity);
  }, 0);

  const discount = couponApplied ? subtotal * 0.1 : 0; // 10% discount
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal - discount + shipping;

  return {
    subtotal,
    discount,
    shipping,
    total
  };
};

// Update item quantity
export const updateItemQuantity = (cartItems, productId, newQuantity) => {
  if (newQuantity < 1) return cartItems;
  
  return cartItems.map(item => 
    item.id === productId 
      ? { ...item, quantity: newQuantity }
      : item
  );
};

// Remove item from cart
export const removeItemFromCart = (cartItems, productId) => {
  return cartItems.filter(item => item.id !== productId);
};

// Validate and apply coupon
export const validateCoupon = (couponCode) => {
  const validCoupons = {
    'gaming10': { discount: 10, message: '10% discount applied!' },
    'welcome20': { discount: 20, message: '20% discount applied!' },
    'freeship': { discount: 0, message: 'Free shipping applied!' }
  };

  const normalizedCode = couponCode.toLowerCase().trim();
  return validCoupons[normalizedCode] || null;
};

// Calculate shipping cost
export const calculateShipping = (subtotal, couponCode = '') => {
  if (couponCode.toLowerCase() === 'freeship') return 0;
  return subtotal > 100 ? 0 : 10;
};

// Format price for display
export const formatPrice = (price) => {
  return `$${price.toFixed(2)}`;
};

// Get cart item count
export const getCartItemCount = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
};

// Check if cart is empty
export const isCartEmpty = (cartItems) => {
  return cartItems.length === 0;
};

// Get cart total items (sum of quantities)
export const getCartTotalItems = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
};

// Validate quantity input
export const validateQuantity = (quantity) => {
  const num = parseInt(quantity);
  if (isNaN(num) || num < 1) return 1;
  if (num > 99) return 99;
  return num;
}; 