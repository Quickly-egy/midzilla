import React, { useState } from "react";
import CartItem from "../../components/pagesComponent/cart/CartItem/CartItem";
import CartSummary from "../../components/pagesComponent/cart/CartSummary/CartSummary";
import EmptyCart from "../../components/pagesComponent/cart/EmptyCart/EmptyCart";
import {
  getCartProducts,
  calculateCartTotals,
  updateItemQuantity,
  removeItemFromCart,
  isCartEmpty,
} from "../../utlis/cartUtils";
import styles from "./cart.module.css";

const Cart = () => {
  // Sample cart data - in a real app, this would come from a cart context or state management
  const [cartItems, setCartItems] = useState([
    { id: 1, quantity: 2 },
    { id: 3, quantity: 1 },
    { id: 5, quantity: 1 },
  ]);

  const [couponApplied, setCouponApplied] = useState(false);
  const [_appliedCoupon, setAppliedCoupon] = useState(null);

  // Get product details for cart items
  const cartProducts = getCartProducts(cartItems);

  // Calculate totals
  const totals = calculateCartTotals(cartProducts, couponApplied);

  // Handle quantity changes
  const handleQuantityChange = (productId, newQuantity) => {
    const updatedCart = updateItemQuantity(cartItems, productId, newQuantity);
    setCartItems(updatedCart);
  };

  // Remove item from cart
  const handleRemoveItem = (productId) => {
    const updatedCart = removeItemFromCart(cartItems, productId);
    setCartItems(updatedCart);
  };

  // Apply coupon
  const handleCouponApply = (couponCode, coupon) => {
    setCouponApplied(true);
    setAppliedCoupon({ code: couponCode, ...coupon });
  };

  // Clear coupon
  const handleCouponClear = () => {
    setCouponApplied(false);
    setAppliedCoupon(null);
  };

  // Check if cart is empty
  if (isCartEmpty(cartItems)) {
    return (
      <div className={`${styles.cartPage} container`}>
        <EmptyCart />
      </div>
    );
  }

  return (
    <div className={`${styles.cartPage} container`}>
      <div className={styles.cartHeader}>
        <h1>Shopping Cart</h1>
        <span className={styles.itemCount}>
          {cartProducts.length} {cartProducts.length === 1 ? "item" : "items"}
        </span>
      </div>

      <div className={styles.cartContent}>
        {/* Cart Items */}
        <div className={styles.cartItems}>
          {cartProducts.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemoveItem}
            />
          ))}
        </div>

        {/* Cart Summary */}
        <CartSummary
          totals={totals}
          onCouponApply={handleCouponApply}
          onCouponClear={handleCouponClear}
          couponApplied={couponApplied}
        />
      </div>
    </div>
  );
};

export default Cart;
