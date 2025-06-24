import React, { useState, useCallback } from "react";
import PaymentHeader from "../../components/pagesComponent/payment/PaymentHeader/PaymentHeader";
import OrderSummary from "../../components/pagesComponent/payment/OrderSummary/OrderSummary";
import ShippingInfo from "../../components/pagesComponent/payment/ShippingInfo/ShippingInfo";
import ShippingOptions from "../../components/pagesComponent/payment/ShippingOptions/ShippingOptions";
import PaymentMethod from "../../components/pagesComponent/payment/PaymentMethod/PaymentMethod";
import styles from "./payment.module.css";
import { paymentCartData, paymentConfig } from "../../data/paymentData";

const Payment = () => {
  const [shippingCost, setShippingCost] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleShippingChange = useCallback((cost) => {
    setShippingCost(cost);
  }, []);

  const handlePlaceOrder = async () => {
    setIsProcessing(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Order placed successfully! 🎉");
    } catch {
      alert("Error placing order. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <PaymentHeader />
      <div className={`container ${styles.payment_container}`}>
        <div className={styles.payment_layout}>
          <div className={styles.main_content}>
            <ShippingInfo />
            <ShippingOptions onShippingChange={handleShippingChange} />
            <PaymentMethod />
          </div>
          <div className={styles.sidebar}>
            <OrderSummary
              cartItems={paymentCartData}
              shipping={shippingCost}
              taxRate={paymentConfig.taxRate}
              promoCode={paymentConfig.promoCode}
              promoDiscount={paymentConfig.promoDiscount}
            />
          </div>
        </div>
        <div className={styles.payment_actions}>
          <button
            className={`${styles.place_order_btn} ${
              isProcessing ? styles.processing : ""
            }`}
            onClick={handlePlaceOrder}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <span className={styles.spinner}></span>
                Processing...
              </>
            ) : (
              "Place Order"
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Payment;
