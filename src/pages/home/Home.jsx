import { useEffect, useState } from "react";
import Loader from "@/components/ui/Loader";
import Hero from "@/components/pagesComponent/Home/HeroSLider/Hero";
import WhyChooseUs from "@/components/pagesComponent/Home/whyChooseUs/WhyChooseUs";
import ProductsCategory from "@/components/pagesComponent/Home/ProductsCategory/ProductsCategory";
import SpecialProducts from "@/components/pagesComponent/Home/SpecialProducts/SpecialProducts";
import CustomersReview from "@/components/pagesComponent/Home/CustomersReview/CustomersReview";
import MobileAppViewer from "@/components/pagesComponent/Home/MobileAppViewer/MobileAppViewer";
import StarsSystem from "@/components/pagesComponent/Home/StartSystem/StarsSystem";
import FAQ from "@/components/pagesComponent/Home/FAQ/FAQ";

import PaymentMethods from "../../components/pagesComponent/Home/PaymentMethods";
import Subscriptions from "../../components/pagesComponent/Home/subscriptions/Subscriptions";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    // A fallback for when the load event has already fired
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Hero />
      <WhyChooseUs />
      <ProductsCategory />
      <SpecialProducts />
      <CustomersReview />
      <MobileAppViewer />
      <StarsSystem />
      <FAQ />
      <PaymentMethods />
      <Subscriptions/>
    </>
  );
}
