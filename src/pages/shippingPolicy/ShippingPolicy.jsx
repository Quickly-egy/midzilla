import React from "react";
import ShippingHeader from "../../components/pagesComponent/shippingPolicy/ShippingHeader/ShippingHeader";
import PolicyTimeline from "../../components/pagesComponent/shippingPolicy/PolicyTimeline/PolicyTimeline";
import ShippingFAQ from "../../components/pagesComponent/shippingPolicy/ShippingFAQ/ShippingFAQ";
const ShippingPolicy = () => {
  return (
    <div className="container">
      <ShippingHeader />
      <PolicyTimeline />
      <ShippingFAQ />
    </div>
  );
};

export default ShippingPolicy;
